// Reference variable
const loginFormRef = document.querySelector("#login");
const usernameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");

function loginUser(e) {
  e.preventDefault();

  const usernameValue = usernameRef.value;
  const passwordValue = passwordRef.value;

  const users = localStorage.getItem("users") || [];

  let userFound = false;
  let correctPassword = false;

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (
      currentUser.username === usernameValue &&
      currentUser.password === passwordValue
    ) {
      userFound = true;
    }
  }

  console.log(users);
}

loginFormRef.onsubmit = loginUser;
