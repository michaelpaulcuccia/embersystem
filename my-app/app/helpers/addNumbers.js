import { helper } from '@ember/component/helper';

export function addNumbers([num1, num2]) {
  return (Number(num1) + Number(num2)).toFixed(2); // Ensures numbers are treated as floats and formatted to 2 decimal places
}

export default helper(addNumbers);
