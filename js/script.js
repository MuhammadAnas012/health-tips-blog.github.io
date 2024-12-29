
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        document.getElementById('formMessage').textContent = "All fields are required!";
        document.getElementById('formMessage').style.color = "red";
        return false;
    } else {
        document.getElementById('formMessage').textContent = "Thank you for your message!";
        document.getElementById('formMessage').style.color = "green";
        return true;
    }
}
