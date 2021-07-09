console.log('Js loaded')
document.querySelector('#btnload').addEventListener('click', () => {
    getDinoname();
    getDinoImg();
});
async function getDinoname() {
    const dinonameRes = await fetch('/dinoname');
    const data = await dinonameRes.json();
    var k = data[0];
    var dino1 = k[0].toString();
    var dino2 = k[1].toString();
    console.log(dino1, dino2);
    document.querySelector('#dinoname').textContent = dino1 + ' ' + dino2;
}
async function getDinoImg() {
    const dinoimg = await fetch('/dinoimage');
    const data = await dinoimg.json();
    let dinoimage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoimageUrl = dinoimage.thumbnailUrl;
    let dinoAlt = dinoimage.name;
    console.log(dinoimage);

    if (document.querySelector('#dinoImg') !== null) {
        document.querySelector('#dinoImg').remove();
    }
    let img = document.createElement('img');
    img.alt = dinoAlt;
    img.src = dinoimageUrl;
    img.id = 'dinoImg';
    document.querySelector('body').appendChild(img);
} 