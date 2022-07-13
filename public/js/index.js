const btnDelete = document.querySelectorAll('.deleteButton');
const confrimButton = document.querySelector('.btn-terima')


btnDelete.forEach(btn => {
    btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id-car')

        confrimButton.addEventListener('click', async function () {
            await fetch(`http://localhost:8000/api/delete/${id}`, {
                    method: 'DELETE'
                })
                .then(() => window.location.replace('/'))
                .catch(error => console.log(error))
        })
    })
})