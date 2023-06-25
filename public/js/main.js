const container = document.querySelector('.container')
const modal = document.querySelector('.modal')
const modalBody = document.querySelector('.modal-body')
const toast = document.querySelector('.toast')
const toastBody = document.querySelector('.toast-body')


document.querySelectorAll('#copyBtn').forEach((btn) => {
    btn.addEventListener('click', () => copyLink(btn))
})

document.querySelectorAll('#delBtn').forEach((btn) => {
    btn.addEventListener('click', () => deleteLink(btn))
})

document.querySelectorAll('#qrBtn').forEach((btn) => {
    btn.addEventListener('click', () => showModal(btn))
})

document.querySelectorAll('.btn-close').forEach((btn) => {
    btn.addEventListener('click', () => console.log("Closed"))
})

function copyLink(btn) {
    const id = btn.parentElement.parentElement.id

    const url = `https://scissor/${id}`
    navigator.clipboard.writeText(url)
    .then(() => {
        showToast(`"${url}" was copied to clipboard`)
        console.log("Link copied to clipboard")
    })
    .catch((error) => {
        console.log("Copy failed: ", error)
    })

}

function deleteLink(btn) {
    const element = btn.parentElement.parentElement
    const id = element.id

    fetch(`/${id}`, { method: "DELETE" })
    .then((response) => {
        // Handle the response as a toast notification
        // console.log(response)
        console.log("Link has been deleted")
        element.style.display = "none"
    })
    .catch((error) => {
        console.log("An error occured: ", error)
    })
}


function showModal(btn) {
    const qrData = btn.src

    modal.style.display = 'block'
    container.style.display = 'none'
    modalBody.innerHTML = `
        <img src="${qrData}" alt="This is the QR Code for your link" class="img-fluid w-100 h-100">
    `
    // console.log(qrData)

}

function closeModal() {

}

const showToast = (msg) => {
    toast.style.display = "block"
    toastBody.textContent = msg

    setTimeout(() => {
        toast.style.display = "none"
        toastBody.textContent =""
    }, 3000)
    // Show toast notification for basic actions
}