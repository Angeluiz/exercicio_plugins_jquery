$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true, //Adicionar o autoplay: true para o carousel trocar de imagem sozinho 
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle(); //Adiciona uma abertura do menu de forma slide
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });  //Comando para adicionar o Mask no campo de telefone, e adicionar um placeholder que aparece para no campo
    
    $('#cep').mask('00000-000', {
        placeholder: '00000-000',
    });

    $('#cpf').mask('000.000.000-00', {
        reverse: true,
        placeholder: '000.000.000-00',
    });

    $('form').validate({

        rules: {
            cursointeresse: {
                required: true
            },
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
        },

        submitHandler: function(form) {
            alert('Obrigado pelo interesse, uma especialista entrará em contato.')
            $('#curso-interesse').val('');
            $('#nome').val('');
            $('#cpf').val('');
            $('#telefone').val('');
            $('#email').val('');
            $('#endereco').val('');
            $('#cep').val('');
        },
        invalidHandler: function(evento, validador) {
            let campoIncorretos = validador.numberOfInvalids();
            if (campoIncorretos) {
                alert(`${campoIncorretos} campos incompletos, favos preencha todos os campos !`)
            }
        }
    })

    $('.lista-cursos button').click(function(){
        const destino = $('#cadastro-aluno');

        const nomeCurso = $(this).parent().find('h3').text() //Comando pega o this(o botão clicado) busca nos elementos parentes do botão e retorna o texto dentro da tag h3

        $('#curso-interesse').val(nomeCurso); //Este comando esta dizendo que o campo com ID veiculo-interesse vai ser adicionado o valor (val) de nomeVeiculo
        //val pode ser usado para recuperar um valor ou adicionar o valor no campo

        $('html').animate({
            scrollTop: destino.offset().top //Comando para descer a tela quando clicar no botão
        }, 1000)
    })


})