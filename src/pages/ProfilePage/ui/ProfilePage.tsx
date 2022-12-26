import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames("", {}, [className])}>{t("ProfilePage")}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
