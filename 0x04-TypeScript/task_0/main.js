let student1 = {
    firstName: 'Lawrence',
    lastName: 'Favour',
    age: 25,
    location: 'Seoul',
};
let student2 = {
    firstName: 'Daniel',
    lastName: 'Asaboro',
    age: 27,
    location: 'Lagos',
};
let studentsList = [student1, student2];
function renderTable() {
    let table = document.createElement('table');
    studentsList.forEach(function (student) {
        let tableRow = table.insertRow();
        let firstNameHeader = tableRow.insertCell();
        firstNameHeader.innerHTML = student.firstName;
        let locationHeader = tableRow.insertCell();
        locationHeader.innerHTML = student.lastName;
    });
    document.body.appendChild(table);
}
renderTable();
