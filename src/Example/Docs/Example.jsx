import SecondNavbar from "../../components/SecondNavbar";
import { examples } from "../../ComponentExamples/examples/examples-data";
import { useState,Suspense,useEffect } from "react";
import { IoMdEye,IoMdCode  } from "react-icons/io";
import { useParams, useNavigate,Link } from "react-router-dom";
import { MdRestartAlt } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdCheckmark,IoMdCopy  } from "react-icons/io";


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

  const [seeCode, setSeeCode] = useState('preview')
  
    const SelectedComponent = examples[selectedExampleIndex].component; ///// for the example showdown
    const SelectedCode = examples[selectedExampleIndex].code
  
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
  
    return ( 
        <div className="app-bg">
            <SecondNavbar />
            <div className="empty" style={{height:'120px'}}></div>
            <div className="flex items-start">
                <div className="overflow-y-auto h-full w-[200px]">
                    <h1 className="text-xl text-white font-semibold">Animated Text</h1>
                    <div className="mt-4 flex flex-col gap-3">
                       {examples.map((example) => (
  <Link
    key={example.id}
    to={`/example/${example.id}`}
   className="opacity-70 hover:opacity-100 transition-all duration-300"
   style={{opacity:example.id === exampleId ? '1' :'0.7'}}              
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
            <div className="flex items-center gap-2 mt-10 mb-4">
              <div
                onClick={()=>setSeeCode('preview')}
                style={{backgroundColor:seeCode === 'preview' ? '#181b1b':'transparent',transition:'all 0.5s ease'}}
                className=" p-2 flex items-center gap-2 rounded-xl border border-[#3b4345] cursor-pointer">
                <IoMdEye className=" h-[20px] w-[20px]" />
                <p className="text-sm font-light">Preview</p>
              </div>
              <div
                onClick={()=>setSeeCode('code')}
                style={{backgroundColor:seeCode === 'code' ? '#181b1b':'transparent',transition:'all 0.5s ease'}}
                className="flex p-2 items-center gap-2 rounded-xl border border-[#3b4345] cursor-pointer">
                <IoMdCode className=" h-[20px] w-[20px]" />
                <p className="text-sm font-light">Code</p>
              </div>
            </div>
            {seeCode === 'preview' ? (
                <div className="content flex flex-col items-center justify-center  bg-[#121212] p-4 rounded-md border w-[90%] h-[400px] border-[#3b4345]">
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
            ) : (
                
                <div className="bg-[#121212] flex flex-row-reverse  items-center justify-between p-4 rounded-md border border-[#3b4345] w-[90%] h-[500px] overflow-y-auto">
                  <div className="flex items-start justify-end h-full">
                     <button
         onClick={handleCopy}
         className="mt-4  top-4 right-6 bg-[rgba(0,0,0,0.5)] border border-[#3b4345] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded  transition"
       >
         {copied ? (
                 <IoMdCheckmark className="w-[20px] h-[20px]" />
               ) : (
                 <IoMdCopy className="w-[20px] h-[20px]" />
               )}          </button>
 </div>
                  <SyntaxHighlighter language="jsx" style={oneDark} customStyle={{ backgroundColor: 'transparent' }}>
    {SelectedCode}
  </SyntaxHighlighter>
</div>

            )}
          </div>
            </div>
        </div>
     );
}
 
export default Example;