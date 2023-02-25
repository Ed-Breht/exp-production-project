import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const state = {
    user: {
        authData: {
            username: 'User',
            id: '1',
        },
        _inited: true,
    },
    articleDetails: {
        data: {
            id: '1',
        },
    },
};

describe('addCommentForArticle', () => {
    test('success request', async () => {
        const data = { id: '123', user: {}, text: 'text' };
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.getState();
        thunk.api.post.mockReturnValue(
            Promise.resolve({
                data,
            }),
        );
        const result = await thunk.callThunk('text');
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error request', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('text');

        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('error with empty state', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        const result = await thunk.callThunk('Text');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
