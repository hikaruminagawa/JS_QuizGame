const quizSource = [
    {
      question: 'ゲーム史上、最も売れたゲーム機はどれ？',
      answers: ['スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
      correct: 'ニンテンドーDS'
    },
    {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
      correct: 'MOTHER2'
    },
    {
      question: 'ファイナルファンタジーⅣの主人公の名前は？',
      answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
      correct: 'セシル'
    },
    {
      question: '「ドラゴンクエストⅢ」に登場する、主人公の名前は？',
      answers: ['アルト', 'クリフト', 'テリー', 'ロト'],
      correct: 'ロト'
    },
    {
      question: '「ポケットモンスター」シリーズで、初代の舞台となった地方はどこ？',
      answers: ['カントー地方', 'ジョウト地方', 'ホウエン地方', 'シンオウ地方'],
      correct: 'カントー地方'
    },
    {
      question: '「グランド・セフト・オートⅤ」の舞台となる都市はどこ？',
      answers: ['ロスサントス', 'バイスシティ', 'リバティーシティ', 'サンフィエロ'],
      correct: 'ロスサントス'
    },
    {
        question: '「ドラゴンクエストⅩ」で、プレイヤーが操作するキャラクターの種族は？',
        answers: ['人間', 'ドワーフ', 'エルフ', 'オーク'],
        correct: '人間'
      },
      {
        question: '「ファイナルファンタジーⅦ」で、主人公のクラウドが所属する組織の名前は？',
        answers: ['アバランチ', 'シンラ', 'ソルジャー', 'タークス'],
        correct: 'アバランチ'
      },
      {
        question: '「ポケットモンスター」シリーズで、初代のライバルの名前は？',
        answers: ['グリーン', 'ブルー', 'レッド', 'イエロー'],
        correct: 'グリーン'
      },
      {
        question: '「スーパーマリオブラザーズ」で、主人公の名前は？',
        answers: ['ルイージ', 'ヨッシー', 'トード', 'マリオ'],
        correct: 'マリオ'
      },
      {
        question: '「メタルギアソリッド」シリーズで、主人公のコードネームは？',
        answers: ['スネーク', 'レイドン', 'ビッグボス', 'オセロット'],
        correct: 'スネーク'
      },
      {
        question: '「バイオハザード」シリーズで、主人公の名前は？',
        answers: ['クリス', 'ジル', 'レオン', 'クレア'],
        correct: 'クリス'
      },
      {
        question: '「ストリートファイターⅡ」で、主人公のリュウが使う必殺技の名前は？',
        answers: ['昇龍拳', '波動拳', '竜巻旋風脚', 'タイガーショット'],
        correct: '昇龍拳'
      },
      {
        question: '「ドンキーコング」シリーズで、主人公の名前は？',
        answers: ['ディディーコング', 'ファンキーコング', 'ディクシーコング', 'ドンキーコング'],
        correct: 'ドンキーコング'
      },
      {
        question: '「ゼルダの伝説」シリーズで、主人公の名前は？',
        answers: ['リンク', 'ゼルダ', 'ガノンドロフ', 'トワイライトプリンセス'],
        correct: 'リンク'
      },
      {
        question: '「マリオカート」シリーズで、最初に登場したコースは？',
        answers: ['マリオサーキット', 'ルイージサーキット', 'レインボーロード', 'ゴーストバレー'],
        correct: 'マリオサーキット'
      }
];


//quizSource配列からランダムで３つのオブジェクトを取り出したquizという名前の配列を作成する
const quiz = [];
const quizSourceCopy = [...quizSource]; // create a copy of the quizSource array
for (let i = 0; i < 3; i++) {
  const randomIndex = Math.floor(Math.random() * quizSourceCopy.length);
  quiz.push(quizSourceCopy.splice(randomIndex, 1)[0]); // remove the selected object from the copy
}
console.log(quiz); // output the quiz array to the console

