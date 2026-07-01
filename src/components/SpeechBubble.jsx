export default function SpeechBubble({ awake }) {
  return (
    <div className="speech">
      {awake ? "Meow! Hi Sam ❤️" : "😴 Zzz..."}
    </div>
  );
}