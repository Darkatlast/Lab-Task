const button = document.getElementById("infoBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Announcement: Practical exams begin next Monday. Good luck!";
});
