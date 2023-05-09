document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // Perform authentication
      if (username === 'your_username' && password === 'your_password') {
        // Redirect to the task management page upon successful login
        window.location.href = 'task-management.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
  
      // Clear the form fields
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var createTaskForm = document.getElementById('createTaskForm');
    var taskList = document.getElementById('tasks');
  
    createTaskForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var taskTitle = document.getElementById('taskTitle').value;
      var taskDescription = document.getElementById('taskDescription').value;
      var taskDueDate = document.getElementById('taskDueDate').value;
  
      var task = {
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate
      };
  
      // Create the task item
      var taskItem = document.createElement('li');
      taskItem.classList.add('task');
  
      var checkbox = document.createElement('span');
      checkbox.classList.add('checkbox');
      checkbox.innerHTML = '<input type="checkbox">';
      taskItem.appendChild(checkbox);
  
      var taskDetails = document.createElement('div');
      taskDetails.innerHTML = '<h3>' + task.title + '</h3><p>' + task.description + '</p><p>Due Date: ' + task.dueDate + '</p>';
      taskItem.appendChild(taskDetails);
  
      // Add the task to the task list
      taskList.appendChild(taskItem);
  
      // Clear the form fields
      document.getElementById('taskTitle').value = '';
      document.getElementById('taskDescription').value = '';
      document.getElementById('taskDueDate').value = '';
    });
  
    // Handle task completion and removal
    taskList.addEventListener('change', function(event) {
      if (event.target.type === 'checkbox') {
        var taskItem = event.target.parentNode.parentNode;
        if (event.target.checked) {
          taskItem.classList.add('completed');
          setTimeout(function() {
            taskItem.remove();
          }, 1000); // Delay for 1 second before removing the task item
        } else {
          taskItem.classList.remove('completed');
        }
      }
    });
  });