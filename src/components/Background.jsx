export default function Background() {
  const stars = Array.from({ length: 170 });
  const hearts = Array.from({ length: 18 });

  return (
    <>
      <div className="background"></div>

      {/* Aurora */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>

      {/* Stars */}
      {stars.map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <div
          key={`heart-${i}`}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
            transform: `scale(${0.6 + Math.random() * 0.8})`,
          }}
        >
          <div className="heartShape"></div>
        </div>
      ))}
    </>
  );
}