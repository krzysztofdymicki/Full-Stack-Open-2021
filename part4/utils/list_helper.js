const dummy = (array) => {
  return 1;
};

const totalLikes = (array) => {
  return array.length === 0 
    ? 0
    : array.reduce((sum, e) => sum + e.likes, 0)
}

module.exports = {
  dummy,
  totalLikes
};
