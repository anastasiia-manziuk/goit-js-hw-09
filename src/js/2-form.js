const containerForm = document.querySelector('.container-form')

const form = `<form class="feedback-form" autocomplete="off">
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
`;

containerForm.innerHTML = form;

const formElement = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";


const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
    email: "",
    message: ""
};

formElement.elements.email.value = formData.email;
formElement.elements.message.value = formData.message;


formElement.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formElement.reset();

    formData.email = "";
    formData.message = "";
});