


const generate = () => {
    const prompt = document.getElementById('textInput').value.trim();
    if(prompt) { 
    document.getElementById('image-container').innerHTML = `
    <img src="./images/loding-gif.gif" id="qrImage" width="200px" height="200px" />
    `
    setTimeout(() => {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + prompt
    }, 3000)}
    else{
     return alert("Enter valid prompt")
    }
}