g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 0.12 * width * Math.cos(0.05 * time) - width/12,
			"sprite": "background-pega1-1",
			"tiling": true,
		},
		{
			"offset": (time, width) => -0.02 * width * time,
			"sprite": "background-pega1-2",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.24 * width * Math.cos(0.05 * time) - width/16,
			"sprite": "background-pega1-3",
			"tiling": false,
		},
	]);
