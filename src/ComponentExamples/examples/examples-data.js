// src/examples/examples-data.js
import React from 'react';
import { codeSnippet,codeSnippetTS } from '../javascript/helloLogic';
import { codeSnippet2, codeSnippet2TS } from '../javascript/helloLogic2';
import { codeSnippet3,codeSnippet3TS } from '../javascript/BubbleLogic';
import { Usage as Usage1, Animations as Animations1 } from '../javascript/helloLogic';
import { Usage as Usage2, Animations as Animations2 } from '../javascript/helloLogic2';
import { Usage as Usage3, Animations as Animations3 } from '../javascript/BubbleLogic';


const SimpleText = React.lazy(() => import('../Components/SimpleText'));
const BlurText =React.lazy(()=>import ('../Components/BlurText'))
const BubbleText = React.lazy(() => import('../Components/BubbleText'))
const ExposeText = React.lazy(() => import('../Components/ExposeText'))
const DecypherText =React.lazy(()=>import('../Components/DecypherText'))

export const examples = [
  {
    id: 'simple-text',
    for:'in Text Animation',
    name: "Simple Text",
    component: SimpleText,
    drawerLabel: "Simple Text",
    code: codeSnippet,
    codeTS: codeSnippetTS, 
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
    codeTS: codeSnippet2TS, 
     usage: Usage2,
    animations:Animations2
  },
   {
    id: 'bubble-text',
    for:'in Text Animation',
    name: "Bubble Text",
    component: BubbleText,
    drawerLabel: "Bubble Text",
    code: codeSnippet3,
    codeTS: codeSnippet3TS, 
    usage: Usage3,
    animations:Animations3
  },
   {
    id: 'expose-text',
    for:'in Text Animation',
    name: "Expose Text",
    component: ExposeText,
    drawerLabel: "Expose Text",
    code: codeSnippet3,
    codeTS: codeSnippet3TS, 
    usage: Usage3,
    animations:Animations3
  },
   {
    id: 'decypher-text',
    for:'in Text Animation',
    name: "Decypher Text",
    component: DecypherText,
    drawerLabel: "Decypher Text",
    code: codeSnippet3,
    codeTS: codeSnippet3TS, 
    usage: Usage3,
    animations:Animations3
  },
  
  // other components here...
];
