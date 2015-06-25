g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 0,
			"sprite": "background-uni1-1",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.12 * width * Math.cos(0.05 * time) - width/4,
			"sprite": "background-uni1-2",
			"tiling": false,
		},
	]);
