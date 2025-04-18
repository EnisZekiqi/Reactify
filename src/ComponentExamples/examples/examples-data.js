// src/examples/examples-data.js
import React from 'react';
import { codeSnippet } from '../javascript/helloLogic';
import { codeSnippet2,codeSnippet2TS  } from '../javascript/helloLogic2';
import { Usage as Usage1, Animations as Animations1 } from '../javascript/helloLogic';
import { Usage as Usage2, Animations as Animations2 } from '../javascript/helloLogic2';


const SimpleText = React.lazy(() => import('../Components/SimpleText'));
const BlurText =React.lazy(()=>import ('../Components/BlurText'))

export const examples = [
  {
    id: 'simple-text',
    for:'in Text Animation',
    name: "Simple Text",
    component: SimpleText,
    drawerLabel: "Simple Text",
    code: codeSnippet,
    codeTS: codeSnippet2TS, 
    usage: Usage1,
    animations:Animations1
    },
  {
    id: 'blur-text',
    for:'in Text Animation',
    name: "Blur Text",
    component: BlurText,
    drawerLabel: "Blur Text",
    code: codeSnippet2,
     usage: Usage2,
    animations:Animations2
    },
  // other components here...
];
