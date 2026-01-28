import "./styles/app.css";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <CategoryBar />
      <Trending />
    </div>
  );
}

export default App;
