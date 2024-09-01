const questions = document.querySelectorAll(".questaofaq");

questions.forEach(function (question) {
  const btn = question.querySelector(".questao-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("mostra-p");
      }
    });

    question.classList.toggle("mostra-p");
  });
});