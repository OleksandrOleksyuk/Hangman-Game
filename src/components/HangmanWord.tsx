type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  reveal,
}: HangmanWordProps) {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="hangman-word__letter" key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
