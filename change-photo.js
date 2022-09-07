//declarando los elementos html

const divImg = document.querySelector('.photo-perfil-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const btnUp = document.querySelector('#btn-upload');





//Si el usuario pasa el mouse sobre el div

divImg.addEventListener('mouseenter', function()
{
    btnUp.style.display = "block"
});



//Si salimos del div de la foto

divImg.addEventListener('mouseleave', function()
{
    btnUp.style.display="none"
});



//cuando elegimos una foto

file.addEventListener('change', function()
{
    //hace referencia al archivo
    const choose = this.files[0];
    if(choose){
        const reader = new FileReader();
        reader.addEventListener('load',function()
        {
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(choose);
    }
});