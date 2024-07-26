import { helper } from '@ember/component/helper';

export function starHandler([stars]) {
  const obj = {
    stars: [],
    hasDecimal: false,
  };

  if (stars % 1 === 0.5) {
    const subtractedNumber = stars - 0.5;
    let arr = [];
    let count = subtractedNumber;
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    obj.hasDecimal = true;
    obj.stars = arr;
    console.log(obj);
  } else {
    let arr = [];
    let count = stars;
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    obj.stars = arr;
  }

  const img = document.createElement('img');
  img.src = '/images/star.svg';
  img.alt = 'Custom SVG Icon';

  return img;
  //return obj;
}

export default helper(starHandler);
