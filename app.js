var menuList=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var content=document.querySelector(".container");
var list=document.querySelector(".list-container");
var banner=document.querySelector(".banner");



menuList.addEventListener("click",()=>{
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-container");
});


const API_KEY = 'AIzaSyDv2yQ9W5-M4sWeBI3jW2lByMPW85TIMDE';

// Search term and endpoint
var searchInput=document.querySelector(".search-box input");
var search=document.querySelector(".search-box img");
var rightbar=document.querySelector(".list-container");
search.addEventListener("click",()=>{
    const searchTerm = searchInput.value;
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${API_KEY}&maxResults=50`;
    fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data.items); // Array of video results
    rightbar.innerHTML="";
let videos=data.items;
videos.map((video)=>{
    let dp=document.createElement("div");
    dp.classList.add("vid-list");
    let html=` <a href="about.html"><img src="${video.snippet.thumbnails.high.url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png">
                <div class="vid-info">
                    <a href="about.html">${video.snippet.title}</a>
                    <p>${video.snippet.channelTitle}</p>
                    <p>${video.snippet.publishTime}</p>
                </div>
            </div>`;
                    dp.innerHTML=html;
                    rightbar.appendChild(dp);
})

  })
  .catch(error => {
    console.error('Error fetching YouTube data:', error);
  });
  
 });





