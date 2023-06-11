$(document).ready(function() {


    const jsonString2 = localStorage.getItem('webdata');

    // Convert the JSON string back to a JavaScript object
    const myData2 = JSON.parse(jsonString2);
   
    // alert(myData2.user.firstname)
    // Disable submit button initially
    $('#submitBtn').prop('disabled', true);

    // Check if all fields are filled
    $('form input, form textarea').on('keyup change', function() {
        var empty = false;
        $('form input, form textarea').each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });

        // Enable or disable submit button based on field completion
        if (empty) {
            $('#submitBtn').prop('disabled', true);
        } else {
            $('#submitBtn').prop('disabled', false);
        }
    });

    // Handle photo upload and display
    $('#photoUpload').on('change', function() {
        var reader = new FileReader();
        reader.onload = function(e) {
           
            $('#photoPreview').html('<img id="uploadedPhoto" src="' + e.target.result + '" alt="Uploaded Photo">');
        };
        reader.readAsDataURL(this.files[0]);
    });

    // Handle form submission
    $('form').on('submitBtn', function(e) {
        e.preventDefault();
        var formData = new FormData(this);

   

        alert(JSON.stringify(formData));
       
        var formObject = {};
        var isValid = true;
                var visibleInputs = $('.form-container').find('input:visible');
                $('.form-group').removeClass('error');
                $('.error-message').remove();

                // Validate fields
                visibleInputs.each(function() {
                    if (!$(this).val()) {
                        alert("error")
                        isValid = false;
                        $(this).closest('.form-group').addClass('error');
                        $(this).after('<div class="error-message">This field is required</div>');
                    }
                });

        for (var pair of formData.entries()) {
            formObject[pair[0]] = pair[1];
        }
       
        var dropdown1 = document.getElementById('ts');
        var dropdown2 = document.getElementById('tp');
        alert("came");
        formObject.dropdown2 = dropdown1.value;
        formObject.dropdown4 = dropdown2.value;
        
        
        // Get uploaded photo
        var photoUpload = document.getElementById('photoUpload');
        formObject.photoUpload = photoUpload.files[0].name;
        alert("came2");
        

        // Make API call
        $.ajax({
            url: 'https://www.localhost:8000/chaloAPIbanye',
            type: 'POST',
            data: JSON.stringify(formObject),
           
            contentType: 'application/json',
            success: function(response) {
                alert("dropdownq")
                console.log('API response:', response);
                // Handle success response here
            },
            error: function(xhr, status, error) {
                alert("dropdowns")
                console.log('API error:', error);
                // Handle error here
            }
        });
    });
});


function submitForm() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    alert(JSON.stringify(formData));
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'http://localhost:8080/vi/api/userRegistration', true);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
      
        console.log('Form data submitted successfully.');
      }
      else{
       
      }
    };
    xhr.send(formData);
  }

  function submitpost()
  {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
      var userId = localStorage.getItem('userid');
alert(userId)
      formData.append('userid', userId);

    fetch('http://localhost:8080/vi/api/savePost', {
        method: 'POST',
        body: formData
    })
        .then(response => {

            if (response.ok) {



            } else {
                throw new Error('Error: ' + response.status + ' ' + response.statusText);
                alert("Erroraaaa "+response.status + ' ' + response.statusText)
            }
        })
        .then(data => {
            alert(data);

            // Do something with the response data
        })
        .catch(error => {
            console.error('Error submitting form data:', error);
        });
}

  

  // savePost