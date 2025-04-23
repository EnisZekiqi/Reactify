// src/examples/examples-data.js
import React from 'react';
import { codeSnippet,codeSnippetTS } from '../javascript/helloLogic';
import { codeSnippet2, codeSnippet2TS } from '../javascript/helloLogic2';
import { codeSnippet3, codeSnippet3TS } from '../javascript/BubbleLogic';
import { codeSnippet4, codeSnippet4TS } from '../javascript/ExposeLogic';
import { codeSnippet5, codeSnippet5TS } from '../javascript/DexypherLogic';
import { codeSnippet6, codeSnippet6TS } from '../javascript/ScrollLogic';
import { Usage as Usage1, Animations as Animations1 } from '../javascript/helloLogic';
import { Usage as Usage2, Animations as Animations2 } from '../javascript/helloLogic2';
import { Usage as Usage3, Animations as Animations3 } from '../javascript/BubbleLogic';
import { Usage as Usage4, Animations as Animations4 } from '../javascript/ExposeLogic'
import { Usage as Usage5, Animations as Animations5 } from '../javascript/DexypherLogic'
import {Usage as Usage6 ,Animations as Animations6} from '../javascript/ScrollLogic'



const SimpleText = React.lazy(() => import('../Components/SimpleText'));
const BlurText =React.lazy(()=>import ('../Components/BlurText'))
const BubbleText = React.lazy(() => import('../Components/BubbleText'))
const ExposeText = React.lazy(() => import('../Components/ExposeText'))
const DecypherText = React.lazy(() => import('../Components/DecypherText'))
const ScrollText = React.lazy (()=>import ('../Components/ScrollText'))

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
    code: codeSnippet4,
    codeTS: codeSnippet4TS, 
    usage: Usage4,
    animations:Animations4
  },
   {
    id: 'decypher-text',
    for:'in Text Animation',
    name: "Decypher Text",
    component: DecypherText,
    drawerLabel: "Decypher Text",
    code: codeSnippet5,
    codeTS: codeSnippet5TS, 
    usage: Usage5,
    animations:Animations5
  },
    {
    id: 'scroll-text',
    for:'in Text Animation',
    name: "Scroll Text",
    component: ScrollText,
    drawerLabel: "Scroll Text",
    code: codeSnippet6,
    codeTS: codeSnippet6TS, 
    usage: Usage6,
    animations:Animations6
  },
  
  // other components here...
];
