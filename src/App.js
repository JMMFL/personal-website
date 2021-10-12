import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Works from "./components/Works";
import { interests, profile, projects, skills } from "./data/data";

function App() {
  const [isLoading, setStatus] = useState(true);
  const deviceWidth = window.innerWidth;
  const minWidth = 1200;

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setStatus(false), 1500);
    })
  }, [])

  if (deviceWidth < minWidth) {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Mobile design coming soon.</h1>
        <p>Please use a screen bigger than 1200 pixels wide.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
