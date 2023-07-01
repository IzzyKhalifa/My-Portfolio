// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.querySelector(".php-email-form");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the form data
      const formData = new FormData(this);
  
      // Compose the email body
      const emailBody = Array.from(formData)
        .map(
          (entry) =>
            encodeURIComponent(entry[0]) +
            "=" +
            encodeURIComponent(entry[1])
        )
        .join("&");
  
      // Get the message value separately
      const message = formData.get("message");
  
      // Prepare the email link with the message included in the body
      const emailLink = `mailto:izzy.e.khalifa@gmail.com?subject=${encodeURIComponent(
        formData.get("subject")
      )}&body=${encodeURIComponent(message)}`;
  
      // Open the email client with the pre-filled email
      window.location.href = emailLink;
  
      // Display success message
      const successMessage = document.querySelector(".sent-message");
      successMessage.style.display = "block";
      form.reset();
    });
  });
  