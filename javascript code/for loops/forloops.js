// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// cityToCheck = prompt("Enter City?")
// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not on the list");
// }


// for (i=0; i<10; i++){

//     document.write(i)

// }
// step1: i=0,1,2,3,4,5,6,7,8,9,10
// check kia k i chota hy 10 >>>TRUE,False
// body main>>> 0,1,2,3,4,5,6,7,8,9
// i++ >>>

//  for (i=0;i<cleanestCities.length;i++){
//     if (cityToCheck === cleanestCities[i]) {
//         document.write("It's one of the cleanest cities")
//     }

//  }

// var names = ["hassan", "shadab", "faarman", "shahab", "luqman", "fardeen"]
// inputName = prompt("Enter Name ?")
// for (i=0; i<names.length; i++){
//     document.write(names[i])
// }



// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i=0; i<num.length; i++){
//     document.write(num[i]*2)
//     if (num[i]%2!=0){
//         alert(num[i])
//     }
// }




// for (i=0; i<names.length; i++) {
//     if(names[i]==="faarman"){
//         alert("farman")
//     }
//     else {
//         alert("Not Farman")
//     }
// }




// num = 10;
// num++;
// newNum = num;
// alert(newNum);





// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
// for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j]);
// }
// }
// alert(fullNames)

// var cityToCheck = prompt("Enter your city"); 
// multan
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "lahore", "multann", "muree", "pindi"];
// for (var i = 0; i <= 4; i++) 
// {
//     if (cityToCheck === cleanestCities[i]) 
//     {
//         alert("It's one of the cleanest cities");
//     }
// }




// month = prompt("Enter a month");
// charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
// } else {
//     monthAbbrev = month
// }
// alert(monthAbbrev)




// month = prompt("Enter a Month")
// if (month.length > 3) {
//      alert(month.slice(0, 4))
// } else {
//      alert(month)
// }




// friendName = prompt("Enter Your Friend Name ?")
// charsInName = friendName.length;
// if (charsInName > 4) {
//     nameAbbrev = friendName.slice(-3);
// } else {
//     nameAbbrev = friendName
// }
// alert(nameAbbrev)





// names="my name is nasir hussain my my my"

// alert(names.indexOf("rehan"))
// alert(names.charAt(11))

// name2 = names.replace()
// var numberOfStars = Math.round(3.499999);
// alert(numberOfStars)

// for(i=0;i<10;i++){

// alert(Math.floor(Math.random()*6+1))
// }

// age  = parseInt(prompt("Enter your age"))
// alert(age)


// age2 = parseFloat(prompt("Enter your age"))
// alert(age2)


// #########################################
// ##############Functions##################
// ##########################################

// define
// function saygreet(){
//     console.log('Rehan')
// }
// add()

// for(a=1;a<=10;a++) {
//     console.log("NASIR")
// }
// // FUNCTION CALL



// function add(){
//     console.log(2+2)
// }
// add()



// function charCount() {
//     userName = prompt("Enter Name ?")
//     userNameLength = userName.length
//     alert(userName.length)
// }
// charCount()




// function age() {
//     myage = parseInt(prompt("Enter Age"))
//     if (myage % 2 == 0) {
//         console.log("Your Age is Even")
//     } else {
//         console.log("Your Age is Odd")
//     }
// }
// age()




// function age(){
//      myage = parseInt(prompt("Enter Age"))
//      if (myage % 2 == 0) {
//           alert("Even")
//      } else {
//           alert("Odd")
//      }
// }
// age()



// age = prompt("Enter your Age ?")
// if (age % 2 == 0) {
//     alert("Even")
// } else {
//     alert("Odd")
// }




// function greetuser(name){
//     console.log("Hello " + name)
// }
// greetuser("Rehan")
// greetuser("Ahsun")



// function addnums(num1,num2){
//     alert( num1 + num2 )
// }
// addnums(12,3)



// function twoNum(pehla, doosra){
//      document.write(pehla + doosra)
// }
// twoNum(1,99)
// twoNum(20,20)




// function square(num){
//     alert(num**2)
// }
// square()



// function nameupper(name){
//     alert(name.toUpperCase())
// }
// nameupper("Rehan")



// function returnVal(num1,num2){
//     res = num1*num2
//     return res
// }
// answer = returnVal(10,10)
// alert(answer/2)
// alert(answer)
// alert(res)







// function wapisVal(fname, lname){
//      fname = prompt("enter ur f.name")
//      lname = prompt("enter ur l.name")
//      fullname = fname + lname
//      return fullname
// }
// wapisVal()
// alert(fullname.toUpperCase())







// function locally(){
//     age = 100
//     alert(age)
// }
// locally()
// alert("local " + age)


