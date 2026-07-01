import { useEffect, useState } from "react";

function Cat({ image }) {
  const [displayImage, setDisplayImage] = useState(image);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (image === displayImage) return;

    setFade(false);

    const changeTimer = setTimeout(() => {
      setDisplayImage(image);
      setFade(true);
    }, 180);

    return () => clearTimeout(changeTimer);
  }, [image, displayImage]);

  return (
    <div className="cat-container">
      <img
        src={displayImage}
        alt="LovePet"
        className={`cat ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
}

export default Cat;