module.exports = function toReadable(number) {
  let numString = String(number);
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ' hundred';
  let numReadable = '';
  if (numString.charAt(0) === "0") {
    return "zero";
  } 
  else if (numString.length < 3 && number < 20) {
    return ones[number];
  } 
  
  else if  (number < 100) {
    numReadable = tens[numString.charAt(0)]+ " " + ones[numString.charAt(1)];
  } 
  
  else if (number < 1000 && numString.charAt(1) < 2 && numString.charAt(1) > 0) {
    numReadable = ones[numString.charAt(0)] + hundred + " "+ ones[numString.charAt(1) + numString.charAt(2)];
  } 
  
  else if (numString.charAt(1) == 0){
    numReadable = ones[numString.charAt(0)]+ hundred +  " "+ ones[numString.charAt(2)];
  
  } else{
    numReadable = ones[numString.charAt(0)]+ hundred + " " + tens[numString.charAt(1)] + " "+ ones[numString.charAt(2)];
  }
  return numReadable.trim();
}
