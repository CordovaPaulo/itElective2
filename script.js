const remove_btn = document.getElementById('remove-cover');

document.getElementById('flip_Front_Btn').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.add('flipped');
});

document.getElementById('flip_Back_Btn').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.remove('flipped');
});

remove_btn.addEventListener('click', function() {
    document.querySelector('.background').classList.add('level');
    remove_btn.classList.add('hide'); // Hide the button smoothly
});