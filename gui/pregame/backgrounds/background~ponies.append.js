for (const backgroundName of Object.keys(backgrounds))
	delete backgrounds[backgroundName];

Object.assign(backgrounds, {
	"earth": [
		{
			"offset": (time, width) => 0.2 * width * Math.cos(0.05 * time),
			"sprite": "background-earth1-1",
			"tiling": true,
		},
	],

	"pega": [
		{
			"offset": (time, width) => 0.12 * width * Math.cos(0.05 * time) - width / 12,
			"sprite": "background-pega1-1",
			"tiling": true,
		},
		{
			"offset": (time, width) => -0.02 * width * time,
			"sprite": "background-pega1-2",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.24 * width * Math.cos(0.05 * time) - width / 16,
			"sprite": "background-pega1-3",
			"tiling": false,
		},
	],

	"uni": [
		{
			"offset": (time, width) => 0,
			"sprite": "background-uni1-1",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.12 * width * Math.cos(0.05 * time) - width / 4,
			"sprite": "background-uni1-2",
			"tiling": false,
		},
	],
});
