/* =========================================
   FOUR MONTHS AGO
   Interactive Story
========================================= */


const intro = document.getElementById("intro");
const story = document.getElementById("story");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");

const frameElement = document.getElementById("frame");
const frameText = document.getElementById("frameText");
const photoArea = document.getElementById("photoArea");

const frameNumber = document.getElementById("frameNumber");
const progressBar = document.getElementById("progressBar");


let currentFrame = 0;

let isPlaying = false;

const frameLayouts = [
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under",
    "layout-side",
    "layout-side-reverse",
    "layout-under"
];


/* =========================================
   STORY DATA
========================================= */

const frames = [

    /* -----------------------------------------
       FRAME 1
    ----------------------------------------- */

    {
        beats: [

            {
                type: "text",
                html: `
                    <p>
                        I want to take you back...
                    </p>
                `,
                duration: 1300
            },

            {
                type: "photo",
                src: "baby.JPG",
                rotation: -3,
                duration: 1300
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Woah.
                        <br>
                        Too far back.
                        <br><br>
                        Let's try this again...
                    </p>
                `,
                duration: 2200
            }

        ]
    },


    /* -----------------------------------------
       FRAME 2
    ----------------------------------------- */

    {
        beats: [

            {
                type: "text",
                html: `
                    <p class="small">
                        I want to take you back...
                        <br>
                        To the time before I met a very special woman.
                    </p>
                `,
                duration: 2200
            },

            {
                type: "photo",
                src: "car.JPG",
                rotation: 2,
                duration: 1800
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        I was obsessed with a lot of things...
                        <br><br>
                        Like <span class="accent">cars.</span>
                    </p>
                `,
                duration: 2000
            }

        ]
    },


    /* -----------------------------------------
       FRAME 3
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "robotics.JPG",
                rotation: -2,
                duration: 1300
            },

            {
                type: "text",
                html: `
                    <p>
                        Robotics.
                    </p>
                `,
                duration: 1200
            },

            {
                type: "photo",
                src: "FRCRobotics.JPG",
                rotation: 2,
                duration: 1400
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Oh...
                        <br>
                        and more robotics of course...
                    </p>
                `,
                duration: 1800
            }

        ]
    },


    /* -----------------------------------------
       FRAME 4
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "frogArmy.JPG",
                rotation: -2,
                duration: 1300
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        An army of tiny frogs...
                        <br>
                        apparently...?
                    </p>
                `,
                duration: 2000
            }

        ]
    },


    /* -----------------------------------------
       FRAME 5
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "ManualLabor.JPG",
                rotation: 2,
                duration: 1400
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Manual... labor..?
                        <br><br>
                        Alright, this is getting a little weird.
                    </p>
                `,
                duration: 2600
            }

        ]
    },


    /* -----------------------------------------
       FRAME 6
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "typing.JPG",
                rotation: -1,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        There we go!
                        <br><br>
                        That's a big obsession...
                        <br><br>
                        Did a lot of typing
                        <br>
                        for some bizarre reason.
                    </p>
                `,
                duration: 2500
            }

        ]
    },


    /* -----------------------------------------
       FRAME 7
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "Lego1.JPG",
                rotation: -2,
                duration: 1200
            },

            {
                type: "photo",
                src: "Lego2.JPG",
                rotation: 3,
                duration: 1000
            },

            {
                type: "photoGroup",
                photos: [
                    {
                        src: "lego3.JPG",
                        rotation: -4
                    },
                    {
                        src: "lego4.JPG",
                        rotation: 4
                    }
                ],
                duration: 700
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Okay...
                    </p>
                `,
                duration: 1000
            },
            {
                type: "text",
                html: `
                    <p class="small">
                        Okay...
                        <br>
                        who's in charge of this slideshow....
                    </p>
                `,
                duration: 2200
            }

        ]
    },


    /* -----------------------------------------
       FRAME 8
    ----------------------------------------- */

    {
        beats: [

            {
                type: "text",
                html: `
                    <p>
                        And also my job.
                    </p>
                `,
                duration: 1000
            },

            {
                type: "photo",
                src: "job.JPG",
                rotation: 2,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        But then...
                        <br><br>
                        On June 18th,
                        <br>
                        I asked a fateful question.
                    </p>
                `,
                duration: 2300
            }

        ]
    },


    /* -----------------------------------------
       FRAME 9
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after1.JPG",
                rotation: -2,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        A question that would bring
                        <br>
                        many things into my life...
                        <br><br>
                        <span class="accent">Joy...</span>
                    </p>
                `,
                duration: 2200
            }

        ]
    },


    /* -----------------------------------------
       FRAME 10
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after2.JPG",
                rotation: 2,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Grace
                        <br>
                        and beauty...
                    </p>
                `,
                duration: 2000
            }

        ]
    },


    /* -----------------------------------------
       FRAME 11
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after3.JPG",
                rotation: -3,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        A little bit of
                        <br>
                        <span class="accent">crazy</span>
                        too!
                    </p>
                `,
                duration: 2000
            }

        ]
    },


    /* -----------------------------------------
       FRAME 12
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after4.JPG",
                rotation: 2,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Even more beauty...
                    </p>
                `,
                duration: 1500
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Didn't I already say that??
                        <br><br>
                        Well...
                        <br>
                        it's worth saying twice anyway.
                    </p>
                `,
                duration: 2400
            }

        ]
    },


    /* -----------------------------------------
       FRAME 13
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after5.JPG",
                rotation: -2,
                duration: 1600
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Someone with a love for life...
                        <br>
                        And a heart of gold.
                        <br>
                        <span class="accent">Someone who is always there.</span>
                    </p>
                `,
                duration: 2700
            }

        ]
    },


    /* -----------------------------------------
       FRAME 14
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after6.JPG",
                rotation: 2,
                duration: 1800
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        A woman after God's own heart.
                        <br>
                        Who makes me feel like the man I want to be.
                    </p>
                `,
                duration: 2800
            }

        ]
    },


    /* -----------------------------------------
       FRAME 15
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after7.JPG",
                rotation: -2,
                duration: 1700
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        And with every passing day...
                        <br>
                        I find more and more reasons to say <span class="accent">"I love you"</span>
                    </p>
                `,
                duration: 2200
            }

        ]
    },


    /* -----------------------------------------
       FRAME 16
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after8.JPG",
                rotation: 2,
                duration: 1700
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        And while I know I can't predict the future...
                        <br>
                        I can safely say that I am looking forward to spending the rest of my life with you.
                        <br>
                        Because that's not a prediction, it's a fact.
                    </p>
                `,
                duration: 2400
            }

        ]
    },


    /* -----------------------------------------
       FRAME 17
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after9.JPG",
                rotation: -2,
                duration: 1700
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        But I am so very excited...
                    </p>
                `,
                duration: 2500
            }

        ]
    },


    /* -----------------------------------------
       FRAME 18
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after10.JPG",
                rotation: 2,
                duration: 1800
            },

            {
                type: "text",
                html: `
                    <p class="small">
                        Because the woman I am
                        <br>
                        <span class="accent">falling in love with...</span>
                    </p>
                `,
                duration: 2800
            }

        ]
    },


    /* -----------------------------------------
       FRAME 19
    ----------------------------------------- */

    {
        beats: [

            {
                type: "photo",
                src: "after11.JPG",
                rotation: 0,
                duration: 1800
            },

            {
                type: "text",
                html: `
                    <p>
                        Is you.
                    </p>
                `,
                duration: 3500
            }

        ]
    }

];


