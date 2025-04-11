import SecondNavbar from "../../components/SecondNavbar";
import { examples } from "../../ComponentExamples/examples/examples-data";
import { useState,Suspense } from "react";
const Example = () => {

  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const SelectedComponent = examples[selectedExampleIndex].component;

    return ( 
        <div className="app-bg">
            <SecondNavbar />
            <div className="empty"></div>
            <div className="flex justify-around">
                <div className="overflow-y-auto h-screen">
                    <h1 className="text-3xl text-white font-semibold">Animated Text</h1>
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
                <div className="content flex flex-col items-start justify-start bg-[#121212] p-4 rounded-md border border-[#3b4345]">
<Suspense fallback={<div>Loading...</div>}>
            <SelectedComponent />
          </Suspense>

                </div>
            </div>
        </div>
     );
}
 
export default Example;