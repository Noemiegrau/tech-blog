async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      document.getElementById('alert').classList.remove('hide');
      document.getElementById("main-container").classList.add("blur");
      document.getElementById('alert').classList.add('first-plan');
      document.getElementById("main-container").classList.add("second-plan");
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }

// Event listener for delete button on modal
document.getElementById("delete-btn").addEventListener("click", function() {
  document.getElementById('alert').classList.add('hide');
  document.getElementById("main-container").classList.remove("blur");
  document.location.replace('/dashboard');
});

//add bootstrap modal
// window.alert("Account created successfully. You can now log in");

}

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
      const response = await fetch('api/users/login',{
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      // check the response status
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector(".login-form-1").addEventListener('submit', loginFormHandler);
document.querySelector('.login-form-2').addEventListener('submit', signupFormHandler);