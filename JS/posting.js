$(document).ready(function() {
    

    const jsonString2 = localStorage.getItem('webdata');

    // Convert the JSON string back to a JavaScript object
    const myData2 = JSON.parse(jsonString2);
     alert(myData2.user.firstname)
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
    $('form').on('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);


       
        var formObject = {};
       

        for (var pair of formData.entries()) {
            formObject[pair[0]] = pair[1];
        }
       
        var dropdown1 = document.getElementById('dropdown3');
        var dropdown2 = document.getElementById('dropdown2');
        formObject.dropdown2 = dropdown1.value;
        formObject.dropdown4 = dropdown2.value;
        
        // Get uploaded photo
        var photoUpload = document.getElementById('photoUpload');
        formObject.photoUpload = photoUpload.files[0].name;
        

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


