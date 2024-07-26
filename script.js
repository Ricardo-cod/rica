document.getElementById('coursesButton').addEventListener('click', function() {
    window.location.href = 'https://eugene6869.hocoos.com';
});

document.getElementById('informaticaButton').addEventListener('click', function() {
    document.getElementById('informaticaModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('informaticaModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('informaticaModal')) {
        document.getElementById('informaticaModal').style.display = 'none';
    }
});

