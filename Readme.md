ES6 ne bola
Har file ek Module hogi.
Matlab
math.js
aur
user.js
ab alag-alag room ki tarah hain.
Ek file ke variables dusri file me automatically nahi milenge.
Ye isolation provide karta hai.

Module kya hota hai?
Simple definition
Module = JavaScript ki ek file jisme code likha hota hai aur jo apni cheezein export karti hai aur dusri files se import karti hai. module private hota hai.

Browser me

<script type="module" src="app.js"></script>

Ye bahut important hai.

Agar

type="module" nahi likha To import Error dega.
Package kya hota hai?
Module aur Package alag cheezein hain.
Module

Ek file.
math.js
Ye ek module hai.
Package
Bahut saare modules ka collection.
Example
React
React ke andar
Component.js
Hooks.js
Scheduler.js
Renderer.js
Bahut saare modules.

Ye sab milke package banate hain.
node_modules
    react
        package.json
        index.js
        hooks.js
        ...
        Ye poora package hai.  

 Relative Path
 import { add } from "./math.js";
./->current Folder 
 ../->Ek folder upar 
 ../../->Do folder upar   


 <!-- Import And Export  -->

Named Export

Sabse common.

math.js
export const pi = 3.14;

export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

Import

import { add, sub, pi } from "./math.js";

console.log(add(5,3));
console.log(sub(10,4));
console.log(pi);

Output

8
6
3.14
Dusra Tarika
const pi = 3.14;

function add(){}

function sub(){}

export { pi, add, sub };

Ye bhi same hai.

Rename Named Export
export { add as sum };

Import

import { sum } from "./math.js";

sum(5,6);
Rename While Import
import { add as sum } from "./math.js";

sum(5,6);

Output

11
Import Everything
import * as MathUtils from "./math.js";

Use

MathUtils.add(2,3);

MathUtils.sub(5,2);

MathUtils.pi;

Output

5
3
3.14
Default Export

Default matlab

Is file ka main export.

Example

user.js
export default function login(){

    console.log("Login");
}

Import

import login from "./user.js";

login();

Notice

{}

Nahi lagaye.

Default Export Rename
import myFunction from "./user.js";

Ya

import xyz from "./user.js";

Ya

import abc from "./user.js";

Sab chalega.

Kyuki default export ka naam import karte waqt tum decide karte ho.

Example

export default function login(){ }

Import

import hello from "./user.js";

hello();

Bilkul valid.

Named Export Rename Nahi Kar Sakte

Ye galat hai.

export function add(){}

import sum from "./math.js";

Error.

Named export me exact naam ya as use karna padega.

import { add } from "./math.js";

// ya

import { add as sum } from "./math.js";
Ek File Me Default + Named

Ye bahut common hai.

export default function login(){}

export const age = 20;

export const city = "Delhi";

Import

import login, { age, city } from "./user.js";

Output

login()
20
Delhi
Kitne Default Export Ho Sakte?

❌ Galat

export default function A(){}

export default function B(){}

Error

Sirf ek default export allowed hai.

Kitne Named Export?

Unlimited.

export const a = 10;

export const b = 20;

export const c = 30;

export function show(){}

export function print(){}

Sab valid.  

Import Everything ->
import * as MathUtils from "./math.js";


| Feature         | Named Export                          | Default Export                  |
| --------------- | ------------------------------------- | ------------------------------- |
| Number per file | Unlimited                             | Only 1                          |
| Import syntax   | `import { add } from "./math.js"`     | `import login from "./user.js"` |
| Curly braces    | ✅ Required                            | ❌ Not used                      |
| Import name     | Same as exported (or `as`)            | Any name can be used            |
| Best use        | Utility functions, constants, helpers | Main feature/class/component    |


<!-- noted -->
CommonJS me default export jaisi koi concept nahi hoti.
Ye sirf ES6 Modules (ESM) ka feature hai.


