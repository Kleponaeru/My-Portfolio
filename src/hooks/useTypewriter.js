import { useEffect, useState } from "react";

export const useTypewriter = (words, pause = 1600) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    const isComplete = displayText === currentWord;
    const isCleared = displayText.length === 0;
    const timeout = isDeleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isCleared) {
        setIsDeleting(false);
        setWordIndex((value) => value + 1);
        return;
      }

      setDisplayText((value) =>
        isDeleting
          ? currentWord.slice(0, value.length - 1)
          : currentWord.slice(0, value.length + 1)
      );
    }, isComplete && !isDeleting ? pause : timeout);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, pause, wordIndex, words]);

  return displayText;
};
