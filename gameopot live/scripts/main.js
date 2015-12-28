/*=============================================================================================
    scripts for REVIEWS
==============================================================================================*/

// main menu navbar anime
$(document).ready(function(){
    $("#hoverLi").hover(function(){
        $("#child").fadeIn("medium");
    },
    function(){
        $("#child").fadeOut("medium");
    });
});


// search input animation beside the under-banner nav-tabs
$("#search-icon").click(function(){
    $(".search-box").animate({
        width: 'toggle',
    });
    $(".search-box").css("border", "1px solid #9E090B");

// search input for Buy-sell page
    $("#buy-sell_search-box").animate({
        width: 'toggle',
    });
    $("#buy-sell_search-box").css("border", "none");
});


/*==========================================================
    Show/Hide functionality with jQuery
    Ref: http://codepen.io/maxds/pen/jgeoA
============================================================*/

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 140;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "[ + ]";
    var lesstext = "[ - ]";
    

    $('.video-excerpt').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ 
            '&nbsp;</span><span class="morecontent"><span>' + h + 
            '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });

    $('.news-excerpt').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ 
            '&nbsp;</span><span class="morecontent"><span>' + h + 
            '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


/*=============================================================================================
                                    scripts for Pagination
    // simple jquery pagination
    // Source: http://web.enavu.com/tutorials/making-a-jquery-pagination-system/
==============================================================================================*/

$(document).ready(function(){
    
    //how much items per page to show
    var show_per_page = 3;
    //getting the amount of elements inside content div
    var number_of_items = $('.related-vids-items ul').children().size();
    //calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    
    //set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    
    //now when we got all we need for the navigation let's make it '
    
    /* 
    what are we going to have in the navigation?
        - link to previous page
        - links to specific pages
        - link to next page
    */
    var navigation_html = '';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+'</a>';
        current_link++;
    }
    navigation_html += '';
    
    $('.page_navigation').html(navigation_html);
    
    //add active_page class to the first page link
    $('.page_navigation .page_link:first').addClass('active_page');
    
    //hide all the elements inside content div
    $('.related-vids-items ul').children().css('display', 'none');
    
    //and show the first n (show_per_page) elements
    $('.related-vids-items ul').children().slice(0, show_per_page).css('display', 'block');    
});


function go_to_page(page_num){
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());
    
    //get the element number where to start the slice from
    start_from = page_num * show_per_page;
    
    //get the element number where to end the slice
    end_on = start_from + show_per_page;
    
    //hide all children elements of content div, get specific items and show them
    $('.related-vids-items ul').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    
    /*get the page link that has longdesc attribute of the current page and add active_page class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
    
    //update the current page input field
    $('#current_page').val(page_num);
}



/*==========================================
    pagination for Latest Videos tabs
===========================================*/

$(document).ready(function(){
    $('.vids-cat-cont').each(function(index, val){
        var id = $(this).attr('id');

        var show_per_page_lt_vids = 4;
        var number_of_items_lt_vids = $(val).find('.latest-video-items').size();
        var number_of_pages_lt_vids = Math.ceil(number_of_items_lt_vids/show_per_page_lt_vids);
        
        $('#current_page_lt_vids_'+index).val(0);
        $('#show_per_page_lt_vids_'+index).val(show_per_page_lt_vids);
     
        var navigation_html_lt_vids = '';
        var current_link_lt_vids = 0;
        while(number_of_pages_lt_vids > current_link_lt_vids){
            navigation_html_lt_vids += '<a class="page_link_lt_vids_'+index+'" href="javascript:go_to_page_lt_vids(\''+id+'\','+index+','+ current_link_lt_vids +')" longdesc="' + current_link_lt_vids +'">'+'</a>';
            current_link_lt_vids++;
        }
        navigation_html_lt_vids += '';
        
        $('.page_navigation_lt_vids_'+index).html(navigation_html_lt_vids);    
        $('.page_navigation_lt_vids_'+index+' .page_link_lt_vids_'+index+':first').addClass('active_page_lt_vids');
        $(val).find('.latest-video-items').css('display', 'none');    
        $(val).find('.latest-video-items').slice(0, show_per_page_lt_vids).css('display', 'block');
    });
        
});

