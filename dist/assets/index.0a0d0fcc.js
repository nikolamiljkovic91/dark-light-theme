const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};u();const l="theme-preference",f=()=>{r.value=r.value==="light"?"dark":"light",a()},m=()=>localStorage.getItem(l)?localStorage.getItem(l):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",a=()=>{localStorage.setItem(l,r.value),c()},c=()=>{document.firstElementChild.setAttribute("data-theme",r.value)},r={value:m()};c();window.onload=()=>{c(),document.querySelector(".theme-toggle").addEventListener("click",f)};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:i})=>{r.value=i?"dark":"light",a()});