export const GroupCommentsByDate = (comments) => {
  const groupedComments = {};

  comments.forEach((comment) => {
    const timestamp = comment.timestamp;
    const date = new Date(timestamp);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;

    if (!groupedComments[formattedDate]) {
      groupedComments[formattedDate] = [];
    }
    groupedComments[formattedDate].push(comment);
  });
  return groupedComments;
};
