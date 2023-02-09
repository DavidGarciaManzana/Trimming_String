let trim = (str: string, size: number): string => {

    if (str.length <= size) {
        return str
    }
    else if (size <= 3) {
        return `${str.slice(0, size)}...`
    }
    else {
        return `${str.slice(0, size - 3)}...`;
    }

}

// console.log(trim("Creating kata is fun", 14))//,"Creating ka...");
// console.log(trim("He", 1))//,"H...");
// console.log(trim("Code Wars is pretty rad", 50))//, "Code Wars is pretty rad");
//Time 10mins