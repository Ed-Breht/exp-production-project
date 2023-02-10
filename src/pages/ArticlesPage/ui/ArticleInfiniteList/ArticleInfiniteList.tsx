import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { getArticles } from '../../modal/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../modal/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text size={TextSize.L} align={TextAlign.CENTER} text={t('Произошла ошибка')} />;
    }

    return (
        <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
            className={className}
        />
    );
});
