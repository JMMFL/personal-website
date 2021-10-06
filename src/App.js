import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Works from "./components/Works";
import { interests, profile, projects, skills } from "./data/data";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Works projects={projects} />
      <About profile={profile} skills={skills} interests={interests} />
    </>
  );
}

export default App;
