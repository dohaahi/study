const loginForm = document.getElementById('login-form');
const loginInput = document.getElementById('input');
const greeting = document.getElementById('greeting');

function onLoginSubmit (e) {
  e.preventDefault(); 

  loginForm.classList.add('hidden');

  //userName을 localStorage에 저장
  const username = loginInput.value;
  localStorage.setItem('username', username);

  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove('hidden'); 
}

const savedUsername = localStorage.getItem('username');

if(!savedUsername) {
  //savedUsername이 없다면 form 표시
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername)
}
