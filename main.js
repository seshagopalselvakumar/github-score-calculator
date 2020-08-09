let userName = document.querySelector(".user-name")
let userImage = document.querySelector(".user-image")
let userDetails = document.querySelector(".user-details")
findUser = ()=>{
    let usernameValue = document.getElementById("usernameVal").value;
    let url = `https://api.github.com/users/${usernameValue}`
    fetch(url)
        .then((response)=>{
            Promise.resolve(response.json()).then((value)=>{
                calculateScore(value)
            })
        })
        .catch((error)=>{
            console.log("error", error)
        })
}

calculateScore = (val)=>{
    console.log("valeu", val)
    userName.innerHTML = val.name
    userImage.src = val.avatar_url
    userDetails.style.display = "inline-block"
}