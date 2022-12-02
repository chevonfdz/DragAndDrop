import "./App.css";
import "reactjs-popup/dist/index.css";
import MediatorButton from "./Componets/MediatorButton";
import { useState } from "react";

function App() {
  const [apiState, setApiState] = useState({
    api: {
      resource: {
        inSequence: {},
        outSequence: "",
        faultSequence: "",
      },
    },
  });

  return (
    <div id="ContentArea">
      <MediatorButton
        onLogClick={() => {
          const nextApiInSequence = { ...apiState.api.resource.inSequence, log: "" };
          const nextResource = {
            ...apiState.api.resource,
            inSequence: nextApiInSequence,
          };
          const nextApi = { ...apiState.api, resource: nextResource };
          const nextApiState = { ...apiState, api: nextApi };
          setApiState(nextApiState);

        }}
      />

      {
        // getUiElement('log')
        () => {
          console.log('log');
          for (var key in apiState.api.resource.inSequence) {
            if (apiState.api.resource.inSequence.hasOwnProperty(key)) {
              console.log(key + " -> " + apiState.api.resource.inSequence[key]);
              switch (key) {
                case 'log':
                  return <MediatorButton/>;
                  break;
              }
              // getUiElement(key);

            }
          }
        }

        // () => {

        // }
      }

      <div className="JsonText">{JSON.stringify(apiState)}</div>
    </div>
  );
}

function getUiElement(type) {
  switch (type) {
    case 'log':
      return <MediatorButton/>;
      break;
  }

}

export default App;
