import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { Icon, Text } from "../../atoms";
import { IoIosSwitch } from "react-icons/io";
import { IoBatteryFullOutline, IoWifi } from "react-icons/io5";

function Menubar(props) {
  const { className, children } = props;

  const [a, b] = useState(false);

  useEffect(() => {
    setTimeout(() => b(true), 5000);
  }, []);

  useEffect(() => {
    let a = document.getElementById("mac-container");
    console.log(a);
  }, []);
  return (
    <div
      className={`h-6 w-100vw  flex flex-row items-center bg-slate-100/50 dark:bg-slate-950/50 px-2 ${className} ${
        a ? "-translate-y-6" : ""
      } transition-transform duration-500`}
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
  const getMacOSTime = () => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Ensures AM/PM formatting
    });
    return formatter.format(now);
  };

  console.log(getMacOSTime());

  const getFormattedDate = () => {
    const now = new Date();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const weekday = weekdays[now.getDay()]; // Get weekday name (e.g., "Sun")
    const day = now.getDate(); // Get day of the month (e.g., "1")
    const month = months[now.getMonth()]; // Get month name (e.g., "Dec")

    return `${weekday} ${day} ${month}`;
  };

  console.log(getFormattedDate());

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
