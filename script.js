const truth = [
    "О какой покупке вы жалеете больше всего?",
    "Опишите свой самый странный сон.",
    "Что вам нравится в каждом из присутствующих?",
    "Где бы вы хотели побывать?",
    "В какой эпохе вам хотелось бы жить?",
    "Какая еда, по вашему мнению, самая мерзкая?",
];

const move = [
    "Откройте любую соцсеть, зайдите в аккаунт первого человека, которого увидите, и поставьте лайк на каждый его пост.",
    "Пусть каждый игрок выберет одно слово, а затем вы составите из них текст и опубликуете его в соцсетях.",
    "Спародируйте человека слева от вас.",
    "Используйте кетчуп или помаду, чтобы поставить себе на лбу знак как у Симбы.",
    "Сделайте 25 приседаний. При каждом приседе называйте любую страну, не повторяясь.",
    "Позвольте завязать вам глаза. Затем угадайте предметы, предложенные вам другими игроками.",
];


const buttonTruth = document.querySelector('.button_truth');
const buttonMove = document.querySelector('.button_move');
const buttonCloseTruth = document.querySelector('.button_close-truth');
const buttonCloseMove = document.querySelector('.button_close-move');
const dialogTruth = document.getElementById('dialog_truth');
const dialogMove = document.getElementById('dialog_move');
const textMove = document.getElementById("text_move");
const textTruth = document.getElementById("text_truth");

function openDialogTruth() {
    let randomTruth = truth[Math.floor(Math.random()*truth.length)];
    textTruth.innerHTML = randomTruth;
    dialogTruth.showModal();
}

function openDialogMove() {
    let randomMove = move[Math.floor(Math.random()*move.length)];
    textMove.innerHTML = randomMove;
    dialogMove.showModal();
}

function closeDialogTruth() {
    dialogTruth.close();
}

function closeDialogMove() {
    dialogMove.close();
}

buttonTruth.addEventListener('click', openDialogTruth);
buttonMove.addEventListener('click', openDialogMove);
buttonCloseTruth.addEventListener('click', closeDialogTruth);
buttonCloseMove.addEventListener('click', closeDialogMove);