function power(base, exp) {
  function recurse(curr) {
    if (exp === 1) return curr;
    exp--;
    return recurse(curr * base);
  }

  return recurse(base);
}

function linh(base, num) {
  if (num === 0) return 1;
  if (num === 1) return base;
  return base * linh(base, num - 1);
}

module.exports = {
  power,
  linh,
};
