//Initializing four strings having characters required for our password
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smalls = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{},.<>?;:|';

var reqLength;
$(document).ready(function() {
    $('#selectNum').change(function() {
        reqLength = $(this).val();
        // console.log(reqLength); // Output the selected value to console
        // You can now use the reqLength variable for further processing
    });
});

//Intializing a varaible that contains all of these strings
var allChars = capitals + smalls + numbers + symbols;

$('#btn').click(function(){
//Firstly, adding the must characters into the password
   let password = "";
   password += capitals[Math.floor(Math.random() * capitals.length)];
   password += smalls[Math.floor(Math.random() * smalls.length)];
   password += numbers[Math.floor(Math.random() * numbers.length)];
   password += symbols[Math.floor(Math.random() * symbols.length)];
//Now till the reqLength, add characters into the password
   while(password.length < reqLength){
    password += allChars[Math.floor(Math.random() * allChars.length)];
   }
   $('#password').val(password);
});


//Copying the password
$('.copy-icon').click(function(){
    var passwordText = $('#password').val();
    navigator.clipboard.writeText(passwordText)
        .then(function() {
            // Show hovering message
            var $message = $('.message');
            var $icon = $('.copy-icon'); // Corrected this line to target the icon
            var iconOffset = $icon.offset();
            $message.css({
                top: iconOffset.top + $icon.outerHeight(),
                left: iconOffset.left
            }).fadeIn(200).delay(100).fadeOut(200); // Show message for 2 seconds
        })
        .catch(function(err) { // Corrected this line to fix syntax error
            console.error('Unable to copy password to clipboard: ', err);
        });
});
