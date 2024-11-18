const userFullname = require("./userFullname");
const hobbies = require("./hobbies");

const user = userFullname("Federico", "Bellezza");
const userHobbies = hobbies("Soccer", "Basket", "Swimming");
const firstName = user.firstName;
const lastName = user.lastName;

console.log(firstName, lastName);

const result = () => {
  return {
    firstName,
    lastName,
    userHobbies,
  };
};

console.log(result());
