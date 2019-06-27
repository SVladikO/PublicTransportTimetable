'use strict';

function reduceCoordinates(nodes, target, coordinates) {
  const imageIndex = nodes.indexOf(target);
  let indexOf = coordinates.indexOf(imageIndex);

  if (indexOf >= 0) {
    coordinates.splice(indexOf, 1);
  } else if (imageIndex >= 0) {
    coordinates.push(imageIndex);
  }
}

module.exports = reduceCoordinates;
