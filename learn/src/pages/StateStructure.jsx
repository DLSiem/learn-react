import { useState } from "react";
const StateStructure = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="flex-1"
      onPointerMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <h1 className="text-2xl text-center">State Structure</h1>
      <div
        className={`relative w-8 h-8 t-1 bg-green-400 rounded-full `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -13,
          top: -80,
        }}
      ></div>
    </div>
  );
};

export default StateStructure;
