defaultPage = "#home"
validPages = [defaultPage, "#about", "#services", "#contacts"];
function currentPage(){
	hash = window.location.hash;
	if (validPages.indexOf(hash) < 0) {
		hash = defaultPage;
		window.location.hash = hash;
	}
	result = new Object;
	result.hash = hash;
	return result;
}
function changePage(){
	$(".ms_nav_ul_i").removeClass("active");
	$(".ms_nav_ul_disc").removeClass("active");
	$(".pane").removeClass("active")

	pageHash = currentPage().hash;
	console.log("pageHash="+pageHash);

	$(pageHash+"-tab").addClass("active");
	$(pageHash+"-tab .ms_nav_ul_disc").addClass("active");
	$(pageHash+"-pane").addClass("active")
}
$(document).ready(function(){
	$(window).bind('hashchange', changePage)
	changePage()
});	