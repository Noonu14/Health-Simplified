function completeTasks() {
  const tasks = document.querySelectorAll(".task"); // Select all tasks (checkboxes)
  const incompleteTasks = [];

  // Iterate through tasks to find incomplete ones
  tasks.forEach((task) => {
    if (!task.checked) {
      incompleteTasks.push(task.value); // Add incomplete task to the array
    }
  });

  // Check if all tasks are completed
  if (incompleteTasks.length === 0) {
   
    showCelebration(); // Call the celebration function
    submitTasks();// Submit or show final message
  } else {
    // Notify the user of incomplete tasks
    alert(`You missed the following tasks:\n\n${incompleteTasks.join("\n")}`);
  }
}

function showCelebration() {
  // Display the celebration effect
  document.body.innerHTML = `
    <div id="celebration" style="position: relative; height: 100vh; overflow: hidden; background: #282c34; display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <h2 style="color: white; font-size: 50px;">🎉 Hurrayyy! 🎉</h2>
      <div class="confetti-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
    </div>
  `;

  addCelebrationAnimation();
}

function addCelebrationAnimation() {
  const confettiWrapper = document.querySelector(".confetti-wrapper");

  // Generate confetti
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = "-10px"; // Start above the screen
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    confettiWrapper.appendChild(confetti);
  }

  // Add keyframes dynamically for the falling animation
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes fall {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(100vh);
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

function getRandomColor() {
  const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function submitTasks() {
  // Hide any task-related content if necessary
  const header = document.getElementById("header");
  const taskContainer = document.getElementById("task-container");

  if (header) header.style.display = "none";
  if (taskContainer) taskContainer.style.display = "none";

  // Show the celebration effect
  showCelebration();
}
