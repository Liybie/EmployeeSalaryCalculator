function computeSalaries() {
    // employee details
    const employees = [
        {
            name: document.getElementById('name1').value,
            rate: parseFloat(document.getElementById('rate1').value),
            days: parseInt(document.getElementById('days1').value)
        },
        {
            name: document.getElementById('name2').value,
            rate: parseFloat(document.getElementById('rate2').value),
            days: parseInt(document.getElementById('days2').value)
        },
        {
            name: document.getElementById('name3').value,
            rate: parseFloat(document.getElementById('rate3').value),
            days: parseInt(document.getElementById('days3').value)
        }
    ];

    // Compute salaries and prepare the output
    let tableRows = `
        <tr>
            <th>Employee Name</th>
            <th>Salary</th>
        </tr>`;
    employees.forEach(employee => {
        const salary = employee.rate * employee.days;
        tableRows += `
            <tr>
                <td>${employee.name}</td>
                <td>${salary.toLocaleString()}</td>
            </tr>`;
    });

    // Display output
    document.getElementById('output').innerHTML = `
        <table>
            ${tableRows}
        </table>`;
}
