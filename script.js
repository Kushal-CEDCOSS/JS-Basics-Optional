document.getElementById('genderWarning').style.display = 'none';
document.getElementById('qualWarning').style.display = 'none';
document.getElementById('specialWarning').style.display = 'none';
document.getElementById('FNameWarning').style.display = 'none';
document.getElementById('LNameWarning').style.display = 'none';
document.getElementById('pinWarning').style.display = 'none';
const validate = (e) => {
    
    e.preventDefault();
    if(!(document.getElementById("male").checked || document.getElementById("female").checked))
    {
        document.getElementById('genderWarning').style.display = 'block';
        return;
    }
    document.getElementById('genderWarning').style.display = 'none';
    if(document.getElementById('qual').value == '0')
    {
        document.getElementById('qualWarning').style.display = 'block';
        return;
    }
    document.getElementById('qualWarning').style.display = 'none';
    if(!(document.getElementById('spl1').checked || document.getElementById('spl2').checked || document.getElementById('spl3').checked || document.getElementById('spl4').checked))
    {
        document.getElementById('specialWarning').style.display = 'block';
        return;
    }
    document.getElementById('specialWarning').style.display = 'none';

    var fname = document.getElementById('fname').value;
   if(fname.match(/^[A-Za-z]+$/)==null)
   {
        document.getElementById('FNameWarning').style.display = 'block';
        return;
   }
    document.getElementById('FNameWarning').style.display = 'none';

   var lname = document.getElementById('lname').value;
   if(lname.match(/^[A-Za-z]+$/)==null)
   {
        document.getElementById('LNameWarning').style.display = 'block';
        return;
   }
    document.getElementById('LNameWarning').style.display = 'none';

   var pincode = document.getElementById('pin').value;
   if(isNaN(pincode) || pincode.length != 6)
   {
    document.getElementById('pinWarning').style.display = 'block';
    return;
   }
    document.getElementById('pinWarning').style.display = 'none';
   alert("Data submitted successfully!!");
   document.getElementById('form').reset();
}