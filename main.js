
$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeTarefa = $('#tarefa').val();
        const linhaNova = $('<li></li>').text(nomeTarefa);
        $('ul').append(linhaNova);
        $('#tarefa').val('');
    });

    $('ul').on('click', 'li', function() {//no elemento ul ao clicar no argumetno 'li'  function entra em ação
        $(this).toggleClass('riscado');// neste cado this é == li    "toggleClass"== aitva ou desativa a class no argumento em questão
    });                                //nesse caso o click se torna um interruptor.
});
