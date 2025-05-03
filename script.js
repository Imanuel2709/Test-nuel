function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

    // Modal logic
    function showModal(src) {
      document.getElementById("modalImg").src = src;
      document.getElementById("imageModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("imageModal").style.display = "none";
    }

    // Event listener untuk gambar besar
    window.onload = () => {
      const bigImg = document.getElementById("bigCardImg");
      bigImg.onclick = () => showModal(bigImg.src);
    };