import SecondNavbar from "../../components/SecondNavbar";
import { examples } from "../../ComponentExamples/examples/examples-data";
import { useState,Suspense,useEffect } from "react";
import { IoMdEye,IoMdCode  } from "react-icons/io";
import { useParams, useNavigate,Link } from "react-router-dom";
import { MdRestartAlt } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdCheckmark,IoMdCopy  } from "react-icons/io";
import { motion,AnimatePresence } from "framer-motion";

const Example = () => {

  const { exampleId } = useParams();
const navigate = useNavigate();

// 🛠️ Match URL param to example
const initialIndex = examples.findIndex((ex) => ex.id === exampleId);

// 🔁 If not found, redirect to a default one or 404
useEffect(() => {
  if (initialIndex === -1) {
    navigate("/example/simple-text", { replace: true });
  }
}, [initialIndex, navigate]);

const [selectedExampleIndex, setSelectedExampleIndex] = useState(
  initialIndex >= 0 ? initialIndex : 0
);

  useEffect(() => {
  const newIndex = examples.findIndex((ex) => ex.id === exampleId);
  if (newIndex !== -1 && newIndex !== selectedExampleIndex) {
    setSelectedExampleIndex(newIndex);
  }
}, [exampleId, selectedExampleIndex]);

  const [seeCode, setSeeCode] = useState('preview') ///// default this will show the code in javascript from its state 
  
    const SelectedComponent = examples[selectedExampleIndex].component; ///// for the example showdown
  const SelectedCode = examples[selectedExampleIndex].code
  const SelectedUsage =examples[selectedExampleIndex].usage
  const SelectedAnimation =examples[selectedExampleIndex].animations
  const SelectedCodeTS =examples[selectedExampleIndex].codeTS

const [restartKey, setRestartKey] = useState(0);
  
  const [copied,setCopied]=useState(false) /// copy event changer for the icon 
    
    const handleCopy = (event) => {     //// function to copy the code 
      event.stopPropagation()
      setCopied(true)
      navigator.clipboard.writeText(SelectedCode)
      setTimeout(() => {
        setCopied(false)
      }, 3000);
  }
  
   const handleCopyUsage = (event) => {     //// function to copy the code 
      event.stopPropagation()
      setCopied(true)
      navigator.clipboard.writeText(SelectedUsage)
      setTimeout(() => {
        setCopied(false)
      }, 3000);
  }
  
  const handleCopyAnimation = (event) => {
    event.stopPropagation()
    setCopied(true)
    navigator.clipboard.writeText(SelectedAnimation)
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  }
  
  const [chooseLanguage,setChooseLanguage]=useState('javascript') /// state to choose between which language you want to see the code 

  const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1.5 md:py-0.5 transition-colors relative z-10 cursor-pointer";


    return ( 
        <div className="app-bg ">
            <SecondNavbar />
            <div className="empty mask-t-from-10%" style={{height:'120px'}}></div>
            <div className="flex items-start ">
                <div className="overflow-y-auto h-full w-[200px]">
                    <h1 className="text-xl text-white font-semibold">Animated Text</h1>
                    <div className="mt-8 flex flex-col gap-5">
                       {examples.map((example) => (
  <Link
    key={example.id}
     to={`/example/${example.id}`}
        onClick={()=>setSeeCode('preview')}                   
    className={`opacity-70 hover:opacity-100 transition-all duration-300 font-medium pl-3 pt-2 text-sm -mt-[20px]`}
   style={{opacity:example.id === exampleId ? '1' :'0.7',borderLeft:example.id === exampleId ? '1px solid rgba(255,255,255,1)' : '1px solid rgba(255,255,255,0.4)'}}              
  >
    {example.drawerLabel}
  </Link>
))}

        </div>
          </div>
          <div className="flex flex-col items-start  ml-[10%] justify-center w-screen">
              <h1 className="text-white font-bold text-7xl text-start">
            {examples[selectedExampleIndex].drawerLabel}
          </h1>
            <div className="relative flex w-fit items-center justify-between gap-2 rounded-full mt-10 mb-4 p-2 border border-[#3b4345]"
            style={{padding:seeCode === 'code' ? '6px':''}}
            >
      <button
        className={`${TOGGLE_CLASSES} ${
          seeCode === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSeeCode("preview");
        }}
      >
        <span className="relative z-10">Preview</span>
      </button>
        <button
        className={`${TOGGLE_CLASSES} ${
          seeCode === "preview" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSeeCode("code");
        }}
      >
       <AnimatePresence mode="wait">
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } }}
    exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
    className="relative z-10 flex flex-col gap-3 text-white"
  >
    {/* SHOW LABEL ONLY IN PREVIEW */}
    {seeCode === 'preview' && (
      <motion.span
        key="codeLabel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="text-md font-medium"
      >
        Code
      </motion.span>
    )}

    {/* LANGUAGE SELECTOR ONLY IN CODE MODE */}
    {seeCode === 'code' && (
      <motion.div
        key="lang-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className="relative flex items-center gap-2 px-2 py- rounded-full bg-[#]"
      >
        {/* BG HIGHLIGHT — VERY IMPORTANT: inside the same container! */}
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          className="absolute h-[125%] rounded-full bg-gradient-to-r from-[#000] to-[#121212] z-0"
          style={{
            width: '50%',
            left: chooseLanguage === 'javascript' ? '0%' : '50%',
          }}
        />

        {/* LANGUAGE BUTTONS */}
        <button
          onClick={() => setChooseLanguage('javascript')}
          className={`relative z-10 px-3 py-1 rounded-full ${
            chooseLanguage === 'javascript' ? 'text-white' : 'text-slate-300'
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => setChooseLanguage('typescript')}
          className={`relative z-10 px-3 py-1 rounded-full ${
            chooseLanguage === 'typescript' ? 'text-white' : 'text-slate-300'
          }`}
        >
          TypeScript
        </button>
      </motion.div>
    )}
  </motion.span>
</AnimatePresence>

                </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          seeCode === "code" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "stiffness", damping: 30, stiffness: 50 }}
                  className="h-full  rounded-full bg-gradient-to-r from-[#3b4345] to-[#121212] border border-[#3b4345]"
                  style={{width:seeCode === 'preview' ? '55%' :'70%'}}
        />
      </div>
    </div>
            {seeCode === 'preview' ? (
                <div className="content flex flex-col items-center justify-center mt-4 bg-[#121212] p-4 rounded-md border w-[90%] h-[400px] border-[#3b4345]">
              <div className="flex items-start justify-end w-full h-[0%]">
                <button
  onClick={() => setRestartKey(prev => prev + 1)}
  className="px-2 py-2 bg-[#181b1b] text-white cursor-pointer rounded-lg border border-[#3b4345] hover:bg-[#222]"
>
<MdRestartAlt className="w-[20px] h-[20px]"/>
              </button>

</div>
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex h-full justify-center items-center">
                  <SelectedComponent  key={restartKey}/>
                </div>
              </Suspense>

                </div>
            ) : 
                chooseLanguage === 'javascript' ? (
                   <div className="w-full">
                  {/* USAGE CONTAINER */}
                  <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-white mb-2 mt-4">Usage</p>
                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[300px] overflow-y-auto relative mb-6">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopyUsage}
      className="bg-[rgba(0,0,0,0.5)] border cursor-pointer border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedUsage}
    </SyntaxHighlighter>
  </div>
</div>
</div>

{/* Animation CONTAINER */}
                  <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-white mb-2 mt-12">Animation</p>
                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[300px] overflow-y-auto relative mb-6">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopyAnimation}
      className="bg-[rgba(0,0,0,0.5)] border cursor-pointer border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedAnimation}
    </SyntaxHighlighter>
  </div>
</div>
</div>

{/* CODE CONTAINER */}
                  <div className="flex flex-col mt-12">
    <p className="text-3xl font-semibold text-white mb-2">Code</p>

                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[400px] overflow-y-auto relative">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopy}
      className="bg-[rgba(0,0,0,0.5)] border border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedCode}
    </SyntaxHighlighter>
  </div>
</div>
</div>

</div>           
                ) : (
                  <div>
                       <div className="w-full">
                  {/* USAGE CONTAINER */}
                  <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-white mb-2 mt-4">Usage</p>
                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[300px] overflow-y-auto relative mb-6">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopyUsage}
      className="bg-[rgba(0,0,0,0.5)] border cursor-pointer border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedUsage}
    </SyntaxHighlighter>
  </div>
</div>
</div>

{/* Animation CONTAINER */}
                  <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-white mb-2 mt-12">Animation</p>
                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[300px] overflow-y-auto relative mb-6">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopyAnimation}
      className="bg-[rgba(0,0,0,0.5)] border cursor-pointer border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedAnimation}
    </SyntaxHighlighter>
  </div>
</div>
</div>

{/* CODE CONTAINER */}
                  <div className="flex flex-col mt-12">
    <p className="text-3xl font-semibold text-white mb-2">Code</p>

                    <div className="showcode bg-[#121212] flex flex-col p-4 rounded-md border border-[#3b4345] w-[90%] h-[400px] overflow-y-auto relative">
  <div className="absolute top-4 right-6">
    <button
      onClick={handleCopy}
      className="bg-[rgba(0,0,0,0.5)] border border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded transition"
    >
      {copied ? (
        <IoMdCheckmark className="w-[20px] h-[20px]" />
      ) : (
        <IoMdCopy className="w-[20px] h-[20px]" />
      )}
    </button>
  </div>

  <div className="flex flex-col items-start mt-4">
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      showLineNumbers={false}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
      codeTagProps={{
        style: { background: 'transparent' },
      }}
    >
      {SelectedCodeTS}
    </SyntaxHighlighter>
  </div>
</div>
</div>

</div>           
                </div> 
               )} 
            
          </div>
            </div>
        </div>
     );
}
 
export default Example;