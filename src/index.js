import "./scss/styles.scss";
import abc from 'jquery';
console.log(abc);
console.log(jQuery);

var currentModal = 0;
var modalText = ["Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ." +
`  <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
    ,
    "Си — компилируемый статически типизированный язык программирования общего назначения, разработанный в 1969—1973 годах сотрудником Bell Labs Деннисом Ритчи как развитие языка Би. Первоначально был разработан для реализации операционной системы UNIX, но впоследствии был перенесён на множество других платформ." +
    ` <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
    ,
    "Ruby — динамический, рефлективный, интерпретируемый высокоуровневый язык программирования. Язык обладает независимой от операционной системы реализацией многопоточности, сильной динамической типизацией, сборщиком мусора и многими другими возможностями. По особенностям синтаксиса он близок к языкам Perl и Eiffel, по объектно-ориентированному подходу — к Smalltalk." +
    `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
    ,
    "Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle). Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL. Права на торговую марку принадлежат корпорации Oracle." +
    `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
    ,
    "C++ — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование. Язык имеет богатую стандартную библиотеку, которая включает в себя распространённые контейнеры и алгоритмы, ввод-вывод, регулярные выражения, поддержку многопоточности и другие возможности. C++ сочетает свойства как высокоуровневых, так и низкоуровневых языков." +
    `<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
]
var modalCount = modalText.length;
var exampleModal = document.getElementById('exampleModal')
function showInfo(i) {

    if(i >= 0) i = i % modalCount;
    else i = modalCount - 1;

    var modalParagraph = exampleModal.querySelector('.modal-body');
    let text = modalText[i];
    modalParagraph.innerHTML = text;

    $('.popover').popover('hide');

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    currentModal = i;
}
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let num = button.getAttribute('data-bs-num')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    showInfo(num);
});
exampleModal.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
        showInfo(currentModal - 1);
        //перекл влево;
    } else if (event.code === "ArrowRight") {
        showInfo(currentModal + 1);
        //перекл вправо;
    }
});
$(document).ready(function() {
// При клике на кнопку, открываем модальное окно
    $("#myBtn").click(function() {
    $("#myModal").css("display", "block");
    });

    // При клике на крестик, закрываем модальное окно
    $(".close").click(function() {
    $("#myModal").css("display", "none");
    });

    // При клике вне модального окна, закрываем его
    $(window).click(function(event) {
    if (event.target.id == "myModal") {
        $("#myModal").css("display", "none");
    }
    });
});