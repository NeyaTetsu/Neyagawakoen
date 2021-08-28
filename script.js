//-----グローバル変数宣言-----
//キャンバス系
//四条畷・京橋方面
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
//時計
const canvas0 = document.getElementById('canvas0');
const ctx0 = canvas0.getContext('2d');
//松井山手・木津方面
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

//時間系
var nowDate; //日時
var nowHour; //時
var nowMin; //分
var nowTime;

//データ系
//列車番号（下り）
var trainDown = 0;
//列車データ（下り）
var firstDown = {
    service: '',
    for: '',
    hhmm: 0,
    time: '',
    via: '',
    sColor: '#ffaa50'
}
var secondDown = {
    service: '',
    for: '',
    hhmm: 0,
    time: '',
    via: '',
    sColor: '#ffaa50'
}
//列車番号（上り）
var trainUp = 0;
//列車データ（上り）
var firstUp = {
    service: '',
    for: '',
    hhmm: 0,
    time: '',
    via: '',
    sColor: '#ffaa50'
}
var secondUp = {
    service: '',
    for: '',
    hhmm: 0,
    time: '',
    via: '',
    sColor: '#ffaa50'
}
//-----グローバル変数宣言おわり-----



//-----プログラムを起動する関数-----
init();
//初期化
function init(){
    drawBase();
    setInterval(ticker, 1000);
}
//1秒ごとにループ
function ticker(){
    //時間取得
    //▼後ろになんか付けてJSTにする。
    nowDate = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    nowHour = nowDate.getHours(); //時
    nowMin = nowDate.getMinutes(); //分
    nowTime = Number(nowHour + ('0' + nowMin).slice(-2)); //hhmm形式
    //列車データベースから次の列車を取得
    trainDown = nextDown(trainDown);
    trainUp =  nextUp(trainUp);
    //取得した列車データを扱いやすい形に変換
    setDown(trainDown);
    setUp(trainUp);
    //表示をリセット
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx0.clearRect(0, 0, canvas0.width, canvas0.height);
    //画面上に表示
    drawBase();
    drawDown();
    drawClock();
    drawUp();
}
//-----プログラムを起動する関数おわり-----



//-----データの設定-----
//現在時刻から次の列車を取得
//下り
function nextDown(n){
    n = null;
    for(let i=0; i<trainData1.length; i++){
        if(trainData1[i][1] >= nowTime){
            n = i;
            break;
        }
    }
    if(n == null){
        n = 0;
    }
    return n;
}
//上り
function nextUp(n){
    n = null;
    for(let i=0; i<trainData2.length; i++){
        if(trainData2[i][1] >= nowTime){
            n = i;
            break;
        }
    }
    if(n == null){
        n = 0;
    }
    return n;
}
//取得したデータを扱いやすく変換
//下り
function setDown(next){
    //上段
    firstDown = {
        service: trainData1[next][0],
        for: trainData1[next][2],
        hhmm: trainData1[next][1]
    }
    firstDown.time = time(firstDown.hhmm, firstDown.service);
    firstDown.via = via(firstDown.for);
    firstDown.sColor = serviceColor(firstDown.service);
    //下段
    let nextN;
    //エラー対策
    if(next == trainData2.length - 2){
        nextN = 0;
    }else{
        nextN = next + 1;
    }
    secondDown = {
        service: trainData1[nextN][0],
        for: trainData1[nextN][2],
        hhmm: trainData1[nextN][1]
    }
    secondDown.time = time(secondDown.hhmm, secondDown.service);
    secondDown.via = via(secondDown.for);
    secondDown.sColor = serviceColor(secondDown.service);
}
//上り
function setUp(next){
    //上段
    firstUp = {
        service: trainData2[next][0],
        for: trainData2[next][2],
        hhmm: trainData2[next][1]
    }
    firstUp.time = time(firstUp.hhmm, firstUp.service);
    firstUp.via = null;
    firstUp.sColor = serviceColor(firstUp.service);
    //下段
    let nextN;
    //エラー対策
    if(next == trainData2.length - 2){
        nextN = 0;
    }else{
        nextN = next + 1;
    }
    secondUp = {
        service: trainData2[nextN][0],
        for: trainData2[nextN][2],
        hhmm: trainData2[nextN][1]
    }
    secondUp.time = time(secondUp.hhmm, secondUp.service);
    secondUp.via = null;
    secondUp.sColor = serviceColor(secondUp.service);
}
//-----データの設定おわり-----



//-----データベースに書いていない情報を判断-----
//種別部分の色を普通なら緑、それ以外なら橙にする
function serviceColor(s){ 
    if(s == '普通'){
        return '#50aa50';
    }else{
        return '#ffaa50';
    }
}
//時・分をhh:mm形式に（通過、列車なしの場合は無表示）
function time(hm, s){
    hm = '000' + hm;
    h = hm.slice(-4, -2);
    m = hm.slice(-2);
    let hhmm;
    if(s == '通過' || s == ''){
        hhmm = '';
    }else{
        hhmm = h + ':' + m;
    }
    return hhmm;
}
//京橋行き又は通過なら経由なし、それ以外なら東西線経由（下りのみ）
function via(v){
    if(v == '京　橋' || v == ''){
        return null;
    }else{
        return '東西線';
    }
}
//上りは経由なし
//-----データベースに書いていない情報を判断おわり-----



