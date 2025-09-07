const form = document.querySelector('.feedback-form')

const formElement = `<label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>`;

form.innerHTML = formElement;

const localStorageKey = "feedback-form-state";


const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
    email: "",
    message: ""
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;


form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();

    formData.email = "";
    formData.message = "";
});