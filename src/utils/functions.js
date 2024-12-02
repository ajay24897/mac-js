export function getMacOSTime() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Ensures AM/PM formatting
  });
  return formatter.format(now);
}

console.log(getMacOSTime());

export function getFormattedDate() {
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
}
