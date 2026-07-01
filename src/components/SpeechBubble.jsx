import { useEffect, useState } from "react";

function SpeechBubble({ message }) {
  const [visibleMessage, setVisibleMessage] = useState(message);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (message === visibleMessage) return;

    setShow(false);

    const timer = setTimeout(() => {
      setVisibleMessage(message);
      setShow(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [message, visibleMessage]);

  return (
    <div className={`speech-bubble ${show ? "bubble-show" : "bubble-hide"}`}>
      {visibleMessage}
    </div>
  );
}

export default SpeechBubble;