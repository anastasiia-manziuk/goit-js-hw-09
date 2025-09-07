import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=`<label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>`;t.innerHTML=o;const l="feedback-form-state",e=JSON.parse(localStorage.getItem(l))||{email:"",message:""};t.elements.email.value=e.email;t.elements.message.value=e.message;t.addEventListener("input",a=>{const{name:m,value:s}=a.target;e[m]=s.trim(),localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
