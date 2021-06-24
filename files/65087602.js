function sweetAlertConfirmationMessage(message) {
    return Swal.fire({
        title: T('SWEETALERT_GENERAL_CONFIRMATION_TITLE'),
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: T('SWEETALERT_CONFIRM_BUTTON_COLOR'),
        cancelButtonColor: T('SWEETALERT_CANCEL_BUTTON_COLOR'),
        cancelButtonText: T('SWEETALERT_CANCEL_BUTTON_TEXT'),
        confirmButtonText: T('SWEETALERT_CONFIRM_BUTTON_TEXT'),
    })
}
