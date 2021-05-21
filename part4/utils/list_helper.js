const dummy = (array) => {
  return 1;
};

const totalLikes = (array) => {
  return array.length === 0 
    ? 0
    : array.reduce((sum, e) => sum + e.likes, 0)
}

const favouriteBlog = (array) => {
  if(array.length === 0) {
    return {}
  }else {
    const firstBlog = array[0]
    return array.reduce((prev,cur) => cur.likes >= prev.likes ? cur : prev, firstBlog)
  }
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
};
