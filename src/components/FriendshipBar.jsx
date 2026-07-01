export default function FriendshipBar({ friendship }) {
  return (
    <div className="friendshipContainer">
      <div className="friendshipHeader">
        <span>❤️ Friendship</span>
        <span>{friendship}/100</span>
      </div>

      <div className="friendshipTrack">
        <div
          className="friendshipFill"
          style={{ width: `${friendship}%` }}
        />
      </div>
    </div>
  );
}