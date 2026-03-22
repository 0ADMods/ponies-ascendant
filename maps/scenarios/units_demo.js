/**
 * Whether to also place all actors.
 */
const actors = false;

/**
 * Coordinates of the first entity.
 */
const startX = 20;
const startZ = 20;

/**
 * Horizontal coordinate of the last entity in the current row.
 */
const stopX = 1870;

/**
 * Coordinates of the current entity.
 */
let x = startX;
let z = startZ;

/**
 * Recall the greatest length in the current row to prevent overlapping.
 */
let maxh = 0;

/**
 * Space between entities.
 */
const gap = 14;

const cmpTemplateManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_TemplateManager);
for (const template of cmpTemplateManager.FindAllTemplates(actors))
{
	print(template + "...\n");

	const ent = Engine.AddEntity(template);
	if (!ent)
	{
		error("Failed to load " + template + "\n");
		continue;
	}

	const cmpFootprint = Engine.QueryInterface(ent, IID_Footprint);
	if (!cmpFootprint)
	{
		print(template + " has no footprint\n");
		continue;
	}

	const shape = cmpFootprint.GetShape();
	let w = shape.width;
	let h = shape.depth;

	if (shape.type == 'circle')
	{
		w = shape.radius * 2;
		h = w;
	}

	if (x + w >= stopX)
	{
		// Start a new row
		x = startX;
		z += maxh + gap;
		maxh = 0;
	}

	if (z >= stopX)
	{
		error(template + " would be placed out of map [" +(x + w / 2) + ", " + z + "]");
		continue;
	}

	const cmpPosition = Engine.QueryInterface(ent, IID_Position);
	if (!cmpPosition)
	{
		warn(template + " has no position\n");
		Engine.DestroyEntity(ent);
		continue;
	}

	cmpPosition.JumpTo(x + w / 2, z);
	cmpPosition.SetYRotation(Math.PI * 3 / 4);

	const cmpOwnership = Engine.QueryInterface(ent, IID_Ownership);
	if (cmpOwnership)
		cmpOwnership.SetOwner(1);

	x += w + gap;
	maxh = Math.max(maxh, h);
}
