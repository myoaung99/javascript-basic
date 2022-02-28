const imgContainer = document.querySelector("#img-container");
const form = document.querySelector("#search-form");
const searchResultText = document.querySelector("#search-result-text");

const fetchMovie = async(query)=>{
  try{const searchTerm = query;
  const config = {params: {q: searchTerm}}
  const res = await axios.get('https://api.tvmaze.com/search/shows', config);
  console.log(res.data);
  showImg(res.data);
  showText(query,res.data);}
  catch(e){
    searchResultText.innerHTML = " ";
    searchResultText.innerHTML = `<h4>Cannot Connect. Connection timeout :(`
  }
  
}

const showImg = (movies)=>{
  imgContainer.innerHTML = '';

  for(result of movies){
    if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        img.classList.add('resultImg')
        imgContainer.append(img)
    }
  }
}

const showText = (query, data)=>{
  if(data.length <= 0){
    const h4 = document.createElement('H4');
    searchResultText.innerHTML = " ";
    h4.innerHTML = `No Result For : ${query}`;
    searchResultText.append(h4);
  }else{
    const h4 = document.createElement('H4');
    searchResultText.innerHTML = " ";
    h4.innerHTML = `Search result for : ${query}`;
    searchResultText.append(h4);
  }
    
}

form.addEventListener('submit',async (e)=>{
  e.preventDefault();
  let input = document.querySelector("[name=query]");
  const query = input.value;
  await fetchMovie(query);
  input.value = "";
})