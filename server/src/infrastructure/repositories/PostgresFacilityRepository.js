const { pool } = require('../database/db');
const IFacilityRepository = require('../../domain/repositories/IFacilityRepository');
const FacilityFactory = require('../../domain/factories/FacilityFactory');

class PostgresFacilityRepository extends IFacilityRepository {
    async findAll() {
        const result = await pool.query(
            `SELECT f.*, ARRAY_AGG(fs.service) AS services
            FROM facilities f 
            LEFT JOIN facility_services fs ON fs.facility_id = f.id
            GROUP BY f.id ORDER BY f.name`
        );
        return result.rows.map(FacilityFactory.fromRow);
    }

    async findById(id) {
        const result = await pool.query(
            `SELECT f.*, ARRAY_AGG(fs.service) AS services
            FROM facilities f
            LEFT JOIN facility_services fs ON fs.facility_id = f.id
            WHERE f.id = $1
            GROUP BY f.id`,
            [id]
        );
        if (!result.rows[0]) return null;
        return FacilityFactory.fromRow(result.rows[0]);
    }

    async search({ city, type, mtn_momo, orange_money, on_duty }) {
        const conditions = ['1=1'];
        const params = [];
        let idx = 1;

        if (city) { conditions.push(`LOWER(f.city) = LOWER($${idx++})`); params.push(city); }
        if (type) { conditions.push(`f.type = $${idx++}`); params.push(type); }
        if (mtn_momo) { conditions.push(`f.payment_mtn_momo = TRUE`); }
        if (orange_money) { conditions.push(`f.payment_orange_money = TRUE`); }
        if (on_duty) { conditions.push(`(f.is_on_duty = TRUE OR f.is_24h = TRUE)`); }

        const result = await pool.query(
            `SELECT f.*, ARRAY_AGG(fs.services) AS services
            FROM facilities f
            LEFT JOIN facilities_services fs ON fs.facility_id = f.id
            WHERE ${conditions.join(' AND ')}
            GROUP BY f.id ORDER BY f.name`,
            params
        );
        return result.rows.map(FacilityFactory.fromRow);
    }

    async findAllCities() {
        const result = await pool.query(
            `SELECT DISTINCT city FROM facilities ORDER BY city`
        );
        return result.rows.map(r => r.city);
    }

    async findAllTypes() {
        const result = await pool.query(
            `SELECT DISTINCT type FROM facilities ORDER BY type`
        );
        return result.rows.map(r => r.type);
    }
}

module.exports = PostgresFacilityRepository;