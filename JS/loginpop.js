function openregister()
{
window.open('register.html', '_blank');
}


function closepopup()
{

  window.close();
 // document.getElementById('popup-overlay').style.display = 'none';
}


function loginclick()
{

  username = document.getElementById('username');
  password = document.getElementById('password');
  fetch(`http://localhost:8080/vi/api/getlogin?username=${username.value}&password=${password.value}`)
      .then(response => response.json())
      .then(data => {
        // Access the specific element from the JSON response

        data.forEach(element => {
          // Access specific properties of each array element

          const myObj = JSON.parse(JSON.stringify(element));

            localStorage.setItem('userid', myObj.userid);
            localStorage.setItem('userlogin', true);
            localStorage.setItem('username', myObj.username);

          //  window.open('index.html','self');
            window.location.replace('index.html');
            alert("");
        });




      })
      .catch(error => {
        console.error('Error calling API:', error);
      });

}