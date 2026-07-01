export default function HeartBurst({ show }) {
  if (!show) return null;

  return (
    <div className="heartBurst">
      <span>❤️</span>
      <span>💖</span>
      <span>💕</span>
      <span>💗</span>
      <span>💘</span>
    </div>
  );
}