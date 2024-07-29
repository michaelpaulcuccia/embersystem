import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

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
