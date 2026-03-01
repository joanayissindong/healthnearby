const OpeningHours = require('./OpeningHours');

describe('OpeningHours', () => {

    test('is open when is_24h is true', () => {
        const hours = new OpeningHours({ is_24h: true, is_on_duty: false });
        expect(hours.isOpenNow()).toBe(true);
    });

    test('is open when is_on_duty is true', () => {
        const hours = new OpeningHours({ is_24h: false, is_on_duty: true });
        expect(hours.isOpenNow()).toBe(true);
    });

    test('is open during weekday hours', () => {
        const hours = new OpeningHours({
            weekdays: '07:00-20:00',
            saturday: '08:00-17:00',
            sunday: 'Emergency only',
            is_24h: false,
            is_on_duty: false,
        });
        // Mock a Wednesday at 10:00 AM
        jest.spyOn(global, 'Date').mockImplementation(() => ({
            getDay: () => 3,
            getHours: () => 10,
            getMinutes: () => 0,
        }));
        expect(hours.isOpenNow()).toBe(true);
        jest.restoreAllMocks();
    });

    test('is closed outside weekday hours', () => {
        const hours = new OpeningHours({
            weekdays: '07:00-20:00',
            saturday: '08:00-17:00',
            sunday: 'Emergency only',
            is_24h: false,
            is_on_duty: false,
        });
        // Mock a Wednesday at 11:00 PM
        jest.spyOn(global, 'Date').mockImplementation(() => ({
            getDay: () => 3,
            getHours: () => 23,
            getMinutes: () => 0,
        }));
        expect(hours.isOpenNow()).toBe(false);
        jest.restoreAllMocks();
    });

    test('is closed on sunday with Emergency only', () => {
        const hours = new OpeningHours({
            weekdays: '07:00-20:00',
            saturday: '08:00-17:00',
            sunday: 'Emergency only',
            is_24h: false,
            is_on_duty: false,
        });
        jest.spyOn(global, 'Date').mockImplementation(() => ({
            getDay: () => 0,
            getHours: () => 10,
            getMinutes: () => 0,
        }));
        expect(hours.isOpenNow()).toBe(false);
        jest.restoreAllMocks();
    });

    test('is immutable — Value Object cannot be modified', () => {
        const hours = new OpeningHours({ is_24h: true, is_on_duty: false });
        hours.is_24h = false;
        expect(hours.is_24h).toBe(true); // freeze ignored the modification
    });

});