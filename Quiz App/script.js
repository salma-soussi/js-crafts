const quizData =[
    {
        question:"Which language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d"
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b"
    },
    {
        question:"What does HTML stands for?",
        a:"HyperText Markup Language",
        b:"HyperText markdown Language",
        c:"HyperLoop Machine Language",
        d:"Helicopters Terminals Motorboats Lamborghini",
        correct:"a"
    },
    {
        question:"What year was JavaScript Launched",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"None of the above",
        correct:"b"
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currantQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currantQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked == true){
            answer = answerEl.id
        }
    })
    
    return answer
}

submit.addEventListener('click',()=>{
    const answer = getSelected()
    if(answer){
        if (answer == quizData[currantQuiz].correct) {
            score++
        }

        currantQuiz++
        if (currantQuiz<quizData.length) {
            loadQuiz()
        }
        else{
            quiz.innerHTML =`
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
