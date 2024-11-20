let users = [
  {
    id: 0,
    isActive: false,
    age: 24,
    eyeColor: "green",
    name: "Marsh Obrien",
    company: "CENTURIA",
  },
  {
    id: 1,
    isActive: false,
    age: 21,
    eyeColor: "green",
    name: "Rios Gibson",
    company: "MULTRON",
  },
  {
    id: 2,
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Morgan Buchanan",
    company: "CENTURIA",
  },
  {
    id: 3,
    isActive: true,
    age: 25,
    eyeColor: "brown",
    name: "Franklin Dyer",
    company: null,
  },
  {
    id: 4,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Keller Pitts",
    company: "CENTURIA",
  },
  {
    id: 5,
    isActive: false,
    age: 25,
    eyeColor: "brown",
    name: "Davenport Maddox",
    company: "MULTRON",
  },
  {
    id: 6,
    isActive: true,
    age: 31,
    eyeColor: "brown",
    name: "Judith Graves",
    company: null,
  },
  {
    id: 7,
    isActive: true,
    age: 26,
    eyeColor: "blue",
    name: "Hoffman Hess",
    company: "CENTURIA",
  },
  {
    id: 8,
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Sheena Goff",
    company: "MULTRON",
  },
  {
    id: 9,
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Rose Lawrence",
    company: "EVENTIX",
  },
  {
    id: 10,
    isActive: false,
    age: 35,
    eyeColor: "blue",
    name: "Alston Goodman",
    company: "CENTURIA",
  },
  {
    id: 11,
    isActive: true,
    age: 28,
    eyeColor: "brown",
    name: "Nannie Berry",
    company: null,
  },
  {
    id: 12,
    isActive: true,
    age: 27,
    eyeColor: "blue",
    name: "Lynette Jackson",
    company: "CENTURIA",
  },
  {
    id: 13,
    isActive: false,
    age: 23,
    eyeColor: "blue",
    name: "Samantha Garrett",
    company: "EVENTIX",
  },
  {
    id: 14,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Grimes Savage",
    company: "CENTURIA",
  },
  {
    id: 15,
    isActive: false,
    age: 31,
    eyeColor: "green",
    name: "Atkinson Kirby",
    company: null,
  },
  {
    id: 16,
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Jami Burgess",
    company: "CENTURIA",
  },
  {
    id: 17,
    isActive: true,
    age: 31,
    eyeColor: "blue",
    name: "Sallie Albert",
    company: "CENTURIA",
  },
  {
    id: 18,
    isActive: false,
    age: 26,
    eyeColor: "blue",
    name: "Ora Hobbs",
    company: "EVENTIX",
  },
  {
    id: 19,
    isActive: true,
    age: 30,
    eyeColor: "blue",
    name: "Pruitt Sellers",
    company: "CENTURIA",
  },
];

/* Compter les utilisateurs actifs */

function countActiveUsers(users) {
  return users.filter((user) => user.isActive).length;
}

console.log(`We currently have ${countActiveUsers(users)} active users.`);

/* Compter les utilisateurs actifs ayant des yeux bleus */

function getActiveUsers(users) {
  return users.filter((user) => user.isActive && user.eyeColor === "blue");
}

console.log(
  `We currently have ${
    getActiveUsers(users).length
  } active users with blue eyes.`
);

/*Quel est l'âge moyen des utilisateurs actifs ?*/

function getAverageAgeOfActiveUsers(users) {
  return (
    users
      .filter((user) => user.isActive)
      .reduce((acc, user) => acc + user.age, 0) /
    users.filter((user) => user.isActive).length
  );
}
console.log(
  `Out of our currently ${
    getActiveUsers(users).length
  } active users, the average age is ${getAverageAgeOfActiveUsers(users)}.`
);

/*Tous nos users dont la company est MULTRON doivent à présent avoir la company CENTURIA.*/

function getMultronUsers(users) {
  return users.filter((user) => user.company === "MULTRON");
}

function setMultronToCenturia(users) {
  let multronUsers = getMultronUsers(users);
  multronUsers.forEach((user) => (user.company = "CENTURIA"));
  return multronUsers.length;
}

console.log(
  `${setMultronToCenturia(
    users
  )} user companies have been changed from MULTRON to CENTURIA.`
);

/*Ceux qui ont les yeux marrons et qui ne travaille pas chez Centuria*/

function getBrownEyedUsers(users) {
  return users.filter(
    (user) => user.eyeColor === "brown" && user.company !== "CENTURIA"
  );
}

console.log(
  `${
    getBrownEyedUsers(users).length
  } users with brown eyes do not work at CENTURIA`
);

/*Pour chacune des couleurs d'yeux, compter le nombre d'utilisateurs actifs et inactifs*/

function countUsersByEyeColor(users) {
  return users.reduce(
    (acc, user) => ({
      ...acc,
      [user.eyeColor]: {
        active: acc[user.eyeColor].active + (user.isActive ? 1 : 0),
        inactive: acc[user.eyeColor].inactive + (user.isActive ? 0 : 1),
      },
    }),
    {
      blue: { active: 0, inactive: 0 },
      green: { active: 0, inactive: 0 },
      brown: { active: 0, inactive: 0 },
    }
  );
}

console.log(
  `Out of our brown eyed users, ${
    countUsersByEyeColor(users).brown.active
  } are active and ${countUsersByEyeColor(users).brown.inactive} are inactive.`
);

console.log(
  `Out of our green eyed users, ${
    countUsersByEyeColor(users).green.active
  } are active and ${countUsersByEyeColor(users).green.inactive} are inactive.`
);

console.log(
  `Out of our blue eyed users, ${
    countUsersByEyeColor(users).blue.active
  } are active and ${countUsersByEyeColor(users).blue.inactive} are inactive.`
);
