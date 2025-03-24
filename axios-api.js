const axios = require("axios");

const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users"


//============= RECUPERE TOUS LES UTILISATEURS ========================//

axios.get(PLACEHOLDER_URL_API)

  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.error(error)
  });


//============= RECUPERE UN SEUL UTILISATEUR ==================//
const userID = 1
axios.get(`${PLACEHOLDER_URL_API}/${userID}`)

 .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error.message)
  });


//============= AJOUTER UN NOUVEL UTILISATEUR ==================//

const newUser = {
  name: "BENIE SYLVESTRE",
  email: "sylvestrebenie7829@gmail.com",
  username: "B613-Codeur"
};
axios.post(PLACEHOLDER_URL_API, newUser)

.then(res => {
  console.log(res.data)
})
.catch(error => {
  console.log(error.message)
});


//============= MODIFIER UN UTILISATEUR ==================//
const updatedUser = {
  name: "Kouassi Christ",
  email: "kouassichrist@gmail.com",
  username: "Kouess"
};

axios.put(`${PLACEHOLDER_URL_API}/${userID}`, updatedUser)

.then(res => {
  console.log(res.data)
})

.catch(error => {
  console.log(error.message)
});

//============= SUPPRIMER UN UTILISATEUR ==================//

axios.delete(`${PLACEHOLDER_URL_API}/${userID}`)

.then(res => {
  console.log(res.data)
})

.catch(error => {
  console.log(error.message)
});












