function print(x) {
	console.log(x);
}
// Write a function called billTotal that can be used to 
// calculate the total to be paid at a restaurant -- 
// including tip and tax -- given the subtotal 
// (i.e. cost of food and drinks). We can assume that the tip 
// will be 15% and tax will be 9.5%. Make sure that the tip 
// does not include the tax!
// return "Your total comes to " + total;
// Hint to get a decimal place of 2 you can use
// Math.round(numberWithDecimal * 100)/100
// i.e. Math.round(15.051102 * 100)/100 becomes 15.05,


function billTotal(subtotal) {
	numberWithDecimal = (subtotal*.15)+(subtotal*.095)+subtotal ;
	return "Your total comes to " + Math.round(numberWithDecimal*100)/100;
}


// billTotal(21.55); // "Your total comes to $26.83"

// Implement the function called animalNoise that accepts two 
// parameters: a type of animal and an emotion that indicates 
// that animal's current emotional state. Based on the 
// combination of animal and emotion, animalNoise should return 
// an appropriate noise (represented as a string). 
// The function should work with at least two different 
// animals and emotions.

// Some ideas include:

// Animals: cat, dog, horse, duck, chicken, cow, human
// Emotions: angry, happy, sad, surprised
// If you're feeling uninspired, feel free to use "smileys" to convey emotion.

function animalNoise(animal, emotion) {
	if (animal = "cat" && emotion = "hungry") {
		return "Meow, meow, meow!" ;
	}
	if (animal = "dog" && emotion = "lonely"){
		return "Hoooowwwwwwwlllll";
	}
	return "Bark! Bark! Not an available input. Bark!";
}


// The digital sum of a number is the sum of all its digits, 
// e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. 
// Use any of the methods of reptition that we have covered so 
// far (no while loops) to implement this function.

// HINTS: Try the following at a console:

// 1337 % 10;
// 133 % 10;
// 13 % 10;
// 1337 / 10;
// Math.floor(1337 / 10);
// Math.floor(133 / 10);
// What should digitalSum of a single-digit number 
// return, e.g. digitalSum(8)?


// <<<<<(((*-*)))>>>>> I did it in the "for loop" AND "while loop" !! 
 function digitalSum(num) {
	var sum=0;
    while(num > 0) {
       sum = sum + num % 10;
       num = Math.floor(num/10);
      }
    return ("Sum of digits  "+sum);    
         
   }
   
}

function digitalSum(num){
	var sum =1 
	for (i=0; i < num; i++){
		sum = sum +num % 10;
		num = Math.floor(num/10);
	}
	return ("Sum of digits " +sum);
}

