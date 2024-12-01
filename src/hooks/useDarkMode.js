import { useSelector } from "react-redux";

function useDarkMode() {
  const { mode } = useSelector((state) => state.mac);

  return mode === "dark";
}

export default useDarkMode;
