let btn = document.querySelector('.btnSend');
var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

// function newPerson() {
//         var dataPerson = localStorage.getItem('');
//         dataPerson = dataPerson ? parseInt(dataPerson) : 0;
//         var newPerson = dataPerson + 1;
//         localStorage.setItem('', newPerson);
//         return dataPerson;
// }

function newPerson() {
        var dataPerson = localStorage.getItem('Users');
        dataPerson = dataPerson
        if (parseInt(dataPerson)) {} else {
                dataPerson = 0;
        }
        var newPerson = ++dataPerson;
        localStorage.setItem('Users', newPerson);
        return dataPerson;
}

function dataPerson() {
        let result = document.querySelector('.message2');
        let fname = document.querySelector('.fname');
        let phone = document.querySelector('.phone');
        let email = document.querySelector('.email');
        let textArea = document.querySelector('.message');
        if (fname.value !== '' && phone.value !== '' && (emailfilter.test(email.value)) && textArea.value !== '' && fname.value.length >= 3 && phone.value.length >= 3 && email.value.length >= 3 && textArea.value.length >= 3) {

                let person = {
                        firstName: fname.value,
                        lastName: phone.value,
                        email: email.value,
                        textArea: textArea.value
                };

                localStorage.setItem(newPerson(), JSON.stringify(person));
                result.innerHTML = (`<div class="container-fluid"
                style="color : white; background-color:rgba(0, 128, 0, 0.522); font-weight: 500; width:70%; font-size: 18px;">Success</div>`);
                // alert('We will get back to you soon thanks');
        } else {
                result.innerHTML = (`<div class="container-fluid" 
                style="color : white; background-color:rgba(255, 0, 0, 0.563); font-weight: 500; width:70%; font-size: 18px;">process unsuccessful</div>`);

        }
}

btn.addEventListener('click', dataPerson);