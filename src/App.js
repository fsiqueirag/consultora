import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Divider } from "./components/Divider";
import { Servicios } from "./components/servicios/Servicios";
import { Navbar } from "./components/ui/Navbar";
import { Home } from "./Home";




function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Divider text="Si estás buscando una señal para no rendirte. Aquí está, esta es." />
      <Servicios />
      <Divider text="Hazlo, y si te da miedo, hazlo con miedo." />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
