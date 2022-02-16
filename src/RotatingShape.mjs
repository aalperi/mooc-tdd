export class RotatingShape{
    shape;
     
    constructor(shape){
        this.shape = shape.split("\n").map(str => str.trim());
    }

    toString(){
        let str="";
        for(let i=0;i<this.shape.length;i++){
            str+=this.shape[i]+"\n";
        }
        return str;
    }
    rotateRight(){
        let newShape="";
        for(let i=0;i<this.shape.length;i++){
            let newRow="";
            for(let y=0;y<this.shape.length;y++){
                newRow+=this.shape[this.shape.length-y-1].charAt(i);
            }
            newShape+=newRow+"\n";    
        }
        return newShape;
    }
    rotateLeft(){
        let newShape="";
        for(let i=0;i<this.shape.length;i++){
            let newRow="";
            for(let y=0;y<this.shape.length;y++){
                newRow+=this.shape[y].charAt(this.shape[y].length-i-1);
            }
            newShape+=newRow+"\n";    
        }
        return newShape;
    }
}