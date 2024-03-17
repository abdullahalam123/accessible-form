/**
 * @description Checks if the input string is a valid JSON.
 *
 * @param {string} str - The input string to be checked
 * @return {boolean} Returns true if the input string is a valid JSON, otherwise false
 */

export function isValidJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
