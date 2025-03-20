import { expect, test } from "vitest";
import { contextFactory } from "../package/utils"
import { useState } from "react";
import React from "react";

type TestContextState = {
  value: string;
}

const initialState: TestContextState = {
  value: "initial",
};

const useContextState = () => {
  const [value, setValue] = useState(initialState.value);
  return { value, setValue };
}

test("contextFactory should create a context with the correct initial state", () => {

  const { Provider, useContext } = contextFactory<TestContextState>(initialState, useContextState);

  const TestComponent = () => {
    const { value } = useContext();
    expect(value).toBe("initial");
    return <div>{value}</div>;
  };
  return <Provider>
    <TestComponent />
  </Provider>;
});
