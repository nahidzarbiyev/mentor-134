// import Button from "./components/button"
import Button from "./components/button";
import Cards from "./components/cards";
// import Input from "./components/input"

function App() {
  return (
    <>
      <div
        className="app"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Cards />
      </div>
        <Button />
    </>
  );
}

export default App;
