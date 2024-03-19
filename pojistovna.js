class Pojistovna {

    constructor(jazyk = "cs-CZ") {
        this.pojistenci = [];
        this.jazyk = jazyk;

        this.firstNameInput = document.getElementById("firstName");
        this.secondNameInput = document.getElementById("secondName");
        this.ageInput = document.getElementById("age");
        this.phoneInput = document.getElementById("phone");
        this.sendButton = document.getElementById("send");
        this.vypisElement = document.getElementById("form-results");
        
        this.vytvorPojistence ();
        this.smazPojistence();
    }

    vytvorPojistence() {
        this.sendButton.onclick = (e) => {
            e.preventDefault();
            const pojistenec = new Pojistenec (this.firstNameInput.value, this.secondNameInput.value, this.ageInput.value, this.phoneInput.value);
            this.pojistenci.push(pojistenec);
            this.vypisPojistence();
        }
    }

    vypisPojistence() {
        this.vypisElement.innerHTML = `<thead>
        <tr>
            <th scope="col">Jméno</th>
            <th scope="col">Příjmení</th>
            <th scope="col">Věk</th>
            <th scope="col">Telefon</th>
        </tr>
    </thead>`;
        for (let i = 0; i < this.pojistenci.length; i++) {
            const pojistenec = this.pojistenci[i];
            this.vypisElement.innerHTML += `<tr><td>${pojistenec.firstName}</td><td>${pojistenec.secondName}</td><td>${pojistenec.age}</td><td>${pojistenec.phone}</td></tr>`;
        }
    }
    smazPojistence(){
       let smazat = document.getElementById("smazat");
       smazat.addEventListener("click", () =>{
        this.vypisElement.innerHTML = `<thead>
        <tr>
            <th scope="col">Jméno</th>
            <th scope="col">Příjmení</th>
            <th scope="col">Věk</th>
            <th scope="col">Telefon</th>
        </tr>
    </thead>`

       }
       )
    }
}