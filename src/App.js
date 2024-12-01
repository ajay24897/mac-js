import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import BootupScreen from "./screen/BootupScreen/BootupScreen";
import { store } from "./redux/store";
import MacJS from "./screen";

function App() {
  const [hasBootupFinished, setHasBootedFinesed] = useState(false);

  useEffect(() => {
    const bootupTime = setTimeout(() => {
      setHasBootedFinesed(true);
    }, [3500]);

    return () => clearInterval(bootupTime);
  }, []);

  if (!hasBootupFinished) {
    return <BootupScreen />;
  }

  return (
    <Provider store={store}>
      <MacJS />
    </Provider>
  );
}

export default App;
