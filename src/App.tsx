import { useState } from "react";
import produce from "immer";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Message from "./components/Message";
import Form from "./components/Form3";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const bugUpdateHandler = () => {
    // Update
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // OR ---- Using Immer Utility
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const clickHandler = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const handleClick = () => {
    setAlertVisible(true);
  };

  return (
    <>
      <Form />
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed === true ? "Fixed" : "New"}
        </p>
      ))}
      <Button onClick={bugUpdateHandler}>Click</Button> */}
      {/* <Like onClick={clickHandler} /> */}
      {/* <Button onClick={handleClick} color="primary">
        Alert
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )} */}
      {/* <ListGroup
          items={["Madrid", "New York", "London"]}
          heading="Cities"
          onSelectItem={() => {}}
        /> */}
    </>
  );
}

export default App;
