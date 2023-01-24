import "./App.css";
import { MdEditOff, MdEdit } from "react-icons/md";
import { ToggleButton } from "@mui/material";
import Toggle from "./components/Toggle";
import { useState } from "react";

const defaultValues = ["toggable-mui"];

function App() {
  const [selected, setSelected] = useState(defaultValues);
  return (
    <div className="App">
      <h1>Headless UI Component Example</h1>
      <p>An example of a headless toggle-buttons-group component</p>
      <p>selected: {selected.join(", ") || "none"}</p>
      <Toggle.Group
        defaultValues={defaultValues}
        onChange={(values) => setSelected(values)}
      >
        <Toggle.Button
          component={ToggleButton}
          value="toggable-mui"
          color={"primary"}
        >
          Toggable
        </Toggle.Button>
        <Toggle.Button value="toggable-vanilla" disabled>
          Toggable Disabled
        </Toggle.Button>
        <Toggle.Button
          value="edit"
          onClick={function (...args) {
            console.log(args);
          }}
        >
          {({ selected }) =>
            selected ? (
              <>
                <MdEdit /> Editing on
              </>
            ) : (
              <>
                <MdEditOff /> Editing off
              </>
            )
          }
        </Toggle.Button>
        <button>Not toggable</button>
      </Toggle.Group>
    </div>
  );
}

export default App;
