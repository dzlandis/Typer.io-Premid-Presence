const iframe = new iFrame();

iframe.on("UpdateData", async () => {
	const video = document.querySelector<HTMLVideoElement>("video");
	if (!isNaN(video?.duration)) {
		iframe.send({
			currTime: video.currentTime,
			duration: video.duration,
			paused: video.paused
		});
	}
});
