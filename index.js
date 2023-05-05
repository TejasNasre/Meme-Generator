const generatorMemeBtn = document.querySelector(".meme-generator");

const memeImage =document.querySelector(".meme-generator img");

const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url,title,author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By: ${author}`;
}
const generateMeme = () =>{
    fetch(" https://meme-api.com/gimme/NSFWMemes")
    .then((response) => response.json())
    .then((data)=> {
        updateDetails(data.url, data.title, data.author);
    });
};

generatorMemeBtn.addEventListener("click", generateMeme);