document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Obfuscated Email logic
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
        const user = 'mybbor';
        const domain = 'gmail.com';
        const em = user + '@' + domain;

        const envelopeIcon = '<svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">'
            + '<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>'
            + '</svg>';

        const link = document.createElement('a');
        link.href = 'mailto:' + em;
        link.className = 'contact-link';
        link.innerHTML = envelopeIcon + ' Contact Me';

        contactContainer.appendChild(link);
    }
});
