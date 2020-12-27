import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;
    

}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
