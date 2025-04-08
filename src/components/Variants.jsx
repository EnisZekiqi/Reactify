
import { useState,useEffect } from "react";

const variants = () => {

    const [variant, setVariant] = useState(0);
    
    useEffect(() => {
        const achieve = 70;
        const interval = setInterval(() => {
            setVariant((prev) => {
                if (prev < achieve) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 50); 
        return () => clearInterval(interval);
    }, []);

    return ( 
        <div>Variants {variant}</div>
     );
}
 
export default variants
;