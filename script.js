function verifyLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function verifyAgreement() {
  const checkAgreement = document.getElementById('agreement').checked;
  const btnSubmit = document.getElementById('submit-btn');
  if (checkAgreement === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

const buttonLogin = document.getElementById('buttonLogin');
buttonLogin.addEventListener('click', verifyLogin);

const checkAgreement = document.getElementById('agreement');
checkAgreement.addEventListener('click', verifyAgreement);
