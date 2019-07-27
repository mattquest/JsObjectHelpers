exports.assignExisting = function(obj1, obj2) {
    for (const key of Object.keys(obj2)) {
        if (key in obj1) {
            obj1[key] = obj2[key];
        }
    }
};