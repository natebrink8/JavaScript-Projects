function nateDictionary1() {        // to call a name
    var Neighbor = {
        Species:"Human",
        Gender:"Female",
        Age:47,
        Name:"Suzanne",
        Pet:"Labradoodle"
    };
    document.getElementById("Dictionary").innerHTML = Neighbor.Name;
}

function nateDictionary2() {        // to delete a sub var
    var Neighbor = {
        Species:"Human",
        Gender:"Female",
        Age:47,
        Name:"Suzanne",
        Pet:"Labradoodle"
    };
    delete Neighbor.Gender      // delete command for the Gender subvar
    document.getElementById("DictionaryDeuce").innerHTML = Neighbor.Gender;
}

