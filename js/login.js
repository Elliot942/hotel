if (localStorage.getItem('prenotazione')) {
    let data = JSON.parse(localStorage.getItem('prenotazione'))
    document.getElementById("loggedEmail").textContent = data.email
    document.getElementById("booked").style.display = "flex"
    document.getElementById("booking").style.display = "none"
    document.getElementById("reservationInfo").textContent = `Email: ${data.email}
    Ospiti: ${data.guests}
    Suite: ${data.guestsSuite}
    Standard: ${data.guestsStandard}`
}
else {
    document.getElementById("booked").style.display = "none"
    document.getElementById("booking").style.display = "flex"
}
function saveData() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let guests = document.getElementById("guests").value
    let guestsSuite = document.getElementById("guestsSuite").value
    let guestsStandard = document.getElementById("guestsStandard").value
    var data = {
        email: email,
        password: password,
        guests: guests,
        guestsSuite: guestsSuite,
        guestsStandard: guestsStandard
    }
    localStorage.setItem('prenotazione', JSON.stringify(data))
    location.reload()
}