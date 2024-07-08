const divForImg = document.getElementById("img-box");
//enter your api key where it says YOUR_ACCESS_KEY
const requestOne = "https://api.unsplash.com/search/photos?page=1&query=&client_id=u5Q7KR-udGpEt259UTNIYAuWjHOhAgKGVzEMECRXp0c";
const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=u5Q7KR-udGpEt259UTNIYAuWjHOhAgKGVzEMECRXp0c"
function makeRequestToUnsplash(requestUrl){
  fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {
    //we are actually using the returned data from the API here
    // data.results contains an array of objects so we can use an array method here to iterate
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    });
}
// the function createImage() below is a helper function used to generate an image tag for use in our web page
function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  // styling for the elements
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;const divForImg = document.getElementById("img-box");
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  
  const UNSPLASH_ACCESS_KEY = "u5Q7KR-udGpEt259UTNIYAuWjHOhAgKGVzEMECRXp0c";
  
  function makeRequestToUnsplash(query) {
    const requestUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`;
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => {
        divForImg.innerHTML = ""; // Clear previous images
        data.results.forEach(imageObj => {
          createImage(imageObj);
        });
      });
  }
  
  function createImage(imageObj) {
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
  
    // Styling for the elements
    image.src = imageObj.urls.regular;
    image.alt = imageObj.alt_description;
    image.style.margin = "20px";
    image.style.width = "600px";
    image.style.height = "500px";
    image.style.border = "double 4px black";
  
    imageDiv.append(image);
    divForImg.append(imageDiv);
  }
  
  // Event listener for the search button
  searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    if (query) {
      makeRequestToUnsplash(query);
    }
  });
  
  // Initial load with a default search term
  makeRequestToUnsplash("expensive-cars");
  
  image.style.margin = "20px";
  image.style.width = "600px";
  image.style.height = "500px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}
//each call to makeRequestToUnsplash() returns data with 10 images in it
//so I make two calls to it to get 20 images to populate the page with images
makeRequestToUnsplash(requestOne);
makeRequestToUnsplash(requestTwo);