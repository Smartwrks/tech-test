window.onload = function () {
  // Obtain the submit button and the appointment form elements and save them
  // to varialbe to work with later
  var submitButton = document.querySelector("input[type=submit]");
  var appointmentFormElement = document.getElementById("appointmentform");
  // Obtain the form elements of the fields we will validate and save to
  // variables
  var dateElement = document.getElementById("date_input");
  var timeElement = document.getElementById("time_input");
  var timeZoneElement = document.getElementById("timezone_input");
  var messageElement = document.getElementById("message_input");
  var telephoneElement = document.getElementById("telephone_input");
  var emailElement = document.getElementById("email_input");
  // Apply a click event listener to the submit button
  submitButton.addEventListener('click', function(event) {
    // ...call the validateFields function when the
    // submit button is clicked
    validateFields();
  });
  // When the submit event is detected on the Appointment form...
  appointmentFormElement.addEventListener('submit', function(event) {
    // ...prevent the default operation of sending the form
    // since this is not required for the project
    event.preventDefault();
    // Alert that the form is validated since the submit event successfully
    // completed.
    alert("This form validates!");
  });
  // The validateFields functions checks the various form input fields
  // whether or not they have valid input values and sets the invalid with
  // a custom message if they are not valid
  function validateFields() {
    // Replace the dashes with commas in the date input string retrieved
    var dateInput = dateElement.value.replace("-", ",");
    // If the date field is empty...
    if ( validator.isEmpty(dateInput) ) {
      // ...display a custom message to add a date input to the form
      dateElement.setCustomValidity("Please choose a date to for your " +
        "appointment.");
      // ...else if the date input is not a valid date string...
    } else if ( !validator.isDate(dateInput) ){
      // ...display a custom message to provide a valid date syntax
      dateElement.setCustomValidity("Please enter a valid date syntax.");
      // ...else reset the validity of the date input element to valid
    } else {
      dateElement.setCustomValidity("");
    }
    // If the time input is empty...
    if ( validator.isEmpty(timeElement.value) ) {
      // ...display a custom message requesting a time input
      timeElement.setCustomValidity("Please enter a time for your " +
        "appointment.");
      // ...else reset the validity of the time input element to valid
    } else {
      timeElement.setCustomValidity("");
    }
    // If the time zone field is empty...
    if ( validator.isEmpty(timeZoneElement.value) ) {
      // ...display a custom message requiring the selection of a time zone
      timeZoneElement.setCustomValidity("Please enter a time zone for " +
        "your appointment.");
      // ...else reset the validity of the time zone field to valid
    } else {
      timeZoneElement.setCustomValidity("");
    }
    // If the message field is empty...
    if ( validator.isEmpty(messageElement.value) ) {
      // ...display a custom message requesting input for the message field
      messageElement.setCustomValidity("Please tell us why you are making " +
        "this appointment.");
      // ...else if the message has trailing, leading or extra spaces...
    } else if ( !validator.isTrimmed(messageElement.value) ) {
      // ...display a message requesting to remove the extra spaces
      messageElement.setCustomValidity("Your message contains extra spaces at" +
        " the end, beginning or in the middle or your message which needs to " +
        "to be cleaned up.");
      // ...else if the message input is less than 5 words...
    } else if ( validator.countWords(messageElement.value) < 5 ) {
      // ...display a message requesting the user to elaborate more on their
      // appointment
      messageElement.setCustomValidity("Your message must contain at least 5 " +
        "words to give us an idea of what you're issue is.");
      // ...else reset the validity state of the message field to valid
    } else {
      messageElement.setCustomValidity("");
    }
    // If the telephone field is empty...
    if ( validator.isEmpty(telephoneElement.value) ) {
      /// display a custom message requesting for a telephone input
      telephoneElement.setCustomValidity("Please enter a phone number so we " +
      "can contact you if further details are required.");
      // ...else if the telephone input field is not a valid phone number...
    } else if ( !validator.isPhoneNumber(telephoneElement.value) ) {
      // ...display a custom message saying that the phone number needs 10
      // digits
      telephoneElement.setCustomValidity("Please enter a valid phone number " +
        "which is 10 digits long.");
      // ...else reset the validity state of the telephone field
    } else {
      telephoneElement.setCustomValidity("");
    }
    // If the email address field is empty...
    if ( validator.isEmpty(emailElement.value) ) {
      // ...display a custom message saying that an email address is required
      emailElement.setCustomValidity("Please enter an email address so we can" +
        " send you an appointment confirmation.");
      // ...else if the email address is not valid...
    } else if ( !validator.isEmailAddress(emailElement.value) ) {
      // ...display a custom message describing what a valid email is
      emailElement.setCustomValidity("A valid email address has the '@' " +
        "character somewhere in the middle of it.");
      // ...else reset the validity state of the email address field to valid
    } else {
      emailElement.setCustomValidity("");
    }
  }
};
