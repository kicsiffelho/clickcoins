import{N as t,s as i}from"./index-CbpNzmWa.js";const a="pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk",n=new t(a);async function c(){await n.load(),document.getElementById("app").innerHTML='<div id="sign-up"></div>';const e=document.getElementById("sign-up");n.mountSignUp(e,{appearance:{baseTheme:i.shadesOfPurple}})}document.addEventListener("DOMContentLoaded",()=>{c().catch(e=>{console.error("Failed to initialize Clerk:",e)})});
