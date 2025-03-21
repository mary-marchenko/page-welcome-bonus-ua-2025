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

// TEST
document.querySelector('.dark-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudHMiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZm9yRWFjaCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JELElBQUlDLFFBQVEsR0FBRyxDQUNYLGFBQWEsRUFDYixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsbUJBQW1CLENBQ3RCO0VBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQUU7SUFDbkRILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLFVBQVNDLFFBQVEsRUFBRTtNQUNoQ1AsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQ0QsUUFBUSxDQUFDLENBQUNELE9BQU8sQ0FBQyxVQUFTRyxPQUFPLEVBQUU7UUFDMURBLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDOztBQUdGO0FBQ0FYLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRUQsUUFBUSxDQUFDYSxJQUFJLENBQUNILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQyxDQUFDLENBQUM7QUMxREYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZGRpbmcgbm8taW9zXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICBsZXQgdHh0TWFnZW50YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50eHRNYWdlbnRhJyk7XG4vLyAgICAgbGV0IHR4dEJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHh0Qmx1ZScpO1xuLy8gICAgIGxldCBib251c1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib251c0l0ZW1fX3R4dC10b3AnKTtcbi8vICAgICBsZXQgYm9udXNCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9udXNJdGVtX190eHQtYm90dG9tJyk7XG4vLyAgICAgbGV0IGNlbnRlckZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlbGNvbWVfX2NlbnRlci1mcy1sZWZ0Jyk7XG4vLyAgICAgbGV0IGNlbnRlckZzUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWxjb21lX19jZW50ZXItZnMtcmlnaHQnKTtcbi8vICAgICBsZXQgYmlnQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcG9zaXRCdG4uYmlnJyk7XG4vLyAgICAgbGV0IHNtYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcG9zaXRCdG4nKTtcbi8vICAgICBsZXQgcnVsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24gc3VtbWFyeScpO1xuLy9cbi8vXG4vLyAgICAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbi8vICAgICAgICAgdHh0TWFnZW50YS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIHR4dEJsdWUuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuLy8gICAgICAgICBjZW50ZXJGcy5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIGNlbnRlckZzUi5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIGJpZ0J0bi5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIHNtYWxsQnRuLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgcnVsZXMuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuLy9cbi8vICAgICAgICAgYm9udXNUb3AuZm9yRWFjaChmdW5jdGlvbihwYWdlTG92ZUJsb2NrKSB7XG4vLyAgICAgICAgICAgICBib251c1RvcC5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBib251c0JvdHRvbS5mb3JFYWNoKGZ1bmN0aW9uKHBhZ2VMb3ZlQmxvY2spIHtcbi8vICAgICAgICAgICAgIGJvbnVzQm90dG9tLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICAgICAgfSk7XG4vL1xuLy8gICAgIH1cbi8vIH0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXG4gICAgICAgICcudHh0TWFnZW50YScsXG4gICAgICAgICcudHh0Qmx1ZScsXG4gICAgICAgICcuYm9udXNJdGVtX190eHQtdG9wJyxcbiAgICAgICAgJy5ib251c0l0ZW1fX3R4dC1ib3R0b20nLFxuICAgICAgICAnLndlbGNvbWVfX2NlbnRlci1mcy1sZWZ0JyxcbiAgICAgICAgJy53ZWxjb21lX19jZW50ZXItZnMtcmlnaHQnLFxuICAgICAgICAnLmRlcG9zaXRCdG4uYmlnJyxcbiAgICAgICAgJy5kZXBvc2l0QnRuJyxcbiAgICAgICAgJy5kcm9wZG93biBzdW1tYXJ5J1xuICAgIF07XG5cbiAgICBpZiAoIS9pUGFkfGlQaG9uZXxpUG9kfE1hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuXG4vLyBURVNUXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbn0pOyIsIiJdfQ==
