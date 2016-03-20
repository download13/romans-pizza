var popUpWindow = (function() {
	var popUpWin = null;

	return function(URLStr, left, top, width, height) {
		if(popUpWin && !popUpWin.closed) {
			popUpWin.close();
		}

		popUpWin = open(URLStr, 'popUpWin', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=' + width + ', left=' + left + ', top=' + top + ', screenX=' + left + ', screenY=' + top);
	}
})();
