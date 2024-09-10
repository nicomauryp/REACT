import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //EMPTY TAG INSTEAD OF DIV FOR NOT HAVING DUPLICATE OBJECTS IN DOM
    //USE OF IMPORT FRAGMENT AND FRAGMENT FOR OLD PROYECTS
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
