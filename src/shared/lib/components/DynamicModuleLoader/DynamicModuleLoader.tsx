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

type ReducerListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
    });
    return () => {
      Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name);
        }
      });
    };
  }, []);

  return <>{children}</>;
};
