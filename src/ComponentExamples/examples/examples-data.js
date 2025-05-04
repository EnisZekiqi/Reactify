// src/examples/examples-data.js
import React from 'react';
import { codeSnippet,codeSnippetTS } from '../javascript/helloLogic';
import { codeSnippet2, codeSnippet2TS } from '../javascript/helloLogic2';
import { codeSnippet3, codeSnippet3TS } from '../javascript/BubbleLogic';
import { codeSnippet4, codeSnippet4TS } from '../javascript/ExposeLogic';
import { codeSnippet5, codeSnippet5TS } from '../javascript/DexypherLogic';
import { codeSnippet6, codeSnippet6TS } from '../javascript/ScrollLogic';
import { codeSnippet7, codeSnippet7TS } from '../javascript/LiquidLogic';
import { codeSnippet8,codeSnippet8TS } from '../javascript/AuroraLogic';
import { codeSnippet9, codeSnippet9TS } from '../javascript/StreamLogic';
import { codeSnippet10,codeSnippet10TS } from '../javascript/MeltingLogic';
import { codeSnippet11, codeSnippet11TS } from '../javascript/RotatingLogic';
import { codeSnippet12,codeSnippet12TS } from '../javascript/LoopLogic';
import { codeSnippet14,codeSnippet14TS,installation } from '../javascript/ConfettiLogic';

import { Usage as Usage1, Animations as Animations1 } from '../javascript/helloLogic';
import { Usage as Usage2, Animations as Animations2 } from '../javascript/helloLogic2';
import { Usage as Usage3, Animations as Animations3 } from '../javascript/BubbleLogic';
import { Usage as Usage4, Animations as Animations4 } from '../javascript/ExposeLogic'
import { Usage as Usage5, Animations as Animations5 } from '../javascript/DexypherLogic'
import { Usage as Usage6, Animations as Animations6 } from '../javascript/ScrollLogic'
import { Usage as Usage7 } from '../javascript/LiquidLogic'
import { Usage as Usage8 ,CSS} from '../javascript/AuroraLogic'
import { Usage as Usage9, Animations as Animations9 } from '../javascript/StreamLogic'
import { Usage as Usage10, CSS1 } from '../javascript/MeltingLogic'
import { Usage as Usage11, Animations as Animations10 } from '../javascript/RotatingLogic'
import { Usage as Usage12, Animations as Animations11 } from '../javascript/LoopLogic'
import { Usage as Usage13, Animations as Animations13 } from '../javascript/ConfettiLogic'




const SimpleText = React.lazy(() => import('../Components/SimpleText'));
const BlurText =React.lazy(()=>import ('../Components/BlurText'))
const BubbleText = React.lazy(() => import('../Components/BubbleText'))
const ExposeText = React.lazy(() => import('../Components/ExposeText'))
const DecypherText = React.lazy(() => import('../Components/DecypherText'))
const ScrollText = React.lazy (()=>import ('../Components/ScrollText'))
const LiquidText = React.lazy(() => import('../Components/LiquidText'))
const AuroraText = React.lazy(() => import('../Components/AuroraText'))
const DripText = React.lazy(() => import('../Components/DripText'))
const StreamText = React.lazy(() => import('../Components/StreamText'))
const RotatingText = React.lazy(() => import('../Components/RotatingText'))
const LoopText = React.lazy(() => import('../Components/LoopText'))
//Components/Button//
const ConfettiButton = React.lazy(() => import('../Buttons/ConfettiButton'));
const RateButton = React.lazy(() => import('../Buttons/RateButton'));
const SliderButton = React.lazy(() => import('../Buttons/SliderButton'));
//Components/Cards//
const LoopCard = React.lazy(() => import('../Cards/LoopCard'));
const AuroraCard = React.lazy(() => import('../Cards/AuroraCard'));
const DefiniteCard = React.lazy(() => import('../Cards/DefiniteCard'));



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
     {
    id: 'liquid-text',
    for:'in Text Animation',
    name: "Liquid Text",
    component: LiquidText,
    drawerLabel: "Liquid Text",
    code: codeSnippet7,
    codeTS: codeSnippet7TS, 
       usage: Usage7,
  },
    {
    id: 'aurora-text',
    for:'in Text Animation',
    name: "Aurora Text",
    component: AuroraText,
    drawerLabel: "Aurora Text",
    code: codeSnippet8,
    codeTS: codeSnippet8TS, 
    usage: Usage8,
    css:CSS
  },
    {
    id: 'drip-text',
    for:'in Text Animation',
    name: "Drip Text",
    component: DripText,
    drawerLabel: "Drip Text",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
      usage: Usage10,
    css:CSS1
  },
     {
    id: 'stream-text',
    for:'in Text Animation',
    name: "Stream Text",
    component: StreamText,
    drawerLabel: "Stream Text",
    code: codeSnippet9,
    codeTS: codeSnippet9TS, 
      usage: Usage9,
    animations:Animations9
  },
     {
    id: 'whirling-text',
    for:'in Text Animation',
    name: "Whirling Text",
    component: RotatingText,
    drawerLabel: "Whirling Text",
    code: codeSnippet11,
    codeTS: codeSnippet11TS, 
      usage: Usage11,
    animations:Animations10
  },
     {
    id: 'loop-text',
    for:'in Text Animation',
    name: "Loop Text",
    component: LoopText,
    drawerLabel: "Loop Text",
    code: codeSnippet12,
    codeTS: codeSnippet12TS, 
      usage: Usage12,
    animations:Animations11
  },
  
  
  // other components here... Buttons
     
 {
    id: 'confetti-button',
    for:'in Components/Buttons',
    name: "Confetti Button",
    component: ConfettiButton,
    drawerLabel: "Confetti Button",
    code: codeSnippet14,
    codeTS: codeSnippet14TS, 
    usage: Usage13,
    animations: Animations13,
    installation:installation
    },
  {
    id: 'rate-button',
    for:'in Components/Buttons',
    name: "Rate Button",
    component: RateButton,
    drawerLabel: "Rate Button",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
     usage: Usage13,
    animations:Animations13
  }, 
  {
    id: 'slider-button',
    for:'in Components/Buttons',
    name: "Slider Button",
    component: SliderButton,
    drawerLabel: "Slider Button",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
     usage: Usage13,
    animations:Animations13
  }, 
  {
    id: 'loop-card',
    for:'in Components/Cards',
    name: "Loop Card",
    component: LoopCard,
    drawerLabel: "Loop Card",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
     usage: Usage13,
    animations:Animations13
  }, 
  {
    id: 'aurora-card',
    for:'in Components/Cards',
    name: "Aurora Card",
    component: AuroraCard,
    drawerLabel: "Aurora Card ",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
     usage: Usage13,
    animations:Animations13
  }, 
  {
    id: 'definite-card',
    for:'in Components/Cards',
    name: "Definite Card",
    component: DefiniteCard,
    drawerLabel: "Definite Card",
    code: codeSnippet10,
    codeTS: codeSnippet10TS, 
     usage: Usage13,
    animations:Animations13
  }, 
];
