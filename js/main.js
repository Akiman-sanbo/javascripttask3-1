'use strict';

{
 document.getElementById('addTask-trigger').addEventListener('click',() => {
   const table = document.getElementById('tableTarget');
   const tr = table.insertRow();
   const td1 = tr.insertCell(0);
   const td2 = tr.insertCell(1);
   const td3 = tr.insertCell(2);
   const td4 = tr.insertCell(3);

   const comment = document.getElementById('addTask-value').value;

   td1.textContent = table.rows.length-2 ; 
   td2.textContent = comment;
   const addbutton = document.createElement('button')
   td3.textContent = addbutton;


  //  以下参考
  //  parent.appendChild('tr');
  //  tr.appendChild('td');


  // const addTaskTriger = document.getElementById('addTask-trigger');
  // const addTasktarget = document.getElementById('addTask-target');
  // const addTaskValue = document.getElementById('addTask-value');




 });
  



















}