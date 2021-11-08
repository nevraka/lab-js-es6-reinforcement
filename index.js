// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

let usersArray = require('./data');

const getFirstNames = (arr) => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  console.log(userFirstNames);
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = (arr) => {
  const userFullNames = [];
  for (let user in arr) {
    userFullNames.push(`${arr[user]['firstName']} ${arr[user]['lastName']}`);
  }
  console.log(userFullNames);
};

getFullNames(usersArray);

// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = (arr) => {
  const usersCreditDetails = [];
  for (let user of arr) {
    const { firstName, lastName, balance } = user;
    usersCreditDetails.push({ firstName, lastName, balance });
  }
  console.log(usersCreditDetails);
};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = (users) => {
  const femaleUsers = [];
  const maleUsers = [];

  users.filter((user) => {
    if (user.gender === 'female') {
      femaleUsers.push(`${user.firstName} ${user.lastName}`);
    } else if (user.gender === 'male') {
      maleUsers.push(`${user.firstName} ${user.lastName}`);
    }
  });
  const result = { femaleUsers, maleUsers };
  console.log(result);
  return result;
};
genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = (data) => {
  const female = data.femaleUsers.length;
  const male = data.maleUsers.length;
  console.log('Female: ' + female);
  console.log('Male: ' + male);
};

genderCount(data);

// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = (users) => {
  const rich = users.filter((user) => {
    return Number(user.balance.replace('$', '').replace(',', '')) > 20000;
  });
  rich.forEach((user) => {
    console.log(
      `Dear ${user.firstName}, since your balance is ${user.balance} you are eligible to apply for this awesome credit card.`
    );
  });
};
promo20(usersArray);

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = (users) => {
  const result = users.map((user) => {
    return { ...user, isActive: true };
  });
  console.log(result);
  return result;
};
addActive(usersArray);

// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
