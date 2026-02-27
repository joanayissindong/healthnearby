CREATE TABLE facilities
(
    id                   VARCHAR(20) PRIMARY KEY,
    name                 VARCHar(255) NOT NULL,
    type                 VARCHAR(50)  NOT NULL CHECK (type IN ('hospital', 'clinic', 'pharmacy', 'laboratory',
                                                               'health_center')),
    city                 VARCHAR(100) NOT NULL,
    district             VARCHAR(100),
    address              TEXT         NOT NULL,
    phone                VARCHAR(30),
    latitude             DECIMAL(9, 6),
    longitude            DECIMAL(9, 6),

    hours_weekdays       VARCHAR(50),
    hours_saturday       VARCHAR(50),
    hours_sunday         VARCHAR(50),
    is_24h               BOOLEAN   DEFAULT FALSE,
    is_on_duty           BOOLEAN   DEFAULT FALSE,

    payment_cash         BOOLEAN   DEFAULT TRUE,
    payment_mtn_momo     BOOLEAN   DEFAULT FALSE,
    payment_orange_money BOOLEAN   DEFAULT FALSE,
    payment_insurance    BOOLEAN   DEFAULT FALSE,

    created_at           TIMESTAMP DEFAULT NOW(),
    updated_at           TIMESTAMP DEFAULT NOW()
);

CREATE TABLE facility_services
(
    id          SERIAL PRIMARY KEY,
    facility_id VARCHAR(20) REFERENCES facilities (id) ON DELETE CASCADE,
    service     VARCHAR(20) NOT NULL
);

CREATE INDEX idx_facilities_city ON facilities(city);
CREATE INDEX idx_facilities_type ON facilities(type);
CREATE INDEX idx_facilities_momo ON facilities(payment_mtn_momo);
CREATE INDEX idx_facilities_orange ON facilities(payment_orange_money);
CREATE INDEX idx_facilities_duty ON facilities(is_on_duty);