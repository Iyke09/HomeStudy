exports.dataTypes = function dataTypes(inputValue){
    if (typeof inputValue === "string"){
        return inputValue.length;
    }
    else if ((typeof inputValue === "undefined") || (inputValue === null)){
        return "no value";
    }
    else if (typeof inputValue === "boolean"){
        return inputValue;
    }
    else if (typeof inputValue === "number"){
        if (inputValue < 100){
            return ("less than 100");
        }
        else if (inputValue === 100){
            return ("equal to 100");
        }
        else {
            return ("more than 100");
        }

    }
    else if (Array.isArray(inputValue)){
        if (inputValue.length <= 3){
            return inputValue[2];
        }
        else {
            return ("undefined");
        }
    }
    else if (typeof inputValue === "function"){
        var callback = function(true){
        return callback;}
    }
    else{
        return;
    }
    
}