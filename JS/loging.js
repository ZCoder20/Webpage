
function handleGoogleLogin() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function (googleUser) {
      // Handle the signed-in user.
      const profile = googleUser.getBasicProfile();
      const idToken = googleUser.getAuthResponse().id_token;
      // Process the user data or send it to the server for verification.
    });
  }
  
  function onGoogleLoad() {
    
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: '1092237662039-g523u7ho3h4u1g866sg16j300lbv0d5s.apps.googleusercontent.com'
      });
      alert("ashu")
      const googleLoginButton = document.getElementById('google-login-button');
      googleLoginButton.addEventListener('click', handleGoogleLogin);
    });
  }
 

  
