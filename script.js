const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '40px';
        cursorGlow.style.height = '40px';
        cursorGlow.style.background = 'rgba(52, 152, 219, 0.3)';
    });
    el.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '20px';
        cursorGlow.style.height = '20px';
        cursorGlow.style.background = 'rgba(52, 152, 219, 0.3)';
    });
});
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
    preloader.classList.add('hidden');
}, 700);
});
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = document.getElementById('home').offsetHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}<>/;=+-*";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 40);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = document.getElementById('home').offsetHeight;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = document.getElementById('home').offsetHeight;
});const typingText = ["Computer Engineering Diploma Graduate", "Web Developer", "Python Programmer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById('typing');

function typeEffect() {
    if (charIndex < typingText[textIndex].length) {
        typingElement.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();
const toggleBtn = document.getElementById('modeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => appearOnScroll.observe(fader));
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
function fillIcons(containerId, iconClasses, count) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < count; i++) {
        const icon = document.createElement('i');
        icon.className = iconClasses[Math.floor(Math.random() * iconClasses.length)];
        icon.style.top = Math.random() * 90 + '%';
        icon.style.left = Math.random() * 95 + '%';
        icon.style.fontSize = (Math.random() * 30 + 25) + 'px';
        icon.style.animationDuration = (Math.random() * 8 + 6) + 's';
        icon.style.animationDelay = (Math.random() * 4) + 's';
        container.appendChild(icon);
    }
}

fillIcons('about-icons', [
    'fa-solid fa-laptop-code',
    'fa-solid fa-bug',
    'fa-solid fa-mobile-screen',
    'fa-solid fa-code',
    'fa-solid fa-server',
    'fa-solid fa-terminal',
    'fa-solid fa-microchip',
    'fa-solid fa-wifi'
], 20);

fillIcons('skills-icons', [
    'fa-brands fa-html5',
    'fa-brands fa-css3-alt',
    'fa-brands fa-python',
    'fa-solid fa-database',
    'fa-solid fa-bug',
    'fa-solid fa-code-branch',
    'fa-solid fa-desktop',
    'fa-solid fa-laptop'
], 20);