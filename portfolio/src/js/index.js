const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Snowflake {
    constructor(x, y, radius, speed, angle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = angle;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.y > canvas.height + this.radius) {
            this.y = -this.radius;
        }
    }
}

const snowflakes = [];

function init() {
    let numSnowflakes = 100;
    if (window.innerWidth <= 768) {
        numSnowflakes = 50;
    }
    for (let i = 0; i < numSnowflakes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 2;
        const speed = Math.random() * 2 + 1;
        const angle = Math.random() * 2 * Math.PI;
        snowflakes.push(new Snowflake(x, y, radius, speed, angle));
    }
}

function animate() {
    requestAnimationFrame(animate);
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
    });
}

init();
animate();

function launchRocket() {
    let rocket = document.getElementById("rocket");
    rocket.style.animationPlayState = "running";

    rocket.addEventListener("animationend", function() {
        window.location.href = "home.html";
    });
}

const rocket = document.getElementById("rocket");
rocket.addEventListener("click", navigateToHome);

function navigateToHome() {
    window.location.href = "home.html";
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

