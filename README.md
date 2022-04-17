<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!--<link href="./styles.css" rel="stylesheet">-->
<style>
    .container {
        position: absolute;
        top: 30%;
        left: 10%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap:25px;
    }
    .normalText {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
    }
    .bio, .contactContainer {
        background-color:#d4b772;
        border: 1px solid #d4b772;
    }
    .contactContainer {
        height: 100px;
        width: 400px;
    }
    .projectContainer {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr  30px 50px 50px;
        gap:15px;
        width: 650px;
        text-align: center;
    }
    body {
        background: #EADBB7;
    }
    .navbar { 
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 100px;
        height: 100px;
        justify-content: center;
    }
    .projectPicture {
        width: 250px;
        height: 250px;
    }
    .nav-link {
        font-size: 50px;  
    }
    #githubButton {
        position: absolute;
        top: 2%;
        left: 60%;
    }
    #projectsButton {
        position: absolute;
        top: 0%;
        left:38%;
        font-weight: bold;
        color: black;
    }
    #homeButton {
        position: absolute;
        top: 0%;
        left:20%;
        font-weight: bold;
        color: black;
    }
    h1 {
        position: absolute;
        top: 18%;
        left: 38%;
    }
    .linkButton {
        color: black;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 10%;
        font-size: 20px;
        width: 1000px;
        height:500px;
        margin: 5px;
        text-decoration: none;
    }
    .projectTitle, .projectDescr {
        font-size: 20px;
    }
</style>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-                    expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a id="homeButton" class="nav-link navButton" aria-current="page" href="#">Home</a>
                <a id="projectsButton" class="nav-link navButton" href="#">Projects</a>
                <a id="githubButton" class="nav-link navButton" href="https://github.com/Keith-Howard"><img src="./GitHub-Emblem.png" id="githubImage"></a>
            </div>
        </div>
    </div>
</nav>
<div id="landingPage">
    <!--HTML string gets interted in here when pages loads and when Nav Bar buttons are clicked-->
</div>
<script src="./main.js">