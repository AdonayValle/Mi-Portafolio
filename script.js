/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    deltarune: {

        number: "PROJECT 01",

        title: "Deltarune Fighting Game",

        type: "GAME DEVELOPMENT",

        description:
            "Juego de lucha inspirado en Deltarune y otros fighting games. El proyecto experimenta con sistemas de combate, personajes, knockback, porcentajes y habilidades especiales.",

        systems: [
            "Percentage System",
            "Knockback",
            "Hitboxes",
            "Parry",
            "Special Attacks",
            "Projectile System"
        ],

        status: "IN DEVELOPMENT"

    },


    cheques: {

        number: "PROJECT 02",

        title: "Sistema de Gestión de Cheques",

        type: "SOFTWARE DEVELOPMENT",

        description:
            "Aplicación de escritorio desarrollada para gestionar cheques y beneficiarios mediante una base de datos local.",

        systems: [
            "SQLite Database",
            "Cheque Management",
            "Beneficiary Management",
            "CRUD Operations",
            "Windows Forms",
            "Data Persistence"
        ],

        status: "READY TO UPLOAD"

    },


    undertale: {

        number: "PROJECT 03",

        title: "Undertale Battle Engine",

        type: "GAME DEVELOPMENT",

        description:
            "Motor experimental de combate inspirado en las mecánicas de batalla de Undertale.",

        systems: [
            "Soul Movement",
            "Projectile Patterns",
            "Collision Detection",
            "Battle System",
            "HUD",
            "Camera System"
        ],

        status: "EXPERIMENTAL"

    },


    solfire: {

        number: "PROJECT 04",

        title: "SolFire",

        type: "GAME DEVELOPMENT",

        description:
            "Juego experimental de enfrentamiento entre un alma y Sans. El proyecto combina movimiento, proyectiles, parry y supervivencia.",

        systems: [
            "Player Movement",
            "Projectile System",
            "Dash",
            "Parry",
            "Lives System",
            "Timer System"
        ],

        status: "EXPERIMENTAL"

    }

};


/* =========================================
   OPEN PROJECT
========================================= */

function openProject(projectID) {

    const project = projects[projectID];

    if (!project) return;


    document.getElementById("modal-number").textContent =
        project.number;

    document.getElementById("modal-title").textContent =
        project.title;

    document.getElementById("modal-type").textContent =
        project.type;

    document.getElementById("modal-description").textContent =
        project.description;

    document.getElementById("modal-status").textContent =
        project.status;


    const systems =
        document.getElementById("modal-systems");

    systems.innerHTML = "";


    project.systems.forEach(system => {

        const li = document.createElement("li");

        li.textContent = system;

        systems.appendChild(li);

    });


    document
        .getElementById("project-modal")
        .classList.add("active");


    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE PROJECT
========================================= */

function closeProject() {

    document
        .getElementById("project-modal")
        .classList.remove("active");


    document.body.style.overflow = "";

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProject();

    }

});
