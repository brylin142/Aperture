export const getFilteredCommemnts = (commentsState, photo_id) => {
  let result = [];

  const comments = Object.values(commentsState);
  comments.forEach(comment => {
    if (comment.photo_id === photo_id) {
      result.push(comment);
    }
  });
  return result;
};