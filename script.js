document.getElementById('flip_Back_Btn_front').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.add('flipped');
});
document.getElementById('flip_Back_Btn').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.remove('flipped');
});