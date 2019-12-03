
			$(document).ready(function() {
				$("#example14").zAccordion({
					tabWidth: "15%",
					width: "100%",
					height: "100%"
				});
				$(window).resize(function() {
					$("#example14").height($(window).height());
					$("#example14 li").height($(window).height());
					$("#example14 img").height($(window).height());
				});
			});
		