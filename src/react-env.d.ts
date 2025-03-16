/// <reference types="react" />
/// <reference types="react-dom" />

// This file provides global TypeScript definitions for React and JSX
// It allows you to use JSX without explicitly importing React in every file

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Make React available globally to fix "React refers to a UMD global" error
declare global {
  const React: typeof import("react");
}
