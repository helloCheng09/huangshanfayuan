/*userinfo */
var mockUser = {};
// ajax('https://www.easy-mock.com/mock/5b1f6c63932dab78e63b3984/hscourt/user_1', mockUser);
// console.log(mockUser);


function loadObj() {
    var ajax;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        ajax = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        // console.log(mockDate) 
        if (!(ajax.readyState == 4) || !(ajax.status == 200)) {
            // console.log(22222222224444222);
            document.getElementsByClassName('user')[0].innerHTML = '<span class="avatar"><img src="./hs_img/avatar.jpg" id="userPhoto1"></span><div class="user-name"><p class="name" id="userName1">游<span class="text-spacer"></span>客</p><p class="phone" id="userPhone1">未登录</p></div>';
        } else if (ajax.readyState == 4 && ajax.status == 200) {
            // console.log(ajax.responseText);
            mockUser = JSON.parse(ajax.responseText);
            // console.log(mockUser);
            document.getElementsByClassName('user')[0].innerHTML = '<span class="avatar"><img  id="userPhoto1"></span><div class="user-name"><p class="name" id="userName1"></p><p class="phone" id="userPhone1"></p></div>';
            document.querySelector('#userPhoto1').setAttribute('src', mockUser.data.avatar);
            document.querySelector('#userName1').innerHTML = mockUser.data.userName;
            document.querySelector('#userPhone1').innerHTML = mockUser.data.userPhone;
            // console.log(document.querySelector('#userPhoto1'));
        }
    }
    // ajax.open('GET', 'https://www.easy-mock.com/mock/5b3a0e8d42aef2399ae233cf/hscourt_copy/user_1', true);
    // ajax.send();
}
loadObj();
// (!ajax.readyState == 4 || !ajax.status == 200)

/*sus consult list */
var mockSusConsult = {};
// ajax('https://www.easy-mock.com/mock/5b1f6c63932dab78e63b3984/hscourt/judge_1', mockSusConsult);
// console.log(mockSusConsult);
if (!mockSusConsult.data) {
    // console.log(888888888888)
    // document.getElementsByClassName('user')[0].innerHTML ='<span class="avatar"><img src="./hs_img/avatar.jpg" id="userPhoto1"></span><div class="user-name"><p class="name" id="userName1">游<span class="text-spacer"></span>客</p><p class="phone" id="userPhone1">未登录</p></div>';

} else {
    // document.getElementsByClassName('user')[0].innerHTML ='<span class="avatar"><img  id="userPhoto1"></span><div class="user-name"><p class="name" id="userName1"></p><p class="phone" id="userPhone1"></p></div>';
    // console.log(33333333333)

    document.querySelector('#judgeAvatar1').setAttribute('src', mockSusConsult.data.judgeAvatar);
    document.querySelector('#judgeName1').innerHTML = mockSusConsult.data.judgeName;
    document.querySelector('#judgeEdu1').innerHTML = mockSusConsult.data.judgeEdu;
    document.querySelector('#consultTime1').innerHTML = mockSusConsult.data.timestamp;

    // console.log(document.querySelector('#userPhoto1'));
}


//animition
// 完善信息
var oCompleteInfo = document.querySelector('#completeInfo');
// console.log(oCompleteInfo)
var oUserInfo = document.querySelector('#userInfo');
var oBack1 = document.querySelector('#backUserDet1');
// console.log(oBack1)
var oCommenNav = document.querySelector('#commenNav');
// 完善信息
oCompleteInfo.addEventListener('touchstart', function () {
    oCompleteInfo.style.backgroundColor = "#79a6ff";
    oUserInfo.style.display = 'block';
    document.querySelector('#userName2').setAttribute('disabled', 'disabled');
    document.querySelector('#userPhone2').setAttribute('disabled', 'disabled');
    document.querySelector('#userAdd2').setAttribute('disabled', 'disabled');
    document.querySelector('#userId2').setAttribute('disabled', 'disabled');
    oUserInfo.classList.add('move-edge-l');
    oUserInfo.classList.add('left-in');
    // oCommenNav.style.display= 'none';
    setTimeout(function () {
        oUserInfo.classList.remove('move-edge-l');
        oUserInfo.classList.remove('left-in');
    }, 260)
    setTimeout(function () {
        document.querySelector('#userName2').removeAttribute('disabled');
        document.querySelector('#userPhone2').removeAttribute('disabled');
        document.querySelector('#userAdd2').removeAttribute('disabled');
        document.querySelector('#userId2').removeAttribute('disabled');
    }, 600)
    // setTimeout(function () {
    //     console.log(122222222)
    //     document.querySelector('#userName2').focus();
    // }, 1200)
}, false);
oCompleteInfo.addEventListener('touchend', function () {
    oCompleteInfo.style.backgroundColor = "#2d72fc";
}, false)

oBack1.addEventListener('touchstart', function () {
    document.activeElement.blur();
    setTimeout(function () {
        oUserInfo.classList.add('move-edge-l');
        oUserInfo.classList.add('right-out');
    }, 200)

    setTimeout(function () {
        oUserInfo.classList.remove('move-edge-l');
        oUserInfo.classList.remove('right-out');
        oUserInfo.style.display = 'none';
    }, 460)
}, false);

