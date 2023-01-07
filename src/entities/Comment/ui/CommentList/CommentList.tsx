import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../modal/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();
    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard className={cls.comment} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
