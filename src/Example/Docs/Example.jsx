import SecondNavbar from "../../components/SecondNavbar";
import { examples } from "../../ComponentExamples/examples/examples-data";
import { useState,Suspense,useEffect } from "react";
import { IoMdEye,IoMdCode  } from "react-icons/io";
import { useParams, useNavigate,Link } from "react-router-dom";

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
  
    const SelectedComponent = examples[selectedExampleIndex].component;

  
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