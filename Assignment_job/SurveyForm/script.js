document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const results = document.getElementById('results');
    
    const successToast = document.getElementById('success-toast');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
        const firstName = document.getElementById('first-name').value;
        const isFirstTime = document.querySelector('input[name="first-time"]:checked').value;
        const suggest  = document.querySelector('input[name="suggest"]:checked').value;
        const satisfied  = document.querySelector('input[name="satisfied"]:checked').value;
        const suggestions = document.getElementById('suggestions').value;
        const email = document.getElementById('email').value;

        const resultText = `
            <p><strong>Full Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Is this your first time using our service?:</strong> ${isFirstTime}</p>
            <p><strong>Would you suggest to your friends and colleagues?:</strong> ${suggest}</p>
            <p><strong>How satisfied are you with our company overall?:</strong> ${satisfied}</p>
            <p><strong>Do you have any Suggestions to Improve our Services:</strong> ${suggestions}</p>
        `;
        results.innerHTML = resultText;

        
        popup.style.display = 'block';

        
    });

    closePopup.addEventListener('click', function () {
        // popup band
        popup.style.display = 'none';

        //toaster chalu
        successToast.style.display = 'block';
        setTimeout(function () {
            successToast.style.display = 'none';
        }, 3000);

        // Reset  form
        form.reset();
        // empty form
        results.innerHTML = '';
    });
});

document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('survey-form').reset();
});
