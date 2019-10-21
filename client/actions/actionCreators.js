// Actions going on in our app

// increment Likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
};

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
};

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}