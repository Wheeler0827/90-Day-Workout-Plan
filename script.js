const workouts = {
    "Monday": {
        title: "Back and Abs",
        details: `
            <h3>Superset 1:</h3>
            <ul>
                <li>Dumbbell Bent Over Rows: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Crunches: 20 reps</li>
            </ul>
            <h3>Superset 2:</h3>
            <ul>
                <li>Dumbbell Deadlifts: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Reverse Crunches: 15 reps</li>
            </ul>
            <h3>Superset 3:</h3>
            <ul>
                <li>Dumbbell Pullovers: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Mountain Climbers: 15 reps each side</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each superset</li>
            </ul>
        `
    },
    "Tuesday": {
        title: "Rest Day",
        details: `<p>Enjoy your rest day!</p>`
    },
    "Wednesday": {
        title: "Shoulders + HIIT",
        details: `
            <h3>Exercise 1:</h3>
            <ul>
                <li>Dumbbell Shoulder Press: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
            </ul>
            <h3>Exercise 2:</h3>
            <ul>
                <li>Lateral Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
            </ul>
            <h3>Exercise 3:</h3>
            <ul>
                <li>Front Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
            </ul>
            <h3>Exercise 4:</h3>
            <ul>
                <li>Upright Rows: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each exercise</li>
            </ul>
            <h3>HIIT Session:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    },
    "Thursday": {
        title: "Abs",
        details: `
            <h3>Superset 1:</h3>
            <ul>
                <li>Leg Raises: 15 reps</li>
                <li>Russian Twists: 15 reps each side</li>
            </ul>
            <h3>Superset 2:</h3>
            <ul>
                <li>Plank: Hold for 45 seconds</li>
                <li>Mountain Climbers: 30 reps total</li>
            </ul>
            <h3>Superset 3:</h3>
            <ul>
                <li>Crunches: 20 reps</li>
                <li>Heel Touches: 15 reps each side</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>30 seconds after each superset</li>
            </ul>
        `
    },
    "Friday": {
        title: "HIIT Session",
        details: `
            <h3>HIIT:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    },
    "Saturday": {
        title: "Legs and Abs + HIIT",
        details: `
            <h3>Superset 1:</h3>
            <ul>
                <li>Dumbbell Squats: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
            <h3>Superset 2:</h3>
            <ul>
                <li>Dumbbell Lunges: 15, 12, 8, 4 (each leg, with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Plank: Hold for 45 seconds</li>
            </ul>
            <h3>Superset 3:</h3>
            <ul>
                <li>Dumbbell Romanian Deadlifts: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Bicycle Crunches: 15 reps each side</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each superset</li>
            </ul>
            <h3>HIIT Session:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    },
    "Sunday": {
        title: "Chest and Abs",
        details: `
            <h3>Superset 1:</h3>
            <ul>
                <li>Dumbbell Bench Press: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Sit-Ups: 15 reps</li>
            </ul>
            <h3>Superset 2:</h3>
            <ul>
                <li>Dumbbell Flyes: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Russian Twists: 15 reps each side</li>
            </ul>
            <h3>Superset 3:</h3>
            <ul>
                <li>Push-Ups: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each superset</li>
            </ul>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const calendar = document.getElementById('calendar');
    const workoutContainer = document.getElementById('workoutContainer');
    const workoutTitle = document.getElementById('workoutTitle');
    const workoutDetails = document.getElementById('workoutDetails');
    const finishWorkoutButton = document.getElementById('finishWorkoutButton');

    days.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.innerText = day;
        dayElement.setAttribute('data-day', day);
        dayElement.addEventListener('click', () => showWorkout(dayElement));
        calendar.appendChild(dayElement);
    });

    function showWorkout(dayElement) {
        const day = dayElement.getAttribute('data-day');
        const workout = workouts[day];
        if (workout) {
            workoutTitle.innerText = workout.title;
            workoutDetails.innerHTML = workout.details;
            workoutContainer.style.display = 'block';
            finishWorkoutButton.setAttribute('data-day', day);
        }
    }

    finishWorkoutButton.addEventListener('click', () => {
        const day = finishWorkoutButton.getAttribute('data-day');
        const dayElement = Array.from(calendar.children).find(dayEl => dayEl.getAttribute('data-day') === day);
        if (dayElement) {
            dayElement.classList.add('completed');
            workoutContainer.style.display = 'none';
        }
    });
});
