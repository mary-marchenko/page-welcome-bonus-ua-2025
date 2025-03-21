// padding no-ios
// document.addEventListener("DOMContentLoaded", function() {
//     let txtMagenta = document.querySelectorAll('.txtMagenta');
//     let txtBlue = document.querySelectorAll('.txtBlue');
//     let bonusTop = document.querySelectorAll('.bonusItem__txt-top');
//     let bonusBottom = document.querySelectorAll('.bonusItem__txt-bottom');
//     let centerFs = document.querySelectorAll('.welcome__center-fs-left');
//     let centerFsR = document.querySelectorAll('.welcome__center-fs-right');
//     let bigBtn = document.querySelectorAll('.depositBtn.big');
//     let smallBtn = document.querySelectorAll('.depositBtn');
//     let rules = document.querySelectorAll('.dropdown summary');
//
//
//     if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
//         txtMagenta.classList.add('noios-padding');
//         txtBlue.classList.add('noios-padding');
//         centerFs.classList.add('noios-padding');
//         centerFsR.classList.add('noios-padding');
//         bigBtn.classList.add('noios-padding');
//         smallBtn.classList.add('noios-padding');
//         rules.classList.add('noios-padding');
//
//         bonusTop.forEach(function(pageLoveBlock) {
//             bonusTop.classList.add('noios-padding');
//         });
//         bonusBottom.forEach(function(pageLoveBlock) {
//             bonusBottom.classList.add('noios-padding');
//         });
//
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    let elements = [
        '.txtMagenta',
        '.txtBlue',
        '.bonusItem__txt-top',
        '.bonusItem__txt-bottom',
        '.welcome__center-fs-left',
        '.welcome__center-fs-right',
        '.depositBtn.big',
        '.depositBtn',
        '.dropdown summary'
    ];

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        elements.forEach(function(selector) {
            document.querySelectorAll(selector).forEach(function(element) {
                element.classList.add('noios-padding');
            });
        });
    }
});


// TEST
document.querySelector('.dark-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});