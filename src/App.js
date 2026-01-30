import "./styles/app.css";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import Trending from "./components/Trending";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <CategoryBar />
      <Trending />
    </div>
  );
}

export default App;
