const hearts = Array.from({ length: 20 });

export default function FloatingHearts() {
  return (
    <div className="heartsLayer">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="floatingHeart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}