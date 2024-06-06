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
                <li>Push-Ups: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each superset</li>
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
            <h3>Rest:</h3>
            <ul>
                <li>1 minute after each superset</li>
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
            <h3>Rest:</h3>
            <ul>
                <li>30 seconds after each superset</li>
            </ul>
        `
    },
    "Day 7": {
        title: "HIIT Session",
        details: `
            <h3>HIIT:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const calendars = [
        { calendar: document.getElementById('calendar1'), container: document.getElementById('workoutContainer1'), title: document.getElementById('workoutTitle1'), details: document.getElementById('workoutDetails1'), button: document.getElementById('finishWorkoutButton1') },
        { calendar: document.getElementById('calendar2'), container: document.getElementById('workoutContainer2'), title: document.getElementById('workoutTitle2'), details: document.getElementById('workoutDetails2'), button: document.getElementById('finishWorkoutButton2') },
        { calendar: document.getElementById('calendar3'), container: document.getElementById('workoutContainer3'), title: document.getElementById('workoutTitle3'), details: document.getElementById('workoutDetails3'), button: document.getElementById('finishWorkoutButton3') }
    ];

    function createCalendar(calendarObj) {
        for (let i = 1; i <= 28; i++) {
            const day = document.createElement('div');
            day.innerText = i;
            day.setAttribute('data-day', (i - 1) % 7 + 1);
            day.addEventListener('click', () => showWorkout(day, calendarObj));
            calendarObj.calendar.appendChild(day);
        }
    }

    function showWorkout(dayElement, calendarObj) {
        const dayNumber = dayElement.getAttribute('data-day');
        const workout = workouts[`Day ${dayNumber}`];
        if (workout) {
            calendarObj.title.innerText = workout.title;
            calendarObj.details.innerHTML = workout.details;
            calendarObj.container.style.display = 'block';
            calendarObj.button.setAttribute('data-day', dayElement.innerText);
        }
    }

    function finishWorkout(calendarId) {
        const calendarObj = calendars.find(c => c.calendar.id === calendarId);
        const dayNumber = calendarObj.button.getAttribute('data-day');
        const dayElement = Array.from(calendarObj.calendar.children).find(day => day.innerText === dayNumber);
        if (dayElement) {
            dayElement.classList.add('completed');
            calendarObj.container.style.display = 'none';
        }
    }

    calendars.forEach(createCalendar);
});