function go_to_page_lt_vids(id,index,page_num){
    var show_per_page_lt_vids = parseInt($('#show_per_page_lt_vids_'+index).val());    
    start_from = page_num * show_per_page_lt_vids;    
    end_on = start_from + show_per_page_lt_vids;    
    $('#'+id+' .latest-video-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');    
    $('.page_link_lt_vids_'+index+'[longdesc=' + page_num +']').addClass('active_page_lt_vids').siblings('.active_page_lt_vids').removeClass('active_page_lt_vids');    
    $('#current_page_lt_vids_'+index).val(page_num);
}


/*==========================================
    pagination for News tabs
===========================================*/

$(document).ready(function(){
    $('.news-cat-cont').each(function(index, val){
        var id = $(this).attr('id');

        var show_per_page_news = 4;
        var number_of_items_news = $(val).find('.news-items').size();
        var number_of_pages_news = Math.ceil(number_of_items_news/show_per_page_news);
        
        $('#current_page_news_'+index).val(0);
        $('#show_per_page_news_'+index).val(show_per_page_news);
     
        var navigation_html_news = '';
        var current_link_news = 0;
        while(number_of_pages_news > current_link_news){
            navigation_html_news += '<a class="page_link_news_'+index+'" href="javascript:go_to_page_news(\''+id+'\','+index+','+ current_link_news +')" longdesc="' + current_link_news +'">'+'</a>';
            current_link_news++;
        }
        navigation_html_news += '';
        
        $('.page_navigation_news_'+index).html(navigation_html_news);    
        $('.page_navigation_news_'+index+' .page_link_news_'+index+':first').addClass('active_page_news');
        $(val).find('.news-items').css('display', 'none');    
        $(val).find('.news-items').slice(0, show_per_page_news).css('display', 'block');
    });
        
});

function go_to_page_news(id,index,page_num){
    var show_per_page_news = parseInt($('#show_per_page_news_'+index).val());    
    start_from = page_num * show_per_page_news;    
    end_on = start_from + show_per_page_news;    
    $('#'+id+' .news-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');    
    $('.page_link_news_'+index+'[longdesc=' + page_num +']').addClass('active_page_news').siblings('.active_page_news').removeClass('active_page_news');    
    $('#current_page_news_'+index).val(page_num);
}

/*==========================================
    pagination for Main Buy-Sell
===========================================*/

$(document).ready(function(){

    var show_per_page_buy_sell = 6;
    var number_of_items_buy_sell = $('.buy-sell-items').size();
    var number_of_pages_buy_sell = Math.ceil(number_of_items_buy_sell/show_per_page_buy_sell);
    
    $('#current_page_buy_sell').val(0);
    $('#show_per_page_buy_sell').val(show_per_page_buy_sell);
    

    var navigation_html_buy_sell = '';
    var current_link_buy_sell = 0;
    while(number_of_pages_buy_sell > current_link_buy_sell){
        navigation_html_buy_sell+= '<a class="page_link_buy_sell" href="javascript:go_to_page_buy_sell(' + current_link_buy_sell +')" longdesc="' + current_link_buy_sell +'">'+'</a>';
        current_link_buy_sell++;
    }
    navigation_html_buy_sell += '';
    
    $('.page_navigation_buy_sell').html(navigation_html_buy_sell);
    $('.page_navigation_buy_sell .page_link_buy_sell:first').addClass('active_page_buy_sell');
    $('.buy-sell-items').css('display', 'none');
    $('.buy-sell-items').slice(0, show_per_page_buy_sell).css('display', 'block');    
});


function go_to_page_buy_sell(page_num){
    var show_per_page_buy_sell = parseInt($('#show_per_page_buy_sell').val());
    start_from = page_num * show_per_page_buy_sell;
    end_on = start_from + show_per_page_buy_sell;
    $('.buy-sell-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link_buy_sell[longdesc=' + page_num +']').addClass('active_page_buy_sell').siblings('.active_page_buy_sell').removeClass('active_page_buy_sell');
    $('#current_page_buy_sell').val(page_num);
}

/*==========================================
    pagination for Games News / Features
===========================================*/