// ###############################
// ##########SWITCH###############
// ###############################


// dayOfWk = prompt("Enter day")
// switch(dayOfWk) {
//      case "Sat" :
//      alert("Whoopee");
//      break;
//      case "Sun" :
//      alert("Gloppeee");
//      break;
//      case "Fri" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//     }


//// Comparison Operator


// fullName = prompt("Enter ur name ?")
// if (fullName == Rehan) {
//     alert("its ur name")
// }
// else {
//     alert("its not ur name")
// }



//  increment decrement

// num = 5;
// ++num; 
// num2 = num--; 
// alert (num++ + " " +  num2)
// alert(num2)
// alert(num)


/// While Do While Loops

// i = 7
// while (i > 2) {
//     alert(i)
//     i--;
// }


// i = 10;
// while (i > 4) {
//     console.log(i);
//     i--;
// }



// function test() {
//     console.log("Hi !");
// }


///// Given Task /////




// text = prompt("Enter you test here")
// char = prompt("Enter the character to find")
// count = 0

// for(i=0;i<text.length;i++){
//     if (text[i]==char){
//         ++count
//     }
// }
// alert(count)




// text = prompt("Enter your text")
// vowels = "aeiou"
// a = e = i = o = u = 0;

// for (k = 0; k < vowels.length; k++) {
//     for (j = 0; j < text.length; j++) {
//         if (vowels[k] == text[j]) {
//             if (vowels[k] == "a") {
//                 ++a
//             }
//             else if (vowels[k] == "e") {
//                 ++e
//             }
//             else if (vowels[k] == "i") {
//                 ++i
//             }
//             else if (vowels[k] == "o") {
//                 ++o
//             }
//             else if (vowels[k] == "u") {
//                 ++u
//             }
//         }
//     }

// }
// alert(a + "," + e + "," + i + "," + o + "," + u)
// alert(a)
// alert(e)
// alert(i)
// alert(o)
// alert(u)






// text = prompt("Enter your text")
// vowels = ["a", "e", "i", "o", "u"]
// a = e = i = o = u = 0;

// for (k = 0; k < vowels.length; k++) {
//     for (j = 0; j < text.length; j++) {
//         if (vowels[k] == text[j]) {
//             a++
//             e++
//             i++
//             o++
//             u++
//         }
//     }

// }
// alert(a + "," + e + "," + i + "," + o + "," + u)



//  function checking() {
//     myValue = document.getElementById("value")
//     alert(myValue.value)
//  }




//##################################################
//##################################################
//##################################################
//##################################################
//##################################################
//##################################################


//// Sir Task
// Task:
// Write a program that accepts a sentence and calculate the number of letters and digits.
// Suppose the following input is supplied to the program:
// hello world! 123
// Then, the output should be:
// LETTERS 10
// DIGITS 3




// lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
// capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// digits = "0-9";
// userInput = prompt("Write Anything You Want !")
// countingLA = 0;
// countingCA = 0;
// countingDG = 0;

// for ($ = 0; $ < userInput.length; $++) {
//     for (_ = 0; _ < lowerAlphabets.length; _++) {
//         if (userInput[$] == lowerAlphabets[_]) {
//             countingLA++
//         }
//     }
//     for (d = 0; d < digits.length; d++) {
//         if (userInput[$] == digits[d]) {
//             countingDG++
//         }
//     }
//     for (b = 0; b < capitalAlphabets.length; b++) {
//         if (userInput[$] == capitalAlphabets[b]) {
//             countingCA++
//         }
//     }
// }
// alert("The counting of capital letters: " + countingCA + "\n" + "The counting of small letters: "  + countingLA + "\n"+ "The counting of digits: " + countingDG)


// else if (userInput[$] == capitalAlpabets[k]) {
    //     countingCA++
    // }
    // else (userInput[$] == digits[l]) {
    //     countingDG++
    // }
    // }

// alert(countingCA)
// alert(countingCA + "," + countingLA + "," + countingDG)
// for (a = 0; a < userInput.length; a++) {
//     for (b = 0; b < capitalAlphabets.length; b++) {
//         if (userInput[a] == capitalAlphabets[b]) {
//             countingCA++
//         }
//     }
// }

// for (c = 0; c < userInput.length; c++) {
//     for (d = 0; d < digits.length; d++) {
//         if (userInput[c] == digits[d]) {
//             countingDG++
//         }
//     }
// }

//##################################################
//##################################################
//##################################################
//##################################################
//##################################################
//##################################################





// function checking () {
//     document.getElementById ("feet")
//     feet.className = "hidden"
// }

// function another () {
//     document.getElementById ("max")
//     max.className = "large"
// 
// }