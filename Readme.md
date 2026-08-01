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


<!-- Tpes of APi  -->
# 🚀 TYPES OF APIs - CHEAT SHEET

## 1. Classification by Access Policy (Who can use it?)

### 🌐 Public APIs (Open APIs)
- **Description:** Publicly available to any developer or external user with minimal or no restrictions.
- **Use Case:** Weather data, public cryptocurrency prices, map integrations.
- **Example:** OpenWeatherMap API, Google Maps Public API.

### 🔒 Private APIs (Internal APIs)
- **Description:** Hidden from external users. Used exclusively inside an organization to connect internal systems and microservices.
- **Use Case:** Connecting a company's HR system to its Payroll database.
- **Example:** Internal backend service communicating with internal database.

### 🤝 Partner APIs
- **Description:** Shared only with specific, authorized business partners. Requires special authorization keys or tokens.
- **Use Case:** E-commerce platforms integrating third-party payment gateways.
- **Example:** Amazon integrating Stripe/PayPal API, Swiggy integrating Google Maps API.

---

## 2. Classification by Architecture & Protocol (How they work?)

### 1️⃣ REST API (Representational State Transfer)
- **Format:** Primarily JSON (also supports XML, Text).
- **Protocol:** Standard HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- **Characteristics:** Stateless, scalable, standard web architecture.
- **Best For:** Modern web/mobile applications, CRUD operations.

### 2️⃣ GraphQL
- **Format:** JSON.
- **Protocol:** Single HTTP Endpoint (usually `POST`).
- **Characteristics:** Allows clients to request **only** the specific data they need (eliminates over-fetching & under-fetching).
- **Best For:** Complex applications, low-bandwidth environments, data-rich dashboards.

### 3️⃣ WebSocket API
- **Format:** JSON, Text, Binary.
- **Protocol:** WS / WSS (Full-Duplex Persistent Connection).
- **Characteristics:** Real-time, two-way communication channel between client and server without repeated HTTP requests.
- **Best For:** Chat applications, live sports scores, stock trading platforms, multiplayer games.

### 4️⃣ SOAP API (Simple Object Access Protocol)
- **Format:** Strictly XML.
- **Protocol:** HTTP, SMTP, TCP.
- **Characteristics:** Highly structured, strict built-in security (WS-Security), heavy payload.
- **Best For:** Enterprise systems, financial institutions, banking payment gateways.

### 5️⃣ gRPC (Google Remote Procedure Call)
- **Format:** Protocol Buffers (Binary format).
- **Protocol:** HTTP/2.
- **Characteristics:** Extremely fast, lightweight, high-performance inter-service communication.
- **Best For:** Microservices architecture, real-time streaming, high-throughput systems.

---

## 💡 Quick Summary Matrix

| API Type | Data Format | Speed | Best Use Case |
| :--- | :--- | :--- | :--- |
| **REST** | JSON | Fast | General Web & Mobile Apps |
| **GraphQL** | JSON | Very Fast | Custom/Flexible Frontends |
| **WebSocket** | Any | Real-Time | Live Chat / Stock Updates |
| **SOAP** | XML | Slower | High Security (Banking) |
| **gRPC** | Binary | Ultra Fast | Internal Microservices |



