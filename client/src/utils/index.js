import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)

    const randomPrompts = surpriseMePrompts[randomIndex];

    if(randomPrompts === prompt) return getRandomPrompt(prompt);

    return randomPrompts;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}