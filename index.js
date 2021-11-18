// console.log(document.getElementsByTagName("Body")[0].innerHTML)

function manipulator(){

    let registerObject = {}
    let loginObject = {}


    //Button elements
    function confirmRegistration() {
        if(Object.keys(registerObject).length === 4){
            try{
                let userRepository = localStorage.getItem("ewaUsers")
                if(userRepository === null){
                    let repository = [registerObject]
                    localStorage.setItem("ewaUsers", JSON.stringify(repository))
                }else{
                    let previousRepository = JSON.parse(userRepository)
                    let updatedRepository = [...previousRepository, registerObject]
                    localStorage.setItem("ewaUsers", JSON.stringify(updatedRepository))
                }
            } catch(error){
                console.log(error)
            }
        } else {
            alert("Incomplete user info")
        }
    }

    if(document.getElementsByClassName('register_btn').length > 0){
        let button = document.getElementsByClassName('register_btn')[0]
        button.addEventListener("click", () => confirmRegistration())
    }

    //Input fields
    function handleInputChange(e){
        registerObject = { ...registerObject, [e.target.name]: e.target.value }
    }

    function handleLoginChange(e){
        loginObject = { ...loginObject, [e.target.name]: e.target.value }
        console.log(loginObject)
    }

    if(document.getElementsByClassName('register_btn').length> 0 ){
        let registerInputFields = document.getElementsByClassName('register_input')
        Array.from(registerInputFields).forEach((inputField) => 
            inputField.addEventListener('input', (e) => handleInputChange(e)))
    }

    if(document.getElementsByClassName('login_input').length > 0){
        let loginInputFields = document.getElementsByClassName('login_input')
        Array.from(loginInputFields).forEach((inputField) => 
            inputField.addEventListener('input', (e) => handleLoginChange(e)))
    }


function confirmLogin(){
    let userRepository = JSON.parse(localStorage.getItem("ewaUsers"))
    let { email, password } = loginObject
    console.log(email,password)
    let userObject = userRepository.find(user => user.email === email)
        if (userRepository.findIndex(user => user.email === email) !== -1){
            if(userObject.password === password){
            localStorage.setItem("ewauser", JSON.stringify(userObject))
            location.href = "home.html"
        } else {
            alert('Please enter a correct password')
        }
    }else{
        alert('User Does Not Exist')
    }
}

    if(document.getElementsByClassName('login_btn').length > 0){
    let loginButton = document.getElementsByClassName('login_btn')[0]
    loginButton.addEventListener("click", () => confirmLogin())
    }

}

document.addEventListener("DOMContentLoaded", manipulator)
