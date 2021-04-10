import Searchengine from "./Searchengine"; 

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <main>
        <Searchengine defaultKeyword="Love"/>
        </main>
      </header>
      </div>
      <footer className="text-center">Coded by Ravenn A.A</footer>
    </div>
  );
}
