// import logo from './logo.svg';
// import './App.css';
import './css/portfolio.css';
// import './css/reset.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World react</h1>
      <MyButton />
      <MyDiv />
      {/* <Appp /> */}
      <div className="box"><h1 className="caption">REACT</h1></div>
    </div>
  );
}
function MyButton() {
  return <button id="step-button">Click Me</button>;
}
function MyDiv() {
  return <div>Component</div>;
}

export default App;
