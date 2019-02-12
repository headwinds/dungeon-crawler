export function getEntitiesAroundMe(entities, type) {

	const entitiesBesideMe = [];

	entities.map(row => {
		const closeByEntities = row.filter( entity => entity.distanceFromPlayer <= 2);

		row.filter( entity => {
			if (entity.type === type) {

			}
		});

		if (closeByEntities.length > 0) entitiesBesideMe.push(closeByEntities)

	});

	if (entitiesBesideMe.length > 0) {
		const entitiesAroundMe = [];
		entitiesBesideMe.map(entities => {
			const group = entities.filter(entity => entity.type === type);
			if (group && group.length > 0) {
				group.map( type => entitiesAroundMe.push(type) )
			}
		});
		return entitiesAroundMe;
	} else {
		return null; // nothing is beside me
	}

}