import cls from "./SidebarItem.module.scss";
import {useTranslation} from "react-i18next";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import React, {memo} from "react";
import {SidebarItemType} from "../../model/items";
import {classNames} from "shared/lib/classNames/classNames";


interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {t} = useTranslation()
    const {item, collapsed} = props;

    return (
        <AppLink
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

