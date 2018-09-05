const Immutable = require('immutable');

// transform into object where the k is the letter of the alphabet, and the value is the number of time it occurs. 
const transform = (fromShape) => {
  return fromShape;
};

const fromShape = Immutable.fromJS([
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [3, 7],
  [7, 8],
]);

const toShape = Immutable.fromJS({
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: [
          ],
        },
        {
          id: 5,
          children: [
          ],
        },
        {
          id: 6,
          children: [
          ],
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 7,
          children: [
            {
              id: 8,
              children: [
              ],
            },
          ],
        },
      ],
    },
  ],
});

module.exports = {
  transform,
  toShape,
  fromShape,
};