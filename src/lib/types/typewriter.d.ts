declare global {
  type Repeat = 1;

  type EndState = {
    text: "typed" | "deleted";
    caret: "visible" | "hidden" | "blink";
  };

  type AfterDeleted = {
    blink: number;
  };
}

export {};
