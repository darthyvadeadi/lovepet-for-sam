import { useEffect, useState } from "react";
import Aurora from "./components/Aurora";
import FloatingHearts from "./components/FloatingHearts";
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
    if (!awake) {
      setAwake(true);
    }

    setFriendship((prev) => Math.min(prev + 5, 100));
  }

  return (
    <>
      <Background />
      <Aurora />
      <FloatingHearts />

      <div className="app">
        <div className="glow"></div>

        <GlassCard>
          <h1 className="title">✨ LovePet ✨</h1>

          <p className="subtitle">
            Made with ❤️ by Adi
            <br />
            For Sam 🌸
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