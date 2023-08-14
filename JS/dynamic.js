var userlogin = false;
// Generate the banner dynamically
window.addEventListener('load', function() {

    //Comment set userid for static
   //localStorage.setItem('userid', 345);
  var userid=localStorage.getItem('userid');
  if(userid != undefined)
  {
    userlogin = true;
  }

    var bannerContainer = document.getElementById('bannerContainer');
    bannerContainer.appendChild(generateBanner(false)); // Assume the user is not logged in initially
  });
  
  // Generate the banner HTML code
  function generateBanner(isLoggedIn, username) {
    var banner = document.createElement('div');
    banner.classList.add('banner');



    var logo = document.createElement('div');
    logo.classList.add('logo');
    var logoImg = document.createElement('img');
    logoImg.src = 'img/logoComp.png';
    logoImg.alt = 'Company Logo';

      logoImg.addEventListener('click', function(e) {
          window.open('index.html','self');
      });

    logo.appendChild(logoImg);
  
    var companyName = document.createElement('div');
    companyName.classList.add('company-name');
    companyName.textContent = 'Pe Pe Technologies- RYT';
  
    var expandableMenu = document.createElement('div');
    expandableMenu.classList.add('expandable-menu');
  
    var loginButton = document.createElement('button');
    loginButton.classList.add('login-button');


    loginButton.textContent = localStorage.getItem('username');;
    
  
    var menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
  
    var profileLink = document.createElement('a');
    profileLink.href = '#';
    profileLink.textContent = 'Profile';
    profileLink.style.font.small();
  
    var settingsLink = document.createElement('a');
    
    settingsLink.textContent = 'New Post';
    settingsLink.style.font.fontsize(34);
    settingsLink.addEventListener('click', function(e) {
      window.open('Posting.html','_blank');
    });
  
  
    var previousOrdersLink = document.createElement('a');
    previousOrdersLink.href = '#';
    previousOrdersLink.textContent = 'History';
      previousOrdersLink.addEventListener('click', function(e) {
          window.open('historyform.html','_self');
      });
  
    menuContent.appendChild(profileLink);
    menuContent.appendChild(settingsLink);
    menuContent.appendChild(previousOrdersLink);
  
    expandableMenu.appendChild(loginButton);
    expandableMenu.appendChild(menuContent);
  
    var learnMoreLink = document.createElement('a');
    learnMoreLink.href = '#';
    learnMoreLink.textContent = 'Learn About Us...';
  
    banner.appendChild(logo);
    banner.appendChild(companyName);
    banner.appendChild(expandableMenu);
    banner.appendChild(learnMoreLink);
  

    // Handle the login button click event
   
    loginButton.addEventListener('click', function() {

      var errorlogin = document.getElementById('errorlogin');
      if(errorlogin!= undefined)
      {
        errorlogin.style.display = 'none';
      }
    
       // document.getElementById('popup-overlay').style.display = 'block';
    
       //var popupWindow = window.open('logincontrol.html', 'Popup','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=400, top=130px');
    //   var popupWindow = window.open('login.html', 'Popup','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=400, top=130px');
     // popupWindow.updateElement = updateElementValue;

     
        //document.getElementById('popup-overlay').style.display = 'none';



      // old coe for menu auto login
      loginButton.style.display = 'none';

        userid= localStorage.getItem('userid');
        userlogin = localStorage.getItem('userlogin');

  
      // Simulate user login
      var loggedInUsername =  localStorage.getItem('username');//'John Doe';

      var usernameButton = document.createElement('button');
        usernameButton.id= 'btnloginmain';
      usernameButton.classList.add('login-button');
      usernameButton.textContent = loggedInUsername;
  
      var subMenu = document.createElement('div');
      subMenu.classList.add('sub-menu');
      subMenu.innerHTML = `
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Previous Orders</a>
      `;
  
      expandableMenu.appendChild(usernameButton);
     // menuContent.appendChild(subMenu);
  
      // Add event listener to handle sub-menu expansion and hiding
      usernameButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event propagation to document click listener
  
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
          //subMenu.style.display = 'none';
        } else {
          
          menuContent.style.display = 'block';
         // subMenu.style.display = 'block';
        }
      });
     

      // mouse out 

      menuContent.addEventListener('mouseleave', function() {
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
          
        }  
      });
  
      // Add event listener to hide sub-menu when clicking outside of username button or sub-menu
      var clickHandler = function(event) {
        if (
          !usernameButton.contains(event.target) &&
          !subMenu.contains(event.target)
        ) {
          subMenu.style.display = 'none';
          document.removeEventListener('click', clickHandler);
        }
      };
  
      document.addEventListener('click', clickHandler);
    });
  
    return banner;
  }
   // JavaScript to show/hide the additional div


function updateElementValue(newValue) {
  // Update the element in the main page
  document.getElementById("btnloginmain").innerText = newValue;
}

   function clickcreateorder()
   {
    var showAdditionalDivBtn = document.getElementById('showAdditionalDiv');
    var additionalDiv = document.querySelector('.additional-div');
    var errorlogin = document.getElementById('errorlogin');
    
     if(userlogin)
     {
       additionalDiv.style.display = 'block';
       errorlogin.style.display = 'none';
       showTab(0);
     }
     else{
       errorlogin.style.display = 'block';
     }
   }
   
   
