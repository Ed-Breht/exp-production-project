import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfile } from './validateProfile';

const data = {
    username: 'admin',
    age: 24,
    country: Country.Russia,
    lastname: 'Breht',
    first: 'Ed',
    currency: Currency.EUR,
    city: 'Test',
};

describe('validateProfile', () => {
    test('success', () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', () => {
        const result = validateProfile({ ...data, lastname: '', first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfile({ ...data, age: 0 });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfile({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', () => {
        const result = validateProfile({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
