(function ($) {
    $(function () {
        function moveUpestado(thisObject) {
            thisObject.appendTo(thisObject.parents('svg>g'));
        }

        $('.mapa-svg-estados').click(function () {
            $(this).siblings().removeClass('mapa-svg-estados-active');
            $(this).addClass('mapa-svg-estados-active');
            $('.class-select').val($(this).attr('id')).trigger('change');
            moveUpestado($(this));
        });

        $('.class-select > option').each(function () {
            $(this).addClass($(this).attr('value'));
        });

        $('.class-select').change(function () {
            $('.' + $(this).val() + '-class').siblings().removeClass('mapa-svg-estados-active');
            $('.' + $(this).val() + '-class').addClass('mapa-svg-estados-active');
            moveUpestado($('.' + $(this).val() + '-class'));
        });

        function addMarker(stateId, cx, cy, info) {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            marker.setAttribute('cx', cx);
            marker.setAttribute('cy', cy);
            marker.setAttribute('r', 5);
            marker.setAttribute('fill', 'red');
            marker.classList.add('marker');
            marker.dataset.endereco = info.endereco;
            marker.dataset.nit = info.nit;
            marker.dataset.universidade = info.universidade;
            $('#' + stateId).append(marker);
        }

        // Adiciona um listener para os marcadores
        $(document).on('click', '.marker', function (e) {
            $('.marker').removeClass('marker-active'); // Remove a classe ativa de todos os marcadores
            $(this).addClass('marker-active'); // Adiciona a classe ativa ao marcador clicado
            
            $('#info-endereco').text($(this).data('endereco'));
            $('#info-nit').text($(this).data('nit'));
            $('#info-universidade').text($(this).data('universidade'));
            $('#info-box').css({
                display: 'flex',
                top: e.pageY + 15,
                left: e.pageX + 15
            }).show();
        });

        // Fecha a info-box ao clicar no botão "X"
        $('#info-box-close').click(function () {
            $('#info-box').hide();
        });

        // Exemplo de como adicionar marcadores
        addMarker('state-go', 412.5104, 312.2663, {
            endereco: 'Rua Durval de Menezes, 123',
            nit: 'Nite',
            universidade: 'UNIGO'
        });

        addMarker('state-sp', 429.8438, 374.2663, {
            endereco: 'Avenida, 456',
            nit: 'Nite',
            universidade: 'Unimar'
        });

    });
})(jQuery);
