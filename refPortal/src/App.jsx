import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={10} />
        <TimeChallenge title="Medium" targetTime={5} />
        <TimeChallenge title="Hard" targetTime={3} />
      </div>
    </>
  );
}

export default App;
