(function () {

// Hiragana answers    
const hiragana = [
["n", "ん"],
["wa", "わ"],
["ra", "ら"],
["ya", "や"],
["ma", "ま"],
["pa", "ぱ"],
["ba", "ば"],
["ha", "は"],
["na", "な"],
["da", "だ"],
["ta", "た"],
["za", "ざ"],
["sa", "さ"],
["ga", "が"],
["ka", "か"],
["a", "あ"],
["wi", "ゐ"],
["ri", "り"],
["mi", "み"],
["pi", "ぴ"],
["bi", "び"],
["hi", "ひ"],
["ni", "に"],
["di", "ぢ"],
["chi", "ち"],
["zi", "じ"],
["shi", "し"],
["gi", "ぎ"],
["ki", "き"],
["i", "い"],
["ru", "る"],
["yu", "ゆ"],
["mu", "む"],
["pu", "ぷ"],
["bu", "ぶ"],
["fu", "ふ"],
["nu", "ぬ"],
["du", "づ"],
["tsu", "つ"],
["zu", "ず"],
["su", "す"],
["gu", "ぐ"],
["ku", "く"],
["u", "う"],
["we", "ゑ"],
["re", "れ"],
["me", "め"],
["pe", "ぺ"],
["be", "べ"],
["he", "へ"],
["ne", "ね"],
["de", "で"],
["te", "て"],
["ze", "ぜ"],
["se", "せ"],
["ge", "げ"],
["ke", "け"],
["e", "え"],
["wo", "を"],
["ro", "ろ"],
["yo", "よ"],
["mo", "も"],
["po", "ぽ"],
["bo", "ぼ"],
["ho", "ほ"],
["no", "の"],
["do", "ど"],
["to", "と"],
["zo", "ぞ"],
["so", "そ"],
["go", "ご"],
["ko", "こ"],
["o", "お"]                                              
];

// Katakana answers
const katakana = [
["n", "ン"],
["wa", "ワ"],
["ra", "ラ"],
["ya", "ヤ"],
["ma", "マ"],
["pa", "パ"],
["ba", "バ"],
["ha", "ハ"],
["na", "ナ"],
["da", "ダ"],
["ta", "タ"],
["za", "ザ"],
["sa", "サ"],
["ga", "ガ"],
["ka", "カ"],
["a", "ア"],
["wi", "ヰ"],
["ri", "リ"],
["mi", "ミ"],
["pi", "ピ"],
["bi", "ビ"],
["hi", "ヒ"],
["ni", "ニ"],
["di", "ヂ"],
["chi", "チ"],
["zi", "ジ"],
["shi", "シ"],
["gi", "ギ"],
["ki", "キ"],
["i", "イ"],
["ru", "ル"],
["yu", "ユ"],
["mu", "ム"],
["pu", "プ"],
["bu", "ブ"],
["fu", "フ"],
["nu", "ヌ"],
["du", "ヅ"],
["tsu", "ツ"],
["zu", "ズ"],
["su", "ス"],
["gu", "グ"],
["ku", "ク"],
["u", "ウ"],
["we", "ヱ"],
["re", "レ"],
["me", "メ"],
["pe", "ペ"],
["be", "ベ"],
["he", "ヘ"],
["ne", "ネ"],
["de", "デ"],
["te", "テ"],
["ze", "ゼ"],
["se", "セ"],
["ge", "ゲ"],
["ke", "ケ"],
["e", "エ"],
["wo", "ヲ"],
["ro", "ロ"],
["yo", "ヨ"],
["mo", "モ"],
["po", "ポ"],
["bo", "ボ"],
["ho", "ホ"],
["no", "ノ"],
["do", "ド"],
["to", "ト"],
["zo", "ゾ"],
["so", "ソ"],
["go", "ゴ"],
["ko", "コ"],
["o", "オ"]                                              
];

// Vertical  th  selectable positions
const rowPosition = [[0], [1, 17, 49, 65], [2, 18, 34, 50, 66], [3, 35, 67], [4, 20, 36, 52, 68], [5, 21, 37, 53, 69], [6, 22, 38, 54, 70], [7, 23, 39, 55, 71], [8, 24, 40, 56, 72], [9, 25, 41, 57, 73], [10, 26, 42, 58, 74], [11, 27, 43, 59, 75], [12, 28, 44, 60, 76], [13, 29, 45, 61, 77], [14, 30, 46, 62, 78] ];

// Get general elements
let question = document.getElementsByClassName("symbol")[0];
let answer = document.getElementsByClassName("answer")[0];
let answerNotifi = document.getElementsByClassName("answer-notifi")[0];
let hiraganaChart = document.getElementById("hiragana-block");
let hiraganaTable = hiraganaChart.getElementsByTagName("input");
let katakanaChart = document.getElementById("katakana-block");
let katakanaTable = katakanaChart.getElementsByTagName("input");

// Get table elements
let hiraChartArr = hiraganaChart.getElementsByTagName("tr");
hiraChartArr = Array.from(hiraChartArr);
let kataChartArr = katakanaChart.getElementsByTagName("tr");
kataChartArr = Array.from(kataChartArr);
let eleTdHTMLCol;
let eleTdArr;
let eleThHTMLCol;
let eleThArr;

// Button elements
let study = document.getElementById("study");
let goBack = document.getElementById("go-back");
let showCharts = document.getElementById("show-charts");
let hideCharts = document.getElementById("hide-charts");

// Hide/Show text ansewr input
let hiraganaBoard = document.getElementById("study-block");
hiraganaBoard.style.display = "none";

// Selected checkboxes array
let questionSelection;

// asses() iterator
let i = 0;

// Create array of hiragana+katakana from HTML table checkboxes
hiraganaTable = Array.from(hiraganaTable);
katakanaTable = Array.from(katakanaTable);

// Apply answer property to appropiate  td  elements
function answerPropFunc(arr, chart) {
    for(let p = 0; arr.length > p; p++) {
        arr[p].answerProp = chart[p]
    }
}

// Apply answer properties to objects
answerPropFunc(hiraganaTable, hiragana);
answerPropFunc(katakanaTable, katakana);

// Generate array of checked hiragana checkboxes
function selectedMap(num) {
    if(num.checked) {
        questionSelection.push(num.answerProp)
    }
};

// Map selected hiragana boxes answer property to questionSelection array
// Randomize questionSelection array
// Show questions/hide table
study.onclick = function() {
    questionSelection = [];
    hiraganaTable.map(selectedMap);
    katakanaTable.map(selectedMap);
    questionSelection.sort(function() { return 0.5 - Math.random() });
    if(questionSelection.length != 0){
        question.innerText = questionSelection[i][1];
        // Stylings
        hiraganaChart.style.display = "none";
        katakanaChart.style.display = "none";
        study.style.display = "none";
        goBack.style.display = "block"
        hiraganaBoard.style.display = "flex";
        showCharts.style.display = "block";
    }
}

// Show table/hide questions
// Reset question iterator  i
goBack.onclick = function() {
    i = 0;
    hiraganaChart.style.display = "block";
    katakanaChart.style.display = "block";
    study.style.display = "block";
    goBack.style.display = "none"
    hiraganaBoard.style.display = "none"; 
    showCharts.style.display = "none";
    hideCharts.style.display = "none";   
}

// Show Chart
showCharts.onclick = function() {
    hiraganaChart.style.display = "block";
    katakanaChart.style.display = "block";
    showCharts.style.display = "none";
    hideCharts.style.display = "block";
}

// Hide Chart
hideCharts.onclick = function() {
    hiraganaChart.style.display = "none";
    katakanaChart.style.display = "none";
    showCharts.style.display = "block";
    hideCharts.style.display = "none";
}

// Run assess() depending on character length answer
// Determines answer's character length
answer.oninput = function() {
    if(questionSelection[i][0].length == 1) {
        assess();
    } else if(questionSelection[i][0].length == 2 && answer.value.length == 2) {
        assess();
    } else if(questionSelection[i][0].length == 3 && answer.value.length == 3) {
        assess();
    }
}

// Compare entered answer to correct answer
// Modify css on correct/incorrect answers
// Displays next question on correct answer
function assess() {
    // Iterate  i  to select next question
    if(answer.value == questionSelection[i][0]) {
        answer.disabled = true;
        answerNotifi.innerText = "Correct: " + questionSelection[i][0];
        answerNotifi.style.borderColor = "rgb(171,185,243)";
        answerNotifi.style.display = "inline";
        question.style.color = "rgb(171,185,243)";
        i++;
        // Reset  i  count when max amount of questions iterated
        // Re-Randomize once all questions have been iterated
        if(i >= questionSelection.length) {i = 0; questionSelection.sort(function() { return 0.5 - Math.random() })}; 
        setTimeout(function() { 
            answerNotifi.innerText = "";
            answerNotifi.style.display = "none";             
            answer.disabled = false;
            answer.value = "";
            question.style.color = "white";
            answer.focus();
            question.innerText = questionSelection[i][1]; 
        }, 1500);
    } else {
        answer.disabled = true;
        answerNotifi.innerText = "Incorrect"; 
        answerNotifi.style.borderColor = "rgb(243,171,185)";
        question.style.color = "rgb(243,171,185)";
        answerNotifi.style.display = "inline";
        setTimeout(function() { 
            answerNotifi.innerText = "";
            answerNotifi.style.display = "none";  
            question.style.color = "white";          
            answer.disabled = false;
            answer.value = "";
            answer.focus();
        }, 1500);
    }
}

// Get HTML collection of <td> from each chart
let hChrs = hiraganaChart.getElementsByTagName("td");
let kChrs = katakanaChart.getElementsByTagName("td");
// Convert HTML collection into array of elements
let hArr = Array.from(hChrs);
let kArr = Array.from(kChrs);

// Clicking <td> toggles its child's checkbox
hArr.forEach(visualCheck);
kArr.forEach(visualCheck);
function visualCheck(selector, index) {
    if(selector.firstElementChild != null) {
        selector.firstElementChild.onclick = function(){
            if(selector.lastElementChild.checked) {selector.lastElementChild.checked = false} else{selector.lastElementChild.checked = true}
        };
    }
}

// Vertical & Horizontal row selection
function hiraKanaInitalizer(arg1, arg2) {
    arg1.forEach(function(item, index){
        eleTdHTMLCol = item.getElementsByTagName("td");
        eleTdArr = Array.from(eleTdHTMLCol);
        eleThHTMLCol = item.getElementsByTagName("th");
        eleThArr = Array.from(eleThHTMLCol);
        if(index != 0){
            let rowToggle = true;
            eleThArr.forEach(function(item2, index2){
                eleTdArr.forEach(function(item3, index3) {
                    if(item3.hasChildNodes()) {
                        if(index2 != 1 && index3 != 0){
                            item2.addEventListener("click", function(){
                                if(rowToggle){
                                    item3.lastElementChild.checked = true;
                                } else{
                                    item3.lastElementChild.checked = false; 
                                }
                            });
                        }
                    }
                });
                item2.addEventListener("click", function(){
                    if(rowToggle){
                        rowToggle = false;
                    } else {
                        rowToggle = true;
                    }
                });
            });
        } else{
            eleThArr.forEach(function(item2, index2){
                let rowToggle = true;
                if(index2 != 15) {
                    rowPosition[index2].forEach(function(item3, index3) {
                        item2.addEventListener("click", function(){
                            if(rowToggle){
                                arg2[item3].lastElementChild.checked = true;
                            } else{
                                arg2[item3].lastElementChild.checked = false
                            }   
                        }); 
                    });  
                }
                item2.addEventListener("click", function(){
                    if(rowToggle){
                        rowToggle = false;
                    } else {
                        rowToggle = true;
                    }
                });
            });
        }
    });
}
hiraKanaInitalizer(hiraChartArr, hChrs);
hiraKanaInitalizer(kataChartArr, kChrs);

})();//SIF-end