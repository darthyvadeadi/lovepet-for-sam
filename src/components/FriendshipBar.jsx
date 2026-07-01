export default function FriendshipBar({ friendship }) {
  const level =
    friendship >= 100
      ? "Soulmates 💖"
      : friendship >= 75
      ? "Best Friends 🌸"
      : friendship >= 50
      ? "Close Friends 😊"
      : friendship >= 25
      ? "Getting Closer ✨"
      : "Just Met 👋";

  return (
    <div className="friendship-section">
      <div className="friendship-header">
        <span>Friendship</span>
        <span>{friendship}%</span>
      </div>

      <div className="friendship-track">
        <div
          className={`friendship-fill ${
            friendship === 100 ? "maxFriendship" : ""
          }`}
          style={{ width: `${friendship}%` }}
        />
      </div>

      <p className="friendship-level">
        {level}
      </p>
    </div>
  );
}