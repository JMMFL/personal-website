import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Works from "./components/Works";
import { interests, profile, projects, skills } from "./data/data";

function App() {
  const deviceWidth = window.innerWidth;
  const minWidth = 1200;

  if (deviceWidth < minWidth) {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Mobile design coming soon.</h1>
        <p>Please use a screen bigger than 1200 pixels wide.</p>
      </div>
    )
  }
  
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
