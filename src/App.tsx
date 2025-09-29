import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { downloadEmploymentLetter } from "./shared";
import { EmploymentLetterComponent } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const viewEmploymentLetter = () => {
    window.open(
      `${import.meta.env.VITE_URL_BACKEND}/basic-reports/employment-letter`,
      "_blank"
    );
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <EmploymentLetterComponent />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>{import.meta.env.VITE_URL_BACKEND}</p>
        <p>{import.meta.env.VITE_STAGE}</p>
        <button onClick={viewEmploymentLetter} className="btn btn-secondary">
          Ver Constancia de Empleo
        </button>
        <button onClick={downloadEmploymentLetter} className="btn btn-primary">
          Descargar Constancia de Empleo
        </button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
