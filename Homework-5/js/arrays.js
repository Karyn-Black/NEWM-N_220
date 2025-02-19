console.log ("Lets talk arrays");

const ZodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Taurus",
    "Scorpio",
    "Aquarius",
    "Gemini",
    "Virgo",
    "Pisces",
    "Aries",
    "Sagittarius",
    "Capricorn",
];

console.log ("ZodiacSigns", ZodiacSigns);

console.table (ZodiacSigns);

console.log ("2nd Zodiac:", ZodiacSigns[1]);

console.log ("# of Zodiacs:", ZodiacSigns.length);

const ZodiacSignsUlRef = document.getElementById ("zodiac-signs");

for (let i = 0; i < ZodiacSigns.length; i++) {
    console.log ("For Loop:", ZodiacSigns[i]);
    ZodiacSignsUlRef.innerHTML += "<li>" + ZodiacSigns [i] + "</li>";
}

let whileI = 0;
while (whileI < ZodiacSigns.length) {
    console.log ("While Loop:", ZodiacSigns [whileI]);
    whileI++;
}

let whileDoI = 0;
do {
    whileDoI++;
} while (whileDoI < ZodiacSigns.length);

const gradeStatsSectionRef = document.querySelector ("#grade-stats");

const grades = [21, 6, 79, 8, 86, 4, 2 84, 57, 10];

let sumOfGrades = 0;
for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    sumOfGrades += grade;
}

gradeStatsSectionRef.innerHTML +=
    "<h4>Avg: " + sumOfGrades / grades.length + "</h4>";
    