// var pets = [];
// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[6] = "snake";

// // alert(pets[4])

// names=[]
// names[3]='rehan'
// // alert(names[2])
// // Methods to remove values from an array
// // #####pop()####
// popped_value = pets.pop()
// alert(pets)
// alert(popped_value)

// //  pop methods removes last value from array
// // it returns the remved value and we can save it in a variable 

// // #######shift()#######

// removed_value_by_shift  = pets.shift()

// alert(pets)
// alert(removed_value_by_shift)

// //  pop methods removes last value from array
// // it returns the remved value and we can save it in a variable 


// pets.push("hana",'lion')
// alert(pets)

// pets.unshift("hen", 'goat')
// alert(pets)

// 

myfriends = ["Ali","Ahmed","Nasir","Kami","Rehan"]
spliced_element = myfriends.splice(2,1,"Rayan","Sabiha","Hassan")

// ali,ahmed,ryan,sab,hasan,kami, rehan

alert(myfriends)
alert(spliced_element)


var nofriends = myfriends.slice(2, 4);
alert(nofriends)
alert(myfriends)