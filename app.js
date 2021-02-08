function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByClassName('form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }

 // Scroll To Top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}