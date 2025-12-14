import ProductionHouse from "./components/ProductionHouse";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
