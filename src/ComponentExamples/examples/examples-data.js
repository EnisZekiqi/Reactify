// src/examples/examples-data.js
import React from 'react';
import { codeSnippet } from '../javascript/helloLogic';

const SimpleText = React.lazy(() => import('../Components/SimpleText'));

export const examples = [
  {
    name: "Animated Hello",
    component:SimpleText ,
    drawerLabel: "Animated Hello",
    code: codeSnippet
  },
  // other components here...
];
