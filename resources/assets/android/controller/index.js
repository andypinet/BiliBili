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
function natcmp(a, b) {
    var ra = a.match(/\D+|\d+/g);
    var rb = b.match(/\D+|\d+/g);
    var r = 0;

    while(!r && ra.length && rb.length) {
        var x = ra.shift(), y = rb.shift(),
            nx = parseInt(x), ny = parseInt(y);

        if(isNaN(nx) || isNaN(ny))
            r = x > y ? 1 : (x < y ? -1 : 0);
        else
            r = nx - ny;
    }
    return r || ra.length - rb.length;
}

var READYEVENT = "deviceready";

if (!window.cordova) {
    READYEVENT = "DOMContentLoaded";
}

document.addEventListener(READYEVENT, function() {

}, false);

document.addEventListener("backbutton", function() {
    document.getElementById("debug").innerHTML = "backbutton";
}, false);