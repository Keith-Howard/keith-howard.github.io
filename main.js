let homeButton = document.getElementById('homeButton');
let projectsButton = document.getElementById('projectsButton');
let landingPage = document.getElementById("landingPage");
let projects = ['<div class="projectContainer"><div><img src="./projectPictures/PacMan1.png" class="projectPicture"></div><div class="projectTitle">Pac Man Exercise</div><div class="projectDescr">You can make as many Pac Men as you want and then deploy them across your screen. When they hit a boundary they turn around.</div><div><a class="linkButton" href="https://keith-howard.github.io/PacMan/" target="_blank" rel="noopener noreferrer">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/PacMan.git" target="_blank" rel="noopener noreferrer">Code Repo</a></div></div>', 
                '<div class="projectContainer"><div><img src="./projectPictures/eyes.JPG" class="projectPicture"></div><div class="projectTitle">Eyes Exercise</div><div class="projectDescr">When you move your mouse across the screen the eyes follow your cursor.</div><div><a class="linkButton"href="https://keith-howard.github.io/Eyes/" target="_blank" rel="noopener noreferrer">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/Eyes.git" target="_blank" rel="noopener noreferrer">Code Repo</a></div></div>',
                '<div class="projectContainer"><div><img src="./projectPictures/bostonMapScreenshot.jpg" class="projectPicture"></div><div class="projectTitle">Real Bus Tracker Exercise</div><div class="projectDescr">When given a longitude and lattitude in the city of Boston the program plots bus stops on a map in a mile radius from the given location.</div><div><a class="linkButton" href="https://keith-howard.github.io/Real-Time-Bus-Tracker/" target="_blank" rel="noopener noreferrer">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/Real-Time-Bus-Tracker.git" target="_blank" rel="noopener noreferrer">Code Repo</a></div></div>']

let landingPageString = 
`<h1>Keith Howard's Portfolio</h1>
<div class="containerWrapper">
    <div class="container2">
        <div id="profilePic" class="item1"><img src="githubpicture.jpeg"/></div>
        <div class="item2"><p class="normalText bio">Currently I am a project specialist for an electrical manufacturing company. Specializing in data center
            hardware. I have a bachelors degree in Communications from Western Connecticut State University and an
            associates degree in Graphic Design from Pratt Institute. I am currently enrolled in MIT XPRO's Professional
            Certificate in Coding: Full Stack Development with MERN. This site is to preview work I have done while 
            I am enrolled. I am based out of Long Island NY.</p></div>
        <div class="contactContainer">
            <div class="item3"><p class="normalText">Email: Keithwhoward88@gmail.com</p></div>
            <div><a class="linkedIn linkButton" href="https://www.linkedin.com/in/keith-howard-2a55a455/" target="_blank" rel="noopener noreferrer">My Linkedin</a></div>
        </div>
        <div class="item4"><iframe width="504" height="284" src="https://www.youtube.com/embed/Qtn1n-xvlKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
</div>`


homeButton.addEventListener("click", getLandingPage);
projectsButton.addEventListener("click", getProjectsPage);

function deleteDefaultTitle() {
    let titlesToRemove = document.getElementsByTagName("h1");
    for (let i = 0; i < titlesToRemove.length; i++) {
        let anchorTagList = titlesToRemove[i].getElementsByTagName("a");
        if (anchorTagList[i].origin === 'https://keith-howard.github.io') {
            titlesToRemove[i].remove();
        }
    }
}

function getLandingPage() {
    landingPage.innerHTML = landingPageString
}

function getProjectsPage() {
    htmlString = ""
    let projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('class', 'container2');
    let projectsHeading = document.createElement('div');
    let containerWrapper = document.createElement('div');
    containerWrapper.setAttribute('class', 'containerWrapper');
    for (let i = 0; i < projects.length; i++) {
        htmlString = htmlString + projects[i];
    }
    projectsHeading.innerHTML = "<h1>Keith Howard's Projects</h1>";
    projectsContainer.innerHTML = htmlString;
    containerWrapper.appendChild(projectsContainer);
    landingPage.innerHTML = '';
    landingPage.appendChild(projectsHeading);
    landingPage.appendChild(containerWrapper);
}
deleteDefaultTitle();
getLandingPage()