import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="relative h-screen w-screen"
      onPointerMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <div
        className={`absolute w-8 h-8 t-1 bg-green-400 rounded-full `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -15,
          top: -15,
        }}
      ></div>
    </div>
  );
}

export default App;
