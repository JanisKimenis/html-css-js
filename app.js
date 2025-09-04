function numbersFunc(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
function callNameFunc(){
        console.log("Jānis");
}
const firstParagraph = document.querySelector(".firstP");
const myForm = document.getElementById('myForm');

      myForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {};

        // Get value from text, email, textarea, date inputs, and select
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.review = document.getElementById('review').value;
        formData.date = document.getElementById('date').value;
        formData.level = document.getElementById('level').value; // Value of the selected option

        // Handle radio buttons (gender)
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        formData.gender = selectedGender ? selectedGender.value : 'Not selected'; // Get value if checked, else 'Not selected'

        // Handle checkbox (wantEmail)
        formData.wantEmail = document.getElementById('wantEmail').checked; // true or false

        console.log('--- Form Data Collected ---');
        console.log(formData);
        console.log('---------------------------');

        // Optional: Reset the form fields
        myForm.reset();
        alert('Form submitted! Check your browser console for the data.');
      });