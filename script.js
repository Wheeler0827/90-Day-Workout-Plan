const workouts = {
    "Day 1": {
        title: "Legs and Abs + HIIT",
        details: `
            <h3>Legs:</h3>
            <ul>
                <li>Squats</li>
                <li>Lunges</li>
                <li>Deadlifts</li>
            </ul>
            <h3>Abs:</h3>
            <ul>
                <li>Crunches - 15 reps</li>
                <li>Leg Raises - 15 reps</li>
                <li>Plank - 45 seconds</li>
            </ul>
            <h3>HIIT:</h3>
            <ul>
                <li>10 Burpees, 30 seconds rest</li>
            </ul>
        `
    },
    // Add similar objects for Day 2 through Day 7
};

document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const workoutContainer = document.getElementById('workoutContainer');
    const workoutTitle = document.getElementById('workoutTitle');
    const workoutDetails = document.getElementById('workoutDetails');
    const finishWorkoutButton = document.getElementById('finishWorkoutButton');

    function createCalendar() {
        for (let i = 1; i <= 28; i++) {
            const day = document.createElement('div');
            day.innerText = i;
            day.setAttribute('data-day', (i - 1) % 7 + 1);
            day.addEventListener('click', () => showWorkout(day));
            calendar.appendChild(day);
        }
    }

    function showWorkout(dayElement) {
        const dayNumber = dayElement.getAttribute('data-day');
        const workout = workouts[`Day ${dayNumber}`];
        if (workout) {
            workoutTitle.innerText = workout.title;
            workoutDetails.innerHTML = workout.details;
            workoutContainer.style.display = 'block';
            finishWorkoutButton.setAttribute('data-day', dayElement.innerText);
        }
    }

    function finishWorkout() {
        const dayNumber = finishWorkoutButton.getAttribute('data-day');
        const dayElement = Array.from(calendar.children).find(day => day.innerText === dayNumber);
        if (dayElement) {
            dayElement.classList.add('completed');
            workoutContainer.style.display = 'none';
        }
    }

    finishWorkoutButton.addEventListener('click', finishWorkout);
    createCalendar();
});
