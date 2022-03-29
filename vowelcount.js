function vowelCounter(sentence){
//go from left to right - For loop
  var counter = 0;
  for (var i = 0; i < sentence.length; i++){
    sentence = sentence.toLowerCase();
    if (sentence.charAt(i)=="a" || sentence.charAt(i)=="e" || sentence.charAt(i)=="i" || sentence.charAt(i)=="o" || sentence.charAt(i)=="u")
      counter++;
  }
  return counter;
  }
console.log(vowelCounter("HRD Academy students"));
