import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const data = {
    username: 'admin',
    age: 24,
    country: Country.Russia,
    lastname: 'Breht',
    first: 'Ed',
    currency: Currency.EUR,
    city: 'Test',
};

describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '1234',
            }),
        )).toEqual({
            form: {
                username: '1234',
            },
        });
    });

    test('test service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true, validateError: undefined,
        });
    });

    test('test service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false, validateError: undefined, readonly: true, form: data, data,
        });
    });
});
