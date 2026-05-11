function showWorkout() {

let age = document.getElementById("age").value;

let result = document.getElementById("result");

if(age >= 15 && age <= 16){

result.innerHTML = `
<h3>Workout Plan for Ages 15–16</h3>

<ul>
<li>10 Push-ups</li>
<li>15 Squats</li>
<li>20 Jumping Jacks</li>
<li>30 Second Plank</li>
</ul>
`;

}

else if(age >= 17 && age <= 18){

result.innerHTML = `
<h3>Workout Plan for Ages 17–18</h3>

<ul>
<li>15 Push-ups</li>
<li>20 Squats</li>
<li>15 Lunges</li>
<li>45 Second Plank</li>
</ul>
`;

}

else{

result.innerHTML = `
<p>Please enter age between 15 and 18.</p>
`;

}

}
