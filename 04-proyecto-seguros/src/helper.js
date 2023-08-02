export function obtenerDiferencia(year){
    return new Date().getFullYear() - year;
}

export function totalMarca(marca){
    let incremento;
    
    switch(marca) {
            case 'europeo':
                incremento = 1.30;
                break;
            case 'americano':
                incremento = 1.15;
                break;
            case 'asiatico':
                incremento = 1.05;
                break;
            default:
                break;
    }
    
    return incremento
}

export function totalPlan(plan){
    //incrementamos en 20 o 50% dependiendo del plan seleccionado
    
    return (plan === 'basico') ? 1.20 : 1.50

}

// Primer letra en mayuscula
export function primerMayus(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}