const API = "https://v1.nocodeapi.com/veyselg/medium/yspgdFwfJRQcYUGJ";

const main = document.getElementById("main");

async function getProfil()
{
    const profil = await fetch(API);
    const ProfilData = await profil.json();

getprofiluser(ProfilData);
var array=[];

for (var i = 0; i <ProfilData.length;i++){

  
    
const blog = document.createElement("div");
blog.classList.add("blog");
blog.innerHTML= `

<img src="/BitirmeProjesi.png">
<div class="blogs">
<h1>${ProfilData[i].creator} </h1>
<h3>${ProfilData[i].title}</h3>
</div>
<a href="${ProfilData[i].link}">Sayfaya Git</a>

`;

main.appendChild(blog)
    

// var  blogs = `

// <div class = "container">
// <div class ="blog">
// <h2>${ProfilData[i].creator}</h2>
// <div>
// ${ProfilData[i].title}
// </div>

// </div>
// </div

// `


}
}



// main.innerHTML = blogs;

function getprofiluser(profil)
{


    console.log(profil);
}
getProfil();