/** @module Support Functions */

import { COUNTRIES } from "../types/countries.js";


/**
 * Generates a random city using chance
 * @function
 * @returns {string} generated city
 * @example
 * generateRandomCity() // returns "Bristol'"
 */
export function generateRandomCity() {
    return chance.city();
}

/**
 * Generates a random post code
 * @function
 * @returns {string} generated post code
 * @example
 * generateRandomPostCode() // returns "A23C"
 */
export function generateRandomPostCode() {
    return chance.postcode();
}

/**
 * Generates a random street
 * @function
 * @returns {string} generated street
 * @example
 * generateRandomStreet() // returns "21st Abbington Street"
 */
export function generateRandomStreet() {
    return chance.street();
}

/**
 * Get a random integer
 * @function
 * @param {number} min - minimum number
 * @param {number} max - maximum number
 * @returns {number} generated integer
 * @example
 * getRandomInt(4,6) // returns 5
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Remove time from Date and return a string with the proper format
 * @function
 * @param {Date} date - date to be formatted
 * @returns {string} date without time string
 * @example
 * removeTimeFromDate("2022-10-16T232232.00Z") // returns 2022-10-16
 */
export function removeTimeFromDate(date) {
    return date.getFullYear() + "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + (date.getDay() + 1)).slice(-2)
}

/**
 * Retrieve a random country
 * @function
 * @return {{name: 'Afghanistan', code: 'AF'}} - country object
 * @example
 * // call the command
 * randomCountry() // returns a country object
 */
export function randomCountry() {
    return COUNTRIES[Math.floor(Math.random()*COUNTRIES.length)]
}