//-----ページ上に描画-----
//電光掲示板本体
function drawBase(){
    //四条畷・京橋方面
    //本体
    ctx1.fillStyle = '#707070';
    ctx1.fillRect(0, 0, 1140, 420);
    //テキストを左揃えにする
    ctx1.textAlign = 'start';
    //番線
    ctx1.strokeStyle = '#ffffff';
    ctx1.strokeRect(70, 15, 100, 100);
    ctx1.fillStyle = '#ffffff';
    ctx1.font = 'bold 90px sans-serif';
    ctx1.fillText('１', 75, 100);
    //路線名
    ctx1.font = 'bold 45px sans-serif';
    ctx1.fillText('学研都市線', 240, 60);
    ctx1.font = 'bold 25px sans-serif';
    ctx1.fillText('Gakkentoshi Line', 240, 95);
    //行き先
    ctx1.font = 'bold 60px sans-serif';
    ctx1.fillText('四条畷・京橋', 530, 65);
    ctx1.font = 'bold 45px sans-serif';
    ctx1.fillText('方面', 920, 65);
    ctx1.font = 'bold 25px sans-serif';
    ctx1.fillText('for Shijōnawate, Kyōbashi', 530, 100);
    //テキストを中央揃えにする
    ctx1.textAlign = 'center';
    //種別
    ctx1.font = 'bold 30px sans-serif';
    ctx1.fillText('種　　別', 170, 155);
    ctx1.font = 'bold 20px sans-serif';
    ctx1.fillText('Type', 170, 180);
    //種別
    ctx1.font = 'bold 30px sans-serif';
    ctx1.fillText('時　　刻', 420, 155);
    ctx1.font = 'bold 20px sans-serif';
    ctx1.fillText('Departure Time', 420, 180);
    //行き先・乗車位置
    ctx1.font = 'bold 30px sans-serif';
    ctx1.fillText('行　先／乗車位置', 770, 155);
    ctx1.font = 'bold 20px sans-serif';
    ctx1.fillText('Destination／Boarding Position', 770, 180);
    //電光部分
    ctx1.fillStyle = '#111111';
    ctx1.fillRect(70, 190, 1000, 200);

    //時計
    //中央を基準にする
    ctx0.save();
    ctx0.translate(210, 210);
    //テキストを中央揃えにする
    ctx0.textAlign = 'center';
    //本体
    ctx0.fillStyle = '#707070';
    ctx0.fillRect(-210, -210, 420, 420);
    ctx0.fillStyle = '#113300';
    ctx0.fillRect(-140, -100, 280, 200);
    //文字盤
    ctx0.fillStyle = '#aacc00';
    ctx0.font = 'bold 30px serif';
    //数字
    ctx0.fillText('12', 0, -70);
    ctx0.fillText('1', 50, -60);
    ctx0.fillText('2', 80, -30);
    ctx0.fillText('3', 90, 10);
    ctx0.fillText('4', 80, 50);
    ctx0.fillText('5', 50, 80);
    ctx0.fillText('6', 0, 90);
    ctx0.fillText('7', -50, 80);
    ctx0.fillText('8', -80, 50);
    ctx0.fillText('9', -90, 10);
    ctx0.fillText('10', -80, -30);
    ctx0.fillText('11', -50, -60);
    //中央を基準にする
    ctx0.restore();

    //松井山手・木津方面
    //本体
    ctx2.fillStyle = '#707070';
    ctx2.fillRect(0, 0, 1140, 420);
    //テキストを右揃えにする
    ctx2.textAlign = 'end';
    //番線
    ctx2.strokeStyle = '#ffffff';
    ctx2.strokeRect(970, 15, 100, 100);
    ctx2.fillStyle = '#ffffff';
    ctx2.font = 'bold 90px sans-serif';
    ctx2.fillText('２', 1065, 100);
    //テキストを左揃えにする
    ctx2.textAlign = 'start';
    //路線名
    ctx2.font = 'bold 45px sans-serif';
    ctx2.fillText('学研都市線', 100, 60);
    ctx2.font = 'bold 25px sans-serif';
    ctx2.fillText('Gakkentoshi Line', 100, 95);
    //行き先
    ctx2.font = 'bold 60px sans-serif';
    ctx2.fillText('松井山手・木津', 400, 65);
    ctx2.font = 'bold 45px sans-serif';
    ctx2.fillText('方面', 820, 65);
    ctx2.font = 'bold 25px sans-serif';
    ctx2.fillText('for Matsuiyamate, Kizu', 400, 100);
    //テキストを中央揃えにする
    ctx2.textAlign = 'center';
    //種別
    ctx2.font = 'bold 30px sans-serif';
    ctx2.fillText('種　　別', 170, 155);
    ctx2.font = 'bold 20px sans-serif';
    ctx2.fillText('Type', 170, 180);
    //種別
    ctx2.font = 'bold 30px sans-serif';
    ctx2.fillText('時　　刻', 420, 155);
    ctx2.font = 'bold 20px sans-serif';
    ctx2.fillText('Departure Time', 420, 180);
    //行き先・乗車位置
    ctx2.font = 'bold 30px sans-serif';
    ctx2.fillText('行　先／乗車位置', 770, 155);
    ctx2.font = 'bold 20px sans-serif';
    ctx2.fillText('Destination／Boarding Position', 770, 180);
    //電光部分
    ctx2.fillStyle = '#111111';
    ctx2.fillRect(70, 190, 1000, 200);
}
//下り
function drawDown(){
    //種別
    ctx1.fillStyle = firstDown.sColor;
    ctx1.font = '90px sans-serif';
    ctx1.fillText(firstDown.service, 170, 275);
    //時刻
    ctx1.fillStyle = '#ffaa50';
    ctx1.fillText(firstDown.time, 420, 275);
    //行き先
    ctx1.fillStyle = '#50aa50';
    if(firstDown.via != null){ //経由地がある場合、経由地を表示
        ctx1.fillText(firstDown.via, 645, 275, 150, 100);
        ctx1.font = '70px sans-serif';
        ctx1.fillText('経由', 770, 275, 100, 90);
        ctx1.font = '90px sans-serif';
        ctx1.fillText(firstDown.for, 920, 275, 200, 100);
    }else{
        ctx1.fillText(firstDown.for, 770, 275, 500, 100);
    }

    //種別
    ctx1.fillStyle = secondDown.sColor;
    ctx1.font = '90px sans-serif';
    ctx1.fillText(secondDown.service, 170, 375);
    //時刻
    ctx1.fillStyle = '#ffaa50';
    ctx1.fillText(secondDown.time, 420, 375);
    //行き先
    ctx1.fillStyle = '#50aa50';
    if(secondDown.via != null){ //経由地がある場合、経由地を表示
        ctx1.fillText(secondDown.via, 645, 375, 150, 100);
        ctx1.font = '70px sans-serif';
        ctx1.fillText('経由', 770, 375, 100, 90);
        ctx1.font = '90px sans-serif';
        ctx1.fillText(secondDown.for, 920, 375, 200, 100);
    }else{
        ctx1.fillText(secondDown.for, 770, 375, 500, 100);
    }
}
//時計
function drawClock(){
    //時間を360にして回転するときに扱いやすくする（一番下になるときが0°）
    var moveHour = nowHour % 12 * 30 + nowMin / 2 - 180; 
    var moveMin = nowMin * 6 - 180;
    //本体が回らないようにする
    ctx0.save();
    ctx0.translate(210, 210);
    //時針
    ctx0.rotate(moveHour * Math.PI / 180);
    ctx0.fillStyle = '#aacc00';
    ctx0.fillRect(-5, -15, 10, 80);
    //本体が回らないようにする
    ctx0.restore();
    ctx0.save();
    ctx0.translate(210, 210);
    //分針
    ctx0.rotate(moveMin * Math.PI / 180);
    ctx0.fillStyle = '#aacc00';
    ctx0.fillRect(-5, -15, 10, 100);
    //本体が回らないようにする
    ctx0.restore();
}
//上り
function drawUp(){
    //種別
    ctx2.fillStyle = firstUp.sColor;
    ctx2.font = '90px sans-serif';
    ctx2.fillText(firstUp.service, 170, 275);
    //時刻
    ctx2.fillStyle = '#ffaa50';
    ctx2.fillText(firstUp.time, 420, 275);
    //行き先
    ctx2.fillStyle = '#50aa50';
    if(firstUp.via != null){ //経由地がある場合、経由地を表示
        ctx2.fillText(firstUp.via, 645, 275, 150, 100);
        ctx2.font = '70px sans-serif';
        ctx2.fillText('経由', 770, 275, 100, 90);
        ctx2.font = '90px sans-serif';
        ctx2.fillText(firstUp.for, 920, 275, 200, 100);
    }else{
        ctx2.fillText(firstUp.for, 770, 275, 500, 100);
    }

    //種別
    ctx2.fillStyle = secondUp.sColor;
    ctx2.font = '90px sans-serif';
    ctx2.fillText(secondUp.service, 170, 375);
    //時刻
    ctx2.fillStyle = '#ffaa50';
    ctx2.fillText(secondUp.time, 420, 375);
    //行き先
    ctx2.fillStyle = '#50aa50';
    if(secondUp.via != null){ //経由地がある場合、経由地を表示
        ctx2.fillText(secondUp.via, 645, 375, 150, 100);
        ctx2.font = '70px sans-serif';
        ctx2.fillText('経由', 770, 375, 100, 90);
        ctx2.font = '90px sans-serif';
        ctx2.fillText(secondUp.for, 920, 375, 200, 100);
    }else{
        ctx2.fillText(secondUp.for, 770, 375, 500, 100);
    }
}
//-----ページ上に描画おわり-----
