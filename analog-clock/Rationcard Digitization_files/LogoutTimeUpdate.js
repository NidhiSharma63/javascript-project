﻿var validNavigation = false;

function wireUpWindowUnloadEvents() {
    $(document).on('keypress', function (e) {
        if (e.keyCode == 116) {
            validNavigation = true;
        }
    });

    $(document).on("click", "a", function () {
        validNavigation = true;
    });

    $(document).on("submit", "form", function () {
        validNavigation = true;
    });
};

function SaveLogout(value) {
    //$.ajax({
    //    type: "POST",
    //    url: "../../LogoutHeader.aspx/logout",  //Specify the path of your webmethod.
    //    data: "{'value':'" + value + "'}",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: OnSuccess,
    //    failure: function (response) {
    //    }
    //});
    //function OnSuccess(response) {
    //}
};

function idleTimer() {
    //var t;

    //function resetTimer() {
    //    clearTimeout(t);
    //    t = setTimeout(logout, 360000);  //Specify the ideal time
    //}

    //window.onmousemove = resetTimer;
    //window.onmousedown = resetTimer;
    //window.onclick = resetTimer;
    //window.onscroll = resetTimer;
    //window.onkeypress = resetTimer;

    //function logout() {
    //    SaveLogout('3');
    //    window.location.href = '../';
    //}
};

$(document).ready(function () {
    //idleTimer();
    //wireUpWindowUnloadEvents();
});

window.addEventListener("beforeunload", function (e) {
    var value = window.performance.navigation.type.toString();

    if (!validNavigation) {
        SaveLogout('2');
    }
    validNavigation = false;
});