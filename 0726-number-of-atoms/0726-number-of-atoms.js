/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  formula = formula.match(/[A-Z][a-z]*|\d+|[()]/g);
  const stack = [];
  let curr = {};
  for (let i = 0; i < formula.length; i += 1) {
    if (formula[i] == '(') {
      stack.push(curr);
      curr = {};
    } else if (formula[i].match(/^\d+$/)) { // digits
      if (formula[i-1] == ')') {
        for (const k in curr) {
          curr[k] *= +formula[i];
        }
        let last = stack.pop();
        for (const k in last) {
          curr[k] = curr[k] + last[k] || last[k];
        }
      } else {
        // because previously we added 1 to formula[i-1]
        curr[formula[i-1]] += +formula[i] - 1;
      }
    } else if (formula[i] != ')') {
      curr[formula[i]] = curr[formula[i]] + 1 || 1;
    }
  }
  while (stack.length) {
    const atoms = stack.pop();
    for (const atom in atoms) {
      curr[atom] = curr[atom] + atoms[atom] || atoms[atom];
    }
  }
  let ans = '';
  Object.keys(curr).sort((a, b) => a.localeCompare(b)).map(k => {
    ans += `${k}${curr[k] > 1 ? curr[k] : ''}`;
  });
  return ans;
};