$(document).ready(function(){

    var show_per_page_game_news_features = 5;
    var number_of_items_game_news_features = $('#game_news-features .news-items').size();
    var number_of_pages_game_news_features = Math.ceil(number_of_items_game_news_features/show_per_page_game_news_features);
    
    $('#current_page_game_news_features').val(0);
    $('#show_per_page_game_news_features').val(show_per_page_game_news_features);
    

    var navigation_html_game_news_features = '';
    var current_link_game_news_features = 0;
    while(number_of_pages_game_news_features > current_link_game_news_features){
        navigation_html_game_news_features+= '<a class="page_link_game_news_features" href="javascript:go_to_page_game_news_features(' + current_link_game_news_features +')" longdesc="' + current_link_game_news_features +'">'+'</a>';
        current_link_game_news_features++;
    }
    navigation_html_game_news_features += '';
    
    $('.page_navigation_game_news_features').html(navigation_html_game_news_features);
    $('.page_navigation_game_news_features .page_link_game_news_features:first').addClass('active_page_game_news_features');
    $('#game_news-features .news-items').css('display', 'none');
    $('#game_news-features .news-items').slice(0, show_per_page_game_news_features).css('display', 'block');    
});


function go_to_page_game_news_features(page_num){
    var show_per_page_game_news_features = parseInt($('#show_per_page_game_news_features').val());
    start_from = page_num * show_per_page_game_news_features;
    end_on = start_from + show_per_page_game_news_features;
    $('#game_news-features .news-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link_game_news_features[longdesc=' + page_num +']').addClass('active_page_game_news_features').siblings('.active_page_game_news_features').removeClass('active_page_game_news_features');
    $('#current_page_game_news_features').val(page_num);
}

/*==========================================
    pagination for Games Images
===========================================*/

$(document).ready(function(){

    var show_per_page_game_imgs = 4;
    var number_of_items_game_imgs = $('.game_imgs-vids-sect-contents .game_images-items').size();
    var number_of_pages_game_imgs = Math.ceil(number_of_items_game_imgs/show_per_page_game_imgs);
    
    $('#current_page_game_imgs').val(0);
    $('#show_per_page_game_imgs').val(show_per_page_game_imgs);
    

    var navigation_html_game_imgs = '';
    var current_link_game_imgs = 0;
    while(number_of_pages_game_imgs > current_link_game_imgs){
        navigation_html_game_imgs += '<a class="page_link_game_imgs" href="javascript:go_to_page_game_imgs(' + current_link_game_imgs +')" longdesc="' + current_link_game_imgs +'">'+'</a>';
        current_link_game_imgs++;
    }
    navigation_html_game_imgs += '';
    
    $('.page_navigation_game_imgs').html(navigation_html_game_imgs);
    $('.page_navigation_game_imgs .page_link_game_imgs:first').addClass('active_page_game_imgs');
    $('.game_imgs-vids-sect-contents .game_images-items').css('display', 'none');
    $('.game_imgs-vids-sect-contents .game_images-items').slice(0, show_per_page_game_imgs).css('display', 'block');    
});


function go_to_page_game_imgs(page_num){
    var show_per_page_game_imgs = parseInt($('#show_per_page_game_imgs').val());
    start_from = page_num * show_per_page_game_imgs;
    end_on = start_from + show_per_page_game_imgs;
    $('.game_imgs-vids-sect-contents .game_images-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link_game_imgs[longdesc=' + page_num +']').addClass('active_page_game_imgs').siblings('.active_page_game_imgs').removeClass('active_page_game_imgs');
    $('#current_page_game_imgs').val(page_num);
}

/*==========================================
    pagination for Games Videos
===========================================*/

$(document).ready(function(){

    var show_per_page_game_vids = 4;
    var number_of_items_game_vids = $('.game_imgs-vids-sect-contents .game_videos-items').size();
    var number_of_pages_game_vids = Math.ceil(number_of_items_game_vids/show_per_page_game_vids);
    
    $('#current_page_game_vids').val(0);
    $('#show_per_page_game_vids').val(show_per_page_game_vids);
    

    var navigation_html_game_vids = '';
    var current_link_game_vids = 0;
    while(number_of_pages_game_vids > current_link_game_vids){
        navigation_html_game_vids += '<a class="page_link_game_vids" href="javascript:go_to_page_game_vids(' + current_link_game_vids +')" longdesc="' + current_link_game_vids +'">'+'</a>';
        current_link_game_vids++;
    }
    navigation_html_game_vids += '';
    
    $('.page_navigation_game_vids').html(navigation_html_game_vids);
    $('.page_navigation_game_vids .page_link_game_vids:first').addClass('active_page_game_vids');
    $('.game_imgs-vids-sect-contents .game_videos-items').css('display', 'none');
    $('.game_imgs-vids-sect-contents .game_videos-items').slice(0, show_per_page_game_vids).css('display', 'block');    
});


