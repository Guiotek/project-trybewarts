function verifyLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
    console.log('aa');
  }
}

  const buttonLogin = document.getElementById('buttonLogin');
  buttonLogin.addEventListener('click',verifyLogin) ;
