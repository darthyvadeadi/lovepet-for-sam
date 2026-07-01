export default function GlassCard({ children }) {
  return (
    <div className="glasscard">
      <div className="glass-shine"></div>
      {children}
    </div>
  );
}