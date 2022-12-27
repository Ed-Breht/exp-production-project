import { FC, useEffect } from "react";
import { useStore } from "react-redux";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
    });
    return () => {
      Object.entries(reducers).forEach(([name]) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name as StateSchemaKey);
        }
      });
    };
  }, []);

  return <>{children}</>;
};
