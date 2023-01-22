/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

let pageNumber =1;
let nomNouPagina;
let currentPage;

$('#buttonAppend').click(addTask);
$('#buttonChangeName').click(changeName);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function addTask(){
    let userInput;
    userInput = prompt("Enter Page Name", "...");
    $("ul").append("<li><a id=\"page"+pageNumber+"\" href =\"#page\""+">" + userInput + 
    "<br></br><button type=\"button\" class=\"buttonDelete\">Delete Task</button><button type=\"button\" class=\"buttonEdit\">Edit Task</button></a></li>");
    $("ul").listview("refresh");
    window.alert("Task called "+userInput+" added successfully");
    $('.buttonDelete').click(deleteTask);
    $('.buttonEdit').click(openEditTask);
    pageNumber++;
}

function deleteTask(e){
    window.alert("Task deleted");
    var caller = e.target || e.srcElement;
    $(caller).parent().parent().remove();
    return false;
}

function openEditTask(){
    //Fer servir la variable currentPage per guardar la id de la pagina des de la que hem 
    // apretat el boto per cridar aquesta funcio per obrir la pagina d'edicio
    currentPage = $(this).parent().attr('id');
    // window.alert("id of page is "+currentPage);

    //Obrir la pagina d'edicio
    $.mobile.changePage("#pageEdition", {transition: "fade"});
    return false;
}

function changeName(){
    nomNouPagina = document.getElementById("inputChangeName").value;
    // window.alert("id of page to modify is "+currentPage+" his new name will be "+nomNouPagina);
    
    //Tenint guardat el numero de la pagina desde la que hem obert la pagina d'edicio, currentPage, 
    // podem referenciarla al DOM i canviar el seu html per el parametre nomNouPagina
    let idCurrentPage =currentPage;
    $("#"+idCurrentPage).html(nomNouPagina);
    document.getElementById(idCurrentPage).innerHTML = nomNouPagina;
}


