import React from "react";
import { render, screen } from "@testing-library/react";
import { Fetching, FetchingContextProvider } from ".";
import * as CONSTANTS from "./constants";

interface YourAppType {
  children?: React.ReactNode;
}
function YourApp({ children }: YourAppType) {
  return (
    <FetchingContextProvider
      defaultError={<div>An unexpected error occurred.</div>}
      defaultLoader={<div>Please wait...</div>}
    >
      {children}
    </FetchingContextProvider>
  );
}

describe("Fetching", () => {
  test("renders the Fetching component", () => {
    render(<Fetching>Hello world!</Fetching>);
  });

  test("should show an error when given", () => {
    render(
      <Fetching error={<h1>Error!</h1>} loading={<h1>Loading!</h1>}>
        Content you shouldnt see!
      </Fetching>
    );
    screen.getByText("Error!");
  });

  test("should show loading when given and there's no error", () => {
    render(
      <Fetching loading={<h1>Loading!</h1>}>Content you shouldnt see!</Fetching>
    );
    screen.getByText("Loading!");
  });

  test("should work with component children", () => {
    function ComponentChild() {
      return <h1>Component Child :)</h1>;
    }
    render(
      <Fetching>
        <ComponentChild />
      </Fetching>
    );
    screen.getByText("Component Child :)");
  });

  test("should work with html children", () => {
    render(
      <Fetching>
        <h1>Howdy!</h1>
      </Fetching>
    );
    screen.getByText("Howdy!");
  });

  test("should work with number children 0", () => {
    render(<Fetching>0</Fetching>);
    screen.getByText("0");
  });

  test("should work with number children 1", () => {
    render(<Fetching>1</Fetching>);
    screen.getByText("1");
  });

  test("should use the default error from the context provider when `error` is a boolean and true", () => {
    render(
      <YourApp>
        <Fetching error={true} loading={true}>
          Hello!
        </Fetching>
      </YourApp>
    );
    screen.getByText("An unexpected error occurred.");
  });

  test("should use the default loader from the context provider when `loading` is a boolean and true", () => {
    render(
      <YourApp>
        <Fetching loading={true}>Hello!</Fetching>
      </YourApp>
    );
    screen.getByText("Please wait...");
  });

  test("should show the child when using context and `error` and `loading` are false", () => {
    render(
      <YourApp>
        <Fetching>Hello!</Fetching>
      </YourApp>
    );
    screen.getByText("Hello!");
  });

  test("should throw when `error` is used as a boolean and no `defaultError` is given to <FetchingContextProvider>", () => {
    expect(() =>
      render(
        <Fetching error={true} loading={true}>
          Hello!
        </Fetching>
      )
    ).toThrow(CONSTANTS.MISSING_defaultError_MESSAGE);
  });

  test("should throw when `loading` is used as a boolean and no `defaultLoader` is given to <FetchingContextProvider>", () => {
    expect(() =>
      render(
        <Fetching error={false} loading={true}>
          Hello!
        </Fetching>
      )
    ).toThrow(CONSTANTS.MISSING_defaultLoader_MESSAGE);
  });
});
