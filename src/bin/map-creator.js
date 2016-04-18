import _ from 'lodash';
import { createPlayer, createEnemy } from './entity-creator';
import makeGrid from './grid';

import { GRID_HEIGHT, GRID_WIDTH, ROOM_SIZE_RANGE, STARTING_ROOM_POSITION } from '../constants/settings';

export default () => {

  let createRandomRoom = (coords = STARTING_ROOM_POSITION, sizeRange = ROOM_SIZE_RANGE, level = 1) => {
    let [a,b] = sizeRange;
    let [x,y] = coords;
    return {
      height: _.random(a,b),
      width: _.random(a,b),
      x,
      y
    }
  }

  let placeRoom = (room) => {
    //this function puts a new room in to the world, checks if the world is
    //still valid and then replaces the old world with the new one if it is

    //don't place the room if it is outside the boundaries of the world
    if (room.y < 0 || room.y + room.height > world.length){
      return;
    }
    if (room.x < 0 || room.x + room.width > world[0].length){
      return;
    }

    let tempWorld = _.cloneDeep(world);
    //attempt to build up the room on to a clone of the world

    let x = room.x -1; //deduct one for the first loop
    for (let i = 0; i < room.width; i++){
      x++;
      let y = room.y -1;  //deduct one for the first loop
      for (let j = 0; j < room.height; j++){
        y++;
        //if the coord already has a room, break out of this function and
        //don't overwrite the existing world.
        // Otherwise place a cell.
        if (tempWorld[y][x]){
          return;
        } else {
          tempWorld[y][x] = { type: 'floor'};
        }
      }
    }

    if (room.door){
      tempWorld[room.door.y][room.door.x] = { type: 'door' };
    }

      world = tempWorld;
      roomCounter++
      seedRooms.push(room);
  }

  let roomPlacer = (startingRoom) => {
    //try east wall
    let room = createRandomRoom();
    room.y = _.random(startingRoom.y, startingRoom.height + startingRoom.y - 1);
    room.x = startingRoom.x + startingRoom.width + 1;
    room.door = {
      y: _.random(room.y, (Math.min(room.y + room.height, startingRoom.y + startingRoom.height)) - 1),
      x: room.x - 1
    };
    placeRoom(room);
    //from west wall
    room = createRandomRoom();
    room.y = _.random(startingRoom.y, startingRoom.height + startingRoom.y - 1);
    room.x = startingRoom.x - room.width - 1;
    room.door = {
      y: _.random(room.y, (Math.min(room.y + room.height, startingRoom.y + startingRoom.height)) - 1),
      x: startingRoom.x - 1
    }
    placeRoom(room);
    //from south wall
    room = createRandomRoom();
    room.y = startingRoom.y + startingRoom.height + 1;
    room.x = _.random(startingRoom.x, startingRoom.width + startingRoom.x - 1);
    room.door = {
      y: startingRoom.y + startingRoom.height,
      x: _.random(room.x, (Math.min(room.x + room.width, startingRoom.x + startingRoom.width)) - 1)
    }
    placeRoom(room);
    //from north wall
    room = createRandomRoom();
    room.y = startingRoom.y - room.height - 1;
    room.x = _.random(startingRoom.x, startingRoom.width + startingRoom.x - 1);
    room.door = {
      y: startingRoom.y - 1,
      x: _.random(room.x, (Math.min(room.x + room.width, startingRoom.x + startingRoom.width)) - 1)
    }
    placeRoom(room);
  }

  let seedRooms = [];
  let roomCounter = 0;
  let world = makeGrid(GRID_HEIGHT,GRID_WIDTH);
  placeRoom(createRandomRoom());

  while(roomCounter < 15  && seedRooms.length > 0){
    roomPlacer(seedRooms.pop());
  }

  //set starting player posiiton
  world[STARTING_ROOM_POSITION[1] + 2][STARTING_ROOM_POSITION[0] + 2] = createPlayer();

  let enemies = [];
  for (let i = 0; i < 5; i++) {
    enemies.push(createEnemy());
  }

  while(enemies.length){
    let x = [Math.floor(Math.random()*GRID_WIDTH)]
    let y = [Math.floor(Math.random()*GRID_HEIGHT)]
    if (world[y][x].type === 'floor') {
      world[y][x] = enemies.pop();
    }
  }


return world
}