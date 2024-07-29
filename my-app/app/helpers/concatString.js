import { helper } from '@ember/component/helper';

export function concatString([string1, string2]) {
  return string1 + string2;
}

export default helper(concatString);
