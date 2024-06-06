const workouts = {
    "Day 1": {
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
            <h3>HIIT Session:</h3>
            <p>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</p>
        `
    },
    "Day 2": {
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
                <li>Push-Ups: 15, 12, 8, 4</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
        `
    },
    "Day 3": {
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
        `
    },
    "Day 4": {
        title: "Rest Day",
        details: `<p>Enjoy your rest day!</p>`
    },
    "Day 5": {
        title: "Shoulders + HIIT",
        details: `
            <h3>Exercise 1:</h3>
            <p>Dumbbell Shoulder Press: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</p>
            <h3>Exercise 2:</h3>
            <p>Lateral Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</p>
            <h3>Exercise 3:</h3>
            <p>Front Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</p>
            <h3>Exercise 4:</h3>
            <p>Upright Rows: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</p>
            <h3>HIIT Session:</h3>
            <p>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</p>
        `
    },
    "Day 6": {
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
        `
    },
    "Day 7": {
        title: "HIIT Session",
        details: `
            <h3>HIIT Session:</h3>
            <p>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</p>
        `
    }
};

const calendar = document.getElementById('calendar');
const workoutContainer = document.getElementById('workoutContainer');
const workoutTitle = document.getElementById('workoutTitle');
const workoutDetails = document.getElementById('workoutDetails');

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
    workoutTitle.innerText = workout.title;
    workoutDetails.innerHTML = workout.details;
    workoutContainer.style.display = 'block';
    document.getElementById('finishWorkoutButton').setAttribute('data-day', dayElement.innerText
