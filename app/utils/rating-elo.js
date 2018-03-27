const defaultK = [
  { ratingMin: 2400, ratingMax: 10000, k: 10 },
  { ratingMin: 2300, ratingMax: 2399, k: 20 },
  { ratingMin: -10000, ratingMax: 2299, k: 40 }
];

/**
* @param {number} rating1
* @param {number} rating2
* @param {number} score 1: выиграл первый, 0: ничья, -1: выиграл второй
* @returns {any} Вернет массив новых рейтинов
*/
export default function ratingElo(rating1, rating2, score) {
  let scoreFn = x => { return x > 0 ? 1 : (x < 0 ? 0 : 0.5 ); };
  let r1 = calcRating(rating1, rating2, scoreFn(score) );
  let r2 = calcRating(rating2, rating1, scoreFn(-score));
  return [r1, r2];
}

/**
* @param {number} rating1
* @param {number} rating2
* @param {number} scoreFact 1 очко за победу, 0,5 — за ничью и 0 — за поражение
* @returns {number}
*/
function calcRating(rating1, rating2, scoreFact)
{
  let ea = 1 / ( 1 + 10 * (rating2 - rating1)/400 );
  let elm = defaultK.filter(item => { return item.ratingMin <= rating1 && item.ratingMax > rating1; });
  let k = elm ? elm[0].k : 40;
  let newRating = rating1 + k * ( scoreFact - ea );
  return newRating;
}
