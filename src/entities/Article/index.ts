export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './modal/types/article';
export type { ArticleDetailsSchema } from './modal/types/ArticleDetailsSchema';

export { articleDetailsActions, articleDetailsReducer } from './modal/slice/articleDetailsSlice';
export { getArticleDetailsData } from './modal/selectors/articleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export {
    ArticleSortField, ArticleView, ArticleBlockType, ArticleType,
} from './modal/consts/consts';
