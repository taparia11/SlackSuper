export const formatDate = (d) => {
  const months = [
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
  return (
    months[d.getMonth()] +
    " " +
    d.getDate().toString() +
    ", " +
    d.getFullYear().toString()
  );
};
