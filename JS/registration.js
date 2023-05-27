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
                   // var file = $('#id-upload').prop('files')[0];
                    var data = {
                        userType: $('input[name="user-type"]:checked').val(),
                        firstName: $('#first-name').val(),
                        middleName: $('#middle-name').val(),
                        lastName: $('#last-name').val(),
                        email: $('#email').val(),
                        phoneNumber: $('#phone-number').val(),
                        streetAddress: $('#street-address').val(),
                        city: $('#city').val(),
                        state: $('#state').val(),
                        zipCode: $('#zip-code').val(),
                        country: $('#country').val(),
                        nationality: $('#nationality').val(),
                        dob: $('#dob').val(),
                        idNumber: $('#id-number').val(),
                        idType: $('#id-type').val(),
                        idIssueState: $('#id-issue-state').val(),
                        idIssueCountry: $('#id-issue-country').val(),
                       
                    };
                    var fileInput = $('#id-upload')[0];
                    var file = fileInput.files[0];
            
                    if (file) {
                        var reader = new FileReader();
                        reader.onloadend = function() {
                            // Add the file data to the form data as base64 encoded string
                            data.photo = reader.result;
            
                            // Convert form data to JSON
                            var jsonData = JSON.stringify(data);
          
                            // Send jsonData to the service
            
                            // Clear form inputs (optional)
                            visibleInputs.val('');
                            $('#id-upload').val('');
            
                            // Hide the form container (optional)
                            $('.form-container').hide();
                        };
                        reader.readAsDataURL(file);
                    } 
                        
                   
                   
                   
                    // Add the file to the form data
                    
                    // Additional logic to handle the image upload
alert(JSON.stringify(data));
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