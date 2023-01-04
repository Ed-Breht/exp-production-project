import { ArticleType } from 'entities/Article/modal/types/article';
import { articleDetailsReducer, ArticleDetailsSchema } from 'entities/Article';
import { fetchArticleById } from 'entities/Article/modal/services/fetchArticleById';

const data = {

    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [],
};

describe('profileSlice', () => {
    test('test service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false, error: 'error' };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true, error: undefined,
        });
    });

    test('test service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '1', ''),
        )).toEqual({
            isLoading: false, data,
        });
    });
});
