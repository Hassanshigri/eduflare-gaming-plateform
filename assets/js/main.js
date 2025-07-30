document.addEventListener('DOMContentLoaded', () => {
    // Cookie Consent
    window.acceptCookies = () => {
        console.log('Cookies accepted');
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieConsent').classList.add('hidden');
    };

    window.declineCookies = () => {
        console.log('Cookies declined');
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookieConsent').classList.add('hidden');
    };

    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').classList.remove('hidden');
    }

    // User Login Status
    const userSection = document.getElementById('userSection');
    const authSection = document.getElementById('authSection');
    const userName = document.getElementById('userName');
    let user;
    try {
        user = JSON.parse(localStorage.getItem('user'));
        console.log('User data loaded:', user);
    } catch (e) {
        console.error('Error parsing user data:', e);
        user = null;
    }
    if (user && user.name && user.email) {
        userSection.classList.remove('hidden');
        authSection.classList.add('hidden');
        userName.textContent = `Welcome, ${user.name}`;
    } else {
        userSection.classList.add('hidden');
        authSection.classList.remove('hidden');
    }

    window.logout = () => {
        console.log('Logging out');
        localStorage.removeItem('user');
        window.location.reload();
    };

    // Mobile Menu Toggle (Placeholder)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Mobile menu toggled');
        // Add mobile menu dropdown logic if needed
    });
});