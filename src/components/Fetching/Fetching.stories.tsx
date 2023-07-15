import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fetching, FetchingContextProvider } from ".";

const meta: Meta<typeof Fetching> = {
  title: "Fetching",
  component: Fetching,
  argTypes: {
    error: {
      options: ["null", "Error", "true"], // An array of serializable values
      mapping: {
        null: null,
        Error: <ErrorExample />,
        true: true,
      }, // Maps serializable option values to complex arg values
      control: {
        type: "radio", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          null: "null",
          Error: "Error",
          true: "true (only when context is given via FetchingContextProvider)",
        },
      },
    },
    loading: {
      options: ["null", "Loading", "true"], // An array of serializable values
      mapping: {
        null: null,
        Loading: <LoadingExample />,
        true: true,
      }, // Maps serializable option values to complex arg values
      control: {
        type: "radio", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          null: "null",
          Loading: "Loading",
          true: "true (only when context is given via FetchingContextProvider)",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fetching>;

function ErrorExample() {
  return <h2 style={{ color: "red" }}>An unexpected error occurred!</h2>;
}

function LoadingExample() {
  return <h2>Loading...</h2>;
}

function ExampleChild() {
  return <h1>Hello world!</h1>;
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  args: {
    error: null,
    loading: null,
    children: <ExampleChild />,
  },
};

interface YourAppType {
  children?: React.ReactNode;
}
function YourApp({ children }: YourAppType) {
  return (
    <FetchingContextProvider
      defaultError={<div>This is an example of an error.</div>}
      defaultLoader={<div>Please wait...</div>}
    >
      {children}
    </FetchingContextProvider>
  );
}

export const ContextProvider: Story = {
  render: (args) => {
    return (
      <YourApp>
        <Fetching error={args.error} loading={args.loading}>
          {args.children}
        </Fetching>
      </YourApp>
    );
  },
  args: {
    error: true,
    loading: true,
    children: <ExampleChild />,
  },
};
