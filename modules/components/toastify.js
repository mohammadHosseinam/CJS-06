const toastifyElement = document.getElementById("alert")
export const toastify = (msg , option)=>{
    switch (option.type) {
        case "warn":
            toastifyElement.style.backgroundColor="orange"
            break;
        case "error":
            toastifyElement.style.backgroundColor="tomato"
            break;
        case "sucses":
            toastifyElement.style.backgroundColor="yellowgreen"
            break;
        default:
            toastifyElement.style.backgroundColor="gainsbro"
            break;
    }
    toastifyElement.style.right="0%"
    toastifyElement.children[0].innerHTML = msg
    toastifyElement.children[1].addEventListener("click",()=>{
    toastifyElement.style.right="100%"
    })
    setTimeout(()=>{
        toastifyElement.style.right="100%"
    }, option.time || 3000)
}