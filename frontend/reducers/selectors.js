export const getFilteredCommemnts = (commentsState, photoId) => {
  let result = [];

  const comments = Object.values(commentsState);
  comments.forEach(comment => {
    if (comment.photo_id === photoId) {
      result.push(comment);
    }
  });
  return result;
};

export const getFilteredTags = (tagsState, photoId) => {
  let result = [];

  const tags = Object.values(tagsState);
  tags.forEach(tag => {
    if (tag.photo_id === photoId) {
      result.push(tag);
    }
  });
  return result;
};