//已完成
var oSusConsultBtn = document.querySelector('#susConsultBtn');
var oBack2 = document.querySelector('#backUserDet2');
var oConsultSus = document.querySelector('#consultSus');
oSusConsultBtn.addEventListener('touchstart', function () {
    // console.log(1111111)
    oConsultSus.style.display = 'block';
    oConsultSus.classList.add('move-edge-l');
    oConsultSus.classList.add('left-in');
    setTimeout(function () {
        oConsultSus.classList.remove('move-edge-l');
        oConsultSus.classList.remove('left-in');
    }, 260)
}, false);

oBack2.addEventListener('touchstart', function () {

    oConsultSus.classList.add('move-edge-l');
    oConsultSus.classList.add('right-out');
    setTimeout(function () {
        oConsultSus.classList.remove('move-edge-l');
        oConsultSus.classList.remove('right-out');
        oConsultSus.style.display = 'none';
    }, 260)
}, false);

//已完成详情
var oToConSusDets = document.querySelectorAll('.tag-consult-sus');
console.log(oToConSusDets)
// var oSusJudgeAvas = document.querySelectorAll('sus-judge-avatar');
// var oSusJudgeNames = document.querySelectorAll('s-j-name');
// var oSusJudgeEdus = documetn.querySelectorAll('s-j-edu');
// var oSusDate = document.querySelectorAll('s-date');
var oSusDetPag = document.querySelector('#conSusDetail');
var oBack6 = document.querySelector('#backUserDet6');
var len1 = oToConSusDets.length;
for (var i = 0; i < len1; i++) {
    (function (i) {
        // console.log(oToConSusDets[0])
        // console.log(i)
        oToConSusDets[i].addEventListener('touchstart', function () {
            // console.log(1111111)
            oSusDetPag.style.display = 'block';
            oSusDetPag.classList.add('move-edge-l');
            oSusDetPag.classList.add('left-in');
            setTimeout(function () {
                oSusDetPag.classList.remove('move-edge-l');
                oSusDetPag.classList.remove('left-in');
            }, 260)
        }, false)
    }(i))
}
oBack6.addEventListener('touchstart', function () {
    oSusDetPag.classList.add('move-edge-l');
    oSusDetPag.classList.add('right-out');
    setTimeout(function () {
        oSusDetPag.classList.remove('move-edge-l');
        oSusDetPag.classList.remove('right-out');
        oSusDetPag.style.display = 'none';
    }, 260)
}, false);


//待解决
var otoSolveBtn = document.querySelector('#toSolveBtn');
var oBack3 = document.querySelector('#backUserDet3');
var oToSolve = document.querySelector('#toSolve');
otoSolveBtn.addEventListener('touchstart', function () {
    // console.log(1111111)
    oToSolve.style.display = 'block';
    oToSolve.classList.add('move-edge-l');
    oToSolve.classList.add('left-in');
    setTimeout(function () {
        oToSolve.classList.remove('move-edge-l');
        oToSolve.classList.remove('left-in');
    }, 260)
}, false);

oBack3.addEventListener('touchstart', function () {

    oToSolve.classList.add('move-edge-l');
    oToSolve.classList.add('right-out');
    setTimeout(function () {
        oToSolve.classList.remove('move-edge-l');
        oToSolve.classList.remove('right-out');
        oToSolve.style.display = 'none';
    }, 260)
}, false);
//待解决详情
var oToSolvePag = document.querySelectorAll('.tag-to-solve');
var oNotSolvePag = document.querySelector('#toSolveDetail');
var oBack7 = document.querySelector('#backUserDet7');
var len1 = oToSolvePag.length;
for (var i = 0; i < len1; i++) {
    (function (i) {
        oToSolvePag[i].addEventListener('touchstart', function () {
            oNotSolvePag.style.display = 'block';
            oNotSolvePag.classList.add('move-edge-l');
            oNotSolvePag.classList.add('left-in');
            setTimeout(function () {
                oNotSolvePag.classList.remove('move-edge-l');
                oNotSolvePag.classList.remove('left-in');
            }, 260)
        }, false)
    }(i))
}
oBack7.addEventListener('touchstart', function () {
    oNotSolvePag.classList.add('move-edge-l');
    oNotSolvePag.classList.add('right-out');
    setTimeout(function () {
        oNotSolvePag.classList.remove('move-edge-l');
        oNotSolvePag.classList.remove('right-out');
        oNotSolvePag.style.display = 'none';
    }, 260)
}, false);

//全部咨询
var oallBtn = document.querySelector('#allBtn');
var oBack4 = document.querySelector('#backUserDet4');
var oAllConsult = document.querySelector('#allConsult');
oallBtn.addEventListener('touchstart', function () {
    // console.log(1111111)
    oAllConsult.style.display = 'block';
    oAllConsult.classList.add('move-edge-l');
    oAllConsult.classList.add('left-in');
    setTimeout(function () {
        oAllConsult.classList.remove('move-edge-l');
        oAllConsult.classList.remove('left-in');
    }, 260)
}, false);

oBack4.addEventListener('touchstart', function () {

    oAllConsult.classList.add('move-edge-l');
    oAllConsult.classList.add('right-out');
    setTimeout(function () {
        oAllConsult.classList.remove('move-edge-l');
        oAllConsult.classList.remove('right-out');
        oAllConsult.style.display = 'none';
    }, 260)
}, false);