import{d,G as r,_ as h,r as e,o,c as a,a as s,w as n,b as i,t as l,e as f}from"./index-af4b18d7.js";const p=d({name:"AuthorGif",data(){return{author:{}}},mounted(){this.author=r.selectGif.user},methods:{backToGif(){return`/gif/${r.selectGif.id}`}}});const m={class:"author-container"},v={key:0},b={class:"author-name"},g=["href"],k={key:1,class:"blank-author"};function G(t,y,I,$,A,B){const _=e("v-btn"),c=e("router-link"),u=e("v-img");return o(),a("div",m,[s(c,{to:t.backToGif()},{default:n(()=>[s(_,{variant:"outlined"},{default:n(()=>[f(" Back to gif ")]),_:1})]),_:1},8,["to"]),t.author?(o(),a("div",v,[s(u,{src:t.author.banner_image||t.author.avatar_url,class:"author-image text-right pa-2"},null,8,["src"]),i("div",b,l(t.author.display_name),1),i("a",{href:t.author.profile_url,target:"_blank"},"Gifhy profile",8,g)])):(o(),a("div",k," Author is empty "))])}const N=h(p,[["render",G],["__scopeId","data-v-54bb253a"]]);export{N as default};
