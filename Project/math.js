export const pi = 3.14;

export  function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

// dusra trika for named export 
// export { pi, add, sub };

// Renamed Named Export 
// export { add as sum };

// Default Export
// Default matlab
// Is file ka main export.

export default function login(){
    console.log("Login");
}

