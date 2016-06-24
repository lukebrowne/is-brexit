/**
 * @module is-brexit
 * @description Provides function to get a result of Brexit referendum.
 * @version 1.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function isBrexit
 * @description Get a result of Brexit referendum.
 * @returns {Boolean} - Result of Brexit referendum.
 */

function isBrexit() {
    return true;
}

/**
 * @public
 * @description Expose function to get a result of Brexit referendum.
 * @returns {Boolean} - Result of Brexit referendum.
 */

module.exports = function () {
    return isBrexit();
};
