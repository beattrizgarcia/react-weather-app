import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by
        <a
          href="https://github.com/beattrizgarcia"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Beatriz Garcia
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/beattrizgarcia/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://capable-toffee-4bbba8.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
