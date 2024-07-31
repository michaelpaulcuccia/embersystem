import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
//https://api.emberjs.com/ember/release/functions/@ember%2Ftemplate/htmlSafe

export default helper(function starRating([stars]) {
  let fullStars = Math.floor(stars);
  let halfStar = stars % 1 !== 0;

  let fullStarImg = ' <img src="/images/star.svg" alt="Custom SVG Icon" />';
  let halfStarImg = '<img src="/images/half-star.svg" alt="Custom SVG Icon" />';

  let starHtml = '';

  for (let i = 0; i < fullStars; i++) {
    starHtml += fullStarImg;
  }

  if (halfStar) {
    starHtml += halfStarImg;
  }

  return htmlSafe(starHtml);
});

//stars % 1 calculates the remainder when stars is divided by 1.
//If stars is an integer (like 1, 2, 3, etc.), stars % 1 will be 0 because there is no remainder.
//If stars has a .5 increment (like 1.5, 2.5, etc.), stars % 1 will be 0.5 because that’s the remainder.
//stars % 1 !== 0 checks if the remainder is not equal to 0.
