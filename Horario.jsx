export const exibirHorario = (e) => {
    const dateObj = new Date ();
    const hora = dateObj.getHours();
    const minutos = dateObj.getMinutes();
    const segundos = dateObj.getSeconds();
    let horarioFormatado = hora + ":" + minutos + ":" + segundos;
    console.clear();
    console.log(horarioFormatado);
}