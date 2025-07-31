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
    const authModal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const bookingModal = document.getElementById('bookingModal');
    const closeBookingModal = document.getElementById('closeBookingModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeConfirmationModal = document.getElementById('closeConfirmationModal');
    let user;
    let redirectParams = null;

    // Load user from localStorage
    function loadUser() {
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
    }

    // Show auth modal
    window.showAuthModal = (formType) => {
        authModal.classList.remove('hidden');
        toggleForm(formType);
    };

    // Close auth modal
    closeAuthModal.addEventListener('click', () => {
        authModal.classList.add('hidden');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // Toggle between login and register forms
    function toggleForm(formType) {
        if (formType === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
    }

    // Handle login
    window.handleLogin = () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        if (email && password) {
            // Mock login (replace with actual authentication logic)
            user = { name: email.split('@')[0], email };
            localStorage.setItem('user', JSON.stringify(user));
            authModal.classList.add('hidden');
            loadUser();
            if (redirectParams) {
                showBookingModal(redirectParams.coach, redirectParams.game);
            }
            // Clear form
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        } else {
            alert('Please fill in all fields');
        }
    };

    // Handle register
    window.handleRegister = () => {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        if (name && email && password) {
            // Mock register (replace with actual registration logic)
            user = { name, email };
            localStorage.setItem('user', JSON.stringify(user));
            authModal.classList.add('hidden');
            loadUser();
            if (redirectParams) {
                showBookingModal(redirectParams.coach, redirectParams.game);
            }
            // Clear form
            document.getElementById('registerName').value = '';
            document.getElementById('registerEmail').value = '';
            document.getElementById('registerPassword').value = '';
        } else {
            alert('Please fill in all fields');
        }
    };

    // Show booking modal
    function showBookingModal(coachName, game) {
        bookingModal.classList.remove('hidden');
        document.getElementById('coachName').textContent = `with ${coachName}`;
        document.getElementById('bookingName').value = user.name;
        document.getElementById('bookingEmail').value = user.email;
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('bookingDate').setAttribute('min', today);
        // Store coach and game for confirmation
        bookingModal.dataset.coach = coachName;
        bookingModal.dataset.game = game;
    }

    // Close booking modal
    closeBookingModal.addEventListener('click', () => {
        bookingModal.classList.add('hidden');
        // Clear form
        document.getElementById('bookingPhone').value = '';
        document.getElementById('bookingDate').value = '';
        document.getElementById('bookingComments').value = '';
    });

    // Confirm booking
    window.confirmBooking = () => {
        const phone = document.getElementById('bookingPhone').value;
        const date = document.getElementById('bookingDate').value;
        if (phone && date) {
            // Mock booking (replace with actual booking logic)
            console.log('Booking confirmed:', {
                coach: bookingModal.dataset.coach,
                game: bookingModal.dataset.game,
                name: user.name,
                email: user.email,
                phone,
                date,
                comments: document.getElementById('bookingComments').value
            });
            bookingModal.classList.add('hidden');
            confirmationModal.classList.remove('hidden');
            // Clear form
            document.getElementById('bookingPhone').value = '';
            document.getElementById('bookingDate').value = '';
            document.getElementById('bookingComments').value = '';
        } else {
            alert('Please fill in phone number and session date');
        }
    };

    // Close confirmation modal and redirect
    window.redirectToHome = () => {
        confirmationModal.classList.add('hidden');
        window.location.href = '/';
    };

    closeConfirmationModal.addEventListener('click', redirectToHome);

    // Book Coach
    window.bookCoach = (coachName, game) => {
        console.log(`Booking coach: ${coachName} for ${game}`);
        try {
            user = JSON.parse(localStorage.getItem('user'));
        } catch (e) {
            console.error('Error parsing user data:', e);
            user = null;
        }
        if (user && user.name && user.email) {
            showBookingModal(coachName, game);
        } else {
            redirectParams = { coach: coachName, game };
            showAuthModal('login');
        }
    };

    // Logout
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

    // Initialize user state
    loadUser();
});