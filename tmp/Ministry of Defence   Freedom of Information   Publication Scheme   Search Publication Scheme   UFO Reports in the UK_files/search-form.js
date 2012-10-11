function clearField() {
	var scopeField = document.getElementById("search-scope");
	//var scopeString = "Search " + scopeField.value + "...";
	var scopeString = "Search defence...";
	
	if (this.value == scopeString || this.value == "Search defence..." || this.value == "") {
		previousValue = this.value;
		this.value = "";
	}
}

function restoreValue() {
	var searchField = document.getElementById("search-string");

	if (searchField.value == ""){	this.value = previousValue; }
}

function getExtendedSearch(){
	var extendSearch = document.getElementById("extend-search");
	if (extendSearch.checked == true) {
		return true;
	} else {
		return false;
	}
}

function setExtendedSearch(){
	var searchField = document.getElementById("search-string");
	var scopeField = document.getElementById("search-scope");
	var scopeString = "Search " + scopeField.value + "...";
	
	if (searchField.value == scopeString || searchField.value == "Search defence..." || searchField.value == ""){
		if (getExtendedSearch()) {
			searchField.value = "Search defence...";
		}else{
			searchField.value = scopeString;
		}
	}
}

function setInitialValue() {
	var searchField = document.getElementById("search-string");
	var extendSearch = document.getElementById("extend-search");
	var scopeString = "";
	var FOIsearchField = document.getElementById("tbSearchPublication");
	var LocateSearchField = document.getElementById("Bottomnavigator2_tbLocate");
	var FOIscopeString = "Enter your search terms";
	var SearchLocate = "Enter Quick Link ID...";

//	if (document.getElementById("search-scope")) {
//		var scopeField = document.getElementById("search-scope");
//		scopeString = "Search " + scopeField.value + "...";
//	}else{
		scopeString = "Search defence...";
//	}
	
	if (searchField.value == ""){ searchField.value = scopeString;	}
	
	searchField.onfocus = clearField;
	if (searchField.captureEvents) searchField.captureEvents(Event.FOCUS)
	searchField.onclick = clearField;
	if (searchField.captureEvents) searchField.captureEvents(Event.CLICK)
	searchField.onblur = restoreValue;
	if (searchField.captureEvents) searchField.captureEvents(Event.BLUR)
	
	if (document.getElementById("extend-search")) {
		extendSearch.onfocus = setExtendedSearch;
		if (extendSearch.captureEvents) extendSearch.captureEvents(Event.FOCUS)	
		extendSearch.onclick = setExtendedSearch;
		if (extendSearch.captureEvents) extendSearch.captureEvents(Event.CLICK)
	}
	
	if (FOIsearchField != null)
	{
		if (FOIsearchField.value == ""){ FOIsearchField.value = FOIscopeString;	}
		
		FOIsearchField.onfocus = clearFOIField;
		if (FOIsearchField.captureEvents) FOIsearchField.captureEvents(Event.FOCUS)
		FOIsearchField.onclick = clearFOIField;
		if (FOIsearchField.captureEvents) FOIsearchField.captureEvents(Event.CLICK)
	}
	
	if (LocateSearchField != null)
	{
		if (LocateSearchField.value == ""){ LocateSearchField.value = SearchLocate;	}
		
		LocateSearchField.onfocus = clearLocalField;
		if (LocateSearchField.captureEvents) LocateSearchField.captureEvents(Event.FOCUS)
		LocateSearchField.onclick = clearLocalField;
		if (LocateSearchField.captureEvents) LocateSearchField.captureEvents(Event.CLICK)
	}
}

	function clearLocalField() {
		var LocateSearchField = document.getElementById("Bottomnavigator2_tbLocate");
		var SearchLocate = "Enter Quick Link ID...";
		
		if (LocateSearchField.value == SearchLocate || LocateSearchField.value == "") {
			LocateSearchField.value = "";
		}
	}

	function clearFOIField() {
		var FOIscopeField = document.getElementById("tbSearchPublication");
		var FOIscopeString = "Enter your search terms";
		
		if (FOIscopeField.value == FOIscopeString || FOIscopeField.value == "") {
			FOIscopeField.value = "";
		}
	}
// dynamically assigns an onLoad event to any page from which this script is linked.
var previousValue = "";
window.onload = setInitialValue;
if (window.captureEvents) window.captureEvents(Event.LOAD)