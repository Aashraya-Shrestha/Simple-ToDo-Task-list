import { useState } from "react";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";

function App() {
  const [AlertVisible, showAlert] = useState(false);
  return (
    <div>
      {AlertVisible && <Alert onClose={() => showAlert(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => showAlert(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
