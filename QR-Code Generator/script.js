// Get references to HTML elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate QR code
function generateQR() {
  // Check if the input has content
  if (qrText.value.length > 0) {
    // Generate the QR code image source with the input data
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    // Show the image box
    imgBox.classList.add("show-img");
  } else {
    // If input is empty, add an error class for visual feedback
    qrText.classList.add("error");

    // Remove the error class after 1 second for a brief visual cue
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
