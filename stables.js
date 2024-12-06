//
//
//          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
//          X         X         X         X         X  |\    /X         X         X     
//          X         X         X         X         X   ___| \X,/_/     X         X     
//          X         X         X         X         X---__/ \/X   \     X         X     
//          X         X         X         X         X_--/     XD)  \    X         X     
//          X         X         X         X         X -/    (_X     \   X         X     
//          X         X         X         X        /X /       X_ /  -\  X         X     
//          X         X      __-X-----____X--___--/ X         X \_ O o) X         X     
//          X         X     /   X         X         X         X   \__/  X         X     
//          X         X    /    X         X         X        /X         X         X     
//          X         X   ||    X     )   X         X     \_/\X         X         X     
//          X         X   ||    X    /    X         X      /  X         X         X     
//          X         X   | |   X  /--____X_      __X\    /\  X         X         X     
//          X         X   | /   X_-  - _/ X ------  X |  |   \X\        X         X     
//          X         X    |   -X -   /   X         X  | |    X\ )      X         X     
//          X         X    |  | X -  |    X         X  | )    X| |      X         X     
//          X         X     | | X  | |    X         X  | |    X |       X         X     
//          X         X     | | X  < |    X         X  | |   |X/        X         X     
//          X         X     < | X  /__\   X         X  <  \   X         X         X     
//          X         X     /__\X         X         X  /___\  X         X         X     
//          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
//
//

//------------------------- Seting up shop -------------------------//

let horses = [];
let visitorMessage = "Welcome to Yorkum's Criminal Stables! YEEEE HAW! F THEM LAWS!!";
let lateFeePerDay = 3000000;
let availableJailStalls = 10;

console.log(visitorMessage);

//------------------------- First day -------------------------//

function nastyBoysCreator (name, nickname, favoriteTreat, age, monthlyRent, isInside, talent, felonyCommitted){
    this.name = name,
    this.nickname = nickname,
    this.favoriteTreat = favoriteTreat,
    this.age = age,
    this.monthlyRent = monthlyRent,
    this.isInside = isInside,
    this.talent = talent,
    this.felonyCommitted = felonyCommitted,

    this.introduction = function () {
        return `Woah who's that! Oh I see, it's ${name} or as we call him, ${nickname}. ${name} loves eating ${favoriteTreat} and his secret talent is ${talent}. Fun fact, ${name} has committed ${felonyCommitted}.`;
    };

    this.toggleLocation = function() {
        if (this.isInside === true) {
            this.isInside = false;
            console.log(`${this.name} needs some fresh air.`);
        } else {
            this.isInside = true;
            console.log(`${this.name} has come back for a nap`);
         }
     };
};

const blargle = new nastyBoysCreator ("blargle", "blargie baby", "the blood of his enemies", 74, 800, true, "juggling", "arson");
const glarble = new nastyBoysCreator ("glarble", "lil glarb", "sponges", 140, 801, false, "freestyle rap", "public indecency");
const sploochie = new nastyBoysCreator ("sploochie", "johnathan", "forks", 900, 799, true, "d1 accounting", "tax fraud");

blargle.introduction();

function introduceHorses(nastyBoy) {
    return `Oh and if you take a look over yonder, it's ${nastyBoy.name}, also known as ${nastyBoy.nickname}. ${nastyBoy.name} loves to ${nastyBoy.talent} while munching on some ${nastyBoy.favoriteTreat}. Not so fun fact, ${nastyBoy.name} has committed ${nastyBoy.felonyCommitted}... stay away.`
};

console.log(introduceHorses(glarble));

horses.push(blargle, glarble, sploochie);

const newNastyBoy = {
    name: "snozzborg",
    nickname: "borg",
    favoriteTreat: "gum wrappers",
    age: 10,
    monthlyRent: 2000,
    isInside: false,
    talent: "doing a little jig",
    felonyCommitted: "armed robbery",
    toggleLocation: function() {
        if (this.isInside === true) {
            this.isInside = false;
            console.log(`${this.name} needs some fresh air.`);
        } else {
            this.isInside = true;
            console.log(`${this.name} has come back for a nap`);
         }
     }
};

horses.push(newNastyBoy);

blargle.isHungry = true;
glarble.isHungry = false;
sploochie.isHungry = true;
newNastyBoy.isHungry = false;

horses.forEach(function(nastyBoy) {
    if (nastyBoy.isHungry) {
        console.log(`${nastyBoy.name} is starving! Feed them before they commit another crime!`);
    } else {
        console.log(`${nastyBoy.name} is not hungry... Don't ask what they ate beforehand.`);
    }
});

//------------------------- Stable roster -------------------------//

