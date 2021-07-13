//  Define the ui  element 
let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let usertext = searchUser.value;
    if (usertext != '') {
        // Fetch API
        fetch(`https://api.github.com/users/${usertext}`)
        .then(result => result.json())
        .then(data => {
            //console.log(data);
            if(data.message == 'Not Found') {
                // Show Alert
                ui.showAlert('User not found!', 'alert alert-danger');
            } 
            else{
                // Show Profile
                ui.showProfile(data);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile()
    }
});