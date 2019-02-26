window.addEventListener('load', (evt) => {
    document.querySelector('button').addEventListener('click', () => {
        toggleLoader();
        let firstName = document.querySelector('input[name="firstName"]').value;
        let lastName = document.querySelector('input[name="lastName"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
        let password = document.querySelector('input[name="password"]').value;
        let confirm_password = document.querySelector('input[name="confirm_password"]').value;
        if(confirm_password != password){
            document.querySelector('.resp').textContent = 'password mismatch, confirm password';
            return;
        }
        /* fetch(endpoint{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
          body: JSON.stringify(data)
        }).then((res)=>{
            console.log(res);
        }); */
        window.setTimeout(()=>{
            toggleLoader();
            console.log(firstName, lastName, email, password, phoneNumber);
        }, 3000);
    })
    function toggleLoader(){
        const loader= document.querySelector('.loader');
        const resp= document.querySelector('.resp');
        if(loader.classList.contains('gone')){
            loader.classList.remove('gone');
            resp.classList.add('gone');
        }else{
            loader.classList.add('gone');
            resp.classList.remove('gone');
        }
    }
    const focusinput = document.querySelectorAll('.input-group input');
    focusinput.forEach((inp) => {
        inp.addEventListener('focusin', (evt) => {
            evt.target.parentNode.querySelector('label').classList.add('show');
        });
    });
    const blurinput = document.querySelectorAll('.input-group input');
    blurinput.forEach((inp) => {
        inp.addEventListener('focusout', (evt) => {
            evt.target.parentNode.querySelector('label').classList.remove('show');
        });
    });
})