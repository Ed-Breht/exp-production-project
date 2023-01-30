import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDipstch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../modal/slice/addCommentFormSlice';
import { addCommentFormError, addCommentFormText } from '../../modal/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: addCommentFormProps) => {
    const { t } = useTranslation('article');
    const { className, onSendComment } = props;
    const text = useSelector(addCommentFormText);
    const error = useSelector(addCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input placeholder={t('Введите текст комментария')} value={text} onChange={onCommentTextChange} />
                <Button onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
