import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password"
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual("password");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
