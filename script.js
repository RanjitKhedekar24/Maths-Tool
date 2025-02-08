{/* <script> */ }
function generateTable() {
    const number = document.getElementById('numberInput').value;
    if (!number) return;

    const table = document.getElementById('resultTable');
    let html = `
        <tr>
            <th>${number}'s Table</th>
        </tr>
    `;

    for (let i = 1; i <= 10; i++) {
        html += `
            <tr>
                <td>${number} x ${i} = ${number * i}</td>
            </tr>
        `;
    }

    table.innerHTML = html;
}

function clearCalculator() {
    // Clear the input field
    document.getElementById('numberInput').value = '';

    // Clear the result table
    document.getElementById('resultTable').innerHTML = '';
}

function calculateSquare() {
    const number = document.getElementById('squareInput').value;
    const resultBox = document.getElementById('squareResult');

    if (!number || isNaN(number)) {
        resultBox.innerHTML = 'Please enter a valid number';
        resultBox.style.color = '#ff4444';
        return;
    }

    const square = number * number;
    resultBox.innerHTML = `Square of ${number} is: ${square}`;
    resultBox.style.color = '#009879';
}

function calculateRoot() {
    const number = document.getElementById('rootInput').value;
    const resultBox = document.getElementById('rootResult');

    if (!number || isNaN(number)) {
        resultBox.innerHTML = 'Please enter a valid number';
        resultBox.style.color = '#ff4444';
        return;
    }

    if (number < 0) {
        resultBox.innerHTML = 'Cannot calculate square root of negative number';
        resultBox.style.color = '#ff4444';
        return;
    }

    const root = Math.sqrt(number);
    resultBox.innerHTML = `Square Root of ${number} is: ${root.toFixed(3)}`;
    resultBox.style.color = '#009879';
}

function calculateCube() {
    const number = document.getElementById('cubeInput').value;
    const resultBox = document.getElementById('cubeResult');

    if (!number || isNaN(number)) {
        resultBox.innerHTML = 'Please enter a valid number';
        resultBox.style.color = '#ff4444';
        return;
    }

    const cube = number * number * number;
    resultBox.innerHTML = `Cube of ${number} is: ${cube}`;
    resultBox.style.color = '#009879';
}

function calculateCubeRoot() {
    const number = document.getElementById('cubeRootInput').value;
    const resultBox = document.getElementById('cubeRootResult');

    if (!number || isNaN(number)) {
        resultBox.innerHTML = 'Please enter a valid number';
        resultBox.style.color = '#ff4444';
        return;
    }

    const cubeRoot = Math.cbrt(number);
    resultBox.innerHTML = `Cube Root of ${number} is: ${cubeRoot.toFixed(3)}`;
    resultBox.style.color = '#009879';
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultBox = document.getElementById('basicResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultBox.innerHTML = 'Please enter valid numbers';
        resultBox.style.color = '#ff4444';
        return;
    }

    let result;
    let operationSymbol;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case 'subtract':
            result = num1 - num2;
            operationSymbol = '-';
            break;
        case 'multiply':
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                resultBox.innerHTML = 'Cannot divide by zero';
                resultBox.style.color = '#ff4444';
                return;
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
    }

    // Format the result to handle long decimal numbers
    result = Number.isInteger(result) ? result : parseFloat(result.toFixed(4));

    resultBox.innerHTML = `${num1} ${operationSymbol} ${num2} = ${result}`;
    resultBox.style.color = '#009879';
}

// Add event listeners for Enter key
document.getElementById('squareInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateSquare();
    }
});

document.getElementById('rootInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateRoot();
    }
});

document.getElementById('cubeInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateCube();
    }
});

document.getElementById('cubeRootInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateCubeRoot();
    }
});

document.getElementById('num1').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('num2').focus();
    }
});

document.getElementById('num2').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculate('add'); // Default operation when pressing Enter
    }
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.classList.remove('active');
    }

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active button styling if desired
    const buttons = document.getElementsByClassName('nav-button');
    for (let button of buttons) {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
    }
    event.target.style.backgroundColor = 'white';
    event.target.style.color = '#009879';
}

const tips = [
    "Practice multiplication tables for 10 minutes daily!",
    "Use your fingers to count when needed - it's okay!",
    "Try to solve one new problem type each day.",
    "Take breaks between practice sessions.",
    "Celebrate your progress, no matter how small!"
];

let currentTipIndex = 0;

