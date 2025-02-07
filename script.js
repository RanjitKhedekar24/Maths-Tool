{/* <script> */}
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
        document.getElementById('squareInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateSquare();
            }
        });

        document.getElementById('rootInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateRoot();
            }
        });

        document.getElementById('cubeInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateCube();
            }
        });

        document.getElementById('cubeRootInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateCubeRoot();
            }
        });

        document.getElementById('num1').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('num2').focus();
            }
        });

        document.getElementById('num2').addEventListener('keypress', function(event) {
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
            switch(type) {
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
        }

        // Add event listener for page load and refresh
        window.addEventListener('load', showHomePage);

        // Handle browser back/forward buttons
        window.addEventListener('popstate', function(event) {
            showHomePage();
        });

        // Store the current page state
        window.history.pushState({ page: 'home' }, '', '');

        // Optional: Handle beforeunload to save any user data if needed
        window.addEventListener('beforeunload', function() {
            // Save any necessary user data to localStorage here
            localStorage.setItem('lastPage', 'home');
        });

        // Check for stored page on load
        document.addEventListener('DOMContentLoaded', function() {
            const lastPage = localStorage.getItem('lastPage');
            if (lastPage === 'home' || !lastPage) {
                showHomePage();
            }
        });
    // </script>