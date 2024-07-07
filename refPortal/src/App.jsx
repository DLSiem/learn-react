import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={4} />
        <TimeChallenge title="Medium" targetTime={3} />
        <TimeChallenge title="Hard" targetTime={2} />
      </div>
    </>
  );
}

export default App;
