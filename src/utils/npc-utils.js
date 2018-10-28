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
		const npcsAroundMe = [];
		entitiesBesideMe.map(entities => {
			const group = entities.filter(entity => entity.type === "npc");
			if (group && group.length > 0) {
				group.map( npc => npcsAroundMe.push(npc) )
			}
		});
		return npcsAroundMe;
	} else {
		return null; // no one is beside me
	}

}
