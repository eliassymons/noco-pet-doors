import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import PetDoors from "./components/PetDoors";
import Footer from "./components/Footer";
import "./style.css";
import React from "react";

function App() {
  const [userData, setUserData] = React.useState([] || null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  console.log(userData && userData);
  return (
    <div className="App">
      <Header />
      <Home />
      <PetDoors />
      <About />
      <Contact />
      <Footer />
      {/* <Blog userData={userData} /> */}
    </div>
  );
}

export default App;
