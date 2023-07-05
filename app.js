const qrCode = document.querySelector('.qr-code');
const btn = document.querySelector('.btn');
let searchBox = document.querySelector('.search-box');

generateQrCode = () => {
    let inputValue = searchBox.value;
    console.log(inputValue);
    let apiKey = `https://api.qrserver.com/v1/create-qr-code/?data=${searchBox.value}&size=180x180`;
    qrCode.src = apiKey;
}

btn.addEventListener('click', generateQrCode);