function go_to_page_game_vids(page_num){
    var show_per_page_game_vids = parseInt($('#show_per_page_game_vids').val());
    start_from = page_num * show_per_page_game_vids;
    end_on = start_from + show_per_page_game_vids;
    $('.game_imgs-vids-sect-contents .game_videos-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link_game_vids[longdesc=' + page_num +']').addClass('active_page_game_vids').siblings('.active_page_game_vids').removeClass('active_page_game_vids');
    $('#current_page_game_vids').val(page_num);
}

/*==========================================
    pagination for Games Buy-Sell
===========================================*/

$(document).ready(function(){

    var show_per_page_game_buy_sell = 9;
    var number_of_items_game_buy_sell = $('.game_buy-sell-items').size();
    var number_of_pages_game_buy_sell = Math.ceil(number_of_items_game_buy_sell/show_per_page_game_buy_sell);
    
    $('#current_page_game_buy_sell').val(0);
    $('#show_per_page_game_buy_sell').val(show_per_page_game_buy_sell);
    

    var navigation_html_game_buy_sell = '';
    var current_link_game_buy_sell = 0;
    while(number_of_pages_game_buy_sell > current_link_game_buy_sell){
        navigation_html_game_buy_sell+= '<a class="page_link_game_buy_sell" href="javascript:go_to_page_game_buy_sell(' + current_link_game_buy_sell +')" longdesc="' + current_link_game_buy_sell +'">'+'</a>';
        current_link_game_buy_sell++;
    }
    navigation_html_game_buy_sell += '';
    
    $('.page_navigation_game_buy_sell').html(navigation_html_game_buy_sell);
    $('.page_navigation_game_buy_sell .page_link_game_buy_sell:first').addClass('active_page_game_buy_sell');
    $('.game_buy-sell-items').css('display', 'none');
    $('.game_buy-sell-items').slice(0, show_per_page_game_buy_sell).css('display', 'block');    
});


function go_to_page_game_buy_sell(page_num){
    var show_per_page_game_buy_sell = parseInt($('#show_per_page_game_buy_sell').val());
    start_from = page_num * show_per_page_game_buy_sell;
    end_on = start_from + show_per_page_game_buy_sell;
    $('.game_buy-sell-items').css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link_game_buy_sell[longdesc=' + page_num +']').addClass('active_page_game_buy_sell').siblings('.active_page_game_buy_sell').removeClass('active_page_game_buy_sell');
    $('#current_page_game_buy_sell').val(page_num);
}

/*=================================================
    Custom Scrollbar codes for All the pages
==================================================*/

$(document).ready(function() {
  $("#top-videos-list-items-cont").customScrollbar();
  $("#top-news-list-items-cont").customScrollbar();
  $("#recomm-news-list-items-cont").customScrollbar();
  $("#game_recomnd-games-list-items-cont").customScrollbar();
});



/*=============================================================================================
    scripts for Buy-Sell page
==============================================================================================*/

// Buy-Sell left-aside collapsibles hidden on page load
$('.accordion-body').collapse({toggle: true});

// Buy-Sell left-aside Custom Price Range Slider (jQuery ui)
$(function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 20, 100 ],
        slide: function( event, ui ) {
          $( "#price-range" ).val( "৳" + ui.values[ 0 ] + " - ৳" + ui.values[ 1 ] );
        }
      });
      $( "#price-range" ).val( "৳" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ৳" + $( "#slider-range" ).slider( "values", 1 ) );
    });

// Buy-Sell Selectables
$(".buy-sell_selectables").selectable();
// Buy-Sell Type Radio
    $('input').prop("checked", true);
    $('input').prop("checked", false);


/*===========================================================================
    scripts for jScroll - jQuery Plugin for Infinite Scrolling / Auto-Paging
============================================================================*/
