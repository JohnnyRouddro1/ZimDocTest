// hge-bootsrap Zim template multi-page functions
$(document).ready(function() {
  // Dynamically add classes to the elements generated by Zim index() function
  	$('#sidebarMenu ul').addClass( "list-group list-group-flush" );
  	$('#sidebarMenu li').addClass( "list-group-item list-group-item-action zim-index-toc-item" );
  	$('#sidebarMenu').find('a').addClass( "zim-index-toc-link" );
});

