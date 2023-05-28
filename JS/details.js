window.addEventListener('DOMContentLoaded', function() {
    
    var queryString = window.location.search;
    var params = new URLSearchParams(queryString);
    
    var image = params.get('param1');
    var name = params.get('param2');
    var emp = params.get('param3');
    var total = params.get('param4');

    var totalv = params.get('param5');
    var ttotall = params.get('param6');
    var totalp = params.get('param7');
    
   
  
  
    var outputDiv = document.getElementById('clickedimage');
    outputDiv.innerHTML =  `<img src="`+image+`" alt="wow" width="40%" height="50%"></img>`

    var outputlabel = document.getElementById('totalS');
    var outputlabel1 = document.getElementById('name');
    var outputlabel2 = document.getElementById('emp');

    var tl = document.getElementById('tl');
    var tv = document.getElementById('tv');
    var tp = document.getElementById('tp');

    outputlabel.innerHTML =  total;
    outputlabel1.innerHTML =  name;
    outputlabel2.innerHTML =  emp;
    tl.innerHTML =  totalv;
    tv.innerHTML =  ttotall;
    tp.innerHTML =  totalp;
   
    
  });

  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
 
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      alert(y[i].id);
      alert(y[i].value);
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
     
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function enablenextbtn()
{
  
  
  
}

function previewset()
{
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');
  const file = fileInput.files[0];
alert(file.type);
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      if (file.type.startsWith('image/')) {
        const image = new Image();
        image.src = reader.result;
        preview.innerHTML = '';
        preview.appendChild(image);
      } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = reader.result;
        video.controls = true;
        preview.innerHTML = '';
        preview.appendChild(video);
        video.addEventListener('click', function() {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      } 
      else {
        const docIcon = document.createElement('i');
        docIcon.classList.add('far', 'fa-file');
        const docName = document.createElement('span');
        docName.textContent = file.name;
        const docContainer = document.createElement('div');
        docContainer.classList.add('document-preview');
        docContainer.appendChild(docIcon);
        docContainer.appendChild(docName);
        preview.innerHTML = '';
        preview.appendChild(docContainer);
      }
      //else {
      //  preview.innerHTML = 'File type not supported.';
    //  }
    });

    reader.readAsDataURL(file);
  }
}


fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
alert(file.type);
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      if (file.type.startsWith('image/')) {
        const image = new Image();
        image.src = reader.result;
        preview.innerHTML = '';
        preview.appendChild(image);
      } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = reader.result;
        video.controls = true;
        preview.innerHTML = '';
        preview.appendChild(video);
      }
      
      else {
        preview.innerHTML = 'File type not supported.';
      }
    });

    reader.readAsDataURL(file);
  }
});



