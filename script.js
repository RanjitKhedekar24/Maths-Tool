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
    set1: [ // Labor Time Calculations
        {
            question: "If 8 workers complete a job in 6 days, how many days will 12 workers take?",
            options: ["4", "5", "3", "7"],
            correct: "4"
        },
        {
            question: "A worker completes 40 units in 8 hours. How many units per hour?",
            options: ["5", "4", "6", "7"],
            correct: "5"
        },
        {
            question: "If 15 workers need 10 days, how many workers needed to complete in 6 days?",
            options: ["25", "20", "30", "35"],
            correct: "25"
        },
        {
            question: "A machine produces 120 items per hour. Production in 7.5 hours?",
            options: ["900", "850", "950", "1000"],
            correct: "900"
        },
        {
            question: "If 6 workers take 7 days, how many days will 14 workers take?",
            options: ["3", "4", "5", "2"],
            correct: "3"
        },
        {
            question: "20 workers complete 40% in 10 days. Days needed for full completion?",
            options: ["25", "20", "30", "35"],
            correct: "25"
        },
        {
            question: "If 12 workers need 10 days working 6 hours daily, days needed for 8 hours daily?",
            options: ["7.5", "8", "7", "6.5"],
            correct: "7.5"
        },
        {
            question: "A worker makes 15 units/hour. Units in 6.5 hours?",
            options: ["97.5", "95", "100", "90"],
            correct: "97.5"
        },
        {
            question: "5 workers take 12 days. Days needed for 10 workers?",
            options: ["6", "7", "5", "8"],
            correct: "6"
        },
        {
            question: "If 25 workers complete in 20 days, workers needed for 25 days?",
            options: ["20", "18", "22", "24"],
            correct: "20"
        }
    ],
    set2: [ // Wage Calculations
        {
            question: "At $15/hour, earnings for 45 hours?",
            options: ["$675", "$650", "$700", "$725"],
            correct: "$675"
        },
        {
            question: "Weekly salary $800. Hourly rate for 40-hour week?",
            options: ["$20", "$18", "$22", "$24"],
            correct: "$20"
        },
        {
            question: "Overtime (1.5×) for 10 hours at $20 base rate?",
            options: ["$300", "$250", "$350", "$400"],
            correct: "$300"
        },
        {
            question: "Monthly salary $3600. Annual salary?",
            options: ["$43200", "$42000", "$44000", "$45000"],
            correct: "$43200"
        },
        {
            question: "If daily wage is $160 for 8 hours, hourly rate?",
            options: ["$20", "$18", "$22", "$24"],
            correct: "$20"
        },
        {
            question: "Team of 12 at $25/hour for 6 hours. Total cost?",
            options: ["$1800", "$1750", "$1850", "$1900"],
            correct: "$1800"
        },
        {
            question: "Base rate $22, overtime $33. Earnings for 40 regular + 8 overtime hours?",
            options: ["$1144", "$1140", "$1150", "$1160"],
            correct: "$1144"
        },
        {
            question: "Annual salary $52000. Monthly salary?",
            options: ["$4333.33", "$4300", "$4350", "$4400"],
            correct: "$4333.33"
        },
        {
            question: "Hourly rate $18. Weekly pay for 35 hours?",
            options: ["$630", "$600", "$650", "$700"],
            correct: "$630"
        },
        {
            question: "If biweekly pay is $1600, annual salary?",
            options: ["$41600", "$41000", "$42000", "$40000"],
            correct: "$41600"
        }
    ],
    set3: [ // Production Efficiency
        {
            question: "Machine A: 100 units/hour, Machine B: 150 units/hour. Combined hourly output?",
            options: ["250", "200", "300", "350"],
            correct: "250"
        },
        {
            question: "If efficiency increases 25%, new output from base 400 units?",
            options: ["500", "450", "550", "600"],
            correct: "500"
        },
        {
            question: "Production drops 20%. New output from 1000 units?",
            options: ["800", "750", "850", "900"],
            correct: "800"
        },
        {
            question: "3 workers make 90 units/hour. Units per worker?",
            options: ["30", "25", "35", "40"],
            correct: "30"
        },
        {
            question: "If 5 machines make 600 units, units from 8 machines?",
            options: ["960", "900", "1000", "1100"],
            correct: "960"
        },
        {
            question: "Team completes 75% in 9 hours. Hours for full job?",
            options: ["12", "11", "13", "14"],
            correct: "12"
        },
        {
            question: "Output increases 50%. New workers needed instead of 30?",
            options: ["20", "18", "22", "24"],
            correct: "20"
        },
        {
            question: "Machine makes 40 parts/minute. Parts in 2 hours?",
            options: ["4800", "4600", "5000", "5200"],
            correct: "4800"
        },
        {
            question: "If 4 workers do 200 units, units from 6 workers?",
            options: ["300", "250", "350", "400"],
            correct: "300"
        },
        {
            question: "Production rate 80/hour improves 25%. New hourly rate?",
            options: ["100", "90", "110", "120"],
            correct: "100"
        }
    ],
    set4: [ // Resource Management
        {
            question: "Material cost $30/unit, labor $20/unit. Total cost for 200 units?",
            options: ["$10000", "$9500", "$10500", "$11000"],
            correct: "$10000"
        },
        {
            question: "Project needs 400 bricks/day. Bricks for 30 days?",
            options: ["12000", "11000", "13000", "14000"],
            correct: "12000"
        },
        {
            question: "10 workers need 3 supervisors. Supervisors for 40 workers?",
            options: ["12", "10", "14", "16"],
            correct: "12"
        },
        {
            question: "Machine uses 8 liters/day. Monthly usage (30 days)?",
            options: ["240", "220", "260", "280"],
            correct: "240"
        },
        {
            question: "Wastage is 10%. Material needed for 300 units?",
            options: ["330", "320", "340", "350"],
            correct: "330"
        },
        {
            question: "Each worker needs 4 tools. Tools for team of 25?",
            options: ["100", "90", "110", "120"],
            correct: "100"
        },
        {
            question: "Paint covers 25 sq.m/liter. Liters for 800 sq.m?",
            options: ["32", "30", "34", "36"],
            correct: "32"
        },
        {
            question: "5 supervisors for 100 workers. Supervisors for 180 workers?",
            options: ["9", "8", "10", "11"],
            correct: "9"
        },
        {
            question: "Equipment rental $300/day. Cost for 45 days?",
            options: ["$13500", "$13000", "$14000", "$14500"],
            correct: "$13500"
        },
        {
            question: "Each unit needs 3 hours labor. Hours for 90 units?",
            options: ["270", "260", "280", "290"],
            correct: "270"
        }
    ],
    set5: [ // Project Planning
        {
            question: "Project: 120 days with 15 workers. Days with 20 workers?",
            options: ["90", "85", "95", "100"],
            correct: "90"
        },
        {
            question: "160-day project 30% complete. Days remaining?",
            options: ["112", "110", "114", "116"],
            correct: "112"
        },
        {
            question: "Speed increases 25%. New time for 80-day project?",
            options: ["64", "60", "68", "70"],
            correct: "64"
        },
        {
            question: "Team A: 30 days, Team B: 60 days. Days working together?",
            options: ["20", "18", "22", "24"],
            correct: "20"
        },
        {
            question: "Project needs 2400 labor hours. Days with 10 workers (8 hours/day)?",
            options: ["30", "28", "32", "34"],
            correct: "30"
        },
        {
            question: "Phase 1: 40 days, Phase 2: 60 days. Total with 25% overlap?",
            options: ["85", "80", "90", "95"],
            correct: "85"
        },
        {
            question: "If overtime reduces time by 30%, new duration for 100 days?",
            options: ["70", "65", "75", "80"],
            correct: "70"
        },
        {
            question: "Project deadline cut 20%. New workers needed instead of 25?",
            options: ["31.25", "30", "32", "33"],
            correct: "31.25"
        },
        {
            question: "3 phases: 20, 30, 40 days. Total with no overlap?",
            options: ["90", "85", "95", "100"],
            correct: "90"
        },
        {
            question: "50% complete in 40 days. Total project duration?",
            options: ["80", "75", "85", "90"],
            correct: "80"
        }
    ]
};

