import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchCommentsByArticleId,
} from './fetchCommentsByArticleId';

const data = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
    },
];

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data,
            }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
