import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import BootupScreen from "./screen/BootupScreen/BootupScreen";
import Desktop from "./screen/Desktop/Desktop";
import { store } from "./redux/store";

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
      <Desktop />
    </Provider>
  );
}

export default App;
