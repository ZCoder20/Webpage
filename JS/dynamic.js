// Generate the banner dynamically
window.addEventListener('load', function() {
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
    logoImg.src = 'img/icon.png';
    logoImg.alt = 'Company Logo';
    logo.appendChild(logoImg);
  
    var companyName = document.createElement('div');
    companyName.classList.add('company-name');
    companyName.textContent = 'Pe Pe Technologies- RYT';
  
    var expandableMenu = document.createElement('div');
    expandableMenu.classList.add('expandable-menu');
  
    var loginButton = document.createElement('button');
    loginButton.classList.add('login-button');
    loginButton.textContent = 'Login';
  
    var menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
  
    var profileLink = document.createElement('a');
    profileLink.href = '#';
    profileLink.textContent = 'Profile';
  
    var settingsLink = document.createElement('a');
    settingsLink.href = '#';
    settingsLink.textContent = 'Settings';
  
    var previousOrdersLink = document.createElement('a');
    previousOrdersLink.href = '#';
    previousOrdersLink.textContent = 'Previous Orders';
  
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
      loginButton.style.display = 'none';
      //menuContent.style.display = 'block';
  
      // Simulate user login
      var loggedInUsername = 'John Doe';
  
      var usernameButton = document.createElement('button');
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
  