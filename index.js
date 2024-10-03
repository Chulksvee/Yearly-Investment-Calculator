
function answer() {

    var amount = parseInt (document.getElementById ('amount').value);
        console.log (amount); 
    
    var rate = parseInt (document.getElementById('rate').value);
        console.log (rate);

    var tax = parseInt (document.getElementById('tax').value);
        console.log (tax); 

    var time = parseInt (document.getElementById('time').value);
        console.log (time); 

        // To check for the inputs data requiry
        if (isNaN(amount) || isNaN(rate) || isNaN(tax) || isNaN(time)) {
            // alert("Please fill in all fields before calculating");
            // Function to display the custom alert
                    function showAlert(message) {
                        document.getElementById("alertMessage").innerHTML = message;
                        document.getElementById("customAlert").style.display = "flex";
                    }
                    showAlert("Please fill in all fields before calculating.");

   // Stop the function execution if any field is empty
};

// Function to close the custom alert


       

    //here is the formulars
    var interest = (amount * rate * time)/100
    var tax = (interest * tax)/100
    var revenue = (interest - tax) 
    var total_value = (interest + amount)


    document.getElementById('output_1').innerHTML= (`$ ${amount}`);
    document.getElementById('output_2').innerHTML= (`$ ${interest}`);
    document.getElementById('output_3').innerHTML= (`$ ${tax}`);
    document.getElementById('output_4').innerHTML= (`$ ${revenue}`);
    document.getElementById('output_5').innerHTML= (`$ ${total_value}`)

};

function resetInputs() {
    // Clear all input fields
    document.getElementById('amount').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('tax').value = '';
    document.getElementById('time').value = '';

    // Clear the output fields as well
    document.getElementById('output_1').innerHTML = '';
    document.getElementById('output_2').innerHTML = '';
    document.getElementById('output_3').innerHTML = '';
    document.getElementById('output_4').innerHTML = '';
    document.getElementById('output_5').innerHTML = '';
};

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    
}
 
