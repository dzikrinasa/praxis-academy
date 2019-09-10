class cat {
        constructor(tiredness, hunger, loneliness){
            this.tiredness=tiredness;
            this.hunger=hunger;
            this.loneliness=loneliness;
            this.happiness=0;
        }
        cathappiness(){
            this.happiness++;
            console.log(this.tiredness, this.hunger, this.loneliness, 'fatigue');
            return this;
        }
        sleep() {
            this.sleep;
            console.log(this.tiredness, this.hunger, this.loneliness, 'sleep');
            return this;
        }
    }
    var meow = new cat ('well', 'hungry', 'sad boy')
    var kucing = new cat ('sick', 'not hungry', 'not')
