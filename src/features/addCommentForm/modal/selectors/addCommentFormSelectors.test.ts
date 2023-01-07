import { StateSchema } from 'app/providers/StoreProvider';
import { addCommentFormError, addCommentFormText } from './addCommentFormSelectors';

describe('getLoAddCommentFormSelectors', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Text',
            },
        };
        expect(addCommentFormText(state as StateSchema)).toEqual('Text');
    });

    test('should work with empty text', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(addCommentFormText(state as StateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(addCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(addCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
