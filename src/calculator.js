const calculator = {
  /**
   * This function adds two given values.
   * @param num1
   * @param num2
   * @returns {number} adds num1 and num2
   * @example
   * add(5, 5);
   * returns 10
   * @example
   * add(-5, 5);
   * returns 0
   */

  add: (num1: number, num2: number) => num1 + num2,
  /**
   * This function subtracts two given values.
   * @param num1
   * @param num2
   * @returns {number} subtracts num1 and num2
   * @example
   * sub(5, 5);
   * returns 0
   * @example
   * sub(-5, 5);
   * returns -10
   */
   sub: (num1: number, num2: number) => num1 - num2
};
/**
 * function calculator is sent for unit test
 */
module.exports = calculator;
