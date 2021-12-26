const regButton = document.querySelector('.sign-up');
const regFrm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstname');
const sureName = document.querySelector('#surename');
const email = document.querySelector('#email');
const userName = document.querySelector('.user-name')
const users = new Array()


regButton.addEventListener('click', function(e) {
  console.log(e);
    let user = {
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

);

regFrm.addEventListener('submit', function(e) {
  
  e.preventDefault() ;
}
)

const getUserList = (userObject) =>{
  let userInfo =  '<p> Registered User</p>'
  const userlist = document.querySelector('.userList')
  // let useListContainer = document.createElement('div')
  // getUserList.addClass('list-user')
  userObject.forEach(
    user => {
      userInfo +=  `<li>${user.firstname} ${user.email}</li>`
      userlist.innerHTML  = userInfo
    }
  )
}

const removeRegForm =()=>{
  firstName.value = ''
  sureName.value=''
  email.value=''
  gender.value=''
}


