import React from "react";
import Menubar from "../../../components/common/Menubar/Menubar";
import { Text } from "../../../components/atoms";

function Home() {
  let homeMenu = ["File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <div className="min-w-[100vw]">
      <Menubar fixedMenubar={true}>
        <Text className="px-2 font-bold text-sm">Finder</Text>
        {homeMenu.map((section) => {
          return <Text className="px-3 text-sm font-light">{section}</Text>;
        })}
      </Menubar>
    </div>
  );
}

export default Home;
