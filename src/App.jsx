import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article name="candra" titles={["nextjs", "vue js", "nodejs"]} />
      <br />
      <Article name="dian" titles={["html", "css", "sass"]} />
    </div>
  );
}

export default App;
