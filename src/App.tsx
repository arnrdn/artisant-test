import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <List />
      </main>
    </div>
  );
}

export default App;
