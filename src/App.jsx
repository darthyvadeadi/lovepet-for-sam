import { useEffect, useState } from "react";

import Background from "./components/Background";
import GlassCard from "./components/GlassCard";
import Cat from "./components/Cat";
import SpeechBubble from "./components/SpeechBubble";
import FriendshipBar from "./components/FriendshipBar";

import "./index.css";

function App() {

  const [awake, setAwake] = useState(false);

  const [friendship, setFriendship] = useState(() => {
    return Number(localStorage.getItem("friendship")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("friendship", friendship);
  }, [friendship]);

  function wakeKitten() {
    setAwake(true);

    if (friendship === 0) {
      setFriendship(5);
    }
  }

  return (
    <>
      <Background />

      <div className="app">

        <div className="glow"></div>

        <GlassCard>

          <h1 className="title">✨ LovePet ✨</h1>

          <p className="subtitle">
            Made with ❤️ by Adi
          </p>

          <Cat awake={awake} />

          <SpeechBubble awake={awake} />

          <FriendshipBar friendship={friendship} />

          <button
            className="wakeBtn"
            onClick={wakeKitten}
          >
            {awake ? "❤️ Welcome Sam ❤️" : "✨ Wake Me Up"}
          </button>

        </GlassCard>

      </div>
    </>
  );
}

export default App;