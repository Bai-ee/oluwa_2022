const trackDir = "";
const bpm = 86;
const parts = [

    //3=2 7=4 31=16
    // { file: "5.wav", length: 4, loop: 0 }, 
    { file: "1.wav", length: 4, loop: 1 },
    { file: "2.wav", length: 4, loop: 1 },
    { file: "3.wav", length: 4, loop: 0 },
    { file: "4.wav", length: 4, loop: 0 },
    { file: "5.wav", length: 4, loop: 0 }, 
    { file: "6.wav", length: 4, loop: 0 },
    { file: "7.wav", length: 4, loop: 0 },
    { file: "8.wav", length: 4, loop: 1 },
    { file: "9.wav", length: 4, loop: 0 },
    { file: "10.wav", length: 4, loop: 0 }, 
    { file: "11.wav", length: 4, loop: 0 },
    { file: "12.wav", length: 4, loop: 1 },
    // { file: "13.wav", length: 6, loop: 0 },
    // { file: "14.wav", length: 1, loop: 4 },
    // { file: "15.wav", length: 2, loop: 0 },
    // { file: "16.wav", length: 2, loop: 0 },
    // { file: "17.wav", length: 4, loop: 0 },
    // { file: "18.wav", length: 1, loop: 0 },
    // { file: "19.wav", length: 4, loop: 1 },
    // { file: "20.wav", length: 2, loop: 32 },
    // { file: "21.wav", length: 2, loop: 4 },
    // { file: "22.wav", length: 2, loop: 0 },
    // { file: "23.wav", length: 4, loop: 0 },
    // { file: "24.wav", length: 2, loop: 0 },
    // { file: "25.wav", length: 4, loop: 0 },
    // { file: "26.wav", length: 8, loop: 1 },
    // { file: "27.wav", length: 4, loop: 32 },
    // { file: "28.wav", length: 4, loop: 4 },
    // { file: "29.wav", length: 2, loop: 0 },
    // { file: "30.wav", length: 2, loop: 0 },
];

const presets = [];
presets.push([    
1,
1,
1,
1,
1,
1,
1,
1,
// 0,(this is optional loop)
1,
// 0, (this is optional loop)
1,
1,
1,
1, 
1,
1,
1,
1,
1,
1,
1,
//21
4,
4,
2,
4,
2, 
1,   
2,  
2,
2,
2,
]);
presets.push([
    0,
    0,
    2,
    2,
    0,
    0,
    2,
    2,
    2,
    2,
    //11
    0,
    0,
    2,
    2,
    2,

    2,
    0,
    0,
    0,
    0,
    //21
    0,
    0,
    0,
    0,
    0, 
    0,   
    0,  
    0,
    0,
    0,
]);
presets.push([ 
    0,
    0,
    0,
    2,
    0,
    0,
    2,
    2,
    2,
    2,
    //11
    0,
    0,
    2,
    2,
    2,

    2,
    0,
    0,
    0,
    0,
    //21
    0,
    0,
    0,
    0,
    0, 
    0,   
    0,  
    0,
    0,
    0,
]);
presets.push([
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
]);
presets.push([
    0,0,0,0,0,

    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
]);
presets.push([
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
]);

console.log("PRODUCER: OLUWA OF SLUMGODS")
// console.log("LABEL: Housepit CHI | HPIT.info")
console.log("DEVELOPER: Bryan (Bai-ee) Balli / EditTrax 004")
console.log("ABOUT: EditTrax is a collectable digital audio workstation NFT that allows for the non-destructive editing, rendering, and direct downloading of audio .wav files.")
console.log("LIMITATIONS:")
console.log("• DOWNLOADS ENABLED IN SAFARI BROWSERS ONLY.")
console.log("• Original artist retains all creative rights to any edit created and downloaded")
console.log("• You are fully encouraged to use downloaded edits in your mix tapes, social content creation and public performances")
console.log("• You are not allowed to distribute downloaded edits for direct sale or distribution in any way")
// console.log("CONTACT: edittraxnft@gmail.com")
// console.log("WEB: EditTrax.nft | .com")


const downloadName = "Oluwa_(Ethos)_SlumGods.wav"
const boxHeight = 50; //min height == 40 -> otherwise clickable buttons are to small
const reverseScrolling = false;
