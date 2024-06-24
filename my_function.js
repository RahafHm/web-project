var a;
function show_hide()
{
    if(a==1)
        {
            document.getElementById("hide").style.display="inline";
            returna=0;
        }

    else
    {
        document.getElementById("hide").style.display="none";
        return a=1;
    }
}
function showForm() {
    document.getElementById('form-section').style.display = 'block';
}