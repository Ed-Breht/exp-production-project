import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducer } = props;

  const store = createReduxStore(initialState as StateSchema, asyncReducer as ReducersMapObject);

  return <Provider store={store}>{children}</Provider>;
};
