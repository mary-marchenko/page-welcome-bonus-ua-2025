"use strict";

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

document.addEventListener("DOMContentLoaded", function () {
  var elements = ['.txtMagenta', '.txtBlue', '.bonusItem__txt-top', '.bonusItem__txt-bottom', '.welcome__center-fs-left', '.welcome__center-fs-right', '.depositBtn.big', '.depositBtn', '.dropdown summary'];
  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    elements.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.classList.add('noios-padding');
      });
    });
  }
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudHMiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZm9yRWFjaCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxJQUFJQyxRQUFRLEdBQUcsQ0FDWCxhQUFhLEVBQ2IsVUFBVSxFQUNWLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLG1CQUFtQixDQUN0QjtFQUVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQyxFQUFFO0lBQ25ESCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxVQUFTQyxRQUFRLEVBQUU7TUFDaENQLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUNELFFBQVEsQ0FBQyxDQUFDRCxPQUFPLENBQUMsVUFBU0csT0FBTyxFQUFFO1FBQzFEQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUMxQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQztBQ3BERiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFkZGluZyBuby1pb3Ncbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGxldCB0eHRNYWdlbnRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR4dE1hZ2VudGEnKTtcbi8vICAgICBsZXQgdHh0Qmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50eHRCbHVlJyk7XG4vLyAgICAgbGV0IGJvbnVzVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvbnVzSXRlbV9fdHh0LXRvcCcpO1xuLy8gICAgIGxldCBib251c0JvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib251c0l0ZW1fX3R4dC1ib3R0b20nKTtcbi8vICAgICBsZXQgY2VudGVyRnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VsY29tZV9fY2VudGVyLWZzLWxlZnQnKTtcbi8vICAgICBsZXQgY2VudGVyRnNSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlbGNvbWVfX2NlbnRlci1mcy1yaWdodCcpO1xuLy8gICAgIGxldCBiaWdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVwb3NpdEJ0bi5iaWcnKTtcbi8vICAgICBsZXQgc21hbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVwb3NpdEJ0bicpO1xuLy8gICAgIGxldCBydWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93biBzdW1tYXJ5Jyk7XG4vL1xuLy9cbi8vICAgICBpZiAoIS9pUGFkfGlQaG9uZXxpUG9kfE1hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuLy8gICAgICAgICB0eHRNYWdlbnRhLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgdHh0Qmx1ZS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIGNlbnRlckZzLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgY2VudGVyRnNSLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgYmlnQnRuLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgc21hbGxCdG4uY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuLy8gICAgICAgICBydWxlcy5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vL1xuLy8gICAgICAgICBib251c1RvcC5mb3JFYWNoKGZ1bmN0aW9uKHBhZ2VMb3ZlQmxvY2spIHtcbi8vICAgICAgICAgICAgIGJvbnVzVG9wLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIGJvbnVzQm90dG9tLmZvckVhY2goZnVuY3Rpb24ocGFnZUxvdmVCbG9jaykge1xuLy8gICAgICAgICAgICAgYm9udXNCb3R0b20uY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuLy8gICAgICAgICB9KTtcbi8vXG4vLyAgICAgfVxuLy8gfSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBlbGVtZW50cyA9IFtcbiAgICAgICAgJy50eHRNYWdlbnRhJyxcbiAgICAgICAgJy50eHRCbHVlJyxcbiAgICAgICAgJy5ib251c0l0ZW1fX3R4dC10b3AnLFxuICAgICAgICAnLmJvbnVzSXRlbV9fdHh0LWJvdHRvbScsXG4gICAgICAgICcud2VsY29tZV9fY2VudGVyLWZzLWxlZnQnLFxuICAgICAgICAnLndlbGNvbWVfX2NlbnRlci1mcy1yaWdodCcsXG4gICAgICAgICcuZGVwb3NpdEJ0bi5iaWcnLFxuICAgICAgICAnLmRlcG9zaXRCdG4nLFxuICAgICAgICAnLmRyb3Bkb3duIHN1bW1hcnknXG4gICAgXTtcblxuICAgIGlmICghL2lQYWR8aVBob25lfGlQb2R8TWFjLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIiwiIl19
