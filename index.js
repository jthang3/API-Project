const api = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";

//getting elements from html
let teamName = document.querySelector("#team");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

//creating even handler
btn.addEventListener("click",(e)=>{
    getCurrent(e);
},false);


let getCurrent = (e)=>{
    //prevent POST HTTP
    e.preventDefault();

    const newApi = `${api}?t=${teamName.value}`;
    fetch(newApi)
    .then((value)=>{
        return value.json();
    })
    .then((value)=>{
        doSomething(value.teams[0]);
    })
    .catch(console.log);
}
let doSomething = (jasonData)=>{
    console.log(jasonData.strTeamLogo);
    let imgSource = "https://www.thesportsdb.com/"+jasonData.strTeamLogo+".url";
    console.log(imgSource);
    result.style.backgroundImage = "url('imgSource')";
}