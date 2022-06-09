// DOM Elements 
const form = document.getElementById('user-form');
const userList = document.querySelector('.user-list');


const usersArray = [] 

function collectUsers(event){

    // 1. Prevent the default behavior of the html form 
    event.preventDefault();

    // 2. Get the Users Details 
    const userDetails = {
        userName: document.getElementById('username').value,
        userEmail: document.getElementById('email').value,
        userAge: document.getElementById('age').value
    }
    // 3. Put the Users Details in a external Array 
    usersArray.push(userDetails)

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';

    // 4. Render the Users List
    // userList.innerHTML = usersArray;
    let markup = usersArray.map(function(user){
        return `<li>Name is ${user.userName} and Email is ${user.userEmail} and Age is ${user.userAge}</li>`
    }).join('@');


    userList.innerHTML = '';
    userList.insertAdjacentHTML('afterbegin', markup);

}



form.addEventListener('submit', collectUsers)