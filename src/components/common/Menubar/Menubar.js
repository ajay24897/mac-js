import React, { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { Icon, Text } from "../../atoms";
import { IoIosSwitch } from "react-icons/io";
import { IoBatteryFullOutline, IoWifi } from "react-icons/io5";
import { getFormattedDate, getMacOSTime } from "../../../utils/functions";
import { setShowMenubar } from "../../../redux/screenSlice";
import { useDispatch, useSelector } from "react-redux";

function Menubar(props) {
  const { className = "", children, fixedMenubar = false } = props;
  const {
    menubarState: { showMenubar },
  } = useSelector((state) => state.screen);
  const dispatch = useDispatch();
  const animatedClass =
    fixedMenubar && showMenubar ? "translate-y-0" : "-translate-y-6";

  console.log(animatedClass);

  useEffect(() => {
    const element = document.getElementById("mac-container");
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    } else {
      console.error("mac-container not found");
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once

  const handleMouseMove = (event) => {
    if (event.clientY <= 24 || fixedMenubar) {
      dispatch(setShowMenubar(true));
    } else {
      dispatch(setShowMenubar(false));
    }
    console.log(`Cursor Position: X=${event.clientX}, Y=${event.clientY}`);
  };

  return (
    <div
      className={`h-6 w-full flex flex-row items-center bg-slate-100/50 dark:bg-slate-950/50 px-2 ${className} ${animatedClass} transition-transform duration-500`}
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
    <Text className="font-medium text-sm">
      {getFormattedDate()} {getMacOSTime()}
    </Text>
  );
}

function ControlCentre() {
  return (
    <Icon className={"px-2"}>
      <IoIosSwitch />
    </Icon>
  );
}

function StatusMenu() {
  return (
    <div className="flex flex-row items-center">
      <Icon className={"px-2"}>
        <IoWifi />
      </Icon>
      <Icon className={"px-2"}>
        <IoBatteryFullOutline />
      </Icon>
    </div>
  );
}
export default Menubar;
