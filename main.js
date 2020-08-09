let userName = document.querySelector(".user-name")

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
}