/* =========================================
   PROJECT DATA
========================================= */

const projects = {

deltarune: {

    number: "PROJECT 01",

    title: "Deltarune Fighting Game",

    type: "GAME DEVELOPMENT",

    profile: {
        gameplay: 5,
        visuals: 6,
        audio: 1,
        stability: 8,
        release: 5
    },

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

    status: "EN DESARROLLO ACTIVO"
},


   cheques: {

    number: "PROJECT 02",

    title: "Sistema de Gestión de Cheques",

    type: "SOFTWARE DEVELOPMENT",

    progress: {
        development: 100,
        database: 100,
        interface: 95,
        testing: 90,
        documentation: 100
    },

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

    status: "DESARROLLO TERMINADO · LISTO PARA SUBIR"
},

    undertale: {

        number: "PROJECT 03",

        title: "Undertale Battle Engine",

        type: "GAME DEVELOPMENT",

       profile: {
    gameplay: 3,
    visuals: 7,
    audio: 3,
    stability: 9,
    release: 3
},

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

       profile: {
    gameplay: 9,
    visuals: 4,
    audio: 7,
    stability: 9,
    release: 8
},

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

   /* =====================================
   DEVELOPMENT DISPLAY
===================================== */

const radarContainer =
    document.getElementById("radar-container");

const progressContainer =
    document.getElementById("progress-container");

const developmentTitle =
    document.getElementById("development-title");


/*
    Limpiar
*/

progressContainer.innerHTML = "";


/*
    GAME PROJECT
*/

if (project.profile) {

    radarContainer.style.display = "flex";

    progressContainer.style.display = "none";

    developmentTitle.textContent =
        "DEVELOPMENT PROFILE";


    setTimeout(() => {

        drawDevelopmentChart(
            project.profile
        );

    }, 250);

}


/*
    SOFTWARE PROJECT
*/

else if (project.progress) {

    radarContainer.style.display = "none";

    progressContainer.style.display =
        "block";

    developmentTitle.textContent =
        "PROJECT PROGRESS";


    drawProgressBars(
        project.progress
    );

}

    /* =====================================
       DEVELOPMENT PROFILE
    ===================================== */

    if (project.profile) {

        setTimeout(() => {

            drawDevelopmentChart(project.profile);

        }, 250);

    }

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
   DEVELOPMENT PROFILE
========================================= */

let chartAnimation;


function drawDevelopmentChart(profile) {

    const canvas =
        document.getElementById("development-chart");

    if (!canvas || !profile) return;


    const ctx = canvas.getContext("2d");


    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const dpr = window.devicePixelRatio || 1;


    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);


    const centerX = width / 2;
    const centerY = height / 2;


    /*
        Más pequeño que el contenedor para
        dejar espacio a las etiquetas.
    */

    const radius =
        Math.min(width, height) * 0.36;


    const values = [

        profile.gameplay,
        profile.visuals,
        profile.audio,
        profile.stability,
        profile.release

    ];


    const labels = [

        "GAMEPLAY",
        "VISUALS",
        "AUDIO",
        "STABILITY",
        "RELEASE"

    ];


    const points = 5;

    const startAngle = -Math.PI / 2;


    /*
        Duración de la animación
    */

    const duration = 900;

    const startTime = performance.now();


    function animate(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(elapsed / duration, 1);


        /*
            Suavizado
        */

        const eased =
            1 - Math.pow(1 - progress, 3);


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /* =====================================
           GRID
        ===================================== */

        for (let level = 1; level <= 10; level++) {

            const currentRadius =
                radius * (level / 10);


            ctx.beginPath();


            for (let i = 0; i < points; i++) {

                const angle =
                    startAngle +
                    (Math.PI * 2 / points) * i;


                const x =
                    centerX +
                    Math.cos(angle) *
                    currentRadius;


                const y =
                    centerY +
                    Math.sin(angle) *
                    currentRadius;


                if (i === 0) {

                    ctx.moveTo(x, y);

                } else {

                    ctx.lineTo(x, y);

                }

            }


            ctx.closePath();


            /*
                Verde oscuro en los niveles
            */

            ctx.strokeStyle =
                level === 10
                    ? "rgba(64,220,203,0.28)"
                    : "rgba(23,59,56,0.65)";


            ctx.lineWidth =
                level === 10 ? 1.5 : 1;


            ctx.stroke();

        }


        /* =====================================
           AXIS
        ===================================== */

        for (let i = 0; i < points; i++) {

            const angle =
                startAngle +
                (Math.PI * 2 / points) * i;


            const x =
                centerX +
                Math.cos(angle) * radius;


            const y =
                centerY +
                Math.sin(angle) * radius;


            ctx.beginPath();

            ctx.moveTo(
                centerX,
                centerY
            );

            ctx.lineTo(x, y);


            ctx.strokeStyle =
                "rgba(64,220,203,0.22)";

            ctx.lineWidth = 1;

            ctx.stroke();

        }


        /* =====================================
           ANIMATED DATA
        ===================================== */

        const animatedValues =
            values.map(value =>
                value * eased
            );


        ctx.beginPath();


        animatedValues.forEach((value, i) => {

            const angle =
                startAngle +
                (Math.PI * 2 / points) * i;


            const currentRadius =
                radius * (value / 10);


            const x =
                centerX +
                Math.cos(angle) *
                currentRadius;


            const y =
                centerY +
                Math.sin(angle) *
                currentRadius;


            if (i === 0) {

                ctx.moveTo(x, y);

            } else {

                ctx.lineTo(x, y);

            }

        });


        ctx.closePath();


        /*
            Relleno morado
        */

        ctx.fillStyle =
            "rgba(124,92,255,0.20)";

        ctx.fill();


        /*
            Borde turquesa
        */

        ctx.strokeStyle =
            "#40dccb";

        ctx.lineWidth = 2.5;

        ctx.stroke();


        /* =====================================
           DATA POINTS
        ===================================== */

        animatedValues.forEach((value, i) => {

            const angle =
                startAngle +
                (Math.PI * 2 / points) * i;


            const currentRadius =
                radius * (value / 10);


            const x =
                centerX +
                Math.cos(angle) *
                currentRadius;


            const y =
                centerY +
                Math.sin(angle) *
                currentRadius;


            /*
                Glow
            */

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                9,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                "rgba(64,220,203,0.12)";

            ctx.fill();


            /*
                Punto
            */

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                5,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                "#40dccb";

            ctx.fill();


            /*
                Número
            */

            ctx.font =
                "bold 12px Arial";

            ctx.fillStyle =
                "#40dccb";

            ctx.textAlign =
                "center";

            ctx.textBaseline =
                "middle";


            const numberDistance = 19;


            const numberX =
                x +
                Math.cos(angle) *
                numberDistance;


            const numberY =
                y +
                Math.sin(angle) *
                numberDistance;


            ctx.fillText(
                value.toFixed(1) + "/10",
                numberX,
                numberY
            );

        });


        /* =====================================
           LABELS
        ===================================== */

        labels.forEach((label, i) => {

            const angle =
                startAngle +
                (Math.PI * 2 / points) * i;


            /*
                Más alejadas del pentágono
            */

            const labelRadius =
                radius + 65;


            const x =
                centerX +
                Math.cos(angle) *
                labelRadius;


            const y =
                centerY +
                Math.sin(angle) *
                labelRadius;


            ctx.font =
                "bold 10px Arial";


            ctx.fillStyle =
                "#858894";


            ctx.textAlign =
                "center";


            ctx.textBaseline =
                "middle";


            ctx.fillText(
                label,
                x,
                y
            );

        });


        /* =====================================
           CENTER
        ===================================== */

        ctx.beginPath();

        ctx.arc(
            centerX,
            centerY,
            4,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "#40dccb";

        ctx.fill();


        /*
            Continuar animación
        */

        if (progress < 1) {

            requestAnimationFrame(animate);

        }

    }


    requestAnimationFrame(animate);

}
/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProject();

    }

});

