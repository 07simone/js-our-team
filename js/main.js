const team = [
{
    name: 'Wayne Barnett', 
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
},
{
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
},
];


for(let key in team){
    console.log(team[key]);
}  
/* console.log(team) */
console.log(team[1].name)

document.getElementById("descrizione").innerHTML = (team[0].name + team[0].role);
document.getElementById("descrizione2").innerHTML= (team[1].name + team[1].role);
document.getElementById("descrizione3").innerHTML= (team[2].name + team[2].role);