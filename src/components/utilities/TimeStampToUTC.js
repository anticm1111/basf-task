import React from "react";

const TimeStampToUTC = (timestamp) => {
  const commentDate = new Date(timestamp).toUTCString();

  const parts = commentDate.split(" ");
  const timePortion = parts[4].slice(0, 5);
  return timePortion;
};

export default TimeStampToUTC;
