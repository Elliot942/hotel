function showNavBar() {
    let navbar = document.getElementById("navBar")
    let button = document.getElementById("navBarButtonImg")
    if (navbar.style.right == "-128.312px") {
        navbar.style.right = "0"
        button.style.rotate = "180deg"
    }
    else {
        navbar.style.right = "-128.312px"
        button.style.rotate = "0deg"
    }
}