import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('comments', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false);
    });

    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'test error',
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toBe('test error');
    });

    test('should work with empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
    });
});
