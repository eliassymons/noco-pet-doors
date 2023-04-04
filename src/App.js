import About from "./components/About";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";

import Home from "./components/Home";
import PetDoors from "./components/PetDoors";
import Footer from "./components/Footer";
import "./style.css";
import React from "react";
import Services from "./components/Services";
import Header from "./components/Header";

function App() {
  // const [userData, setUserData] = React.useState([] || null);
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, []);

  // console.log(userData && userData);
  return (
    <div className="App" id="/home">
      <Header />
      <Home />
      <Services />
      <PetDoors />
      <About />
      <Contact />
      <Footer />
      {/* <Blog userData={userData} /> */}
    </div>
  );
}

export default App;
