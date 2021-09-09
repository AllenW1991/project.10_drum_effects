const a = document.getElementById("clap")
const s = document.getElementById("hihat")
const d = document.getElementById("kick")
const f = document.getElementById("openhihat")
const g = document.getElementById("boom")
const h = document.getElementById("ride")
const j = document.getElementById("snare")
const k = document.getElementById("tom")
const l = document.getElementById("tink")

// const sound = [clap, hihat, kick, openhihat, boom, ride, snare, tom, tink]



document.addEventListener("keydown", function (e) {
    console.log(e.key);
    const audio = document.createElement("audio");
    audio.src = `./sounds/${e.key}.wav`;
    audio.currentTime = 0;
    audio.play();

    keys = [a, s, d, f, g, h, j, k, l]
    for (e.key in keys) {
        const audio = document.createElement("audio");
        audio.src = `./sounds/${e.key}.wav`;
        audio.currentTime = 0;
        audio.play();
    }
})



// keys.addEventListener("click", function (e) {

// })

