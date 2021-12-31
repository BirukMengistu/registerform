
const regButton = document.querySelector('.sign-up');
const updateButton = document.querySelector('#update-info');
const regFrm = document.querySelector('#regContainer1');
const regFrmEdit= document.querySelector('#regContainer2')
const firstName = document.querySelector('#firstname');
const sureName = document.querySelector('#surename');
const Gender = document.querySelector('#gender');

const email = document.querySelector('#email');
const userName = document.querySelector('.user-name')
const formCheck = document.querySelector('#frmchk')

let users = [];
const listUsers = () => {
  output.innerHTML = '';
  users.forEach(user => {
     newUser(user);
  })
}


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
    var number = Math.random()
    number.toString(36); 
    var id = number.toString(36).substr(2, 9); 
    id.length >= 9; // false
    let user = {
      userid: id,
      firstname: firstName.value,
      surename: sureName.value,
      email: email.value,
      gender: gender.value
    } 
     userName.innerHTML= `<h4>${firstName.value} welcome our city!</h4>`
     users.push(user) 
     removeRegForm()
     newUser(user)

    
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

  userInfo += '<table class="table table-striped"> <tr> <th>User Id</th><th>Name</th> <th>email</th></tr>' 
     userObject.forEach(
     /*  user => {
        
        userInfo +=  ` <tr> 
                           <td>${user.userid}</td> 
                           <td>${user.firstname}</td>
                           <td><span>${user.email}</span></td>
                           <td> 
                               <i  type="button" class="fas fa-edit" id='btnupdates'></i>
                            </td>
                           <td><i type="button" name=${user.userid} id='btndels' class="fa fa-trash"></i></td>
                           </tr>`    
      } */
  
    ) 
    
    userInfo += '<table/>' 
  
    userlist.innerHTML  = userInfo
    var btnDelete = document.querySelectorAll('#btndels')
    var btnUpdate = document.querySelectorAll('#btnupdates')
    deleteUser(btnDelete)
     
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



function editUserInfo(user) {
  
  
  
  regFrm.style.display='none'
  console.log(regFrmEdit)
  regFrmEdit.style.display='block'
  const firstName = document.querySelector('#firstnameedit');
  const sureName = document.querySelector('#surenameedit');
  const email = document.querySelector('#emailedit');
  firstName.value=user.firstname
  sureName.value = user.surename
  email.value = user.email
    updateButton.addEventListener('click', (e)=>{
    e.preventDefault()
    
       console.log(user.userid)
    
        user.firstname = firstName.value
        user.surename =  sureName.value
        user.email = email.value 
    
      
  
   
    regFrmEdit.style.display='none'
    regFrm.style.display='block'
    listUsers()
   
  }) 
 
  
  console.log(user);
}



const removeUser = (user) => {
    
    console.log(user.userid)
    users = users.filter( _user => _user.userid!== user.userid)
    console.log(users)
    listUsers();
}

  


const newUser = (userObject) => {

  let card = document.createElement('div');
  card.classList.add('card', 'p-1', 'my-1');

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

  let userInfo = document.createElement('h6');
  userInfo.classList.add('text-info' , 'text-wrap' ,'text-capitalize' ,);

  userInfo.innerText = `${userObject.firstname}  ${userObject.surename} \n
                         ${userObject.email}`;
  
  let buttonCard =document.createElement('div');
  buttonCard.classList.add('d-flex', 'justify-content-between', 'align-items-center')
  let editButtons = document.createElement('div');
  let  editBtn= document.createElement('button');
  editBtn.classList.add('btn','btn-info','btn-floating','btn-sm');
  editBtn.innerHTML='<i class="fa fa-edit"></i>';
  editBtn.addEventListener('click', () => editUserInfo(userObject));
                      
   
  
                         
  let deleteButtons = document.createElement('div');

  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteBtn.innerHTML='<i class="fa fa-trash"></i>';
  deleteBtn.addEventListener('click', () => removeUser(userObject));
   


  deleteButtons.appendChild(deleteBtn);
  editButtons.appendChild(editBtn);
  innerCard.appendChild(userInfo);
  buttonCard.appendChild(editButtons)
  buttonCard.appendChild(deleteButtons)
  innerCard.appendChild(buttonCard);
  card.appendChild(innerCard);
  output.appendChild(card);

}

 
 
