import{_ as t}from"./app-weouHbOE.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://why-pro-blogs-discussion-nee5yiwwf-why-pros-projects.vercel.app/"};const s=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-weouHbOE.js").then(r=>r.M),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{s as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}