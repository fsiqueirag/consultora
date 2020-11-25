import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Servicios } from "./components/servicios/Servicios";
import { Navbar } from "./components/ui/Navbar";

// AIzaSyCCjbKQtcFuD6s50ILmjhwlnudsvwFX9_Y
// blogID=4886578494024518036

function App() {



  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Servicios />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;