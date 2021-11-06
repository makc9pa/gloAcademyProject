
const renderItems = (data) => {
    console.log(data);
}

fetch('https://gloprojecttest-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(console.log('final'))