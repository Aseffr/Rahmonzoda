// Обработка фейк-крестика
document.addEventListener('DOMContentLoaded', function() {
    const fakeClose = document.querySelector('.fake-close');
    if (fakeClose) {
        fakeClose.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    }

    // Обработка теста
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Правильные ответы
            const answers = {
                q1: 'c',
                q2: 'a',
                q3: 'b',
                q4: 'a',
                q5: 'b'
            };
            
            let score = 0;
            const totalQuestions = Object.keys(answers).length;
            
            // Проверка ответов
            for (let i = 1; i <= totalQuestions; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (selected && selected.value === answers[`q${i}`]) {
                    score++;
                }
            }
            
            // Показ результатов
            const resultsDiv = document.getElementById('results');
            resultsDiv.style.display = 'block';
            resultsDiv.innerHTML = `
                <h3>Ваш результат: ${score} из ${totalQuestions}</h3>
                <p>${getResultMessage(score, totalQuestions)}</p>
            `;
        });
    }
});

function getResultMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 80) {
        return 'Отличный результат! Вы настоящий знаток Душанбе!';
    } else if (percentage >= 50) {
        return 'Хороший результат, но есть куда стремиться!';
    } else {
        return 'Попробуйте ещё раз и изучите материалы внимательнее!';
    }
}