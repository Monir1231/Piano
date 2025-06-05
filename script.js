

// এটা ক্লিক এবং কিবোর্ড প্রেসের জন্য আলাদা আলাদা প্রোগ্রাম করা হয়েছে
// It is programmed separately for clicks and keyboard presses.

 let clickbtn = document.querySelector("#click-btn")
  
document.addEventListener("keydown",(a)=>{
    const keyprassed = a.key
    console.log(keyprassed)

    const tune = new Audio(`./tunes/${keyprassed}.wav`)
    tune.play()

    const ClickButton = document.querySelector(`[data-key="${keyprassed}"]`)
      ClickButton.classList.add("active")

      setTimeout(()=>{
        ClickButton.classList.remove("active")
      },100)

       })

clickbtn.addEventListener("click",(e)=>{
    
    const ClickPrassed = e.target.getAttribute("data-key")
    console.log(ClickPrassed)

    
    const tune = new Audio(`./tunes/${ClickPrassed}.wav`)
    tune.play()

    const ClickButton = document.querySelector(`[data-key="${ClickPrassed}"]`)
      ClickButton.classList.add("active")

      setTimeout(()=>{
        ClickButton.classList.remove("active")
      },100)

    
    
})
   

// একটি কমন ফাংশন ব্যবহার করে প্রোগ্রাম করা হয়েছে | এটা সবচেয়ে বেটার ওয়েতে করা
// Programmed using a common function . This is the best way to do it

// function playTune(key) {
//     if (!key) return;

//     const tune = new Audio(`./tunes/${key}.wav`);
//     tune.play();

//     const ClickButton = document.querySelector(`[data-key="${key}"]`);
//     if (ClickButton) {
//         ClickButton.classList.add("active");
//         setTimeout(() => {
//             ClickButton.classList.remove("active");
//         }, 100);
//     }
// }

// document.addEventListener("keydown", (e) => {
//     playTune(e.key);
// });

// clickbtn.addEventListener("click", (e) => {
//     const key = e.target.getAttribute("data-key");
//     playTune(key);
// });


