import Button from "./components/Button";

const clickHandler = () => {
  console.log("clicked");
};

function App() {
  return (
    <Button onClick={clickHandler} color="danger">
      Greenthumb
    </Button>
  );
}

export default App;
