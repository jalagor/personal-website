
import './App.css';
import Header from './components/Header'
import Card from './components/card'

function lotsOfStuff(){
  for(let i=0; i<10; i++){
    return Card
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  )
}

export default App;
