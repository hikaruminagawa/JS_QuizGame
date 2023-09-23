
//各変数を定義する
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//クイズに引数を代入する関数を定義する
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
}

setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(e.target.textContent === quiz[quizIndex].correct){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！')
    }
    quizIndex++;
    if(quizIndex<quizLength){
        setupQuiz();
    }else{
        window.alert(`終了！あなたの正解数は${score}/${quizLength}です！`)    
    }
}
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    })
    handlerIndex++;
}