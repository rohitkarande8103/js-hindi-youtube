const tinderUser = new Object();
// const tinderUser = {};



tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isloggedIn = "false"

console.log(tinderUser);

// console.log(objects.keys(tinderUser));

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "rohit",
             lastname: "karande"

        }
    }
}

// console.log(regularUser.fullname.email.firstname.lastname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}

console.log(obj3);

