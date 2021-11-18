document.addEventListener("DOMContentLoaded", () => {
    let user;
    try{
       user = JSON.parse(localStorage.getItem("ewauser"))
    } catch (error) {
        console.log(error)
    }

    let userElement = document.getElementById("ewauser")
    let { first_name } = user
    console.log(first_name)
    userElement.textContent = `Hey ${first_name}`
})
