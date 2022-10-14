// Declare firstName, lastName, country, city, age, isMarried, year variable and assign
// value to it and use the typeof operator to check different data types.

// let firstName = "atul";
// let lastName = "Sing";
// let country = "India";
// let city = "City";
// let age = 28;
// let isMarried = false;
// let year = 2022;

// console.log(`
// Type of firstName is ${typeof firstName},
// Type of lastName is ${typeof lastName},
// Type of country is ${typeof country},
// Type of city is ${typeof city},
// Type of age is ${typeof age},
// Type of isMarried ${typeof isMarried},
// Type of year is ${typeof year}
// `)

/*
2. Boolean value is either true or false.
a. Write three JavaScript statements which provide truthy value.
b. Write three JavaScript statements which provide falsy value.*/


/*
3. Figure out the result of the following expressions first without using console.log().
	After you decide the result confirm it by using console.log()
a. 4 > 3 && 10 < 12  : True
b. 4 > 3 && 10 > 12 : False
c. 4 > 3 || 10 < 12 :True
d. 4 > 3 || 10 > 12 :Ture
e. !(4 > 3) : False
f. !(4 < 3) : True
g. !(false) : True
h. !(4 > 3 && 10 < 12) :False
i. !(4 > 3 && 10 > 12)  : True
j. !(4 === '4') : True
*/

// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
number is even or not using JavaScript?*/


// checkEvenNumber = function(data){
//     if(data % 2 === 0){console.log("the number is even number: " + data)}
//     else(console.log("The number is odd number: "+data))

// }
// checkEvenNumber(41)

/*
5. Write a code which can give grades to students according to theirs scores:
a.90-100, A
b.70-89, B
c.60-69, C
d.50-59, D
e.0-49, F
*/

// const scores = 70;
// if(90 <= scores && scores<=100){console.log("the grade is A")}
// else if(70 <= scores && scores <=89){console.log("the grade is B")}
// else if(60 <= scores && scores <=69){console.log("the grade is C")}
// else if(50 <= scores && scores <=59){console.log("the grade is D")}
// else if(0 <= scores && scores <=49){console.log("the grade is F")}

// 6. Write a program which tells the number of days in a month.

/*
7. Create a human readable time format using the Date time object
a. YYYY-MM-DD HH:mm
b. DD-MM-YYYY HH:mm
c. DD/MM/YYYY HH:mm
*/
// const todayDate = new Date();
// console.log(todayDate.getFullYear(),"-",todayDate.getMonth(),"-",todayDate.getDate() , todayDate.getHours(),":",todayDate.getSeconds());
// console.log(todayDate.getDate(),"-",todayDate.getMonth(),"-",todayDate.getFullYear(), todayDate.getHours(),":",todayDate.getSeconds());
// console.log(todayDate.getFullYear(),"/",todayDate.getMonth(),"/",todayDate.getDate() , todayDate.getHours(),":",todayDate.getSeconds());


/*
8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts
dollars to rupees.
*/
// dollarArray = [1,2,4,5,3,55,7,5,9,8,10];

// console.log(dollarArray.map(function(a){return a*82.23;},dollarArray))

/*
9. Write a program to print unit digit of a given number.
Input : 6693
Output : 3
*/

// const num = 6693;
// console.log(num%10);

/*
10. Write a program to find the area of the circle. Take radius of circle from user as input
and print the result in below given format.
Expected output format – “Area of circle is A having the radius R”. Replace A with area
& R with radius
*/

cirArea = function(radius){
    console.log(`
        "Area of circle is ${Math.PI * radius**2} having the radius ${radius}"
    `)
}
cirArea(7)