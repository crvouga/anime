/**
 *
 *
 *
 * Source: https://gist.github.com/davidrleonard/259fe449b1ec13bf7d87cde567ca0fde
 *
 *
 *
 */

/**
 * Implements all the behaviors of moment.fromNow(). Pass a
 * valid JavaScript Date object and the method will return the
 * time that has passed since that date in a human-readable
 * format. Passes the moment test suite for `fromNow()`.
 * See: https://momentjs.com/docs/#/displaying/fromnow/
 *
 * @example
 *
 *     const pastDate = new Date('2017-10-01T02:30');
 *     const message = fromNow(pastDate);
 *     //=> '2 days ago'
 *
 * @param  {Date} Native JavaScript Date object
 * @return {string}
 */
export function formatFromNow(date) {
  // @ts-ignore
  const diff = new Date() - date;

  const sec = Math.floor(diff / 1000);
  const years = Math.floor(sec / 31536000);
  const months = Math.floor(sec / 2592000);
  const days = Math.floor(sec / 86400);

  if (days > 548) {
    return years + " years ago";
  }
  if (days >= 320 && days <= 547) {
    return "a year ago";
  }
  if (days >= 45 && days <= 319) {
    return months + " months ago";
  }
  if (days >= 26 && days <= 45) {
    return "a month ago";
  }

  const hours = Math.floor(sec / 3600);

  if (hours >= 36 && days <= 25) {
    return days + " days ago";
  }
  if (hours >= 22 && hours <= 35) {
    return "a day ago";
  }

  const min = Math.floor(sec / 60);

  if (min >= 90 && hours <= 21) {
    return hours + " hours ago";
  }
  if (min >= 45 && min <= 89) {
    return "an hour ago";
  }
  if (sec >= 90 && min <= 44) {
    return min + " min ago";
  }
  if (sec >= 45 && sec <= 89) {
    return "a min ago";
  }
  if (sec >= 0 && sec <= 45) {
    return "a few sec ago";
  }

  return "a few sec ago";
}
