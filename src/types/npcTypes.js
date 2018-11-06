import weaponTypes from './weaponTypes';
import shieldTypes from './shieldTypes';
import potionTypes from './potionTypes';

const npcTypes = [
  {
    name: 'Alspen',
    description: '',
    profession: 'Trader',
    inventory: [{name: "rusty sword", cost: { gold: 0, silver: 0, copper: 30}}],
    type: 'npc',
    greetings: ["I have the best deals."]
  },
];

export default npcTypes;
