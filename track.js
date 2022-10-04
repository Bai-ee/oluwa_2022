const trackDir = "";
const bpm = 86;
const parts = [
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
];

const presets = [];
presets.push([    
0,
0,
0,
1,
2,
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
1,
1,
1,
1,
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
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2, 
    2,
    2,
    2,
    2,
    2,
    2,
    2,
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
    1,
    2,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
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
    0,  
    0,
    0,
    1,
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
console.log("DEVELOPER: Bryan (Bai-ee) Balli / EditTrax 004")
console.log("ABOUT: EditTrax is a collectable digital audio workstation NFT that allows for the non-destructive editing, rendering, and direct downloading of audio .wav files.")
console.log("LIMITATIONS:")
console.log("• Original artist retains all creative rights to any edit created and downloaded")
console.log("• You are fully encouraged to use downloaded edits in your mix tapes, social content creation and public performances")
console.log("• You are not allowed to distribute downloaded edits for direct sale or distribution in any way")

const downloadName = "Oluwa_(Ethos)_SlumGods.wav"
const boxHeight = 50; //min height == 40 -> otherwise clickable buttons are to small
const reverseScrolling = false;