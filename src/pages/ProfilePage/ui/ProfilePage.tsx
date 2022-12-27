import { classNames } from "shared/lib/classNames/classNames";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDipstch";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames("", {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
