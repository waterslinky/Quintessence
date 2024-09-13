function run_function(function_name,parameters){
    let new_function=typeof window != 'undefined' ? window : global

    new_function[function_name].apply(null,parameters)
}


function randomize_list(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
}

function replace_list_object(list, new_list) {
    list.splice(0, list.length);
    new_list.forEach(element => {
        list.push(element);
    });
}

function make_new_array(width, base = undefined) {
    let list = [];
    for (let i = 0; i < width; i++) {
        list.push(base);
    }
    return list;
}

function make_new_2D_array(width, height, base = undefined) {
    let list = [];
    for (let i = 0; i < width; i++) {
        list.push(make_new_array(height, base));
    }
    return list;
}

if (typeof window == 'undefined') {
module.exports = {
    run_function,
    randomize_list,
    replace_list_object,
    make_new_array,
    make_new_2D_array
};
}