import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import MacBootupScreen from "./screen/MacBootupScreen/MacBootupScreen";
import MacHomeScreen from "./screen/MacHomeScreen/MacHomeScreen";
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
    return <MacBootupScreen />;
  }

  return (
    <Provider store={store}>
      <MacHomeScreen />
    </Provider>
  );
}

export default App;
