import "./App.css";
import { Articles } from "./Components/Articles";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
