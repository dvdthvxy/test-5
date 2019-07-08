const Immutable = require('immutable');

// simply transform the list of animals with leg counts into an object with sum of leg counts
const transform = (fromShape) => {
  let totalLegs = 0  

  return fromShape.reduce((total, accumulator, index, arr) => {
    totalLegs += accumulator.get('legs')
    return accumulator.update(legs => {
      return legs.set('legs', totalLegs)
    })
  }, 0)
};

const fromShape = Immutable.fromJS({
  dog: {
    legs: 4,
  },
  cat: {
    legs: 4,
  },
  bird: {
    legs: 2,
  },
  snake: {
    legs: 0,
  },
});

const toShape = Immutable.fromJS({
  legs: 10,
});

module.exports = {
  transform,
  toShape,
  fromShape,
};