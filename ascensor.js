const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const ascensor=document.querySelector(".ascensor");

buttons.forEach(boton => {
    boton.addEventListener("click", ()=>{

        console.log(boton.textContent);

        if(boton.value==="0"){
            display.value="piso 0...";
            ascensor.style.bottom="1%";
        }else if(boton.value==="1"){
            display.value="piso 1...";
            ascensor.style.bottom="15%";
        }else if(boton.value==="2"){
            display.value="piso 2...";
            ascensor.style.bottom="30%";
        }else if(boton.value==="3"){
            display.value="piso 3...";
            ascensor.style.bottom="45%";
        }else if(boton.value==="4"){
            display.value="piso 4...";
            ascensor.style.bottom="60%";
        }else if(boton.value==="5"){
            display.value="piso 5...";
            ascensor.style.bottom="75%";
        }else if(boton.value==="6"){
            display.value="piso 6...";
            ascensor.style.bottom="90%";
        }

    })
})

