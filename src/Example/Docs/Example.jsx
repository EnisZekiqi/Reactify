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
{examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setSelectedExampleIndex(i)}
              className={`block w-full mb-2 p-2 rounded ${
                selectedExampleIndex === i
                  ? " text-white"
                  : "bg-white text-black"
              }`}
            >
              {ex.drawerLabel}
            </button>
          ))}                </div>
                <div className="content flex flex-col items-start justify-start">
<Suspense fallback={<div>Loading...</div>}>
            <SelectedComponent />
          </Suspense>

                </div>
            </div>
        </div>
     );
}
 
export default Example;