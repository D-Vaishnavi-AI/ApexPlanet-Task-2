// ✅ Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    status.textContent = "Please enter a valid email.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  this.reset();
});

// ✅ Add Image to Gallery
function addImage() {
  const fileInput = document.getElementById("fileInput");
  const urlInput = document.getElementById("urlInput");

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      createImageElement(e.target.result);
    };
    reader.readAsDataURL(fileInput.files[0]);
    fileInput.value = "";
  } else if (urlInput.value.trim() !== "") {
    createImageElement(urlInput.value.trim());
    urlInput.value = "";
  }
}

// ✅ Create Image Element
function createImageElement(src) {
  const img = document.createElement("img");
  img.src = src;

  img.onclick = function () {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = this.src;
  };

  img.oncontextmenu = function (e) {
    e.preventDefault();
    this.remove();
  };

  document.getElementById("gallery").appendChild(img);
}

// ✅ Close Modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
