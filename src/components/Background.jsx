import "./background.css";

export default function Background() {
  const stars = Array.from({ length: 150 });

  return (
    <div className="background">
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>

      <div className="stars">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}