    import throttle from 'lodash.throttle';
    const feedbackForm = document.querySelector('.feedback-form');
    const emailField = feedbackForm.querySelector('input[name="email"]');
    const messageField = feedbackForm.querySelector('textarea[name="message"]');

    const storageKey = 'feedbackState';

    const storeFeedbackData = throttle(() => {
        const feedbackData = {
            email: emailField.value,
            message: messageField.value
        };
        localStorage.setItem(storageKey, JSON.stringify(feedbackData));
    }, 500);

    const loadFeedbackData = () => {
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            const feedbackData = JSON.parse(savedData);
            emailField.value = feedbackData.email || '';
            messageField.value = feedbackData.message || '';
        }
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const currentFeedback = {
            email: emailField.value,
            message: messageField.value
        };
        console.log(currentFeedback);

        localStorage.removeItem(storageKey);
        feedbackForm.reset();
    };

    loadFeedbackData();
    emailField.addEventListener('input', storeFeedbackData);
    messageField.addEventListener('input', storeFeedbackData);
    feedbackForm.addEventListener('submit', handleFormSubmit);
;
