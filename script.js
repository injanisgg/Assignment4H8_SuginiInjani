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

    const name = document.querySelector('#name').value;
    const role = document.querySelector('#role').value;
    const availibility = document.querySelector('#availibility').value;
    const age = document.querySelector('#age').value;
    const location = document.querySelector('#location').value;
    const experience = document.querySelector('#experience').value;
    const email = document.querySelector('#email').value;

    const data = {
        name : name,
        role : role,
        availibility : availibility,
        age : age,
        location : location,
        experience : experience,
        email : email
    }

    localStorage.setItem('profile', JSON.stringify(data));//stringify membuat data dari object menjadi string

    //update profile card
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


//untuk ketika refresh valuenya ambil dari local storage
function render() {
    const datas = localStorage.getItem('profile');
    if (datas) {
        const parseData = JSON.parse(datas); // Ubah string menjadi object

        // Isi ulang input field
        document.querySelector('#name').value = parseData.name || 'Nama Anda';
        document.querySelector('#role').value = parseData.role || 'Role Anda';
        document.querySelector('#availibility').value = parseData.availibility || '';
        document.querySelector('#age').value = parseData.age || '';
        document.querySelector('#location').value = parseData.location || '';
        document.querySelector('#experience').value = parseData.experience || '';
        document.querySelector('#email').value = parseData.email || '';

        // Update profile card
        document.querySelector('#profile-name').textContent = parseData.name || 'Nama Anda';
        document.querySelector('#profile-role').textContent = parseData.role || 'Role Anda';
        document.querySelector('#profile-availibility').textContent = parseData.availibility || '';
        document.querySelector('#profile-age').textContent = parseData.age || '';
        document.querySelector('#profile-location').textContent = parseData.location || '';
        document.querySelector('#profile-experience').textContent = parseData.experience || '';
        document.querySelector('#profile-email').textContent = parseData.email || '';
    }
}

// Panggil fungsi render saat halaman direload
document.addEventListener('DOMContentLoaded', render);
