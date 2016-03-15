/*
	Copyright 2014, MV Develop
	http://mvdevelop.com/

	Licensed under the MIT license.
	http://www.opensource.org/licenses/mit-license.php

	Created by: vladan@mvdevelop.com
	Maintained by: vladan@mvdevelop.com
*/

$(document).ready(function(){
	
	$.getJSON( "website.json", function(data) {
		var $siteList = $(".site-list"),
				array = [],
        l = data.length;
		for(i = 0; i < l; i++) {
			array[i] = '<li class="clearfix"><div class="image-holder"><img src="' + data[i].img + '" width="300" height="160"></div> <div class="main-info"><h3>' + data[i].title + '</h3><div class="info">' + data[i].info + '</div><p class="url">URL: <a href="' + data[i].url + '" target="_blank">' + data[i].url + '</a></p></div></li>';
    }
    $siteList.html(array.join(''));

    $(document).ajaxStop(function() {
			$('.site-list').find('li:last-child').addClass('last');
		});
	});

});