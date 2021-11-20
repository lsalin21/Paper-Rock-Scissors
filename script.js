const choiceButtons = document.querySelectorAll('[data-selection]')
const yourScoreSpan = document.querySelector('[data-computer-score]')
const computerScoreSpan = document.querySelector('[data-your-score]')
const selections =[
    {
        name:"rock",
        beats:"scissors"
    },
    {
        name:"paper",
        beats:"rock"
    },
    {
        name:"scissors",
        beats:"paper"
    }
]

choiceButtons.forEach(choiceButton => {
 choiceButton.addEventListener('click', e => {
    const choicesName = choiceButton.dataset.selection
    const selection = selections.find(selection => selection.name === choicesName)
    makeChoices(selection)
 })
})

function makeChoices(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection , selection)

    if(yourWinner)incrementScore(yourScoreSpan)
    if(computerWinner)incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isWinner(selection,opponentsSelection){
    return selection.beats === opponentsSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * selections.length)
    return selections[randomIndex]
}
