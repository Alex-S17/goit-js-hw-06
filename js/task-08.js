const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  if (formElements.email.value === '') {
    alert('All fields must be filled!');
    return;
  }
  if (formElements.password.value === '') {
    alert('All fields must be filled!');
    return;
  }

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  console.log(formData);

  formEl.reset();


  // Проверка содержимого FormData
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((name, value) => {
  //   console.log('ключ:', value);
  //   console.log('значение:', name);
  // })

}







