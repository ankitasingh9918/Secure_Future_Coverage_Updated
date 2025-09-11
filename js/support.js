// const modal = document.getElementById("faqModal");
// const modalClose = document.querySelector(".modal-close");
// const modalQuestion = document.getElementById("modalQuestion");
// const modalAnswer = document.getElementById("modalAnswer");

// // Open modal on arrow click
// document.querySelectorAll(".faq-open").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const item = btn.closest(".faq-item");
//     const question = item.querySelector("h2").textContent;
//     const fullAnswer = item.querySelector("p").getAttribute("data-full");

//     modalQuestion.textContent = question;
//     modalAnswer.textContent = fullAnswer;

//     modal.style.display = "block";
//   });
// });

// // Close modal
// modalClose.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// // Close on outside click
// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });