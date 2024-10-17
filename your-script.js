
function writeData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email
    }).then(() => {
        console.log('Data saved successfully!');
    }).catch((error) => {
        console.error('Error saving data: ', error);
    });
} 

// Example usage
writeData('1', 'John Doe', 'john@example.com');


function readData(userId) {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

// Example usage
readData('1');