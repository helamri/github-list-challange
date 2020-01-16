// Get the date before 30 day from now.
export const getThirtyDay = () => {

  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() - 30);

  let ThirtyDay = currentDate.toJSON(currentDate).split("T")[0];

  return ThirtyDay;
};

export const getTime = createdDate => {
  const now = Date.parse(new Date().toJSON(new Date()).split("T")[0]);

  const createAt = Date.parse(createdDate);

  const timeDiff = now - createAt;

  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    return "today";
  } else if (daysDiff === 1) {
    return "1 day ago";
  } else {
    return `${daysDiff} days ago`;
  }
};
