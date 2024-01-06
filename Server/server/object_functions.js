function run_function(function_name,parameters){
    let new_function=typeof window != 'undefined' ? window : global

    new_function[function_name].apply(null,parameters)
}


function randomize_list(list){
    let old_list=list.splice(0)

    list.splice(0,list.length)
    

    let length=old_list.length
    for(let num=0;num<length;num++){
        let i = Math.round((old_list.length-1)*Math.random())


        list.push(old_list[i])

        old_list.splice(i,1)           
    }

    return list

}


function replace_list_object(list,new_list){
    list.splice(0,list.length)
    new_list.forEach(element => {
        list.push(element)
    });
}

function make_new_array(width,base=undefined){
    let list=[]
    for(let i=0;i<width;i++){
        list.push(base)
    }
    return list
}

function make_new_2D_array(width,hieght,base=undefined){
    let list=[]
    for(let i=0;i<width;i++){
        list.push(make_new_array(hieght,base))
    }
    return list
}