/* =========================================
   START
========================================= */

startButton.addEventListener("click", () => {

    intro.classList.add("hidden");

    story.classList.remove("hidden");

    currentFrame = 0;

    loadFrame(currentFrame);

});


/* =========================================
   NEXT BUTTON
========================================= */

nextButton.addEventListener("click", () => {

    if (isPlaying) return;

    if (currentFrame < frames.length - 1) {

        currentFrame++;

        loadFrame(currentFrame);

    } else {

        // We'll replace this with the timer page
        // once we build that page.

        window.location.href = "together.html";

    }

});


/* =========================================
   LOAD FRAME
========================================= */

async function loadFrame(index) {

    isPlaying = true;

    const frame = frames[index];

    updateProgress(index);

    clearFrame();
    frameElement.classList.remove(
        "layout-side",
        "layout-side-reverse",
        "layout-under"
    );
    frameElement.classList.add(frameLayouts[index]);

    for (const beat of frame.beats) {

        await playBeat(beat);

    }

    isPlaying = false;

}


/* =========================================
   PLAY INDIVIDUAL BEAT
========================================= */

function playBeat(beat) {

    return new Promise(resolve => {

        if (beat.type === "text") {

            showText(beat.html);

        }

        else if (beat.type === "photo") {

            showPhoto(
                beat.src,
                beat.rotation || 0
            );

        }

        else if (beat.type === "photoGroup") {

            showPhotoGroup(beat.photos);

        }

        setTimeout(resolve, beat.duration);

    });

}


/* =========================================
   TEXT
========================================= */

function showText(html) {

    frameText.innerHTML = html;

    frameText.style.animation = "none";

    // Force animation restart
    void frameText.offsetWidth;

    frameText.style.animation =
        "textEnter 1.05s cubic-bezier(.16,.84,.24,1) forwards";

}


/* =========================================
   PHOTO
========================================= */

function showPhoto(src, rotation = 0) {

    const img = document.createElement("img");

    img.className = "photo";

    img.src = src;

    img.alt = "";

    img.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );

    photoArea.appendChild(img);

}


/* =========================================
   MULTIPLE PHOTOS
========================================= */

function showPhotoGroup(photos) {

    const group = document.createElement("div");

    group.className = "photo-stack";

    photos.forEach((photo, index) => {

        const img = document.createElement("img");

        img.className = "photo";

        img.src = photo.src;

        img.alt = "";

        img.style.setProperty(
            "--rotation",
            `${photo.rotation || 0}deg`
        );

        img.style.animationDelay =
            `${index * 220}ms`;

        group.appendChild(img);

    });

    photoArea.appendChild(group);

}


/* =========================================
   CLEAR FRAME
========================================= */

function clearFrame() {

    frameText.innerHTML = "";

    photoArea.innerHTML = "";

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress(index) {

    const number =
        String(index + 1).padStart(2, "0");

    frameNumber.textContent = number;

    const percentage =
        ((index + 1) / frames.length) * 100;

    progressBar.style.width =
        `${percentage}%`;

}


/* =========================================
   PRELOAD IMAGES
========================================= */

function preloadImages() {

    frames.forEach(frame => {

        frame.beats.forEach(beat => {

            if (beat.type === "photo") {

                const image = new Image();

                image.src = beat.src;

            }

            if (beat.type === "photoGroup") {

                beat.photos.forEach(photo => {

                    const image = new Image();

                    image.src = photo.src;

                });

            }

        });

    });

}


preloadImages();