// Ini Script Input Nama
function replaceName() {
    let name = prompt("Halo, siapakah nama Anda?", "");
    document.getElementById("name").innerHTML = name
}
replaceName();

//Ini Script Header Nav
document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.querySelector('a[href="home.html"]');
    const ourProfileBtn = document.querySelector('a[href="our-profile.html"]');
    const portofolioBtn = document.querySelector('a[href="portofolio.html"]');
    const messageUsBtn = document.querySelector('a[href="message-us.html"]');

    homeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const homeSection = document.getElementById('home');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    })

    ourProfileBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const ourProfileSection = document.getElementById('our-profile');
        ourProfileSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    portofolioBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const portofolioSection = document.getElementById('portofolio');
        portofolioSection.scrollIntoView({ behavior: 'smooth' });
    });

    messageUsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const messageUsSection = document.getElementById('message-us');
        messageUsSection.scrollIntoView({ behavior: 'smooth' });
    });
});    

//Ini Script Massage Us Content
function validateForm() {
    let firstName = document.getElementById('firstname').value;
    let instagram = document.getElementById('instagram').value;
    let birthDate = document.getElementById('birth-date').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let messages = document.getElementById('messages').value;

    console.log(firstName);
    console.log(instagram);
    console.log(birthDate);
    console.log(gender);
    console.log(messages);

    if (firstName != '' && instagram != '' && messages != '' && birthDate != '' && gender !== null) {
        document.getElementById("sender-firstname").innerHTML = firstName;
        document.getElementById("sender-instagram").innerHTML = instagram;
        document.getElementById("sender-birthdate").innerHTML = birthDate;
        document.getElementById("sender-gender").innerHTML = gender.value;
        document.getElementById("sender-messages").innerHTML = messages;

    } else {
        alert('Tidak boleh ada yang kosong');
    }
}

//Ini Script Banner Slide
let indexSlide = 0;
showSlide();

function nextSlide(n) {
    indexSlide += n;
    showSlide();
}

function showSlide() {
    let listImage = document.querySelectorAll('.banner-item');
  
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }

    if (indexSlide >= listImage.length) {
        indexSlide = 0;
    }
  
    if (indexSlide < 0) {
        indexSlide = listImage.length - 1;
    }
  
    listImage[indexSlide].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function()
{
    showSlide()
});
