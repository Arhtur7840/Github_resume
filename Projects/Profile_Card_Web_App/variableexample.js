// create variable
const name = "John Doe";
const age = 28;
const occupation = "Web Developer";
const bio = "Passionate about coding and teaching others";
const profilePicture = "profile.png";

const profileContainer = document.getElementById("profile-container");

// string literal example
// string literals use ` or ""

const profileCard = `<div class="card">` +
`<img src ="` +profilePicture+ `" + 'alt="ProfilePicture"' >` +
`<h2>` + name + `</h2>` +
`<p>` + age + `</p>` +
`<p>` + occupation + `</p>` +
`<p>` + bio + `</p>` +
`</div>`;

profileContainer.innerHTML=profileCard;

/* const profileCard=`
    <div class="card">
        <img src="${profilePicture}" alt="Profile Picture">
        <h2> ${name} </h2>
        <p> ${age} </p>
        <p> ${occupation} </p>
        <p> ${bio} </p>
    </div>`;


profileContainer.innerHTML=profileCard; */

// Using array

/* const profileCard=`
[
    "profile.png"
    "John Doe"
    28
    "Web Developer"
    "Passionate about coding and teaching others"
]`; */
profileContainer.innerHTML=profileCard; 