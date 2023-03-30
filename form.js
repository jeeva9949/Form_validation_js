const form = document.querySelector("form");
// console.log(form);

const username = document.querySelector(".username");
// console.dir(username);

const email = document.querySelector(".email");
// console.log(email);

const password = document.querySelector(".password");
// console.log(password);

const conpassword = document.querySelector(".Conpassword");
// console.log(conpassword);

const checkbox = document.querySelector(".checkbox");
// console.log(checkbox);

 var isValidName = false;
 var isValidEmail = false;
 var isValidPassword = false;
 var isValidCPassword = false;
 var isTCChecked = false;


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validation()
})

const validation = () => {
  let uservalue = username.value.trim();
  let emailvalue = email.value.trim();
  let passwordvalue = password.value.trim();
  let conpassvalue = conpassword.value.trim();
     isValidName = false;
     isValidEmail = false;
     isValidPassword = false;
     isValidCPassword = false;
     isTCChecked = false;

    
    
    
      if (uservalue === "") {
        // username validation
        setError(username, "username con't be  empty");
      } else if (uservalue.length < 3) {
        setError(username, "username should be greater than 3");
      } else {
        setSucess(username);
        isValidName = true;
      }

  // email validation

  if (emailvalue === "") {
    setError(email, "email con't be  empty");
  } else if (!emailCheck(emailvalue)) {
    setError(email, "enter the valid email id ");
  } else {
      setSucess(email);
      isValidEmail = true;
  }

  // password vallidation
  if (passwordvalue === "") {
    setError(password, "password con't be  empty");
  } else if (uservalue.length < 5) {
    setError(password, "password should be minimum 8");
  } else {
      setSucess(password);
      isValidPassword = true;
  }

  // confirm password validation
  if (conpassvalue === "") {
    setError(conpassword, "password con't be  empty");
  } else if (conpassvalue != passwordvalue) {
    setError(conpassword, "paasword not match");
  } else {
      setSucess(conpassword);
      isValidCPassword = true;
  }

  //checkbox
    if (!checkbox.checked) {
        setError(checkbox, "click on agree terms");
    }
    else {
        setSucess(checkbox);
         isTCChecked = true;
    }
    if (
      isValidName &&
      isValidEmail &&
      isValidPassword &&
      isValidCPassword &&
      isTCChecked
    ) {
      form.submit();
    }
    
    
  
}
const setError = (input, message) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("sucess");
};

const setSucess = (input) => {
  let parent = input.parentElement;
  parent.classList.add("sucess");
  parent.classList.remove("error");
};
function emailCheck(input) {
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let valid = emailReg.test(input);
  return valid;
}