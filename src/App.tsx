import React from "react";
import Button, { ButtonType, ButtonSize } from "./conponents/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com">
          Hello
        </Button>

        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
          Hello Danger
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
