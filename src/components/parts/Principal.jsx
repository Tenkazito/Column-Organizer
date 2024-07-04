import { useState, useEffect, useRef } from "react";

const Principal = ({ printArray, printIndex }) => {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
          const { offsetHeight } = divRef.current;
          setDivHeight(offsetHeight/(printArray.length));
        }
      }, [printArray]);

      const divStyles = (n, i) => {
        return {
          height: `${divHeight * n}px`,
          backgroundColor: i === printIndex ? 'black' : 'white', 
        };
      };

    return (
        <div ref={divRef} className="flex flex-grow items-end border border-black rounded-md h-screen mx-5 mb-5 px-1 overflow-auto">
            { printArray.map((number, index) => (
                <div key={index} className="border border-black flex-grow" style={divStyles(number, index)}>
                    
                </div>
            )) }
        </div>
    );
}
 
export default Principal;