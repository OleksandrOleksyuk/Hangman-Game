const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  onAddGuessedLetters: (letter: string) => void;
};

export default function Keyboard({
  disabled = false,
  activeLetters,
  inactiveLetters,
  onAddGuessedLetters,
}: KeyboardProps) {
  return (
    <div className="hangman-keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        const isDisabled = isActive || isInactive || disabled;
        return (
          <button
            disabled={isDisabled}
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={key}
            onClick={() => onAddGuessedLetters(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
