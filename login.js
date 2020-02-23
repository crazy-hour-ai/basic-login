const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gmail.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

//Dummy data
const userLogin = {
  email: 'nick@shield.com',
  password: 'password'
}

let collection = [];

function login(userLogin) {

  //Filter out the correct user
  collection = users.filter((check) => {
    if (check.email === userLogin.email) {
      return true;
    }
  })

  //Checking email if can't find correct user in the database
  if (collection.length >= 1) {
    if (userLogin.password === collection[0].password) {
      return { name: collection[0].firstName, status: 'correct' };
    }
    else if (userLogin.password !== collection[0].password || userLogin.password === '') {
      return { name: collection[0].firstName, status: 'wrong' };
    }
  }
  else {
    return { name: '', status: 'Can\'t find your email' };
  }
}

module.exports = login;