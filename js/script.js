const regButton = document.querySelector('.sign-up');
const regFrm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstname');
const sureName = document.querySelector('#surename');
const email = document.querySelector('#email');
const userName = document.querySelector('.user-name')
const formCheck = document.querySelector('#frmchk')
const users = new Array()


regButton.addEventListener('click', function(e) {
 let valdateInput = true
  if (validateText('#firstname')==false){
      valdateInput = false
  }
  
  if (validateText('#surename')==false){
    valdateInput = false
  }
  if (validateText('#email')==false){
    valdateInput = false
  }
  if(validateCheckbox()==false)
 {
   validateInput=false
 }
  if(valdateInput){
    var number = Math.random() // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
    var id = number.toString(36).substr(2, 9); // 'xtis06h6'
    id.length >= 9; // false
    let user = {
      userid: id,
      firstname: firstName.value,
      surename: sureName.value,
      email: email.value,
      gender: e.target.gender
    } 
     userName.innerHTML= `<h4>${firstName.value} welcome our city!</h4>`
     users.push(user) 
     removeRegForm()
     getUserList(users)
    
  }
    
}


);

regFrm.addEventListener('submit', e => {
  
  e.preventDefault() ;
  validateText('#firstname')
  validateText('#surename') 
  validateEmail(email)
}
)

const getUserList = (userObject) =>{
  let userInfo =  '<div><p> Registered User</p></div>' 
  const userlist = document.querySelector('.userList')
  // let useListContainer = document.createElement('div')
  // getUserList.addClass('list-user')
  userInfo += '<table class="table table-striped"> <tr> <th>User Id</th><th>Name</th> <th>email</th></tr>' 
    userObject.forEach(
      user => {
        userInfo +=  `<tr> <td>${user.userid}</td> <td>${user.firstname}</td> <td>${user.email}</td></tr>`    
      }
    
    )
    userInfo += '<table/>'
    userlist.innerHTML  = userInfo
}
/* function clear or input value  */
const removeRegForm =()=>{
  firstName.value = ''
  sureName.value=''
  email.value=''
  gender.value=''
}


const validateText = (id) => {
  let input = document.querySelector(id);

  if(input.value === '' || input.value.length < 2) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    input.focus();
    return false;
  }
  else {
    
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (emailInput) => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regEx.test(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    return true;
  }
  else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailInput.focus();
    return false;
  }
}

const validateCheckbox =()=>{
  if(!formCheck.checked)
  {
      alert('You must agree to the terms first.');
      return false;
  }
}