import { useSelector } from "react-redux";

function useDarkMode() {
  const { mode } = useSelector((state) => state.macConfig);

  return mode === "dark";
}

export default useDarkMode;
