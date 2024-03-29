
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const registerForm = document.getElementById('register-form');
    const registerBtn = document.getElementById('register-btn');

    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.authenticated) {
                alert('Login successful');
                // Перенаправляем пользователя на другую страницу или выполняем другие действия
            } else {
                alert('Incorrect username or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    registerBtn.addEventListener('click', function() {
         const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful');
                // Перенаправляем пользователя на другую страницу или выполняем другие действия
            } else {
                alert('Username already exists');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Проверяем, доступна ли функция getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const video = document.getElementById('video');
        const captureBtn = document.getElementById('capture-btn');

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(err => {
                console.error('Error accessing webcam:', err);
            });

        captureBtn.addEventListener('click', function() {
            // Обработчик для снятия скриншота
        });
    } else {
        console.error('getUserMedia is not available');
    }
});


