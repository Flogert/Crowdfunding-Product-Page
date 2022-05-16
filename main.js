let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
let modal = document.querySelector('.modal');

select1.addEventListener('click', openModal);
select2.addEventListener('click', openModal);
window.addEventListener('click', closeModal);

function openModal() {
        modal.style.display = 'block';
}

function closeModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}
