
    const name= document.getElementById('name');
    const surname= document.getElementById('surname');
    const email= document.getElementById('email');
    const contact= document.getElementById('contact');

    
    // Function to show the pop-up
    function showPopup() {
        popup.style.display = 'block'; // Show the pop-up
        overlay.style.display = 'block'; // Show the overlay
    }

    // Function to hide the pop-up
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the pop-up
        overlay.style.display = 'none'; // Hide the overlay
    });

    // Optionally hide the pop-up if the user clicks outside of it
    overlay.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the pop-up
        overlay.style.display = 'none'; // Hide the overlay
    });

    const submitBtn = document.querySelector('.submit-btn');
    const modal = document.getElementById('popupModal');
    const closeBtn = document.querySelector('.close-btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        modal.style.display = 'block'; // Show modal
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide modal
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });