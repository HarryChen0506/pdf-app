/* eslint-disable import/prefer-default-export */

const randomString = (num = 500) => {
  const count = Math.floor(Math.random() * num);
  return new Array(count).fill('好').join('');
};

export {
  randomString,
};
