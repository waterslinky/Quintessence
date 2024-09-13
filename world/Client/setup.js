function save_local(index, item) {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(index, JSON.stringify(item));
    } else {
        // Node.js environment: Use a file or another storage mechanism
        const fs = require('fs');
        fs.writeFileSync(`/tmp/${index}.json`, JSON.stringify(item));
    }
}

function get_local(index) {
    if (typeof localStorage !== 'undefined') {
        var data = JSON.parse(localStorage.getItem(index));
    } else {
        // Node.js environment: Use a file or another storage mechanism
        const fs = require('fs');
        try {
            var data = JSON.parse(fs.readFileSync(`/tmp/${index}.json`));
        } catch (err) {
            var data = null;
        }
    }
    return data;
}

stack_size = 64;

let selected_status;
if (typeof sessionStorage !== 'undefined') {
    // Browser environment
    selected_status = sessionStorage.getItem("status");
} else {
    // Node.js environment
    selected_status = "offline"; // Default value or retrieve from another source
}

if (!selected_status) {
    selected_status = "offline";
}

if (selected_status == "offline") {
    var selected_slot;
    if (typeof sessionStorage !== 'undefined') {
        selected_slot = sessionStorage.getItem("slot");
    } else {
        selected_slot = null; // Default value or retrieve from another source
    }
    console.log("Selected slot: " + selected_slot);

    if (!selected_slot) {
        if (typeof window !== 'undefined') {
            window.location.href = "../start/index.html";
        } else {
            console.log("Redirect to start page in Node.js environment");
        }
    }
}

if ((!get_local("username")) && (!get_local("password"))) {
    save_local("username", "");
    save_local("password", "");
}

particles = [];
emiters = [];

//DEL
breaking_time_0 = false;

AlertedScreenSecurityError = false;

let slot_size = 150;

//Blocks drawn display
blocks_drawn = 0;
show_blocks_drawn = false;

//FPS display
FPS = 0;
FPS_times_draw = 0;
FPS_ticks = 0;
showFPS = true;

//Average Draw Time
ADT = 0;
ADT_total = 0;
ADT_ticks = 0;
showADT = false;

//Average Update Time
AUT = 0;
AUT_total = 0;
AUT_ticks = 0;
showAUT = false;

showCurrentTime = false;
show_time_stamp = false;
show_time_paused = false;
show_all_time = false;

regeneration_timer = false;

function reset_heart() {
    heart_parts = [];
    for (let i = 1; i <= 10; i++) {
        heart_parts.push(i);
    }
}

function heal_heart(heal_amount = 1) {
    if (heart_parts.length < 10) {
        if (heart_parts.length + heal_amount >= 10) {
            reset_heart();
        } else {
            let number_not_included = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            heart_parts.forEach(part => {
                number_not_included[part - 1] = "";
            });

            //Remove all empty spaces
            let old_number_not_included = number_not_included;
            number_not_included = [];

            old_number_not_included.forEach(number => {
                if (number != "") {
                    number_not_included.push(number);
                }
            });

            for (let i = 1; i <= heal_amount; i++) {
                heart_parts.push(number_not_included[Math.round((number_not_included.length - 1) * Math.random())]);
                number_not_included.splice(Math.round((number_not_included.length - 1) * Math.random()), 1);
            }
            // console.log(number_not_included)
        }
    }
}

function damage_heart(damage_amount = 1) {
    if (heart_parts.length - damage_amount <= 0) {
        // console.log("INSTA KILL")
        heart_parts = [];
    } else {
        for (let i = 1; i <= damage_amount; i++) {
            heart_parts.splice(Math.round((heart_parts.length - 1) * Math.random()), 1);
        }
    }
}

heart_parts = [];
reset_heart();

showVelocity = false;
LastTimeWDown = 0;

SpeedInBlocks = false;

show_tab_list = false;

//CAM SETTINGS
camera_bounded = true;
world_cam = [0, 0];
block_size = 32;
let chuck_size = 20;
let render_distance = [0, 0];

//FOV SETTINGS
FOV = typeof localStorage !== 'undefined' ? localStorage.getItem("FOV") : 1.25;

function set_fov(fov) {
    if (FOV != fov) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem("FOV", FOV);
        }
        FOV = fov;
    }

    if (typeof window !== 'undefined') {
        display_block_size = (block_size * FOV);
        render_distance = [Math.ceil(((innerWidth / display_block_size) / chuck_size) / 2), Math.ceil(((innerHeight / display_block_size) / chuck_size) / 2)];
    } else {
        // Node.js environment: Set default values or handle differently
        display_block_size = (block_size * FOV);
        render_distance = [10, 10]; // Default values for Node.js environment
    }
}

set_fov(FOV);

//DEL?
draw_block = "air";
mining = false;
is_placing = false;
old_is_placing = is_placing;

//Multiplayer
multiplayer_allod = true;
multiplayer = false;
connected = false;

game_paused = false;

chat = [];

texture_pack = "a";

let oped = true;

fly_par_tick = 0;

//Draw loading screen
if (typeof window !== 'undefined') {
    clear_screen("0,0,0");
    screen.fillStyle = "rgb(255,255,255)";
    screen.textAlign = "center";
    screen.font = "200px serif";
    screen.fillText("Loading...", innerWidth / 2, innerHeight / 2);
} else {
    console.log("Loading...");
}

if (typeof window == 'undefined') {
    module.exports = {
        save_local,
        get_local,
        render_distance,
        chuck_size,
        selected_slot
    };
}