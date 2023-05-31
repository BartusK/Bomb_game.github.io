var questions = [
    {
      question: "Co powinieneś zrobić jeżeli Rudy zapyta się czy masz szluga?",
      options: ["A) Dać szluga. ", "B) Dać szluga ale wziąść za niego kase.", "C) Nie dać nawet jak masz.", "D) Dać szluga i użyczuć zapalniczki."],
      answer: "D"
    },
    {
      question: "Czy r******* nauczycielki od Niemieckiego jest normalne?",
      options: ["A) Tak, ale tylko jeżeli robi to Konar.", "B) Nie, chyba, że masz 1 z Niemieckiego to wtedy warto.", "C) Tak.", "D) Nie."],
      answer: "A"
    },
    {
      question: "Czemu Tarasewicz spóźnia się/nie przychodzi na lekcje?",
      options: ["A) Bo budzik mu nie dzwoni.", "B) Bo uber pomylił drogę.", "C) Tarasewicz się nie spóźnia.", "D) Bo mu się nie chce."],
      answer: "C"
    },
    {
        question: "Czemu Konar ma 3 z Tworzenie stron i aplikacji internetowych?",
        options: ["A) Bo potrafi cokolwiek sam zaprogramować.", "B) Bo opowiedział swoje historię życiowe.", "C) Bo jest mądry.", "D) Konar nie ma 3 na koniec."],
        answer: "B"
    },
    {
        question: "Czy ta niby gra jest spoko?",
        options: ["A) Jest do dupy.", "B) Jest spoko i jest lepsza od gier całej reszty klasy.", "C) Jest słaba.", "D) Nie jest spoko."],
        answer: "B"
    }
  ];
  
  var questionIndex = 0;
  var wrongAnswerCount = 0;
  var correctAnswerCount = 0;
  
  var questionElement = document.getElementById("question");
  var optionsListElement = document.getElementById("options-list");
  var resultContainer = document.getElementById("result-container");
  
  function displayQuestion() {
    var currentQuestion = questions[questionIndex];
    
    questionElement.textContent = currentQuestion.question;
    optionsListElement.innerHTML = "";
  
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var listItem = document.createElement("li");
      listItem.textContent = option;
      optionsListElement.appendChild(listItem);
    }
  }
  
  function showExplosion() {
    var explosionImage = document.createElement("img");
    explosionImage.src = "explosion.jpg";
    explosionImage.style.width = "100%";
    explosionImage.style.height = "100%";
    document.body.appendChild(explosionImage);
  }
  
  function showSuccess() {
    var successMessage = document.createElement("h3");
    successMessage.textContent = "Udało ci się rozbroić bombę!";
    successMessage.style.color = "green";
    resultContainer.appendChild(successMessage);
  
    var successImage = document.createElement("img");
    successImage.src = "success.jpg";
    successImage.style.width = "100%";
    successImage.style.height = "100%";
    document.body.appendChild(successImage);
  }
  
  function checkAnswer(event) {
    var playerAnswer = event.target.textContent.charAt(0);
  
    if (playerAnswer.toUpperCase() === questions[questionIndex].answer) {
      resultContainer.textContent = "Odpowiedź poprawna!";
      resultContainer.style.color = "green";
      correctAnswerCount++;
    } else {
      wrongAnswerCount++;
      resultContainer.textContent = "Błędna odpowiedź!";
      resultContainer.style.color = "red";
  
      if (wrongAnswerCount === 3) {
        resultContainer.textContent = "Bomba wybuchła! Koniec gry.";
        resultContainer.style.color = "red";
        optionsListElement.removeEventListener("click", checkAnswer);
        showExplosion();
      }
    }
  
    questionIndex++;
  
    if (questionIndex < questions.length) {
      setTimeout(displayQuestion, 1000);
    } else {
      optionsListElement.removeEventListener("click", checkAnswer);
  
      if (correctAnswerCount === questions.length) {
        showSuccess();
      }
    }
  }
  
  displayQuestion();
  
  var optionsList = document.getElementById("options-list");
  optionsList.addEventListener("click", checkAnswer);
  

//Element niby kodujący strone
  var correctCode = "1006";

function showCodePrompt() {
    var enteredCode = prompt("Podaj kod:");

    if (enteredCode === correctCode) {
        displayQuestion();
      } else {
        document.body.innerHTML = "<h1>Nieprawidłowy kod. Strona zostaje zablokowana.</h1>";
      }
    }
    
    showCodePrompt();