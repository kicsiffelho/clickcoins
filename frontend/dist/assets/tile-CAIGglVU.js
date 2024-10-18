import{f as s,u as i}from"./clerkInit-Bfl71Zcn.js";async function u(n,r){try{if(!(await fetch("/api/background-color",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,color:r})})).ok)throw new Error("Failed to save background color")}catch(o){console.error("Error saving background color:",o)}}async function g(n){try{const r=await fetch(`/api/background-color/${n}`);if(r.ok)return(await r.json()).color;console.error("Error fetching background color:",r.status)}catch(r){console.error("Error fetching background color:",r)}}async function y(n,r){const o=await fetch("/api/currency-transaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,amount:r,type:"earn"})});if(o.ok){const e=await o.json();return console.log(e.message),r}else return console.error("Error earning currency:",o.status),0}async function d(n,r){const o=await fetch("/api/currency-transaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,amount:r,type:"spend"})});if(o.ok){const e=await o.json();return console.log(e.message),r}else return console.error("Error spending currency:",o.status),0}async function t(n,r){const o=window.clerk.user;if(console.log(o),o){const e=o.id;try{if(await d(e,r)>0){await u(e,n);const a=await s(e);a!==null&&i(a)}else console.error("Not enough currency to change background color")}catch(c){console.error("Error spending currency:",c)}}else{console.error("User not logged in changebg");return}}async function l(){const n=window.clerk.user;if(console.log(n),n){const r=n.id,o=await g(r);o&&b(o)}else{console.error("User not logged in setbg");return}}function b(n){const r=document.getElementById("game-area");r&&n&&(r.style.backgroundColor=n)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed").forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();let e;switch(r.id){case"bgBlue":e=10,t("#00a3e9",e);break;case"bgBrown":e=20,t("#b97b56",e);break;case"bgCrimson":e=50,t("#7b0103",e);break;case"bgGreen":e=40,t("#22b14c",e);break;case"bgGrey":e=60,t("#7f7f7f",e);break;case"bgOrange":e=150,t("#fc6a03",e);break;case"bgPink":e=40,t("#eb3780",e);break;case"bgRed":e=50,t("#ed1d25",e);break}})}),l()});export{y as e,g as f};