interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Lawrence',
    lastName: 'Favour',
    age: 19,
    location: 'Enugu',
};
const student2: Student ={
    firstName: 'Nnemeka',
    lastName: 'Peter',
    age: 21,
    location: 'Port-Harcourt'
}

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement('table');
    studentList.forEach((student) => {
        const tableRow = table.insertRow();
        const firstNameHeader = tableRow.insertCell();
        firstNameHeader.innerHTML = student.location;
    });
    document.body.appendChild(table);
}

renderTable();