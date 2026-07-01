import { motion } from "framer-motion";

export default function Cat({ awake }) {
  const image = awake
    ? "/images/kitten_happy.png"
    : "/images/kitten_sleep.png";

  return (
    <motion.img
      src={image}
      alt="Kitten"
      className="cat"
      animate={{
        y: [0, -8, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}