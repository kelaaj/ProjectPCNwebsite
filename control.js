$(document).ready(function() {
    // Popup functionality
    $("#MyDscroll").hide();
   // $("#mysubmit").hide();

    // Call openForm when the document is ready
    setTimeout(openForm, 5000);
    function openForm(){

    };

    function openForm() {
        // Use jQuery to toggle the visibility of the form
        $("#MyDscroll").show();
    }

    //php message
    //function gojo() {
      //  $("#MyDscroll").hide();
        //$("#mysubmit").show();
    //}

    // Function for redirection using location.replace
    function myReplace() {
        var elOutput = document.getElementById("butt1");
        location.replace(elOutput.href);
    }

    // Assign the function myReplace to the onclick property of the element with id "topoff1"
    document.getElementById("topoff1").onclick = function() {
        myReplace();
    };

    // Function for redirection to a specific URL
    function redirectw3() {
        window.location.href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage";
    }

    // Assign the function redirectw3 to the onclick property of the element with id "butt1"
    document.getElementById("butt1").onclick = function() {
        redirectw3();
    };
});