const buttons = document.querySelectorAll('.faq-question');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const answer =button.nextElementSibling;

        answer.classList.toggle('show');

        button.classList.toggle('active');

        
    });
});

let showText_btn = document.getElementsByClassName('showText_btn');

let hideText = document.getElementsByClassName('hideText');

showText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');
}
