const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const simpleDateParser = (d: string) => {
  const parts = d.split("-");
  return parts.length === 3 ? `${MONTHS[+parts[1] - 1]} ${+parts[2]}, ${+parts[0]}` : d;
};
