const fs= require('fs');


let listarTabla = (base, limite=10)=>{
    console.log(`======tabla de ${base}======`.green);

    for(let i = 0; i<=limite; i++){
        console.log(`${base} * ${i}= ${base * i}\n`);

   }   
}



let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject('No es un Numero');
            return;
        }

            let data ='';

            for(let i = 0; i<=limite; i++){
                     data+=`${base} * ${i}= ${base * i}\n`;

                }

                fs.writeFile(`tablas/tabla-${base}al-${limite}.txt`,data, (err) => {
                    if (err) 
                        reject(err);
                    else
                        resolve(`tabla-${base}-al-${limite}.txt`);
             });



    })
}

module.exports = {
    crearArchivo,
    listarTabla
}



