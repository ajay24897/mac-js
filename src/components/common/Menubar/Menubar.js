import React from "react";
import { FaApple } from "react-icons/fa";
import { Icon, Text } from "../../atoms";
import { IoIosSwitch } from "react-icons/io";
import { IoBatteryFullOutline, IoWifi } from "react-icons/io5";
import { getFormattedDate, getMacOSTime } from "../../../utils/functions";
import { useSelector } from "react-redux";
import { DESIGN } from "../../../utils/colors";

function Menubar(props) {
  const { className = "", children, fixedMenubar = false } = props;
  const {
    menubarState: { showMenubar },
  } = useSelector((state) => state.screen);
  const animatedClass = fixedMenubar
    ? "translate-y-0 h6"
    : showMenubar
    ? "translate-y-0"
    : "-translate-y-6 !h-0";

  return (
    <div
      className={`w-full flex flex-row items-center bg-slate-100/50 dark:bg-slate-900 px-2 ${className} ${animatedClass} transition-transform duration-500`}
    >
      <div className="flex flex-row justify-start">
        <Icon>
          <FaApple />
        </Icon>

        {children}
      </div>
      <div className="flex flex-row flex-1 justify-end items-center">
        <StatusMenu />
        <ControlCentre />
        <NotificationCenter />
      </div>
    </div>
  );
}

function NotificationCenter() {
  return (
    <Text className={"font-medium text-sm"}>
      {getFormattedDate()} {getMacOSTime()}
    </Text>
  );
}

function ControlCentre() {
  return (
    <Icon className={`px-2 ${DESIGN.MENU_ICON_HOVER}`}>
      <IoIosSwitch />
    </Icon>
  );
}

function StatusMenu() {
  return (
    <div className="flex flex-row items-center">
      <Icon className={`px-2 ${DESIGN.MENU_ICON_HOVER}`}>
        <IoWifi />
      </Icon>
      <Icon className={`px-2 ${DESIGN.MENU_ICON_HOVER}`}>
        <IoBatteryFullOutline />
      </Icon>
    </div>
  );
}
export default Menubar;
