document.getElementById('refresh-button').addEventListener('click', function() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            const homeworkList = document.getElementById('homework-list');
            homeworkList.innerHTML = '';  // Clear the list

            const homeworks = data.split('\n');
            homeworks.forEach(homework => {
                const [subject, dueDate, homeworkDescription, compulsory, teams] = homework.split(',');

                const row = document.createElement('tr');

                const subjectCell = document.createElement('td');
                subjectCell.textContent = subject;
                row.appendChild(subjectCell);

                const dueDateCell = document.createElement('td');
                dueDateCell.textContent = dueDate;
                row.appendChild(dueDateCell);

                const homeworkCell = document.createElement('td');
                homeworkCell.textContent = homeworkDescription;
                row.appendChild(homeworkCell);

                const compulsoryCell = document.createElement('td');
                compulsoryCell.textContent = compulsory === 'X' ? 'X' : '';
                row.appendChild(compulsoryCell);

                const teamsCell = document.createElement('td');
                teamsCell.textContent = teams === 'X' ? 'X' : '';
                row.appendChild(teamsCell);

                homeworkList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the homework data:', error));
});
