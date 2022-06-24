export const getCalendarDate = (dts) => {
  let d = new Date(dts);
  if (!dts) d = new Date();
  return d.toISOString().split("T")[0];
};