/* =========================================
   PROJECT PROGRESS BARS
========================================= */

function drawProgressBars(progress) {

    const container =
        document.getElementById(
            "progress-container"
        );


    const names = {

        development: "DEVELOPMENT",

        database: "DATABASE",

        interface: "INTERFACE",

        testing: "TESTING",

        documentation: "DOCUMENTATION"

    };


    Object.entries(progress).forEach(
        ([key, value]) => {


        const wrapper =
            document.createElement("div");


        wrapper.className =
            "progress-item";


        wrapper.innerHTML = `

            <div class="progress-header">

                <span>
                    ${names[key]}
                </span>

                <span>
                    ${value}%
                </span>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="--progress:${value}%">
                </div>

            </div>

        `;


        container.appendChild(wrapper);

    });

}

/* =========================================
   SKILLS ANIMATION
========================================= */

const skillsSection =
    document.getElementById("habilidades");


if (skillsSection) {

    const skillObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    const fills =
                        entry.target.querySelectorAll(
                            ".skill-fill"
                        );


                    fills.forEach(
                        (fill, index) => {

                        const level =
                            parseFloat(
                                fill.dataset.level
                            );


                        if (isNaN(level))
                            return;


                        setTimeout(() => {

                            fill.style.width =
                                `${level * 10}%`;

                        }, index * 100);

                    });


                    skillObserver.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.2
            }

        );


    skillObserver.observe(
        skillsSection
    );

}
