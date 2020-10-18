'use strict';

{
  // ⇩html のidを定義
  const addTarget = document.getElementById('add-Target');
  const addValue = document.getElementById('add-Value');
  const addTrigger = document.getElementById('add-Trigger');
  
  // ⇩IDと入力値を取得できる関数を作る
  const addTask =(id,comment) =>{
    // ⇩テーブルに列(tr)を作る。
    const tr = document.createElement('tr');
    // ⇩テーブルにId(td)を作る。
    const idTd = document.createElement('td');
    const idNumber = document.createElement('section');
    idNumber.textContent = id ;
    idTd.appendChild(idNumber);
    // ⇩テーブルにコメント(td)を作る。
    const commentTd = document.createElement('td');
    const commentAdd = document.createElement('section');
    commentAdd.textContent = comment; 
    commentTd.appendChild(commentAdd);
    
    // ⇩テーブルにボタン（作業中）(td)を作る。
    const workingTd  = document.createElement('td');
    const workingButton = document.createElement('button');
    workingButton.textContent = '作業中';
    workingTd.appendChild(workingButton);
    // ⇩テーブルにボタン（削除）(td)を作る。
    const removeTd  = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
    removeTd.appendChild(removeButton);
    // ⇩trにそれぞれのtdを入れる。
    tr.appendChild(idTd);
    tr.appendChild(commentTd);
    tr.appendChild(workingTd);
    tr.appendChild(removeTd);
    // ⇩tbodyにtrを入れる。
    addTarget.appendChild(tr);
  };
  
  // ⇩クリックしたらイベント
  let id = 0 ;
  addTrigger.addEventListener('click',() => {
    // ⇩入力値の取得
    const inputValue = addValue.value;
    addTask(id++,inputValue);
    // ⇩イベントごとに空にする
    addValue.value = '';
  });
};