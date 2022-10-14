var ourCat = {
    "name": "Newton",
    "kitten": 3,
    "leg": 4,
    "tails": 1,
    "eat": ["Everuthing!"]
};

console.log(ourCat)

console.log("The name of the cat is : " + ourCat.name)

console.log("How many legs the cat has? Answer: " + ourCat['leg'])

ourCat.name = "Alexias"

console.log("The name of the cat is : " + ourCat.name)

ourCat.bark = "Meow Meow"

console.log(ourCat)

delete ourCat.kitten

console.log(ourCat)