export function getNPCsAroundMe(entities) {

	const entitiesBesideMe = [];
	let aroundMe = '';
	let iconClass = 'floor';
	const npcs = [];
	entities.map(row => {
		const closeByEntities = row.filter( entity => entity.distanceFromPlayer <= 2);

		row.filter( entity => {
			if (entity.type === "npc") {
				console.log("hey npc: ", entity);
			}
		});

		if (closeByEntities.length > 0) entitiesBesideMe.push(closeByEntities)

	});
// sets make unique
	console.log("beside me:" , entitiesBesideMe)

	if (entitiesBesideMe.length > 0) {
		entitiesBesideMe.map(entities => {
			return entities.filter(entity => entity.type === "npc");
		});
	} else {
		return null; // no one is beside me
	}

}
