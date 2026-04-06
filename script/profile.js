const profilePic = document.getElementById("profilePic");
  const previewImg = document.getElementById("previewImg");

  profilePic.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      previewImg.src = URL.createObjectURL(file);
    }
  });