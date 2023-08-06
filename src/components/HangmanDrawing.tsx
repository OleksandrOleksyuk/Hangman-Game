const HEAD = (
  <div key={"hangman-drawing__head"} className="hangman-drawing__head"></div>
);
const BODY = (
  <div key={"hangman-drawing__body"} className="hangman-drawing__body"></div>
);
const RIGHT_ARM = (
  <div
    key={"hangman-drawing__rightarm"}
    className="hangman-drawing__rightarm"
  ></div>
);
const LEFT_ARM = (
  <div
    key={"hangman-drawing__leftarm"}
    className="hangman-drawing__leftarm"
  ></div>
);
const RIGHT_LEG = (
  <div
    key={"hangman-drawing__rightleg"}
    className="hangman-drawing__rightleg"
  ></div>
);
const LEFT_LEG = (
  <div
    key={"hangman-drawing__leftleg"}
    className="hangman-drawing__leftleg"
  ></div>
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman-drawing">
      <div />
      <div />
      <div />
      <div />
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
}

export default HangmanDrawing;
