document.querySelectorAll('#copyBtn').forEach((btn) => {
    let id = btn.parentElement.parentElement.id
    btn.addEventListener('click', () => copyLink(id))

})

document.querySelectorAll('#delBtn').forEach((btn) => {
    let id = btn.parentElement.parentElement.id
    btn.addEventListener('click', () => deleteLink(id))
})

function copyLink(id) {
    // Function to copy the link to clipboard
    console.log(id)

}

function deleteLink(id) {
    // Function to delete the link from the site and the database
    fetch(`/scissor/${id}`, { method: "DELETE" })
    .then(() => {
        console.log("link was deleted")
    })
    .catch((error) => {
        console.log("an error occured")
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

const showToast = () => {
    // Show toast notification for basic actions
}