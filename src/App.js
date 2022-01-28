import Home from './components/Home';
import Sorting from './components/Sorting/Sorting';
import PatternSearch from './components/PatternSearch/PatternSearch';
import { useEffect, useState } from 'react'
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

export default function App() {
  // A state and useEffect for custom hashed URL routing
  //  (alternative to react-router cause it doesn't work on gh-pages)
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    function handleHashChange() {
      console.log('Hash:' + new URL(document.URL).hash);
      setCurrentHash(window.location.hash);
    }
    // for first render
    handleHashChange();

    // for subsequent URL changes
    window.addEventListener('hashchange', handleHashChange);
  })

  return (
    <div className="App">
      {/* <h2>{'currentHash: ' + currentHash}</h2> */}
      {currentHash === "" || currentHash === "/" || currentHash === "#/" ? <Home /> : 
        currentHash === "#/sorting" ? <Sorting /> : 
        currentHash === "#/pattern-search" ? <PatternSearch />
      : null}
    </div>
  );
}

