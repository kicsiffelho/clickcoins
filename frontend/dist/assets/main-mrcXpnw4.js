import"./modulepreload-polyfill-B5Qt9EMX.js";import{N as i}from"./clerk-B0VDegmf.js";const o=void 0;async function d(){const e=new i(o);if(await e.load(),e.user)window.location.href="./welcome.html";else{document.getElementById("app").innerHTML='<div id="sign-in"></div>';const t=document.getElementById("sign-in");e.mountSignIn(t)}const n=document.createElement("div");document.getElementById("app").appendChild(n),e.mountUserButton(n)}document.addEventListener("DOMContentLoaded",()=>{d().catch(e=>{console.error("Failed to initialize Clerk:",e)})});
