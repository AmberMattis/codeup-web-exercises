const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//1//
const threePlusLang = users.filter(function(user){
        return user.languages.length > 2;
},0);
console.log(threePlusLang);




//2//
const getEmail = users.map(function(user){
        return user.email;
},0);
console.log(getEmail);




//3//
const avgExperience = users.reduce(function (totalYears,currentUser) {
    return yearSum = totalYears + currentUser.yearsOfExperience
},0)
console.log(`${parseInt(avgExperience / users.length)} years`);




//4//
const longestEmail = getEmail.reduce(function(currentLongestEmail, currentEmail) {
    if(currentEmail.length > currentLongestEmail.length){
        return currentEmail;
    }else{
        return currentLongestEmail;
    }

},"")
console.log(longestEmail);


//5//
const instructorNames = users.reduce(function(prevUser,curUser){
    return `${prevUser} ${curUser.name},`;
},"")

console.log("Your instructors are:" + instructorNames);