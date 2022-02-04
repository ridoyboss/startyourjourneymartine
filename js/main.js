$(document).ready(function(){
    $('#form_hotel').show();
    $('#form_tricket').hide();
    $('#form_place').hide();

    $('#hotel_btn span').addClass('line');
    /* ---if condition ---- */

    $('#hotel_btn').click(function(){
        $('#form_hotel').show();
        $('#form_tricket').hide();
        $('#form_place').hide();
        $('#hotel_btn span').addClass('line');
        $('#tricket_btn span').removeClass('line');
        $('#place_btn span').removeClass('line');
    });
    $('#tricket_btn').click(function(){
        $('#form_hotel').hide();
        $('#form_tricket').show();
        $('#form_place').hide();
        $('#hotel_btn span').removeClass('line');
        $('#tricket_btn span').addClass('line');
        $('#place_btn span').removeClass('line');
    });
    $('#place_btn').click(function(){
        $('#form_hotel').hide();
        $('#form_tricket').hide();
        $('#form_place').show();
        $('#hotel_btn span').removeClass('line');
        $('#tricket_btn span').removeClass('line');
        $('#place_btn span').addClass('line');
    });
});

// sticky navber code
window.addEventListener('scroll',function(){

    var header = document.getElementById('nav-menu');

    header.classList.toggle('sticky', window.scrollY>0);
});