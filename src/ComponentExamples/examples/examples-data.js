// src/examples/examples-data.js
import React from 'react';
import { codeSnippet } from '../javascript/helloLogic';
import { codeSnippet2 } from '../javascript/helloLogic2';


const SimpleText = React.lazy(() => import('../Components/SimpleText'));
const BlurText =React.lazy(()=>import ('../Components/BlurText'))

export const examples = [
  {
    id: 'simple-text',
    for:'in Text Animation',
    name: "Simple Text",
    component: SimpleText,
    drawerLabel: "Simple Text",
    code: codeSnippet
    },
  {
    id: 'blur-text',
    for:'in Text Animation',
    name: "Blur Text",
    component: BlurText,
    drawerLabel: "Blur Text",
    code: codeSnippet2
    },
  // other components here...
];
