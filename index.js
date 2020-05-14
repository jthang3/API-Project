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

        //adding api ending to find specific information
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
    //removing any child from reult.
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }


    //retrieving data from API.
    let imgSource = jasonData.strTeamLogo;
    result.style.backgroundImage = `url(${ imgSource })`;
    let displayTeamName = jasonData.strTeam;
    let teamCountry = jasonData.strCountry;
    let teamStatium = jasonData.strStadium;
    let teamLocation = jasonData.strStadiumLocation;
    let teamLeague = jasonData.strLeague;
    let myTeam = [displayTeamName,teamCountry,teamStatium,teamLocation,teamLeague];
    

    //displaying data from api to the page.
    let mainDisplay = document.createElement("ul");
    for(let i in myTeam){
        let intro;
        if(i == 0){
            intro = "Team Name: ";
        }
        else if(i == 1){
            intro = "Team Country: ";
        }
        else if(i == 2){
            intro = "Stadium: ";
        }
        else if(i == 3){
            intro = "Location: ";
        }
        else{
            intro = "Current League: ";
        }
        let current = myTeam[i];
        let newChild = document.createElement("li");
        newChild.innerHTML = `<h3>${intro}${current}</h3>`;
        mainDisplay.appendChild(newChild);
    }
    result.appendChild(mainDisplay);
}