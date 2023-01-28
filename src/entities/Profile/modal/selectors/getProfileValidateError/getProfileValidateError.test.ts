import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.NO_DATA],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
