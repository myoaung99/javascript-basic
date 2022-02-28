// const req = new XMLHttpRequest();

// req.onload = (function(){
//   console.log("ALL Done");
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// })

// req.onerror = (function(){
//   console.log('ERROR');
// })

// req.open('Get', 'https://api.tvmaze.com/singlesearch/shows?q=girls');
// req.send()

// fetch('https://api.tvmaze.com/singlesearch/shows?q=girls')
// .then(res => res.json())
// .then(data => console.log("The response " ,data));

// const getMovieData = async()=>{
//   const res = await fetch('https://api.tvmaze.com/singlesearch/shows?q=girls');
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
// }

// axios.get('https://api.tvmaze.com/singlesearch/shows?q=girls')
// .then(res=> console.log(res.data.genres));

// const fetchMovieData = async()=>{
//   try{
//      const res = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=girls');
//     console.log(res);
//   }
//   catch(e){
//     console.log(e);
//   }

// }

const ul = document.querySelector('#cars');
const btn = document.querySelector("button");


const addNewCar =async ()=>{
  const carName =  await fetchCarInfo();
  const li = document.createElement("li");
  li.innerText = carName;
  ul.append(li)
}

const fetchCarInfo = async () => {
  const rand = Math.floor(Math.random() * 10000);
  const res = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json");
  const newCar = res.data.Results[rand].Make_Name;
  return newCar;
}

btn.addEventListener('click',addNewCar)