function switchUserType(type) {
    // Remove active class from all buttons
    document.querySelectorAll('.user-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    event.target.closest('.user-type-btn').classList.add('active');

    // Adjust interface based on user type
    switch (type) {
        case 'student':
            document.documentElement.style.setProperty('--primary-color', '#009879');
            break;
        case 'parent':
            document.documentElement.style.setProperty('--primary-color', '#2196F3');
            break;
        case 'teacher':
            document.documentElement.style.setProperty('--primary-color', '#FF5722');
            break;
    }
}

// Rotate tips every 5 seconds
setInterval(() => {
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    const tipElement = document.getElementById('currentTip');
    tipElement.style.opacity = 0;
    setTimeout(() => {
        tipElement.textContent = tips[currentTipIndex];
        tipElement.style.opacity = 1;
    }, 500);
}, 5000);

// Add achievement system
function unlockAchievement(achievement) {
    const achievementsDiv = document.querySelector('.achievements');
    const badge = document.createElement('div');
    badge.className = 'achievement-badge';
    badge.innerHTML = achievement.emoji;
    badge.title = achievement.name;
    achievementsDiv.appendChild(badge);

    // Show celebration animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Track progress
function updateProgress(value) {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${value}%`;
}

// Function to show home section
function showHomePage() {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.classList.remove('active');
    }

    // Show home section
    document.getElementById('home').classList.add('active');

    // Reset nav button styles
    const buttons = document.getElementsByClassName('nav-button');
    for (let button of buttons) {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
    }

    // Highlight home button
    const homeButton = document.querySelector('.nav-button:first-child');
    if (homeButton) {
        homeButton.style.backgroundColor = 'white';
        homeButton.style.color = '#009879';
    }

    // Add this line at the end of the function
    animateUserCount();
}

// Add event listener for page load and refresh
window.addEventListener('load', showHomePage);

// Handle browser back/forward buttons
window.addEventListener('popstate', function (event) {
    showHomePage();
});

// Store the current page state
window.history.pushState({ page: 'home' }, '', '');

// Optional: Handle beforeunload to save any user data if needed
window.addEventListener('beforeunload', function () {
    // Save any necessary user data to localStorage here
    localStorage.setItem('lastPage', 'home');
});

// Check for stored page on load
document.addEventListener('DOMContentLoaded', function () {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage === 'home' || !lastPage) {
        showHomePage();
    }
});

// Simulated user count animation
function animateUserCount() {
    const userCountElement = document.getElementById('userCount');
    const targetCount = 2234; // You can change this to any number
    let currentCount = 0;
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    const counter = setInterval(() => {
        currentCount = Math.min(currentCount + increment, targetCount);
        userCountElement.textContent = Math.round(currentCount).toLocaleString();

        if (currentCount >= targetCount) {
            clearInterval(counter);
        }
    }, stepDuration);
}

const questionSets = {
    set1: [ // Basic Arithmetic - Easy
        {
            question: "What is 15 + 27?",
            options: ["42", "41", "43", "40"],
            correct: "42"
        },
        {
            question: "Calculate 56 - 19",
            options: ["37", "38", "36", "35"],
            correct: "37"
        },
        {
            question: "Multiply 8 × 7",
            options: ["56", "54", "58", "55"],
            correct: "56"
        },
        {
            question: "Divide 72 ÷ 9",
            options: ["8", "9", "7", "10"],
            correct: "8"
        },
        {
            question: "What is 125 + 75?",
            options: ["200", "195", "205", "190"],
            correct: "200"
        }
    ],
    set2: [ // Basic Arithmetic - Medium
        {
            question: "Calculate 234 + 567",
            options: ["801", "799", "802", "800"],
            correct: "801"
        },
        {
            question: "What is 456 - 189?",
            options: ["267", "268", "266", "265"],
            correct: "267"
        },
        {
            question: "Multiply 16 × 25",
            options: ["400", "375", "425", "450"],
            correct: "400"
        },
        {
            question: "Divide 728 ÷ 8",
            options: ["91", "90", "92", "89"],
            correct: "91"
        },
        {
            question: "Calculate 645 + 789",
            options: ["1434", "1432", "1436", "1430"],
            correct: "1434"
        }
    ],
    set3: [ // Basic Arithmetic - Hard
        {
            question: "Calculate 1567 + 2389",
            options: ["3956", "3955", "3957", "3954"],
            correct: "3956"
        },
        {
            question: "What is 4567 - 1789?",
            options: ["2778", "2777", "2779", "2776"],
            correct: "2778"
        },
        {
            question: "Multiply 156 × 24",
            options: ["3744", "3742", "3746", "3740"],
            correct: "3744"
        },
        {
            question: "Divide 9856 ÷ 16",
            options: ["616", "615", "617", "614"],
            correct: "616"
        },
        {
            question: "Calculate 3456 + 5678",
            options: ["9134", "9132", "9136", "9130"],
            correct: "9134"
        }
    ],
    set4: [ // Squares - Easy
        {
            question: "What is 6²?",
            options: ["36", "35", "37", "34"],
            correct: "36"
        },
        {
            question: "Calculate 8²",
            options: ["64", "63", "65", "62"],
            correct: "64"
        },
        {
            question: "What is 9²?",
            options: ["81", "80", "82", "79"],
            correct: "81"
        },
        {
            question: "Calculate 7²",
            options: ["49", "48", "50", "47"],
            correct: "49"
        },
        {
            question: "What is 5²?",
            
            options: ["25", "24", "26", "23"],
            correct: "25"
        }
    ],
    set5: [ // Squares - Medium
        {
            question: "Calculate 12²",
            options: ["144", "143", "145", "142"],
            correct: "144"
        },
        {
            question: "What is 15²?",
            options: ["225", "224", "226", "223"],
            correct: "225"
        },
        {
            question: "Calculate 13²",
            options: ["169", "168", "170", "167"],
            correct: "169"
        },
        {
            question: "What is 14²?",
            options: ["196", "195", "197", "194"],
            correct: "196"
        },
        {
            question: "Calculate 11²",
            options: ["121", "120", "122", "119"],
            correct: "121"
        }
    ],
    set6: [ // Squares - Hard
        {
            question: "Calculate 25²",
            options: ["625", "624", "626", "623"],
            correct: "625"
        },
        {
            question: "What is 18²?",
            options: ["324", "323", "325", "322"],
            correct: "324"
        },
        {
            question: "Calculate 20²",
            options: ["400", "399", "401", "398"],
            correct: "400"
        },
        {
            question: "What is 16²?",
            options: ["256", "255", "257", "254"],
            correct: "256"
        },
        {
            question: "Calculate 22²",
            options: ["484", "483", "485", "482"],
            correct: "484"
        }
    ]
};

// Add these functions for the assignment section
let currentAssignment = {
    questions: [],
    currentIndex: 0,
    score: 0,
    startTime: null
};

function loadAssignment() {
    const setSelect = document.getElementById('assignmentSet');
    const selectedSet = setSelect.value;
    
    if (selectedSet && questionSets[selectedSet]) {
        currentAssignment.questions = questionSets[selectedSet];
        currentAssignment.currentIndex = 0;
        currentAssignment.score = 0;
    }
}

function startAssignment() {
    if (!currentAssignment.questions.length) {
        alert('Please select a question set first');
        return;
    }

    currentAssignment.startTime = new Date();
    showQuestion();
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
}

function showQuestion() {
    const question = currentAssignment.questions[currentAssignment.currentIndex];
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Update progress
    document.getElementById('questionNumber').textContent = 
        `Question ${currentAssignment.currentIndex + 1} of ${currentAssignment.questions.length}`;
}

function checkAnswer(selectedAnswer) {
    const question = currentAssignment.questions[currentAssignment.currentIndex];
    
    if (selectedAnswer === question.correct) {
        currentAssignment.score++;
    }

    currentAssignment.currentIndex++;

    if (currentAssignment.currentIndex < currentAssignment.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - currentAssignment.startTime) / 1000);

    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';

    const percentage = (currentAssignment.score / currentAssignment.questions.length) * 100;
    
    document.getElementById('scoreValue').textContent = currentAssignment.score;
    document.getElementById('percentageValue').textContent = Math.round(percentage);
    document.getElementById('timeTaken').textContent = formatTime(timeTaken);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function retryAssignment() {
    currentAssignment.currentIndex = 0;
    currentAssignment.score = 0;
    currentAssignment.startTime = new Date();
    showQuestion();
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
}

function shareResults() {
    // Implement sharing functionality
    alert('Sharing functionality coming soon!');
}

function downloadCertificate() {
    // Implement certificate download
    alert('Certificate download coming soon!');
}

function updateAnalytics() {
    // Get stored analytics or initialize
    const analytics = JSON.parse(localStorage.getItem('analytics')) || {
        totalScore: 0,
        completedCount: 0,
        bestScore: 0,
        totalTime: 0
    };

    // Update analytics
    analytics.totalScore += currentAssignment.score;
    analytics.completedCount++;
    analytics.bestScore = Math.max(analytics.bestScore, currentAssignment.score);
    
    // Store updated analytics
    localStorage.setItem('analytics', JSON.stringify(analytics));

    // Update display
    document.getElementById('avgScore').textContent = 
        Math.round(analytics.totalScore / analytics.completedCount);
    document.getElementById('completedCount').textContent = analytics.completedCount;
    document.getElementById('bestScore').textContent = analytics.bestScore;
}

// Remove the monitoring initialization from DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize assignment selection
    const setSelect = document.getElementById('assignmentSet');
    if (setSelect) {
        setSelect.addEventListener('change', loadAssignment);
    }

    // Initialize start button
    const startButton = document.querySelector('.start-btn');
    if (startButton) {
        startButton.addEventListener('click', startAssignment);
    }
});

// Remove the monitoring-related styles
// </script>