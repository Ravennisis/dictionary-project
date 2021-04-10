import Searchengine from "./Searchengine"; 

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Word Findr</h1> 
        </header>
        <main>
        <Searchengine defaultKeyword="Love"/>
        </main>
      </div>
      <footer className="signature"><small><a href="https://github.com/Ravennisis/dictionary-project" 
      target="_blank" rel="noreferrer">Open source code</a> created by  
      <a href="https://www.linkedin.com/in/ravenn-annibal-arnulf-91811b201/" 
      target="_blank" rel="noreferrer"> Ravenn Annibal-Arnulf</a>
      </small></footer>
    </div>
  );
}
