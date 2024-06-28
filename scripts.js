function sendMail() {
    let parms = {
       name : document.getElementById("name").value,
       email: document.getElementById("email").value,
       message: document.getElementById("message").value, 
    }

    emailjs.send("service_l8vdp04", "template_2k0insb", parms).then(alert("Email Sent!!!"))
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
    
    this.reset();
});
