import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>React Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="application" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Sophie Dabirmanesh and open source on{" "}
            <a
              href="https://github.com/sophiedabi/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
