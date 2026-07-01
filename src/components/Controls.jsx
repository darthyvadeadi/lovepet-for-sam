export default function Controls({
  onFeed,
  onPlay,
  onPet,
  onSleep,
}) {
  function resetFriendship() {
    localStorage.removeItem("friendship");
    window.location.reload();
  }

  return (
    <div className="controls">
      <button className="controlBtn feedBtn" onClick={onFeed}>
        🍖 Feed
      </button>

      <button className="controlBtn playBtn" onClick={onPlay}>
        🎾 Play
      </button>

      <button className="controlBtn petBtn" onClick={onPet}>
        ❤️ Pet
      </button>

      <button className="controlBtn sleepBtn" onClick={onSleep}>
        😴 Sleep
      </button>

      <button
        className="controlBtn resetBtn"
        onClick={resetFriendship}
      >
        🔄 Reset
      </button>
    </div>
  );
}