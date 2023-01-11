export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export { Article, ArticleView } from './modal/types/article';
export type { ArticleDetailsSchema } from './modal/types/ArticleDetailsSchema';

export { articleDetailsActions, articleDetailsReducer } from './modal/slice/articleDetailsSlice';
export { getArticleDetailsData } from './modal/selectors/articleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
