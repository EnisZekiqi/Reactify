export const example8 = 'Aurora Hover'


export const Usage = `
import AuroraText from "./AuroraText";


<AuroraText
 example8="Aurora Hover"  />`


 export const codeSnippet8 = `
 
 const AuroraText = () => {
    return ( 
        <div>
            <span className="relative inline-block text-white group">
                <span className="animate-aurora relative text-3xl sm:text-5xl rounded-2xl transition-colors duration-150 px-2 z-10 group-hover:text-transparent
                 group-hover:bg-clip-text group-hover:animate-aurora bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
                    {example8}
                </span>
            </span>
        </div>
     );
}
 
 `;
 
 export const codeSnippet8TS = `
 
 interface AuroraText {
   example8: string;
 }
 
 const AuroraText: React.FC<AuroraTextProps> = ({ example8 }) => {
     return ( 
        <div>
            <span className="relative inline-block text-white group">
                <span className="animate-aurora relative text-3xl sm:text-5xl rounded-2xl transition-colors duration-150 px-2 z-10 group-hover:text-transparent
                 group-hover:bg-clip-text group-hover:animate-aurora bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
                    {example8}
                </span>
            </span>
        </div>
     );
 };
 `;

export const CSS = `

.animate-aurora{
  background-size: 200% auto;
  animation: aurora 2s linear infinite;
}

@keyframes aurora {
  0%{
    background-position: 0% 50%;
  }
  100%{
    background-position: 100% 100%;
  }
}


`