//   name: "blargle",
//   nickname: "blargie baby",
//   favoriteTreat: "the blood of his enemies",
//   age: 74,
//   monthlyRent: 800,
//   isInside: true,
//   talent: "juggling",
//   felonyCommitted: "arson",
//   isHungry: true,
//   introduction: function () {
//     return `Woah who's that! Oh I see, it's ${this.name} or as we call him, ${this.nickname}. ${this.name} loves eating ${this.favoriteTreat} and his secret talent is ${this.talent}. Fun fact, ${this.name} has committed ${this.felonyCommitted}.`;
//   toggleLocation: function() {
//     if (this.isInside === true) {
//         this.isInside = false;
//         console.log(`${this.name} needs some fresh air.`);
//     } else {
//         this.isInside = true;
//         console.log(`${this.name} has come back for a nap`);
//      }
//  }
//
//   name: "glarble",
//   nickname: "lil glarb",
//   favoriteTreat: "sponges",
//   age: 140,
//   monthlyRent: 801,
//   isInside: false,
//   talent: "freestyle rap",
//   felonyCommitted: "public indecency",
//   isHungry: false,
//   introduction: function () {
//     return `Woah who's that! Oh I see, it's ${this.name} or as we call him, ${this.nickname}. ${this.name} loves eating ${this.favoriteTreat} and his secret talent is ${this.talent}. Fun fact, ${this.name} has committed ${this.felonyCommitted}.`;
//   toggleLocation: function() {
//     if (this.isInside === true) {
//         this.isInside = false;
//         console.log(`${this.name} needs some fresh air.`);
//     } else {
//         this.isInside = true;
//         console.log(`${this.name} has come back for a nap`);
//      }
//  }
//
//   name: "sploochie",
//   nickname: "johnathan",
//   favoriteTreat: "forks",
//   age: 900,
//   monthlyRent: 799,
//   isInside: true,
//   talent: "accounting",
//   felonyCommitted: "tax fraud",
//   isHungry: true,
//   introduction: function () {
//     return `Woah who's that! Oh I see, it's ${this.name} or as we call him, ${this.nickname}. ${this.name} loves eating ${this.favoriteTreat} and his secret talent is ${this.talent}. Fun fact, ${this.name} has committed ${this.felonyCommitted}.`;
//   toggleLocation: function() {
//     if (this.isInside === true) {
//         this.isInside = false;
//         console.log(`${this.name} needs some fresh air.`);
//     } else {
//         this.isInside = true;
//         console.log(`${this.name} has come back for a nap`);
//      }
//  }
//
//   name: "snozzborg",
//   nickname: "borg",
//   favoriteTreat: "cucumber",
//   age: 10,
//   monthlyRent: 2000,
//   isInside: false,
//   talent: "doing a little jig",
//   felonyCommitted: "armed robbery",
//   isHungry: false,
//   toggleLocation: function() {
//     if (this.isInside === true) {
//         this.isInside = false;
//         console.log(`${this.name} needs some fresh air.`);
//     } else {
//         this.isInside = true;
//         console.log(`${this.name} has come back for a nap`);
//      }
//  }

//---------------------- Growing business ----------------------//

let updatedJailStalls = availableJailStalls - horses.length;

if (updatedJailStalls < 2) {
    console.log(`We need to build more stalls!!`);
} else {
    console.log(`We have ${updatedJailStalls} jail stalls available!`);
};

function lateFeeCalculation(nastyBoy, lateDays) {
    const totalLateFee = lateDays * lateFeePerDay;
    const totalOwed = nastyBoy.monthlyRent + totalLateFee;
    console.log(`${nastyBoy.name}! You are ${lateDays} days late on your rent! You now owe $${totalOwed}.`);
};

lateFeeCalculation(glarble, 5);

function findHorseThatLikesTreat(treat) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].favoriteTreat === treat) {
            console.log(`${horses[i].name} absolutely loves to munch on ${treat}! YIIPPEEE`);
            break; 
        } else {
            console.log(`uh oh... ${horses[i].name} actually hates eating ${treat}. Moving on...`);
        }
    }
};

findHorseThatLikesTreat("gum wrappers");
findHorseThatLikesTreat("the blood of his enemies");

function getNastyBoyNickname(nastyBoy) {
    return `${nastyBoy.name}'s nickname is ${nastyBoy.nickname}`;
};

console.log(`${getNastyBoyNickname(sploochie)}`);

//------------------------- Day to day operations -------------------------//

function talentShow(stars) {
    console.log("Welcome to the Yorkum's Jail Stables' Talent Show!");
    for (let i = 0; i < stars.length; i++) {
        const nastyBoy = stars[i];
        console.log("Now presenting..." + nastyBoy.name + "! He will be performing: " + nastyBoy.talent);
    }
};

talentShow(horses);

function timeOfDay(nastyBoy, isGettingDark) {
    if (nastyBoy.isInside && !isGettingDark) {
        nastyBoy.isInside = false;
        console.log(`${nastyBoy.name} has been dragged out of his cell. He needs vitamin D.`);
    } else if (!nastyBoy.isInside && isGettingDark) {
        nastyBoy.isInside = true;
        console.log(`${nastyBoy.name}! the sun is setting!!! get back inside!`);
    }
}; 

console.log("RISE AND SHINE NASTIES");
horses.forEach(function(nastyBoy) {
    timeOfDay(nastyBoy, false); 
});

blargle.toggleLocation();
newNastyBoy.toggleLocation();

function feedingHour() {
        console.log("IT'S MUNCH O' CLOCK NASTY BOYS");
        horses.forEach(function(nastyBoy) {
            if (nastyBoy.isInside === false) {
                nastyBoy.isInside = true;
                console.log(`${nastyBoy.name} is still outside! ring the dinner bell!`);
            } else {
                console.log(`${nastyBoy.name} is already inside, ready for their treat.`);
            }
            console.log(`${nastyBoy.name} gets their favorite treat: ${nastyBoy.favoriteTreat}!`);
        });
    };

feedingHour(horses);

horses.forEach(function(nastyBoy) {
    nastyBoy.toggleLocation();
});

console.log("NIGHT NIGHT NASTIES");
horses.forEach(function(nastyBoy) {
    timeOfDay(nastyBoy, true); 
});
