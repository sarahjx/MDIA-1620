// LESSON-3 Code
let horseName = "blargle";
console.log(horseName);
let horseNameTwo = "glarble";
console.log(horseNameTwo);
let horseAge = 6900;
console.log(horseAge);
//let isHorseInside = true;
//console.log(isHorseInside);

// LESSON-4 Code
console.log(typeof horseName);
console.log(typeof horseAge);
const STABLE_MONTHLY_FEE = 1000; // uppercase is preferred for constants
console.log(STABLE_MONTHLY_FEE); 

console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE - 49);
console.log(44/87);
console.log("skibidi" + " toilet");
console.log("four" + 20); // example of type coercion 
console.log(2 + "2"); // also type coercion, becomes 22
console.log(2 - "2"); // does math...
console.log(`my horse babies names are ${horseName} and ${horseNameTwo } they are both ${horseAge } years old i love them`);
console.log(`if you want to purchase a spot in my stable, the fee is ${STABLE_MONTHLY_FEE} carrots. peeled and cut into squares.`)

// LAB 4 Work
let horseNickname = "blargie baby"
let discount = STABLE_MONTHLY_FEE * 3 *.10;

console.log(`my horse's name is ${horseName} and his nickname is ${horseNickname}`);
console.log(`you can save $${discount} if you stay for 3 months`)

// LAB 5a
let isHorseInside = true;
if(horseName === "blargle" && isHorseInside !== false){
    console.log(`${horseName} is inside because he hates going outside, but my second horse ${horseNameTwo} loves going outside.`);}
    else{console.log(`the horse that's outside is ${horseNameTwo}. Not ${horseName}`);}

// Lesson 6 Work
//let word = "Rainbow"; 
//console.log(word.charAt(4)); //indexes always start at 0!! 
//console.log(word.charAt(0)); //a 7 letter word only has 6 indexes because it starts at 0

let horseNames = [horseName, horseNameTwo, "plargle", "john"];
let horseAges = [horseAge, horseAge, 73241934843, 3];
let horseLocations = [true, true, true, true]; 
console.log(horseNames.length);
horseNames.push("sploochie"); //will "push" the string into the array to the end
horseAges.push("88");
horseLocations.push(true);

//console.log(`Welcome to Weenie Stables! There are ${horseNames.length} horses staying here. Their names are ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}, and ${horseNames[4]}`);

if(horseNames[0] === horseName){
    console.log(`hi ${horseNickname}!`);
}

if(horseNames.length < 3){
    console.log(`No one likes Weenie Stables!`)}
    else{console.log(`everyone and their horses love Weenie Stables!`)}

//LAB 6 Work
console.log(`Welcome to Weenie Stables! There are ${horseNames.length} horses staying here. Their names are ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}, and ${horseNames[4]}`);

if(horseLocations[0] && horseLocations[1] && horseLocations[2] && horseLocations[3] && horseLocations[4] === true){
    console.log(`all ${horseNames.length} horses are inside!`);}
    else{console.log(`THE HORSES ALL RAN AWAY OMG PANIC`);
    }
