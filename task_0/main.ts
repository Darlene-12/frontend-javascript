// Define the student interface

interface Student{
    firstName:string;
    lastName:string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Darlene",
    lastName: "Wendie",
    age: 20,
    location: "New York"
}

const Student2: Student = {
    firstName: "Stacy",
    lastName: "Phanice",
    age: 22,
    location: "Los Angeles"
}

// Create an array containing the two students
const studentsList:  Array<Student> = [student1, Student2];

// Create and render a table using Vanilla Javascript
const body = document.querySelector('body');
const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableBody = document.createElement('tbody');

//Create table header
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHeader.appendChild(headerRow);

// Create a tablerows for each student
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
}
);

// Assemble the table
table.appendChild(tableHeader);
table.appendChild(tableBody);


// Add some basic styling
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.width = '100%';

const cells = table.querySelectorAll('th, td');
cells.forEach(cell => {
  (cell as HTMLElement).style.border = '1px solid black';
  (cell as HTMLElement).style.padding = '8px';
  (cell as HTMLElement).style.textAlign = 'left';
});

// Add the table to the body
if (body) {
  body.appendChild(table);
}