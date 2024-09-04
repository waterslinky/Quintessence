const reader = new FileReader();
async function read_file_url_data(file) {
                
    return new Promise((resolve, reject) => {

        reader.onload = (event) => resolve(event.target.result);
  
        reader.onerror = function(event){
            alert("Error Reading!")
        }

        reader.readAsDataURL(file);

    });

}

async function convert_file(file){
    
    if(file[1]=="png"){

        const dataUrl = await read_file_url_data(file[0]);
        
        let new_image = new Image()
        new_image.src = dataUrl      

        return new_image
    }

    if(file[1]=="txt" || file[1]=="json" || file[1]=="js"){
        let data

        try{
            eval("data = "+file[0])
        }
        catch{
            console.error("Mod error! ")
        }
        

        if(data!=undefined){
            return data
        }
        

    }

    if(file[1] == "json"){

        return JSON.parse(file[0])

    }
}

async function get_files(folder, path = folder.name,begin_filter){
    let file_tree = {}

    let files = folder.values()

    for await (const file of files){
        
        let new_path = path+"/"+file.name

        // console.log(file)

        if (file.kind == "file") {
            
            
          
            let got_file = await file.getFile()
            let text = await got_file.text()

            let file_type
            let file_data = text
            let new_file_name = file.name
            

            

            if(new_file_name.endsWith("png")){
                file_type="png"

                file_data = got_file

                new_file_name = new_file_name.slice(0,new_file_name.length-4)

            }


            if(new_file_name.endsWith("txt")){

                file_type="txt"

                new_file_name = new_file_name.slice(0,new_file_name.length-4)

            }

            

            if(new_file_name.endsWith("json")){

                file_type="json"

                new_file_name = new_file_name.slice(0,new_file_name.length-5)

            }

            if(new_file_name.endsWith("js")){

                file_type="js"

                new_file_name = new_file_name.slice(0,new_file_name.length-3)

            }

                    
            file_tree[new_file_name] = [file_data,file_type]
                
        } 

        else if(file.kind == "directory") {

              
            
            if(begin_filter==undefined || begin_filter.includes(file.name)){
                file_tree[file.name] = await get_files(file, new_path)
            }
            

        }

    }

    // console.log(file_tree)

    return file_tree

}

async function pick_directory(mode = "read",begin_filter){

    const handle = await showDirectoryPicker({
        mode,
    });

    return get_files(handle,handle.name,begin_filter)

}