function get_age()
{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    let age = year - 2005;
    if (month < 7 || month == 8 && day < 7)
    {
    	age--;
    }
    return age;
}

document.getElementById('age-text').innerHTML = get_age();