class A {
    //1.Properties
    name;//this is only decleration

    surname = '';//this is declearation and initiallization
    address = 'pune'//
    state;

    //2.Constructor
    //role of the constructor is initialise the properti of the class
    constructor() {
        //this.number
        this.name = 'Santosh';
        this.surname = 'Chaugule';
        this.fathername = "Nivrutti"
    }


    //3.Method

    showName() {

        console.log(this.name + this.surname + this.fathername)

    }
    setState(data) {
        this.state = data;
    }
    showState() {
        console.log(this.state)
    }


}
//lets create the class object
//let object=new ClassName();
let obj = new A();

//object.member
obj.showName()




class B extends A {
    //1.Properties
    friend1; //this is only declecration

    friend2 = ''


    //2.constructor
    constructor(frnd3) {//this is formal argument
        super();//for child parent
        this.friend1 = "Yogesh";
        this.friend2 = "Onkar";
        this.friend3 = frnd3;
    }



    //3.Method
    listMyFreds() {
        console.log(this.friend1)
        console.log(this.friend2)
        console.log(this.friend3)
    }


}

let obj2 = new B('Shekhar')

obj2.listMyFreds()

obj2.showName()

obj2.setState({
    name: "Shubham",
    surname: "Sharma"

});
obj2.showState();