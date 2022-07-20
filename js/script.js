let respuesta
do {
    let dia, mes, año
    do {
        dia = prompt("Ingrese un dia")
        mes = parseInt(prompt("Ingrese un mes(en numeros)"))
        año = parseInt(prompt("Ingrese un año"))
        if (isNaN(dia)) {
            alert("Por favor ingrese un dia valido")
        }
        if (isNaN(mes)) {
            alert("Por favor ingrese un mes valido")
        }
        if (isNaN(año)) {
            alert("Por favor ingrese un año valido")
        }
        if (mes > 12) {
            alert("Por favor ingrese un mes valido")
        }
        if (dia > 31) {
            alert("Por favor ingrese un dia valido")
        }
    } while (isNaN(mes) || isNaN(mes) || isNaN(año) || (mes > 12) || (dia > 31));

    alert(`Su edad es ${2022 - año}`)
    do {
        respuesta = prompt("¿Desea ingresar otra fecha de cumpleaños?").toLowerCase()
    } while (respuesta != "si" && respuesta != "no");
} while (respuesta != "no");