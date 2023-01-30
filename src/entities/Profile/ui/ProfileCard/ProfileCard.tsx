import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../modal/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        error,
        isLoading,
        data,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max gap="16" className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar size={150} src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                onChange={onChangeFirstname}
                placeholder={t('Ваше имя')}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                onChange={onChangeLastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
                type="number"
            />
            <Input
                value={data?.city}
                onChange={onChangeCity}
                placeholder={t('Город')}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                onChange={onChangeUsername}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                onChange={onChangeAvatar}
                placeholder={t('Ссылка на аватар')}
                className={cls.input}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCurrency}
                value={data?.currency}
            />
            <CountrySelect
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCountry}
                value={data?.country}
            />
        </VStack>
    );
};
