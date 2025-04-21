
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}



 function formataData(data) {

    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const diaSemana = diasSemana[data.getDay()]; 

    const mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const diaMes = mesAno[data.getMonth()]

     const dia = zeroAEsquerda(data.getDate());
     const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
     const minuto = zeroAEsquerda(data.getMinutes());
     const segundo = zeroAEsquerda(data.getSeconds());

     return `${diaSemana}, ${dia} de ${diaMes} de ${ano} às ${hora}:${minuto}:${segundo}`;

    
 }

 const data = new Date();
const dataBrasil = formataData(data);
document.getElementById('res').innerHTML = `${dataBrasil}`


