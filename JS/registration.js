$(document).ready(function() {
    // User type radio button change event handler
    $('input[name="user-type"]').change(function() {
        var userType = $(this).val();
        // Show or hide form container based on user type
        if (userType) {
            $('.form-container').show();
        } else {
            $('.form-container').hide();
        }
        // Show or hide controls based on user type
        if (userType === 'user1') {
            $('#id-upload-field').hide();
            $('#option-field').hide();
        } else {
            $('#id-upload-field').show();
            $('#option-field').show();
        }
    });

            // Submit button click event handler
            $('#submit-btn').click(function() {
                // Validate the form
                var isValid = true;
                var visibleInputs = $('.form-container').find('input:visible');
                $('.form-group').removeClass('error');
                $('.error-message').remove();
            
                // Validate fields
                visibleInputs.each(function() {
                    if (!$(this).val()) {
                        isValid = false;
                        $(this).closest('.form-group').addClass('error');
                        $(this).after('<div class="error-message">This field is required</div>');
                    }
                });

                // If the form is valid, send the data to the API
                if (isValid) {

                    const photoFile = document.getElementById('id-upload').files[0];
                   // const videoFile = document.getElementById('video').files[0];
                  
                    const reader = new FileReader();
                  
                    reader.onload = function() {
                      const photoData = Array.from(new Uint8Array(reader.result));
                     // const videoData = Array.from(new Uint8Array(reader.result));
                    alert("")
                     var data = {
                        isSeller: $('input[name="user-type"]:checked').val(),
                        firstName: $('#first-name').val(),
                        middleName: $('#middle-name').val(),
                        lastName: $('#last-name').val(),
                       // email: $('#email').val(),
                       // phoneNumber: $('#phone-number').val(),
                        streetAddress1: $('#street-address').val(),
                        city: $('#city').val(),
                        state: $('#state').val(),
                       // zipCode: $('#zip-code').val(),
                        country: $('#country').val(),
                        citizenCountry: $('#nationality').val(),
                        dob: $('#dob').val(),
                        idNumber: $('#id-number').val(),
                        idType: $('#id-type').val(),
                       // idIssueState: $('#id-issue-state').val(),
                        issueCountry: $('#id-issue-country').val(),
                        photoID: photoData
                       
                    };
                    alert(JSON.stringify(data));
                      sendPayload(data);
                    };
                  
                    reader.readAsArrayBuffer(photoFile); // Read photo file as array buffer
                   
                  

                   
                   
                   
                   
                    // Add the file to the form data
                    
                    // Additional logic to handle the image upload

                    // Send the data to the API endpoint

                    $.ajax({
                        url: 'your-api-endpoint',
                        method: 'POST',
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: function(response) {
                            // Handle the success response
                            visibleInputs.val('');
        $('#id-upload').val('');
                        },
                        error: function(error) {
                            // Handle the error response
                        }
                    });
                }
            });
            $('input[name="user-type"]:checked').change();
        });

        function sendPayload(payload) {
            fetch('https://api.example.com/upload', {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Error: ' + response.status + ' ' + response.statusText);
                }
              })
              .then(data => {
                // Handle the API response
                console.log(data);
              })
              .catch(error => {
                // Handle error
                console.error('Error:', error.message);
              });
          }