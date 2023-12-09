const btnEl = document.getElementById("btn");
const emojiNameEl = document.querySelector(".emoji-name");


const emoji = [];


async function getEmoji() {
    let response = await axios.get("https://emoji-api.com/emojis?access_key=8bb4a04bdca3fc20a0ae51ab7938794af5b95dc2")
    
    // console.log(response.data);
    
    for (let i = 0; i < 1500; i++) {
         emoji.push ({
            emojiName: response.data[i].character,
            emojiCode: response.data[i].unicodeName,
         });    
    }
}

getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerHTML = emoji[randomNum].emojiName;
    emojiNameEl.textContent = emoji[randomNum].emojiCode;
});
