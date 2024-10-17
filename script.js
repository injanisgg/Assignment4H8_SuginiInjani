const formInput = document.querySelector('#forms-container');
const profile = document.querySelector('#profile-card');
const btnEdit = document.querySelector('#btn-edit');
const inputs = document.querySelectorAll('input');
const btnSubmit = document.querySelector('#btn-submit');
const btnBack = document.querySelector('#btn-back');


btnEdit.addEventListener('click', () =>{
    profile.style.display = 'none';
    formInput.style.display = 'flex';
    formInput.style.flexDirection = 'column';
});

btnBack.addEventListener('click', () =>{
    formInput.style.display = 'none';
    profile.style.display = 'block';
})

inputs.forEach(input => {
    input.addEventListener('focus', function(){
        if(this.value === "Nama Anda" || this.value === "Role Anda" || this.value === "Usia Anda" || this.value === "Lokasi") {
            this.value = '';
        }
    })

    input.addEventListener('blur', function(){
        if (this.value === ""){
            switch(this.id) {
                case 'name':
                    this.value = 'Nama Anda';
                    break
                case 'role':
                    this.value = 'Role Anda';
                    break
                case 'usia':
                    this.value = 'Usia Anda';
                    break
                case 'lokasi':
                    this.value = 'Lokasi';
                    break
            }
        }
    })
});

btnSubmit.addEventListener('click', (dataInput) => {
    dataInput.preventDefault(); //mencegah auto submit

    var name = document.querySelector('#name').value;
    var role = document.querySelector('#role').value;
    var availibility = document.querySelector('#availibility').value;
    var age = document.querySelector('#age').value;
    var location = document.querySelector('#location').value;
    var experience = document.querySelector('#experience').value;
    var email = document.querySelector('#email').value;

    document.querySelector('#profile-name').textContent = name;
    document.querySelector('#profile-role').textContent = role;
    document.querySelector('#profile-availibility').textContent = availibility;
    document.querySelector('#profile-age').textContent = age;
    document.querySelector('#profile-location').textContent = location;
    document.querySelector('#profile-experience').textContent = experience;
    document.querySelector('#profile-email').textContent = email;

    formInput.style.display = 'none';
    profile.style.display = 'block';

});
