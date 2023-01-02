import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLE PAGE 322
        </div>
    );
};

export default memo(ArticlesPage);
