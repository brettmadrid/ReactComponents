import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <ListGroup
        items={["Madrid", "New York", "London"]}
        heading="Cities"
        onSelectItem={() => {}}
      />
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)} color="secondary">
        Greenthumb
      </Button> */}
    </>
  );
}

export default App;
