const numofwords = document.getElementById("numofwords");
const main_container = document.querySelector(".container");

let numberOfletter="";

const generateWord = (numberOfletter)=>{
    const letterstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word ="";
    for(let i = 0;i<numberOfletter;i++){
        const random = (Math.random()*25).toFixed(0);
        word+=letterstr[random];
    }
    return word;
}

const generatePara = ()=>{
    const newpara = document.createElement("p");
    const inpnumofwords = Number(numofwords.value);
    let para = "";
    for(let i=0;i<inpnumofwords;i++){
        numberOfletter = (Math.random()*15).toFixed(0);
        const words = generateWord(numberOfletter).toLowerCase();
        para+=words+" ";
    }
    newpara.innerText = para;
    newpara.setAttribute("class","para_graphs");
    main_container.append(newpara);
}

const removePara = ()=>{
    const para = document.querySelector(".para_graphs");
    para.remove();
}

const btn1 = document.querySelector(".generate");
btn1.onclick = generatePara;
const btn2 = document.querySelector(".remove");
btn2.onclick = removePara;