// @ts-check

const { SanityCMS } = require("./impl-sanity.js");
const { StaticCMS } = require("./impl-static.js");

const USE_STATIC_CMS = true;

/** @returns {import('./interface').CMS} */
const CMS = () => {
  if (USE_STATIC_CMS) {
    return StaticCMS();
  }
  return SanityCMS();
};

module.exports = {
  CMS,
};
