function ejemploVar() {
    if (true) {
        var variableVar = 'Soy una variable con var';
    }

    // `variableVar` está disponible aquí porque `var` tiene un alcance de función
    console.log(variableVar); // 'Soy una variable con var'
}

ejemploVar();

function ejemploLet() {
    if (true) {
        let variableLet = 'Soy una variable con let';
        console.log(variableLet); // 'Soy una variable con let'
    }

    // `variableLet` no está disponible aquí, fuera del bloque `if`
    // Intentar acceder a `variableLet` aquí causará un error:
    // console.log(variableLet); // Error: variableLet no está definida
}

ejemploLet();


function ejemploConst() {
    if (true) {
        const variableConst = 'Soy una variable con const';
        
        // Intentar reasignar el valor de `variableConst` causará un error:
        console.log(variableConst); // 'Soy una variable con const'
        // variableConst = 'Nuevo valor'; // Error: Asignación a constante
    }

    // `variableConst` no está disponible aquí, fuera del bloque `if`
    // Intentar acceder a `variableConst` aquí causará un error:
    // console.log(variableConst); // Error: variableConst no está definida
}

ejemploConst();