import { useEffect, useState } from "react";

import "./App.css";
import MacBootupScreen from "./components/MacBootupScreen";
import HelloAnimation from "./screen/HelloAnimation/HelloAnimation";

function App() {
  const [showBootupSceen, setShowBootupScreen] = useState(false);

  useEffect(() => {
    const bootupScreenTimeout = setTimeout(() => {
      setShowBootupScreen(false);
    }, [3500]);
    return () => clearTimeout(bootupScreenTimeout);
  }, []);

  return (
    <div className="flex-1 h-[100vh]">
      {/* {showBootupSceen && <MacBootupScreen />} */}
      {!showBootupSceen && <HelloAnimation />}
    </div>
  );
}

export default App;
