import { Fragment, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Divider } from "./components/Divider";
import { Servicios } from "./components/servicios/Servicios";
import { Navbar } from "./components/ui/Navbar";
import { Home } from "./Home";



function App() {

  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {

        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();

      })
    })

    await Promise.all(promises);

    setIsLoading(false);
  }

  useEffect(() => {

    const imgs = [
      "./images/newyork.jpg",
      "./images/negocio.jpeg",
      "./images/hammer.jpeg",
      "./images/academia.jpg",
      "./images/mentores.jpeg"
    ]

    cacheImages(imgs);
  }, [])

  return (
    <div className="App">
      {
        isLoading
          ?
          <div className="spinner-div">
            <ClipLoader size={150} color={"#348167"} />
          </div>
          :
          <Fragment>
            <Navbar />
            <Home />
            <About />
            <Divider text="Si estás buscando una señal para no rendirte. Aquí está, esta es." />
            <Servicios />
            <Divider text="Hazlo, y si te da miedo, hazlo con miedo." />
            <Blog />
            <Contact />
          </Fragment>
      }

    </div>
  );
}

export default App;
