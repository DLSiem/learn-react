import { useState } from "react";

const SharingState = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <h1 className="text-xl text-center mt-2 font-semibold text-gray-800 mb-3">
        Top Movies and Series
      </h1>
      <Panel
        title="Inside Out"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Inside Out is a 2015 American computer-animated comedy film produced
          by Pixar Animation Studios and released by Walt Disney Pictures. The
          film was directed by Pete Docter and co-directed by Ronnie del Carmen,
          with a screenplay written by Docter, Meg LeFauve, and Josh Cooley,
          adapted from a story by Docter and del Carmen. The film has gross over
          $857 million worldwide.
        </p>
      </Panel>
      <Panel
        title="One Piece"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          One Piece is a Japanese manga series written and illustrated by
          Eiichiro Oda. It has been serialized in Shueisha&apos;s Weekly Shōnen
          Jump magazine since July 22, 1997, and has been collected into 98
          tankōbon volumes as of February 2021. The story follows the adventures
          of Monkey D. Luffy.
        </p>
      </Panel>
      {/* Kungfu Panda 4 */}
      <Panel
        title="Kungfu Panda 4"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          After three death-defying adventures defeating world-class villains
          with his unmatched courage and mad martial arts skills. Po. the Dragon
          Warrior (Golden Globe nominee Jack Black). is called upon by destiny
          to give it a rest already. More specifically, he&apos;s tapped to
          become the Spiritual Leader of the Valley of Peace.
        </p>
      </Panel>
    </div>
  );
};

export default SharingState;

const Panel = ({ children, title, isActive, onShow }) => {
  return (
    <div className="container mx-auto px-4 py-4 border-b my-1">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
      {isActive ? (
        <>{children}</>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={onShow}
        >
          Show Description
        </button>
      )}
    </div>
  );
};
