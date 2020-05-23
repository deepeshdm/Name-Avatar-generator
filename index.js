$(document).ready(function(){
	
		$("#ubtn").click(function(){
			const name = $("#uname").val();
        $("#uimg").attr("src",`https://joeschmoe.io/api/v1/${name}`);
		});


	});
