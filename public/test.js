// test.js

document.addEventListener('DOMContentLoaded', (event) => {
    let currentQuestionIndex = 0;
    const questions = document.querySelectorAll('.test__question');
    const answers = {
        vintage: 0,
        modern: 0,
        streetwear: 0,
        classic: 0,
        sporty: 0,
    };

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextQuestion() {
        const selectedAnswer = questions[currentQuestionIndex].querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            answers[selectedAnswer.value]++;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        } else {
            alert('Пожалуйста, выберите ответ!');
        }
    }

    function showResult() {
        let maxCount = 0;
        let selectedStyle = '';
        for (let style in answers) {
            if (answers[style] > maxCount) {
                maxCount = answers[style];
                selectedStyle = style;
            }
        }

        const styleDescriptions = {
            vintage: "Этот стиль предназначен для тех, кто предпочитает эпоху моды 1920-х или 1950-х годов и любит классический стиль.",
            modern: "Этот стиль подходит для тех, кто выбирает бохо-стиль, любит натуральные ткани и яркие цвета.",
            streetwear: "Этот стиль идеально подходит для тех, кто любит уличную моду и предпочитает спортивные элементы.",
            classic: "Этот стиль для тех, кто ценит классику, удобство и нейтральные цвета.",
            sporty: "Этот стиль для тех, кто ценит классику, удобство и нейтральные цвета."
        };

        document.getElementById('style').innerText = selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1);
        document.getElementById('description').innerText = styleDescriptions[selectedStyle];

        document.getElementById('result').style.display = 'block';
    }

    questions.forEach((question) => {
        const nextButton = question.querySelector('.next-button');
        nextButton.addEventListener('click', nextQuestion);
    });

    showQuestion(currentQuestionIndex);
});
