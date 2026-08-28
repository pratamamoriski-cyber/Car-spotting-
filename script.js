const cars = [
{
brand:"McLaren",
model:"Senna",
year:"2019",
score:99,
tier:"Mythic",
image:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
},
{
brand:"Porsche",
model:"911 GT3 RS",
year:"2023",
score:95,
tier:"Legend",
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
},
{
brand:"BMW",
model:"M4 Competition",
year:"2022",
score:84,
tier:"Epic",
image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
},
{
brand:"Toyota",
model:"Fortuner GR",
year:"2024",
score:70,
tier:"Elite",
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d?w=800"
}
];

const collection=document.getElementById("collection");

function badgeColor(tier){

if(tier=="Mythic") return "mythic";
if(tier=="Legend") return "legend";
if(tier=="Epic") return "epic";

return "elite";

}

function renderCars(){

collection.innerHTML="";

let mythic=0;
let legend=0;
let epic=0;
let elite=0;

cars.forEach(car=>{

if(car.tier=="Mythic") mythic++;
if(car.tier=="Legend") legend++;
if(car.tier=="Epic") epic++;
if(car.tier=="Elite") elite++;

collection.innerHTML+=`

<div class="carCard ${badgeColor(car.tier)}">

<img src="${car.image}">

<div class="carInfo">

<h3>${car.brand}</h3>

<p>${car.model}</p>

<p>${car.year}</p>

<span class="badge ${badgeColor(car.tier)}">

${car.tier}

</span>

</div>

</div>

`;

});

document.getElementById("totalCars").innerHTML=cars.length;
document.getElementById("mythic").innerHTML=mythic;
document.getElementById("legend").innerHTML=legend;
document.getElementById("epic").innerHTML=epic;
document.getElementById("elite").innerHTML=elite;

}

renderCars();

document.getElementById("scanBtn").onclick=function(){

const random=cars[Math.floor(Math.random()*cars.length)];

document.getElementById("brand").innerHTML=random.brand;
document.getElementById("model").innerHTML=random.model;
document.getElementById("year").innerHTML=random.year;
document.getElementById("score").innerHTML=random.score+"/100";
document.getElementById("tier").innerHTML=random.tier;

alert("✅ AI berhasil mendeteksi "+random.brand+" "+random.model);

};

const filter=document.querySelectorAll(".filterBtn");

filter.forEach(btn=>{

btn.onclick=function(){

filter.forEach(b=>b.classList.remove("active"));

this.classList.add("active");

const text=this.innerText;

collection.innerHTML="";

cars.forEach(car=>{

if(text=="All" || car.tier==text){

collection.innerHTML+=`

<div class="carCard ${badgeColor(car.tier)}">

<img src="${car.image}">

<div class="carInfo">

<h3>${car.brand}</h3>

<p>${car.model}</p>

<p>${car.year}</p>

<span class="badge ${badgeColor(car.tier)}">

${car.tier}

</span>

</div>

</div>

`;

}

});

}

});