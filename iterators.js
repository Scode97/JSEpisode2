/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
  // Your code here
  array.forEach(x => console.log(x));
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function (temperatures){
let temps = temperatures.map(temp => {
    return ((temp-32)*(5/9))
  });
  return temps;


}



/**************************************
* hottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
* - Accepts a threshold temperature
* - Returns an array of temperatures
*   that exceed the threshold
***************************************/
const hottestDays = function (temperatures, threshold) {
  // Your code here
let c= temperatures.filter(temperature => temperature > threshold);
return c;

}


/******************************************
* logHottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshold) {
  // Your code here

  let variable = hottestDays(temperatures, threshold);
  let c= toCelsius(variable);
  logger(c);
}

export { logger, toCelsius, hottestDays, logHottestDays }
