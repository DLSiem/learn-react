import { useState } from "react";

const SharingState = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <h1 className="text-xl text-center mt-2 font-semibold text-gray-800 mb-3">
        Almaty, Kaxahsfn
      </h1>
      <Panel title="Inside Out">
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Inside Out is a 2015 American computer-animated comedy film produced
          by Pixar Animation Studios and released by Walt Disney Pictures. The
          film was directed by Pete Docter and co-directed by Ronnie del Carmen,
          with a screenplay written by Docter, Meg LeFauve, and Josh Cooley,
          adapted from a story by Docter and del Carmen. The film has gross over
          $857 million worldwide.
        </p>
      </Panel>
      <Panel title="One Piece">
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          One Piece is a Japanese manga series written and illustrated by
          Eiichiro Oda. It has been serialized in Shueisha&apos;s Weekly Shōnen
          Jump magazine since July 22, 1997, and has been collected into 98
          tankōbon volumes as of February 2021. The story follows the adventures
          of Monkey D. Luffy.
        </p>
      </Panel>
    </div>
  );
};

export default SharingState;

const Panel = ({ children, title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container mx-auto px-4 py-4 border-b my-1">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
      {isActive ? (
        <>
          {children}{" "}
          <button onClick={() => setIsActive(false)} className="text-blue-600">
            ...hide description
          </button>
        </>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => setIsActive(true)}
        >
          Show Description
        </button>
      )}
    </div>
  );
};
