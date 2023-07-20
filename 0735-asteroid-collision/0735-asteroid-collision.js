/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];

    if (curr > 0) {
      stack.push(curr);
    } else {
      while(stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(curr)) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1] === Math.abs(curr)) {
        stack.pop();
      } else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(curr);
      }
    }
  }

  return stack;
};