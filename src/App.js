import { useEffect, useState } from "react";

import "./App.css";
import MacBootupScreen from "./components/MacBootupScreen";

function App() {
  const [showBootupSceen, setShowBootupScreen] = useState(true);

  useEffect(() => {
    const bootupScreenTimeout = setTimeout(() => {
      setShowBootupScreen(false);
    }, [3500]);
    return () => clearTimeout(bootupScreenTimeout);
  }, []);

  return (
    <div className="flex-1 h-[100vh]">
      {showBootupSceen && <MacBootupScreen />}
    </div>
  );
}

export default App;
