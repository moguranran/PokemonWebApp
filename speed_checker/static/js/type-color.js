class TypeColor{
    constructor(type1, type2){
        this.type1 = type1;
        this.type2 = type2;
    }
    make(type){
        var color;
        switch (type) {
            case "normal":
                color = "red";
                break;
        
            default:
                color = "white";
                break;
        }
        return color;
    }
}