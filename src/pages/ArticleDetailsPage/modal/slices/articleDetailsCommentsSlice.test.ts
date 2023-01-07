import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const comments = [{
    id: '1',
    text: 'some comment',
    user: {
        id: '1',
        username: 'Ed',
    },
}];

describe('articleDetailsCommentsSlice', () => {
    test('test service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: 'error',
            ids: [],
            entities: {},
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            isLoading: true, error: undefined, ids: [], entities: {},
        });
    });

    test('test service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            error: 'error',
            ids: [],
            entities: {},
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(comments, '', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            ids: ['1'],
            entities: {
                1: {
                    id: '1',
                    text: 'some comment',
                    user: {
                        id: '1',
                        username: 'Ed',
                    },
                },
            },
        });
    });
});
