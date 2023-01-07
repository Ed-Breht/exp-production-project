import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDipstch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(
        () => {
            dispatch(updateProfileData());
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit} className={cls.editBtn}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit} className={cls.editBtn}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave} className={cls.saveBtn}>
                                {t('Сохранить')}
                            </Button>
                        </>

                    )}
                </div>
            )}

        </div>
    );
};
