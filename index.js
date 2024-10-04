// Your API key
const API_KEY = 'AIzaSyDv2yQ9W5-M4sWeBI3jW2lByMPW85TIMDE';

// Search term and endpoint
var searchInput=document.querySelector(".search-box input");
var search=document.querySelector(".search-box img");
var rightbar=document.querySelector(".right-sidebar");
var animation=document.querySelector(".video-sec");
search.addEventListener("click",()=>{
    const searchTerm = searchInput.value;
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${API_KEY}&maxResults=18`;
    fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data.items); // Array of video results
    rightbar.innerHTML="";
let videos=data.items;
videos.map((video)=>{
  const iframeHTML = `
                    <iframe height="515" src="https://www.youtube.com/embed/${video.id.videoId}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
                animation.innerHTML=iframeHTML + `<div class="tags">
                    <a href="">#Adventure </a>  <a href="">#WanderLust </a>  <a href="">#SoloTravel </a>  <a href="">#Excitement </a>
                </div>
                <h3>${video.snippet.title}</h3>
                <div class="video-details">
                    <p>1M Views &bull; ${video.snippet.publishTime}</p>
                    <div>
                        <a><img src="./Assets/like.png">2.5K</a>
                        <a><img src="./Assets/dislike.png">238</a>
                        <a><img src="./Assets/share.png">Share</a>
                        <a><img src="./Assets/save.png">Save</a>
                    </div>
                </div>
                <hr>
                <div class="channel-desc">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png">
                    <div>
                        <p>${video.snippet.channelTitle}</p>
                        <span>20M Subscribers</span>
                    </div>
                    <button type="button">Subscribe</button>
                </div>
                <div class="video-desc">
                    <p>${video.snippet.description}</p>
                   
                    <hr>
                    <h4>99 Comments</h4>

                    <div class="comments">
                        <img src="./Assets/ronnie.jpg">
                        <input type="text" placeholder="Add a comment...">
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/megan.png">
                        <div>
                            <h3>Megan Smith <span>5 minutes ago</span></h3>
                            <p>Travelling is an art and you have mastered it.From bustling cities to tranquil escapes, let’s wander, explore, and make memories together!
                                Hoping for more such fascinating vlogs &hearts;&hearts;</p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>28</span>
                                    <img src="./Assets/dislike.png">
                                    <span>3</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/gerard.png">
                        <div>
                            <h3>Gerard Pique <span>2 hours ago</span></h3>
                            <p>Traveling is about the journey, the people you meet, the experiences you gain, and the stories you create.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>8</span>
                                    <img src="./Assets/dislike.png">
                                    <span>1</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyWBveSevZmToFDPmMf5Jl7Q5Yzb9JgkkUw&s">
                        <div>
                            <h3>Thomas Shelby<span>9 days ago</span></h3>
                            <p>I need six months of vacation, twice a year.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>738</span>
                                    <img src="./Assets/dislike.png">
                                    <span>51</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyWBveSevZmToFDPmMf5Jl7Q5Yzb9JgkkUw&s">
                        <div>
                            <h3>Thomas Shelby<span>9 days ago</span></h3>
                            <p>I need six months of vacation, twice a year.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>738</span>
                                    <img src="./Assets/dislike.png">
                                    <span>51</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyWBveSevZmToFDPmMf5Jl7Q5Yzb9JgkkUw&s">
                        <div>
                            <h3>Thomas Shelby<span>9 days ago</span></h3>
                            <p>I need six months of vacation, twice a year.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>738</span>
                                    <img src="./Assets/dislike.png">
                                    <span>51</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/megan.png">
                        <div>
                            <h3>Megan Smith <span>5 minutes ago</span></h3>
                            <p>Travelling is an art and you have mastered it.From bustling cities to tranquil escapes, let’s wander, explore, and make memories together!
                                Hoping for more such fascinating vlogs &hearts;&hearts;</p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>28</span>
                                    <img src="./Assets/dislike.png">
                                    <span>3</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/gerard.png">
                        <div>
                            <h3>Gerard Pique <span>2 hours ago</span></h3>
                            <p>Traveling is about the journey, the people you meet, the experiences you gain, and the stories you create.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>8</span>
                                    <img src="./Assets/dislike.png">
                                    <span>1</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div> `;
  
    let dp=document.createElement("div");
    dp.classList.add("side-list");
    let html=`<a onclick=videoLoad("${video.id.videoId}") class="small-thumbnail"><img src="${video.snippet.thumbnails.high.url}"></a>
                    <div class="vid-info">
                        <a href="">${video.snippet.title}</a>
                        <p>${video.snippet.channelTitle}</p>
                        <p>${video.snippet.publishTime}</p>
                    </div>`;
                    dp.innerHTML=html;
                    rightbar.appendChild(dp);
})

  })
  .catch(error => {
    console.error('Error fetching YouTube data:', error);
  });
 });

 function videoLoad(inputdata){
    const jframe=`
                    <iframe height="515" src="https://www.youtube.com/embed/${inputdata}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
                animation.innerHTML=jframe+ ` <div class="tags">
                    <a href="">#Adventure </a>  <a href="">#WanderLust </a>  <a href="">#SoloTravel </a>  <a href="">#Excitement </a>
                </div>
                <h3>Best Vlogging Channel where you can experience the pleasure of the nature</h3>
                <div class="video-details">
                    <p>1M Views &bull;  1 month ago</p>
                    <div>
                        <a><img src="./Assets/like.png">2.5K</a>
                        <a><img src="./Assets/dislike.png">238</a>
                        <a><img src="./Assets/share.png">Share</a>
                        <a><img src="./Assets/save.png">Save</a>
                    </div>
                </div>
                <hr>
                <div class="channel-desc">
                    <img src="./Assets/cameron.png">
                    <div>
                        <p>Cameron Green</p>
                        <span>20M Subscribers</span>
                    </div>
                    <button type="button">Subscribe</button>
                </div>
                <div class="video-desc">
                    <p>Best Channel For Watching Solo Adventure</p>
                    <p>Subscribe this channel to get updates on my Latest Vlogs</p>
                    <hr>
                    <h4>99 Comments</h4>
                    <div class="comments">
                        <img src="./Assets/ronnie.jpg">
                        <input type="text" placeholder="Add a comment...">
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/megan.png">
                        <div>
                            <h3>Megan Smith <span>5 minutes ago</span></h3>
                            <p>Travelling is an art and you have mastered it.From bustling cities to tranquil escapes, let’s wander, explore, and make memories together!
                                Hoping for more such fascinating vlogs &hearts;&hearts;</p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>28</span>
                                    <img src="./Assets/dislike.png">
                                    <span>3</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/gerard.png">
                        <div>
                            <h3>Gerard Pique <span>2 hours ago</span></h3>
                            <p>Traveling is about the journey, the people you meet, the experiences you gain, and the stories you create.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>8</span>
                                    <img src="./Assets/dislike.png">
                                    <span>1</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                  <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyWBveSevZmToFDPmMf5Jl7Q5Yzb9JgkkUw&s">
                        <div>
                            <h3>Thomas Shelby<span>9 days ago</span></h3>
                            <p>I need six months of vacation, twice a year.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>738</span>
                                    <img src="./Assets/dislike.png">
                                    <span>51</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                    <div class="old-comments">
                        <img src="https://thelocalbrief.com/wp-content/uploads/2023/10/rachin-ravindra.png">
                        <div>
                            <h3>Rachin Ravindra<span>21 hours ago</span></h3>
                            <p>When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>77</span>
                                    <img src="./Assets/dislike.png">
                                    <span>5</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>
                     <div class="old-comments">
                        <img src="./Assets/simon.png">
                        <div>
                            <h3>Simon Clarke <span>3 weeks ago</span></h3>
                            <p>Travel opens the mind and enriches the soul, offering a sense of freedom and exploration. Whether you’re wandering through bustling cities or serene landscapes, each trip is an opportunity for growth, reflection, and connection.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>189</span>
                                    <img src="./Assets/dislike.png">
                                    <span>53</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                                </div>
                    </div>
                   <div class="old-comments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOjRHJRtq-vlzqdGJrV2PCGP_a7_rzFpQEw&s">
                        <div>
                            <h3>Theodor Schwann<span>1 minute ago</span></h3>
                            <p>The worst thing about being a tourist is having other tourists recognize you as a tourist.Travel becomes a strategy for accumulating photographs.

                            </p>
                                <div class="comment-action">
                                    <img src="./Assets/like.png">
                                    <span>5</span>
                                    <img src="./Assets/dislike.png">
                                    <span>0</span>
                                    <span>REPLY</span>
                                    <a href="">All Replies</a>
                                </div>
                        </div>
                    </div>`;
 }


// Fetch data from YouTube API

