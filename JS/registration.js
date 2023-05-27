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
                        },
                        error: function(error) {
                            // Handle the error response
                        }
                    });
                }
            });
            $('input[name="user-type"]:checked').change();
        });