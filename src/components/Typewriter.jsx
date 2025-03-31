import { useEffect, useState } from "preact/hooks";

export default function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingSpeed = 45;

    function typeWriter() {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    }

    setDisplayText(""); // Start fresh
    setTimeout(typeWriter, 500); // Delay start
  }, [text]);

  return (
    <div class="blurb-container">
      <p class="blurb">{displayText}</p>
    </div>
  );
}
