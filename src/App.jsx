import { useEffect, useState } from "react";

import Aurora from "./components/Aurora";
import FloatingHearts from "./components/FloatingHearts";
import Background from "./components/Background";
import GlassCard from "./components/GlassCard";
import Cat from "./components/Cat";
import SpeechBubble from "./components/SpeechBubble";
import FriendshipBar from "./components/FriendshipBar";
import Controls from "./components/Controls";
import HeartBurst from "./components/HeartBurst";

import "./index.css";

const kittenSleep = "/images/kitten_sleep.png";
const kittenHappy = "/images/kitten_happy.png";
const kittenPlay = "/images/kitten_play.png";
const kittenEat = "/images/kitten_eat.png";

function App() {
  const [friendship, setFriendship] = useState(() => {
    return Number(localStorage.getItem("friendship")) || 0;
  });

  const [petImage, setPetImage] = useState(kittenSleep);
  const [message, setMessage] = useState("😴 Zzz...");
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    localStorage.setItem("friendship", friendship);
  }, [friendship]);

  function feedPet() {
    setPetImage(kittenEat);
    setMessage("🍖 Yummy!");
    setFriendship((prev) => Math.min(prev + 5, 100));
  }

  function playPet() {
    setPetImage(kittenPlay);
    setMessage("🎾 Let's Play!");
    setFriendship((prev) => Math.min(prev + 8, 100));
  }

  function petPet() {
    setPetImage(kittenHappy);
    setMessage("❤️ Purrr...");
    setFriendship((prev) => Math.min(prev + 3, 100));

    setShowHearts(true);

    setTimeout(() => {
      setShowHearts(false);
    }, 1000);
  }

  function sleepPet() {
    setPetImage(kittenSleep);
    setMessage("😴 Zzz...");
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

          <Cat image={petImage} />

          <HeartBurst show={showHearts} />

          <SpeechBubble message={message} />

          <FriendshipBar friendship={friendship} />

          <Controls
            onFeed={feedPet}
            onPlay={playPet}
            onPet={petPet}
            onSleep={sleepPet}
          />
        </GlassCard>
      </div>
    </>
  );
}

export default App;