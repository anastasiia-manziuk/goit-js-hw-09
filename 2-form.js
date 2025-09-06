import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".container-form"),s=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
`;r.innerHTML=s;const t=document.querySelector(".feedback-form"),l="feedback-form-state",e=JSON.parse(localStorage.getItem(l))||{email:"",message:""};t.elements.email.value=e.email;t.elements.message.value=e.message;t.addEventListener("input",a=>{const{name:o,value:m}=a.target;e[o]=m.trim(),localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