// Add these missing functions for the assignments section
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
    }
}

function startAssignment() {
    if (!currentAssignment.questions.length) {
        alert('Please select a question set first');
        return;
    }

    currentAssignment.currentIndex = 0;
    currentAssignment.score = 0;
    currentAssignment.startTime = new Date();

    // Reset and show question container
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';

    // Start timer
    startTimer();

    // Show first question
    showQuestion();
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
    document.getElementById('currentQuestion').textContent = currentAssignment.currentIndex + 1;
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
    const timeTaken = Math.floor((endTime - currentAssignment.startTime) / 1000); // in seconds

    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';

    // Update score and percentage
    document.getElementById('scoreValue').textContent = currentAssignment.score;
    document.getElementById('percentageValue').textContent = 
        Math.round((currentAssignment.score / currentAssignment.questions.length) * 100);
    document.getElementById('timeTaken').textContent = formatTime(timeTaken);

    // Update analytics
    updateAnalytics();
}

function startTimer() {
    const timerElement = document.getElementById('assignmentTimer');
    const startTime = new Date();

    const timer = setInterval(() => {
        const currentTime = new Date();
        const difference = Math.floor((currentTime - startTime) / 1000);
        timerElement.textContent = `Time: ${formatTime(difference)}`;
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function retryAssignment() {
    startAssignment();
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
