const handleSubmitClick = (event) =>{
    event.preventDefault()
    console.log(event);
    console.log("Hey bro submit clicked");
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData);
    const name = formData?.get('name');
    const email = formData?.get('email');
    const gender = formData?.get('gender');
    if(!name)
    {
        alert('Please Enter The Name');
    }
    else if(!email)
    {
        alert('Please Enter the Email');
    }
    else if(!gender)
    {
        alert('Please Enter the Gender');
    }
    else
    {
        document?.querySelector('.user-details')?.submit();
    }
}