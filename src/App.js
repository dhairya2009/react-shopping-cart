import data from "./data"

class App extends React.Component{
  constructor(){
    super();
    this.state={
              Product: data.product,
              size:" ",
              sort:" ",
    };
  }
  render() {
    return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart </a>
      </header>
      <main>
        <div className="content"> Product </div>
        <div className="sidebar">Cart items</div>
      </main>
      <footer>All Right Is Reserved.</footer>
    </div>
  );
}
}

export default App;
