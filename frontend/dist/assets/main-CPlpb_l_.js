import{N as i,s as o}from"./index-CbpNzmWa.js";const d=void 0,n=new i(d);async function a(){if(await n.load(),n.user)window.location.href="./welcome.html";else{document.getElementById("app").innerHTML='<div id="sign-in"></div>';const t=document.getElementById("sign-in");n.mountSignIn(t,{appearance:{baseTheme:o.shadesOfPurple}})}const e=document.createElement("div");document.getElementById("app").appendChild(e),n.mountUserButton(e)}document.addEventListener("DOMContentLoaded",()=>{a().catch(e=>{console.error("Failed to initialize Clerk:",e)})});
