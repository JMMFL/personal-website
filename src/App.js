import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Works from "./components/Works";
import data from "./data/data";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Works projects={data} />
    </>
  );
}

export default App;
