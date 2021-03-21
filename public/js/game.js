const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'It is defined as when there is such obscurity and the associated visibility is equal to or exceeds 1000 m.',
        choice1: 'Mist',
        choice2: 'Fog',
        choice3: 'Haze',
        choice4: 'Dust',
        answer: 1,
    },
    {
        question:
            "Is defined as 'obscurity in the surface layers of the atmosphere, which is caused by a suspension of water droplets'",
        choice1: "Mist",
        choice2: "Fog",
        choice3: "Haze",
        choice4: "Dust",
        answer: 2,
    },
    {
        question: "Haze often occurs when dust and smoke particles accumulate in relatively dry air. What kind of Pokémon are most common in hazy weather?",
        choice1: "Ground Type Pokémon",
        choice2: "Ghost Type Pokémon",
        choice3: "Shadow Type Pokémon",
        choice4: "All of the Above",
        answer: 4,
    },
    {
        question: "Violent short-lived weather disturbance that is almost always associated with lightning, thunder, dense clouds, heavy rain or hail, and strong gusty winds.",
        choice1: "Haze",
        choice2: "Blizzard",
        choice3: "Thunderstorm",
        choice4: "Typhoon",
        answer: 3,
    },
    {
        question: "A violent swirling column of air that stretches from a thunderstorm to the ground is known as a_______.",
        choice1: "Typhoon",
        choice2: "Tornado",
        choice3: "Haze",
        choice4: "Blizzard",
        answer: 2,
    },
    {
        question: "What kind of Pokémon are most common in cloudy weather?",
        choice1: "Shadow Type Pokémon",
        choice2: "Flying Type Pokémon",
        choice3: "Dragon Type Pokémon",
        choice4: "All of the Above",
        answer: 2,
    },
    {
        question: "Violent short-lived weather disturbance that is almost always associated with lightning, thunder, dense clouds, heavy rain or hail, and strong gusty winds.",
        choice1: "Haze",
        choice2: "Blizzard",
        choice3: "Thunderstorm",
        choice4: "Typhoon",
        answer: 3,
    },
    {
        question: "What is the total number of Pokémon on the National Pokémon List?",
        choice1: "897",
        choice2: "900",
        choice3: "1000",
        choice4: "Uncountable",
        answer: 1,
    },
    {
        question: "In Sandy weather, what Pokémon can you find? ",
        choice1: "Electric type Pokémon",
        choice2: "Fighting type Pokémon",
        choice3: "Ground type Pokémon",
        choice4: "Psychic type Pokémon",
        answer: 2,
    },
    {
        question: "What kind of Pokémon would Charizard be if you had visited the Pokédex table?",
        choice1: "Fighting and Flying type Pokémon",
        choice2: "Rock and Ghost type Pokémon",
        choice3: "Unknown type Pokémon",
        choice4: "Fire and Flying type Pokémon",
        answer: 4,
    },
    {
        question: "When it's _____ out, there's a heavy fog. The air is thick with moisture, and there's just barely a light rain.",
        choice1: "Foggy",
        choice2: "Hazy",
        choice3: "Misty",
        choice4: "Windy",
        answer: 3,
    },
    {
        question: "Is the mix of events that happen each day in our atmosphere. ______ is different in different parts of the world and changes over minutes, hours, days and weeks.",
        choice1: "Weather",
        choice2: "Temperature",
        choice3: "Climate",
        choice4: "None of the Above",
        answer: 1,
    },
    {
        question: "Breeze and gale are common terms used to describe the speed of what?",
        choice1: "Snow",
        choice2: "Breeze",
        choice3: "Wind",
        choice4: "clouds",
        answer: 3,
    },
    {
        question: "Earth’s recent temperature rises which have been linked to human activity is known as global _______?",
        choice1: "Warning",
        choice2: "Warming",
        choice3: "Warring",
        choice4: "Warnming",
        answer: 2,
    },
    {
        question: "What kinds of Pokémon are most likely to appear while it's raining?",
        choice1: "Fire Type Pokémon",
        choice2: "Fighting Type Pokémon",
        choice3: "Water Type Pokémon",
        choice4: "No Pokémon are found in rainy weather",
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign ('ends');
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()