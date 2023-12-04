
/* przypisanie do zmiennych elementów HTML o danych id */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

/*  metoda odpowiedzialna za akcję kliknięcia wraz z parametrem click oraz funkcją
która definiuje co się wydarzy gdy nastąpi kliknięcie */
loginButton.addEventListener("click", (e) => {
    e.preventDefault(); /* zapobiegnięcie domyślnej akcji */
    const username = loginForm.username.value;
    const password = loginForm.password.value;
	/*instrukcja warunkowa, sprawdza czy zmienne mają ten sam typ i wartości */
    if (username === "" && password === "") {
        alert("You have successfully logged in."); /* wyświetlenie wiadomość */  
        location.reload(); /* przeładowanie strony */
    } else {
        loginErrorMsg.style.opacity = 1; /* jeżeli warunek nie zostanie spełniony, 
		opacity elementu loginErrorMsg zostanie zmieniona na '1' */

    }
})