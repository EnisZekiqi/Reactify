import SecondNavbar from "../../components/SecondNavbar";
import { examples } from "../../ComponentExamples/examples/examples-data";
import { useState,Suspense } from "react";
import { IoMdEye,IoMdCode  } from "react-icons/io";

const Example = () => {

  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const SelectedComponent = examples[selectedExampleIndex].component;


  const [seeCode, setSeeCode] = useState('preview')
  
    return ( 
        <div className="app-bg">
            <SecondNavbar />
            <div className="empty" style={{height:'120px'}}></div>
            <div className="flex items-start">
                <div className="overflow-y-auto h-full w-[200px]">
                    <h1 className="text-xl text-white font-semibold">Animated Text</h1>
                    <div className="mt-4">
                        {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setSelectedExampleIndex(i)}
              className={`block w-full text-start mb-1 p-1 mt-1 rounded cursor-pointer ${
                selectedExampleIndex === i
                  ? " text-[rgba(255,255,255,1)] transition-all duration-300"
                  : "text-[rgba(255,255,255,0.5)] hover:text-white transition-all duration-300"
              }`}
    >
              {ex.drawerLabel}
            </button>
          ))} 
        </div>
          </div>
          <div className="flex flex-col items-start  ml-[10%] justify-center w-screen">
            {examples.map((ex, i) => (
            <div key={i} style={{opacity:selectedExampleIndex === i ? 1:0,display:selectedExampleIndex === i ? 'block':'none'}}>
              <h1 className="text-white font-bold text-7xl text-start"> {ex.drawerLabel}</h1>
              </div>
            ))}
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
                <div className="content flex flex-col items-center justify-center  bg-[#121212] p-4 rounded-md border w-[90%] h-[400px] border-[#3b4345]">
<Suspense fallback={<div>Loading...</div>}>
            <SelectedComponent />
          </Suspense>

                </div>
          </div>
            </div>
        </div>
     );
}
 
export default Example;