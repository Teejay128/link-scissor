document.querySelectorAll('#copyBtn').forEach((btn) => {
    let id = btn.parentElement.parentElement.id
    btn.addEventListener('click', () => copyLink(id))

})

document.querySelectorAll('#delBtn').forEach((btn) => {
    let element = btn.parentElement.parentElement
    btn.addEventListener('click', () => deleteLink(element))
})

function copyLink(id) {
    // Function to copy the link to clipboard
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

function deleteLink(element) {
    // Function to delete the link from the site and the database
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


// Come back to this after you have connected with an api for qrcode generation
function showQRCode() {
    // Display modal for qrCode
    document.querySelectorAll('#qrBtn').forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log(btn.parentElement.parentElement.id)
            console.log("QR code should display now")
        })
    })

    // <div class="modal">
    //     <div class="modal-dialog" role="document">
    //         <div class="modal-content">
    //             <div class="modal-header">
    //                 <h5 class="modal-title">Your QR Code</h5>
    //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
    //                     <span aria-hidden="true"></span>
    //                 </button>
    //             </div>
    //                 <div class="modal-body">
    //                 <p>Big image of qr code goes here <p>
    //             </div>
    //             <div class="modal-footer">
    //                 <button type="button" class="btn btn-primary">Save Image</button>
    //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}

const showToast = (msg) => {
    const toast = document.querySelector('.toast')
    const toastBody = document.querySelector('.toast-body')
    toast.style.display = "block"
    toastBody.textContent = msg

    setTimeout(() => {
        toast.style.display = "none"
        toastBody.textContent =""
    }, 3000)
    console.log("toasted")
    // Show toast notification for basic actions
}