//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Consultant",
    cardImage: "assets/images/experience-page/Hoonar.png",
    place: "Hoonar Tekwurks Consulting LLP",
    time: "(MAR, 2021 - present)",
    desp: "<li>Working As Trainee.</li> <li>.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Best Marketing Head",
    cardImage: "assets/images/experience-page/viva.png",
    description:
      "Won the Best Marketing Head in college events ",
  },
  {
    title: "Volunteer in Coding Competition",
    cardImage: "assets/images/experience-page/sinhgad.png",
    description:
      "Participated in the Coding competition as a Volunteer.",
  },
  {
    title: "Head in Internet of Things Workshop",
    cardImage: "assets/images/experience-page/sinhgad.png",
    description:
      " Worked as A head Volunteer in the Internet of Things Workshop.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Mentor As IOT WORKSHOP",
    image: "assets\images\experience-page\mit.jpg",
    time: "02/2020 - 02/2020",
    desp: "<li>Tought about different Sensors and Actuators Emerging in the market .</li><hr /><li>Encouraged  students to choose their primary subject as Internet of Things  .</li>",
  },
 
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
