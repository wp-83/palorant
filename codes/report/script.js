const reportForm = document.getElementById("report");
const errorUsername = document.querySelector(".username-error");
const errorEmail = document.querySelector(".email-error");
const errorServer = document.querySelector(".server-error");
const errorFile = document.querySelector(".file-error");
const errorDescription = document.querySelector(".description-error");

document.querySelector("#file-button").addEventListener("change", () => {
    const fileData = document.getElementById("file-button").files;
    const fileName = fileData[0].name;

    let fileDisplay = "";
    if (fileName.length <= 20){
        fileDisplay = fileName;
    } else {
        fileDisplay += fileData[0].name.substring(0, 8);
        fileDisplay += ".....";
        fileDisplay += fileData[0].name.substring(fileName.length - 12);
    }

    document.querySelector(".file-name").innerHTML = fileDisplay;
});

document.querySelector("#clear").addEventListener("click", () => {
    window.location.reload();
});

function validateUsername(usernameData){
    const lengthUsername = usernameData.length;
    const specialChar = ['!', '@', '#', '$', '_'];

    if (lengthUsername < 9 || lengthUsername > 12) return false;

    let isContainSpecialChar = 0;
    for (let i = 0; i < lengthUsername; i++){
        let check = usernameData[i];

        if (check == ' '){
            return false;
        }

        if (check != specialChar[0] && check != specialChar[1] && check != specialChar[2] && check != specialChar[3] && check != specialChar[4]){
            if ((check < 'a' || check > 'z') && (check < '0' || check > '9')) return false;
        } else {
            if (isContainSpecialChar == 0) isContainSpecialChar = 1;
        }
    }

    if (!isContainSpecialChar) return false;

    return true;
}

function validateEmail(emailData){
    const emailLength = emailData.length;
    const domain = "@gmail.com";
    const domainLength = domain.length;
    const emailNameLength = emailLength - domainLength;
    const specialChar = ['.', '-', '_'];
    
    if (emailData.length <= domainLength) return false;
    if (emailData.substring(emailLength - domainLength, emailLength).localeCompare(domain) != 0) return false;
    if (emailNameLength == 1 && ((emailData[0] < 'a' || emailData[0] > 'z') && (emailData[0] < '0' || emailData[0] > '9'))) return false;

    let count = 0;
    for (let char of emailData.substring(0, emailNameLength)){
        if (char == ' ') return false;
        if (char == '@') return false;
        if (char >= 'A' && char <= 'Z') return false;

        if ((char < 'a' || char > 'z') && (char < '0' || char > '9')){
            if (char != specialChar[0] && char != specialChar[1] && char != specialChar[2]) return false;
        }

        if (char == specialChar[0] || char == specialChar[1] || char == specialChar[2]){
            if (emailData[count+1] == specialChar[0] || emailData[count+1] == specialChar[1] || emailData[count+1] == specialChar[2]) return false;
        }

        count++;
    }

    return true;
}

function validateServer(serverData){
    if (serverData.localeCompare("placeholder") == 0) return false;
    return true;
}

function validateFile(fileData){
    if (fileData.length > 1 || fileData.length == 0) return false;

    if (fileData[0].size > 3000000) return false;

    const fileType = ['image/jpeg', 'image/png'];
    for (let x in fileType){
        if (fileData[0].type == fileType[x]) return true;
    }
    
    return false;
}

function validateDescription(descriptionData){
    if (descriptionData.length == 1) return false;

    let countWord = 0;
    const words = descriptionData.split(" ");
    for (let word of words){
        if (word.length > 1 && word != " "){
            countWord++;
        }
    }

    if (countWord < 8) return false;  
    return true;
}

reportForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const server = document.getElementById("server").value;
    const file = document.getElementById("file-button").files;
    const descriptionBugs = document.getElementById("descBugs").value;
    const emailFollowUp = document.getElementById("isSendEmail").checked;

    if (!validateUsername(username)){
        isValid = false;
        errorUsername.innerHTML = "Username must have 9 to 12 characters and only consist of lowercase letters, numbers between 0 and 9, minimumly have one unique symbol '!@#$_', and can't contain any space";
    } else {
        errorUsername.innerHTML = "";
    }

    if (!validateEmail(email)){
        isValid = false;
        errorEmail.innerHTML = "Email can only contain lowercase letter, number between 0 and 9, special character '_-.' (must be with letter, number, or both of them), must end with @gmail.com, and can't contain any space";
    } else {
        errorEmail.innerHTML = "";
    }

    if (!validateServer(server)){
        isValid = false;
        errorServer.innerHTML = "Please select one of servers that provided";
    } else {
        errorServer.innerHTML = "";
    }

    if (!validateFile(file)){
        isValid = false;
        errorFile.innerHTML = "Please upload exactly one file about the bugs with extentions '.jpg', '.jpeg', or 'png' and maximum size is 3Mb";
    } else {
        errorFile.innerHTML = "";
    }

    if (!validateDescription(descriptionBugs)){
        isValid = false;
        errorDescription.innerHTML = "Description should be field minimumly by 8 words";
    } else {
        errorDescription.innerHTML = "";
    }
    
    if (!isValid){
        return;
    }

    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Server: " + server);
    console.log("File name: " + file[0].name);
    console.log("Description: " + descriptionBugs);
    console.log("Checked: " + emailFollowUp);
    
    if (emailFollowUp){
        alert("Email will be sent soon");
    }

    window.location.href = "success.html";
});