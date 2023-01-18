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

$('#buttonAppend').click(addTask);

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
    $('.buttonEdit').click(editTask);
    pageNumber++;
}

function deleteTask(e){
    window.alert("Task deleted");
    var caller = e.target || e.srcElement;
    $(caller).parent().parent().remove();
    return false;
}

function openEditTask(){

}
