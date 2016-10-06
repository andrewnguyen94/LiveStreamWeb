<script type="text/javascript">
	var canvas = $("#preview");
	var context = canvas.getContext("2d");

	canvas.width = 800;
	canvas.height = 600;

	context.width = canvas.width;
	context.height = canvas.height;

	var video = $("#video");

	function logger(msg){
		$("#logger").text(msg);
	}

	function loadCam(stream){
		logger('Camera is good!');
	}

	function loadFailed(stream){
		logger('camera is failed');
	}

	function viewVideo(video, context){
		context.drawImage(video, 0, 0, context.width, context.height);
	}

	$(function(){
		navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia
		 || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

		if(navigator.getUserMedia){
			navigator.getUserMedia({video : true}, loadCam, loadFailed);
		}
	})

</script>