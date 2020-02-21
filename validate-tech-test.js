window.onload = function () {

  var nextButtonElement = document.querySelector("button[type=submit]");
  var formElement = document.querySelector("form[class=form]");

  var titleInputElement = document.getElementById("title");
  var locationInputElement = document.getElementById("location");
  var departmentInputElement = document.getElementById("department");
  var commentsInputElement = document.getElementById("comments");

  nextButtonElement.addEventListener('click', function(event) {
    validateFields(titleInputElement);
    validateFields(locationInputElement);
    validateFields(departmentInputElement);
    validateFields(commentsInputElement);
  });

  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  function validateFields(inputElement) {
    if (inputElement.nextSibling.tagName === "P") {
      inputElement.classList.remove("is-invalid");
      inputElement.nextSibling.remove();
    }

    if (validator.isEmpty(inputElement.value)) {
      inputElement.classList.add("is-invalid");
      inputElement.parentNode.insertBefore(createInvalidMessage(inputElement.id), inputElement.nextSibling);
    }
  }

  function createInvalidMessage(inputElementId) {
    var inputLabelElement = document.querySelector("label[for=" + inputElementId + "]");
    var inputLabelName = inputLabelElement.innerText;
    var invalidMessageElement = document.createElement("p");
    var invalidMessage = inputLabelName + " is Required.";

    invalidMessageElement.setAttribute("class", "form__invalid-message");
    invalidMessageElement.innerText = invalidMessage;

    return (invalidMessageElement);
  }
};
