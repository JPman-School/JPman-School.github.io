document.getElementById('refresh-button').addEventListener('click', function() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            const homeworkList = document.getElementById('homework-list');
            homeworkList.innerHTML = '';  // Clear the list

            const homeworks = data.split('\n');
            homeworks.forEach(homework => {
                const listItem = document.createElement('li');
                listItem.textContent = homework;
                homeworkList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching the homework data:', error));
});
