document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsappform").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      var form = this;
      var formData = new FormData(form);
  
      var whatsappMessage = "career-abroad enquiry:\n\n";
      formData.forEach(function (value, key) {
        whatsappMessage += key + ": " + value + "\n";
      });
  
      var whatsappNumber = "917025884422"; // Replace with your WhatsApp number
      var templateMessage = encodeURIComponent(whatsappMessage);
  
      var whatsappURL =
        "https://api.whatsapp.com/send?phone=" +
        whatsappNumber +
        "&text=" +
        templateMessage;
  
      window.open(whatsappURL, "_blank");
    });
  });