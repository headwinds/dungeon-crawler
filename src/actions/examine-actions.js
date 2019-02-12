import * as t from '../constants/action-types';

export function lookAround(entities) {

	const entitiesBesideMe = [];
	let aroundMe = '';
	let iconClass = 'floor';
	// const npcs = [];
	entities.map(row => {
		const closeByEntities = row.filter( entity => entity.distanceFromPlayer <= 2);

		row.filter( entity => {
			if (entity.type === "npc") {
				console.log("hey npc: ", entity);
			}
		});

		if (closeByEntities.length > 0) entitiesBesideMe.push(closeByEntities)

		return row;

	});
// sets make unique
	console.log("beside me:" , entitiesBesideMe)

	if (entitiesBesideMe.length > 0) {

		entitiesBesideMe.map(entities => {
			entities.map( entity => {
				const type = (entity.type === 0) ? "wall" : entity.type;
				if (type !== "floor" && type !== "wall") {
					let about = '';
					switch(entity.type) {
						case "weapon" :
							about = " " + entity.name + " +" + entity.damage;
							iconClass = entity.type;
							break;
						case "shield" :
							about = " " + entity.name + " +" + entity.protection;
							iconClass = entity.type;
							break;
						case "boss" :
						case "enemy" :
								about = " " + entity.name + " lvl " + entity.level + " health " + entity.health;
								iconClass = entity.type;
								break;
						case "exit" :
							about = " Stairs leading down ";
							iconClass = entity.type;
							break;
						case "npc" :
								about = " " + entity.profession + " " + entity.name;
								iconClass = entity.type;
								break;
						case "potion" :
								about = " Health Potion ";
								iconClass = entity.type;
								break;
						default:
								about = " Health Potion ";
								iconClass = entity.type;
								break;	
					}
					aroundMe += about;
				}
			})
		})
	}

	console.log("iconClass: ", iconClass)

	if (aroundMe === '') {
		aroundMe = "not much to see here";
		iconClass = 'floor';
	}

	const action = "Look";

	const payload = {action, aroundMe, iconClass};
	return {
		type: t.LOOK_AROUND,
		payload
	};
}
