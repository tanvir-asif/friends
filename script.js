function loadfriends(){
    fetch("https://randomuser.me/api/?results=15")
    .then(res=> res.json())
    .then(data=>friends(data))
}


function friends(data){
    const result= data.results;
    const main= document.getElementById("main");
    for(let user of result){
        console.log(user)
        const div = document.createElement("div");
        div.style.display="flex";
        div.innerHTML= `
        <div class="img"><img src=${user.picture.large}></div>
        <div class="info">
            <h2>${user.name.title} ${user.name.last}, ${user.name.first}</h2>
            <h3>${user.login.username}</h3>
            <h3>${user.email}</h3>
            <h3>${user.phone}</h3>
        </div>
        `;
        main.appendChild(div)

        

        
    }
}

loadfriends()