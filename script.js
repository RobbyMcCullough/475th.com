document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const greetingElement = document.getElementById('greeting');
    const yearElement = document.getElementById('year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    function updateTimeAndGreeting() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}`;
        }

        const hour = now.getHours();
        let greeting = 'Good Evening';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon';
        }

        if (greetingElement) {
            greetingElement.textContent = greeting;
        }
    }

    updateTimeAndGreeting();

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    setTimeout(() => {
        updateTimeAndGreeting();
        setInterval(updateTimeAndGreeting, 60000);
    }, msUntilNextMinute);

    // Obfuscated Email logic
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
        const user = 'mybbor';
        const domain = 'gmail.com';
        const em = user + '@' + domain;

        const link = document.createElement('a');
        link.href = 'mailto:' + em;
        link.className = 'contact-link';
        link.innerHTML = '<i class="ph ph-envelope-simple"></i> Contact Me';

        contactContainer.appendChild(link);
    }
});
