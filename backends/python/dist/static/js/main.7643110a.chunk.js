(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(83)},80:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),i=n.n(o),c=n(4),l=n(16),s=n(10),u=n(32),d=n(33),p=n(12),h=n(13),m=n(1),y=n(34),v=n.n(y),f="ADD_GOLD",g="REMOVE_GOLD",O="ADD_SILVER",E="REMOVE_SILVER",b="ADD_COPPER",T="REMOVE_COPPER",k="ADD_WEAPON",w="ADD_SHIELD",_="ADD_XP",C="CHANGE_ENTITY",P="CHANGE_PLAYER_POSITION",j="CREATE_LEVEL",I="MODIFY_HEALTH",M="NEW_MESSAGE",L="PLAYER_BOUGHT_ITEM",A="PLAYER_SOLD_ITEM",N="PLAYER_TRADE_SUCCESS",R="PLAYER_TRADE_FAIL",D="TALK_TO_NPC",S="RESTART",x="TOGGLE_FOG_MODE",G="LOOK_AROUND",H="RESET_DUNGEON",V="SET_END_GAME",Y="UPDATE_DUNGEON",U="SET_DUNGEON_LEVEL",B="TOGGLE_NPC_STORE",K="NPC_SOLD_ITEM",W=[{id:0,name:"Bellwoods",exits:1,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:1,name:"Bellwoods",exits:2,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:2,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:3,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:4,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"}],F={entities:[[]],dungeonLevel:0,dungeonTransit:0,dungeon:Object(m.a)({},W[0]),playerPosition:[],endGame:"unknown"},z={health:100,xp:100,gold:0,currency:{gold:0,silver:0,copper:500},weapon:{name:"Fist",damage:100},shield:{name:"Pants",protection:1},examining:{iconClass:"floor",title:"",action:"Look",aroundMe:"press l to look around"},inventory:[],npcsAroundMe:[]},q=n(14),X={TIPS_ALONG_BOTTOM:!1,GAME_SHOW_TITLE:!1,VP_TYPE:"full",FOG_MODE:!1,GAME_TITLE:"Cabin Quest",GAME_SUBTITLE:" explore time between city and country",GAME_URL:"https://cabinquest.now.sh",MAX_INVENTORY_ITEMS:6,BACKEND:"python"},$={VP_WIDTH_RATIO_CONTAINED:30,VP_HEIGHT_RATIO_CONTAINED:21,VP_HEIGHT_RATIO_FULL:1,VP_WIDTH_RATIO_FULL:1,FULL_GRID_RATIO_WIDTH:24,FULL_GRID_RATIO_HEIGHT:19,VP_TYPE:X.VP_TYPE,GAME_TITLE:X.GAME_TITLE,GAME_SUBTITLE:X.GAME_SUBTITLE,GAME_SHOW_TITLE:X.GAME_SHOW_TITLE,TIPS_ALONG_BOTTOM:X.TIPS_ALONG_BOTTOM,FOG_MODE:X.FOG_MODE,CURRENCY_GOLD_LABEL:"Gold",CURRENCY_SILVER_LABEL:"Silver",CURRENCY_COPPER_LABEL:"Copper",GAME_URL:X.GAME_URL,MAX_INVENTORY_ITEMS:X.MAX_INVENTORY_ITEMS,BACKEND:X.BACKEND},J={fogMode:$.FOG_MODE,messages:[],showNPCStore:!1},Z=Object(l.combineReducers)({grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:var r=Object(h.a)(a.coords,2),o=r[0],i=r[1],c=v()(e.entities,Object(p.a)({},i,Object(p.a)({},o,{$set:a.entity})));return Object(m.a)({},e,{entities:c});case P:return Object(m.a)({},e,{playerPosition:a});case V:return Object(m.a)({},e,{endGame:a});case j:return Object(m.a)({},e,{playerPosition:a.playerPosition,entities:a.entities});case Y:return Object(m.a)({},e,{dungeon:a});case U:return Object(m.a)({},e,{dungeonLevel:a.level,dungeon:W[a.level-1],dungeonTransit:a.transit});case H:return Object(m.a)({},e,{dungeonLevel:0,dungeon:W[0]});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=e.currency;switch(n){case D:return Object(m.a)({},e,{npcsAroundMe:a.npcsAroundMe});case L:case A:return Object(m.a)({},e,{currency:a.currency,inventory:a.inventory});case f:case g:return Object(m.a)({},e,{currency:Object(m.a)({},r,{gold:a})});case O:case E:return Object(m.a)({},e,{currency:Object(m.a)({},r,{silver:a})});case b:case T:return Object(m.a)({},e,{currency:Object(m.a)({},r,{copper:a})});case k:return Object(m.a)({},e,{weapon:a});case w:return Object(m.a)({},e,{shield:a});case _:return Object(m.a)({},e,{xp:e.xp+a});case I:return Object(m.a)({},e,{health:a});case S:return z;case G:var o=e.examining;return Object(m.a)({},e,{examining:Object(m.a)({},o,a)});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case M:return Object(m.a)({},e,{messages:[].concat(Object(q.a)(e.messages),[a])});case x:return Object(m.a)({},e,{fogMode:!e.fogMode});case B:return Object(m.a)({},e,{fogMode:!e.showNPCStore});case S:return J;default:return e}}}),Q=n(5),ee=n(6),te=n(9),ne=n(7),ae=n(8),re=n(3),oe=function(e){var t=e.item,n=e.handleMouseOver,a=e.handleMouseOut,o=e.handleClick;return console.log("item render: ",t),r.a.createElement("div",{onMouseOver:n,onMouseOut:a,onClick:o,className:t.type,style:{display:"block",position:"relative",border:"1px solid #333",margin:5,width:25,height:25}})},ie=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={isOpen:!1},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"toggleOpen",value:function(){var e=!this.state.isOpen;this.setState({isOpen:e})}},{key:"handleMouseOver",value:function(){}},{key:"handleMouseOut",value:function(){}},{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return r.a.createElement(oe,{key:n,item:t,handleMouseOver:e.handleMouseOver,handleMouseOut:e.handleMouseOver,handleClick:e.handleClick})});return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},t)}},{key:"handleKeyPress",value:function(e){switch(console.log("keyCode: ",e.keyCode),e.keyCode){case 73:this.toggleOpen();break;default:return}}}]),t}(a.Component),ce=Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(ie),le=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={isOpen:!1},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"toggleOpen",value:function(){var e=!this.state.isOpen;this.setState({isOpen:e})}},{key:"handleMouseOver",value:function(){}},{key:"handleMouseOut",value:function(){}},{key:"handleEquipClick",value:function(e){}},{key:"handleDiscardClick",value:function(e){}},{key:"handleTradeClick",value:function(e){}},{key:"handleCraftClick",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",null)}},{key:"handleKeyPress",value:function(e){switch(console.log("keyCode: ",e.keyCode),e.keyCode){case 73:break;default:return}}}]),t}(a.Component),se=(Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(le),function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={itemSelected:null},e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handleItemSelected",value:function(){}},{key:"render",value:function(){var e=this.props.player;return console.log("Backpack render: ",e.inventory),r.a.createElement("div",{className:"panel"},r.a.createElement(ce,{items:e.inventory,handleItemSelected:this.handleItemSelected}))}}]),t}(a.Component)),ue=Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(se),de=n(2),pe=n.n(de);function he(e){return{type:O,payload:e}}function me(e){return{type:b,payload:e}}function ye(e,t){switch(t.level){case 1:return me(10+e.currency.copper);case 2:return me(10+e.currency.copper),he(1+e.currency.silver);case 2:return me(100+e.currency.copper),he(5+e.currency.silver);case 3:return me(25+e.currency.copper),he(10+e.currency.silver);case 4:return me(5+e.currency.copper),he(100+e.currency.silver),n=1+e.currency.gold,{type:f,payload:n};default:return me(10+e.currency.copper)}var n}var ve,fe,ge="full"===$.VP_TYPE?Math.floor(window.innerWidth/$.FULL_GRID_RATIO_WIDTH):80,Oe="full"===$.VP_TYPE?Math.floor(window.innerHeight/$.FULL_GRID_RATIO_HEIGHT):60,Ee=ge,be=Oe,Te="full"===$.VP_TYPE?25:15,ke=[7,12],we=function(){for(var e=function(e,t){for(var n=t.x,a=t.y,r=t.width,o=void 0===r?1:r,i=t.height,c=void 0===i?1:i,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"floor",s=a;s<a+c;s++)for(var u=n;u<n+o;u++)e[s][u]={type:l};return e},t=[],n=0;n<be;n++){t.push([]);for(var a=0;a<Ee;a++)t[n].push({type:0,opacity:pe.a.random(.3,.8)})}var r=Object(h.a)(ke,2),o=r[0],i=r[1],c={x:pe.a.random(1,Ee-i-15),y:pe.a.random(1,be-i-15),height:pe.a.random(o,i),width:pe.a.random(o,i)};return function t(n,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Te;return r+a.length>o||!a.length?n:(n=function(t,n){var a=n.x,r=n.y,o=n.width,i=n.height,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ke,l=Object(h.a)(c,2),s=l[0],u=l[1],d=[],p={height:pe.a.random(s,u),width:pe.a.random(s,u)};p.x=pe.a.random(a,a+o-1),p.y=r-p.height-1,p.doorx=pe.a.random(p.x,Math.min(p.x+p.width,a+o)-1),p.doory=r-1,d.push(p);var m={height:pe.a.random(s,u),width:pe.a.random(s,u)};m.x=a+o+1,m.y=pe.a.random(r,i+r-1),m.doorx=m.x-1,m.doory=pe.a.random(m.y,Math.min(m.y+m.height,r+i)-1),d.push(m);var y={height:pe.a.random(s,u),width:pe.a.random(s,u)};y.x=pe.a.random(a,o+a-1),y.y=r+i+1,y.doorx=pe.a.random(y.x,Math.min(y.x+y.width,a+o)-1),y.doory=r+i,d.push(y);var v={height:pe.a.random(s,u),width:pe.a.random(s,u)};v.x=a-v.width-1,v.y=pe.a.random(r,i+r-1),v.doorx=a-1,v.doory=pe.a.random(v.y,Math.min(v.y+v.height,r+i)-1),d.push(v);var f=[];return d.forEach(function(n){(function(e,t){var n=t.x,a=t.y,r=t.width,o=void 0===r?1:r,i=t.height,c=void 0===i?1:i;if(a<1||a+c>e.length-1)return!1;if(n<1||n+o>e[0].length-1)return!1;for(var l=a-1;l<a+c+1;l++)for(var s=n-1;s<n+o+1;s++)if("floor"===e[l][s].type)return!1;return!0})(t,n)&&(t=e(t,n),t=e(t,{x:n.doorx,y:n.doory},"door"),f.push(n))}),{grid:t,placedRooms:f}}(n,a.pop()),a.push.apply(a,Object(q.a)(n.placedRooms)),r+=n.placedRooms.length,t(n.grid,a,r))}(t=e(t,c),[c])},_e=[{name:"Big Stick",damage:10},{name:"Club",damage:15},{name:"Rusty Sword",damage:20},{name:"Butcher Knife",damage:25},{name:"Mace",damage:30},{name:"Flail",damage:35},{name:"Long Sword",damage:40},{name:"Broad Sword",damage:50}],Ce=[{name:"Hat",protection:1,type:"shield"},{name:"Bracers",protection:5,type:"shield"},{name:"Rusty Shield",protection:10,type:"shield"},{name:"Wooden Shield",protection:12,type:"shield"},{name:"Leather Shield",protection:20,type:"shield"},{name:"Chain Shield",protection:25,type:"shield"},{name:"Plate Shield",protection:40,type:"shield"},{name:"Elven Shield",protection:50,type:"shield"}],Pe={1:"Rat",2:"Kobold",3:"Dark Elf",4:"Troll",5:"Boss"},je=[{type:"neutral",name:"Jack Rabbit",health:5,weapon:{name:"teeth",protection:1},armour:{name:"fur",protection:10},speed:1,accuracy:1,treaure:[{name:"pelt",cost:{gold:0,silver:0,copper:5}}]},{type:"neutral",name:"Cariboo",health:25,weapon:{name:"horns",damage:100},armour:{name:"fur",protection:10},speed:10,accuracy:10,treaure:[{name:"hide",cost:{gold:0,silver:0,copper:25}}]},{type:"neutral",name:"Buffalo",health:1225,weapon:{name:"horns",damage:100},armour:{name:"fur",protection:1},speed:10,accuracy:100,treaure:[{name:"hide",cost:{gold:1,silver:10,copper:25}}]}],Ie=[{name:"Health Potion",modifies:"health",by:10,type:"potion"}],Me=[{name:"Alspen",description:"",profession:"Trader",inventory:[(ve={name:"sword",cost:30},Object(p.a)(ve,"cost",{gold:0,silver:0,copper:30}),Object(p.a)(ve,"type","weapon"),ve),{name:"health potion",cost:{gold:0,silver:0,copper:30},type:"potion"},(fe={name:"shield",cost:30},Object(p.a)(fe,"cost",{gold:0,silver:0,copper:30}),Object(p.a)(fe,"type","shield"),fe)],type:"npc",portrait:"",selected:!1,greetings:["I have the best deals."]}],Le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[];4===t&&n.push({health:400,level:5,type:"boss"});for(var a=Me.filter(function(e){return"trader"===e.profession.toLowerCase()})[0],r=[],o=0;o<30;o++)r.push(Object(m.a)({},a));for(var i=[],c=0;c<7;c++)i.push({health:30*t+40,level:pe.a.random(t,pe.a.random(t-1?t-1:t,t+1)),type:"enemy",name:Pe[t]});for(var l=[],s=0;s<7;s++)l.push({health:30*t+40,level:pe.a.random(t,pe.a.random(t-1?t-1:t,t+1)),type:"neutral",name:je[t]});var u=[];t<4&&u.push({type:"exit"});for(var d=Ie.filter(function(e){return"health"===e.modifies})[0],p=[],h=0;h<5;h++)p.push(Object(m.a)({},d));for(var y=[],v=_e.filter(function(e){return e.damage<10*t+10}).filter(function(e){return e.damage>10*t-10}),f=0;f<3;f++){var g=Object.assign({},v[pe.a.random(0,v.length-1)]);g.type="weapon",y.push(g)}for(var O=[],E=Ce.filter(function(e){return e.protection<10*t+10}).filter(function(e){return e.protection>10*t-10}),b=0;b<3;b++){var T=Object.assign({},E[pe.a.random(0,E.length-1)]);T.type="shield",O.push(T)}var k=[];[p,i,l,y,O,u,[{type:"player"}],r,n].forEach(function(t){for(;t.length;){var n=Math.floor(Math.random()*Ee),a=Math.floor(Math.random()*be);"floor"===e[a][n].type&&("player"===t[0].type&&(k=[n,a]),e[a][n]=t.pop())}});for(var w=0;w<e.length;w++)for(var _=0;_<e[0].length;_++)"door"===e[w][_].type&&(e[w][_].type="floor");return{entities:e,playerPosition:k}};function Ae(e){return{type:_,payload:e}}function Ne(e,t){return{type:C,payload:{entity:e,coords:t}}}function Re(e){return{type:P,payload:e}}function De(e){return{type:j,payload:Le(we(),e)}}function Se(e){return{type:I,payload:e}}function xe(e){return{type:M,payload:e}}function Ge(){return{type:S}}function He(e,t){return{type:U,payload:{level:e,transit:t}}}function Ve(e){return{type:V,payload:e}}function Ye(){return{type:H}}var Ue=function(e){return function(t,n){var a=n(),r=a.grid,o=a.player,i=r.playerPosition.slice(0),c=Object(h.a)(i,2),l=c[0],u=c[1],d=Object(h.a)(e,2),p=d[0],y=d[1],v=[p+l,y+u],f=r.entities[u][l],g=r.entities[u+y][l+p],O=[];switch(g.type&&"enemy"!==g.type&&"boss"!==g.type&&("npc"===g.type?O.push(Ne(Object(m.a)({},g),[l,u]),Ne(f,v),Re(v)):O.push(Ne({type:"floor"},[l,u]),Ne(f,v),Re(v))),g.type){case"boss":case"enemy":var E=Math.floor(o.xp/100),b=Math.floor(o.weapon.damage*pe.a.random(1,1.3)*E);if(g.health-=b,g.health>0){var T=Math.floor(pe.a.random(4,7)*g.level)-o.shield.protection;if(O.push(Ne(g,v),Se(o.health-T),xe("FIGHT! You hurt the enemy with attack of [".concat(b,"].\tThe enemy hits back with an attack of [").concat(T,"].  Enemy has [").concat(g.health,"] health remaining."))),o.health-T<=0)return t(Se(0)),setTimeout(function(){return t(Ve("death"))},250),setTimeout(function(){return t(xe("YOU DIED"))},1e3),setTimeout(function(){return t(xe("Everything goes dark.."))},2e3),setTimeout(function(){return t(xe("You resolve to try harder next time"))},4e3),setTimeout(function(){return t(xe("The grid resets itself...."))},6e3),void setTimeout(function(){return t(Object(s.batchActions)([Ge(),De(1),Ye()]))},8e3)}g.health<=0&&("boss"===g.type?(O.push(Ae(10*g.level),ye(o,g),Ne({type:"floor"},[l,u]),Ne(f,v),Re(v),xe("VICTORY! Your attack of [".concat(b,"] is too powerful for the enemy, who dissolves before your very eyes."))),setTimeout(function(){return t(Ve("victory"))},250),setTimeout(function(){return t(xe("YOU DEFATED THE BOSS!"))},1e3),setTimeout(function(){return t(xe("The BOSS emits an almighty scream"))},2e3),setTimeout(function(){return t(xe("You bask momentarily in your glory"))},4e3),setTimeout(function(){return t(xe("The grid resets itself...."))},6e3),setTimeout(function(){return t(Object(s.batchActions)([Ge(),De(1),Ye()]))},8e3)):(O.push(Ae(10*g.level),ye(o,g),Ne({type:"floor"},[l,u]),Ne(f,v),Re(v),xe("VICTORY! Your attack of [".concat(b,"] is too powerful for the enemy, who dissolves before your very eyes."))),setTimeout(function(){return t(xe("You gain 10XP and feel yourself growing stronger.."))},2500),(o.xp+10)%100===0&&setTimeout(function(){return t(xe("LEVEL UP!"))},5e3)));break;case"exit":if(r.dungeon.exitsComplete===r.dungeon.exits)setTimeout(function(){return t(Object(s.batchActions)([He(r.dungeonLevel+1,r.dungeonLevel+1),De(r.dungeonLevel+1)]))},3e3),O.push(xe("The cells start to shift... you transit to zone ".concat(r.dungeonLevel+1))),setTimeout(function(){return t(He(r.dungeonLevel+1,"transit-".concat(r.dungeonLevel+1)))},250);else{var _=r.dungeon,C=Object(m.a)({},_,{exitsComplete:_.exitsComplete+1});O.push(xe("You enter the tunnel and pass into the next zone")),setTimeout(function(){return t(Object(s.batchActions)([(e=C,{type:Y,payload:e}),De(r.dungeonLevel)]));var e},250)}break;case"potion":"health"===g.modifies&&O.push(Se(o.health+g.by),xe("You drink a potion for [".concat(g.modifies,"] health")));break;case"weapon":O.push({type:k,payload:g},xe("You pick up a ".concat(g.name)));break;case"shield":O.push(function(e){return{type:w,payload:e}}(g),xe("You pick up a ".concat(g.name)))}t(Object(s.batchActions)(O))}};var Be=function(e){var t=e.cell,n=e.distance,a=e.visible,o=(e.zone,e.transit),i=t.opacity;return a&&n>10?i=0:0!==t.type&&(i=1),r.a.createElement("div",{className:t.type?"".concat(t.type," cell"):"back-".concat(o," cell"),style:{opacity:i}})};function Ke(e){return console.log("getCreditsAsCopper ",e),100*e.currency.gold+10*e.currency.silver+e.currency.copper}function We(){return{type:R}}function Fe(e,t,n){return function(a,r){var o=[];if(console.log("max ",$.MAX_INVENTORY_ITEMS),console.log("max vs",t.inventory.length),t.inventory.length>=$.MAX_INVENTORY_ITEMS)return o.push(We(),xe("You have no room for it!")),a(Object(s.batchActions)(o));var i=Ke(t),c=Ke(e);if(i>c){var l=function(e){var t=Math.floor(e/100),n=e%100,a=Math.floor(n/10);return{gold:t,silver:a,copper:a%10}}(i-c),u=[].concat(Object(q.a)(t.inventory),[e]);o.push(function(e,t){return{type:K,payload:{item:e,npc:t}}}(n,e),{type:L,payload:{inventory:u,currency:l}});var d=r().player;d.inventory.length<6?[].concat(Object(q.a)(d.inventory),[e]):Object(q.a)(d.inventory);o.push({type:N},xe("You bought a [".concat(e.name,"].")))}else{var p="Rats! You can't afford it - you're short ".concat(c-i," copper.");o.push(We(),xe(p))}return a(Object(s.batchActions)(o))}}var ze=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.cellProps,t=e.key,n=e.cell,a=e.distance,o=e.zone,i=e.transit,c=e.visible;return r.a.createElement(Be,{key:t,cell:n,distance:a,zone:o,transit:i,visible:c})}},{key:"handleKeyPress",value:function(e){switch(console.log("code:",e.keyCode),e.keyCode){case 76:this.props.lookAround(this.props.grid.entities);break;case 84:var t=function(e){var t=[];if(e.map(function(e){var n=e.filter(function(e){return e.distanceFromPlayer<=2});e.filter(function(e){e.type}),n.length>0&&t.push(n)}),t.length>0){var n=[];return t.map(function(e){var t=e.filter(function(e){return"npc"===e.type});t&&t.length>0&&t.map(function(e){return n.push(e)})}),n}return null}(this.props.grid.entities);t.length>0&&this.props.talkToNPC(t);break;case 72:break;default:return}}}]),t}(a.Component),qe=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{lookAround:function(t){return e(function(e){var t=[],n="",a="floor";return e.map(function(e){var n=e.filter(function(e){return e.distanceFromPlayer<=2});e.filter(function(e){"npc"===e.type&&console.log("hey npc: ",e)}),n.length>0&&t.push(n)}),console.log("beside me:",t),t.length>0&&t.map(function(e){e.map(function(e){var t=0===e.type?"wall":e.type;if("floor"!==t&&"wall"!==t){var r="";switch(e.type){case"weapon":r=" "+e.name+" +"+e.damage,a=e.type;break;case"shield":r=" "+e.name+" +"+e.protection,a=e.type;break;case"boss":case"enemy":r=" "+e.name+" lvl "+e.level+" health "+e.health,a=e.type;break;case"exit":r=" Stairs leading down ",a=e.type;break;case"npc":r=" "+e.profession+" "+e.name,a=e.type;break;case"potion":r=" Health Potion ",a=e.type}n+=r}})}),console.log("iconClass: ",a),""===n&&(n="not much to see here",a="floor"),{type:G,payload:{action:"Look",aroundMe:n,iconClass:a}}}(t))},talkToNPC:function(t){return e(function(e){return{type:D,payload:{npcsAroundMe:e}}}(t))}}})(ze),Xe=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={viewportWidth:0,viewportHeight:0},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e.handleResize=e.handleResize.bind(Object(re.a)(Object(re.a)(e))),e.VP_HEIGHT_OFFSET=5,e.VP_MINIMUM_HEIGHT=22,e.VP_WIDTH_RATIO="full"===$.VP_TYPE?$.VP_WIDTH_RATIO_FULL:$.VP_WIDTH_RATIO_CONTAINED,e.VP_HEIGHT_RATIO="full"===$.VP_TYPE?$.VP_HEIGHT_RATIO_FULL:$.VP_HEIGHT_RATIO_CONTAINED,e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentWillMount",value:function(){var e=window.innerWidth/this.VP_WIDTH_RATIO,t=Math.max(this.VP_MINIMUM_HEIGHT,window.innerHeight/this.VP_HEIGHT_RATIO-this.VP_HEIGHT_OFFSET);this.setState({viewportWidth:e,viewportHeight:t}),this.props.createLevel(),this.props.setDungeonLevel(1,1)}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",pe.a.throttle(this.handleKeyPress,100)),window.addEventListener("resize",pe.a.debounce(this.handleResize,500)),this.props.triggerOpeningMessages()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",pe.a.throttle(this.handleKeyPress,100)),window.removeEventListener("resize",pe.a.debounce(this.handleResize,500))}},{key:"handleKeyPress",value:function(e){if("number"===typeof this.props.grid.dungeonLevel)switch(e.keyCode){case 38:case 87:this.props.playerInput([0,-1]);break;case 39:case 68:this.props.playerInput([1,0]);break;case 40:case 83:this.props.playerInput([0,1]);break;case 37:case 65:this.props.playerInput([-1,0]);break;default:return}}},{key:"handleResize",value:function(e){var t=e.target.innerWidth/this.VP_WIDTH_RATIO,n=Math.max(this.VP_MINIMUM_HEIGHT,e.target.innerHeight/this.VP_HEIGHT_RATIO-this.VP_HEIGHT_OFFSET);this.setState({viewportWidth:t,viewportHeight:n})}},{key:"render",value:function(){var e=this,t=this.state.viewportHeight-this.state.viewportHeight%2,n=this.state.viewportWidth-this.state.viewportWidth%2,a=this.props.grid.entities,o=Object(h.a)(this.props.grid.playerPosition,2),i=o[0],c=o[1],l=pe.a.clamp(c-t/2,0,a.length-t),s=Math.max(i+n/2,n),u=Math.max(c+t/2,t),d=pe.a.clamp(i-n/2,0,a[0].length-n),p=a.map(function(e,t){return e.map(function(e,n){var a=Math.abs(c-t)+Math.abs(i-n);return e.distanceFromPlayer=a,e})}).filter(function(e,t){return t>=l&&t<u}).map(function(t,n){return r.a.createElement("div",{key:n,className:"row"},t.filter(function(e,t){return t>=d&&t<s}).map(function(t,n){if("player"===t.type){var a={key:n,cell:t,distance:t.distanceFromPlayer,zone:e.props.grid.dungeonLevel,transit:e.props.grid.dungeonTransit,visible:e.props.fogMode};return r.a.createElement(qe,{key:n,cellProps:a})}return r.a.createElement(Be,{key:n,cell:t,distance:t.distanceFromPlayer,zone:e.props.grid.dungeonLevel,transit:e.props.grid.dungeonTransit,visible:e.props.fogMode})}))});return r.a.createElement("div",{className:"grid-wrapper"},p)}}]),t}(a.Component),$e=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{playerInput:function(t){return e(Ue(t))},createLevel:function(){return e(De())},setDungeonLevel:function(t,n){return e(He(t,n))},triggerOpeningMessages:function(){return e(function(e){e(xe("Welcome to The Grid...")),setTimeout(function(){e(xe("You find yourself in a world filled with strange cells"))},3e3),setTimeout(function(){e(xe("'Hmm... there must be a way out of here..'"))},6e3)})}}})(Xe),Je=function(e){var t=e.level,n="full"===$.VP_TYPE?"strip_fullscreen":"strip",a=$.GAME_SHOW_TITLE?{display:"flex"}:{display:"none"};return r.a.createElement("div",{className:n,style:a},r.a.createElement("h1",null,r.a.createElement("span",{className:"title title-".concat(t)},$.GAME_TITLE)," ",$.GAME_SUBTITLE))},Ze=Object(c.connect)(function(e){return{messages:e.ui.messages}})(function(e){var t=e.messages;return r.a.createElement("div",{className:"panel messages"},r.a.createElement("ul",null,t.slice(-3).map(function(e,t){return r.a.createElement("li",{key:t},e)})))}),Qe=function(e){var t=e.item,n=(e.handleMouseOver,e.handleMouseOut,e.handleClick),a=e.scope;return console.log("item render: ",t),r.a.createElement("div",Object(p.a)({className:t.type,onClick:function(){return n(t,a)}},"className","selectItem"),r.a.createElement("div",null,t.name),r.a.createElement("div",null,function(e){return 0===e.cost.gold?0===e.cost.copper?"$"+e.cost.silver+" silver":"$"+e.cost.silver+" silver "+e.cost.copper+" copper":0===e.cost.silver?"$"+e.cost.copper+" copper":0===e.cost.silver&&0===e.cost.copper?"$"+e.cost.gold+" gold":0===e.cost.silver?"$"+e.cost.gold+" gold "+e.cost.copper+" copper":"$"+e.cost.gold+" gold "+e.cost.silver+" silver "+e.cost.copper+" copper"}(t)))},et={display:"flex",flexDireciton:"row",justifyContent:"space-between"},tt=function(e){function t(e){var n;Object(Q.a)(this,t),n=Object(te.a)(this,Object(ne.a)(t).call(this,e)),console.log("store ",n.props);var a=Math.floor(Math.random()*n.props.storeOwner.greetings.length);return n.state={conversation:n.props.storeOwner.greetings[a],items:n.props.storeOwner.inventory,selectedItem:null,storeOwner:n.props.storeOwner},n.handleKeyPress=n.handleKeyPress.bind(Object(re.a)(Object(re.a)(n))),n}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleSelectItemClick",value:function(e,t){var n=t;console.log("handleSelectItemClick self ",n),n.setState({selectedItem:e})}},{key:"handleKeyPress",value:function(e){}},{key:"handleBuyItemClick",value:function(){if(console.log("buy item"),null!==this.state.selectedItem){var e=this.props.player,t=this.state.selectedNPC,n=Object(m.a)({},this.state.selectedItem,{currency:this.state.selectedItem.cost});this.props.tradeItem(n,e,t)}}},{key:"render",value:function(){var e=this,t=this.props;t.npc,t.player;return r.a.createElement("div",null,r.a.createElement("div",{style:et},r.a.createElement("div",null,this.state.storeOwner.name)),r.a.createElement("div",null,this.state.conversation),r.a.createElement("div",null,r.a.createElement("div",{style:et},e.state.items.map(function(t,n){return r.a.createElement(Qe,{item:t,key:n,handleClick:e.handleSelectItemClick,scope:e})}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"npcStoreButton",onClick:function(){return e.handleBuyItemClick()}},"Buy"))))}}]),t}(a.Component),nt=Object(c.connect)(function(e){return{grid:e.grid,player:e.player}},function(e){return{tradeItem:function(t,n,a){return e(Fe(t,n,a))},newMessage:function(t){return e(xe(t))}}})(tt),at=[{name:"sword",cost:30,currency:"copper"},{name:"health potion",cost:30,currency:"copper"},{name:"shield",cost:30,currency:"copper"}],rt=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={conversation:"conversational text here...",items:at,selectedItem:at[0],npcs:[],selectedNPC:null},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(e){window.addEventListener("keydown",this.handleKeyPress),console.log("npc-store componentDidUpdate",e),e.player.npcsAroundMe}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"componentWillReceiveProps",value:function(e){console.log("npc-store componentDidReceiveProps",e)}},{key:"handleItemClick",value:function(e){}},{key:"handleKeyPress",value:function(e){}},{key:"handleSelectNPC",value:function(e){this.setState({selectedNPC:e})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.npc,t.player);return r.a.createElement("div",{className:"panel"},function(){if(n.npcsAroundMe.length>0&&null===e.state.selectedNPC){var t=n.npcsAroundMe.map(function(t,n){return r.a.createElement("div",{key:n,className:"selectItem",onClick:function(){return e.handleSelectNPC(t)}},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("p",null,t.name)))});return r.a.createElement("div",null,r.a.createElement("div",null,"Who would you like to speak to?"),t)}return null}(),function(){if(null!==e.state.selectedNPC){var t=e.state.selectedNPC;return console.log("owner: ",t),console.log("this.state: ",e.state),r.a.createElement(nt,{storeOwner:t})}}())}}]),t}(a.Component),ot=Object(c.connect)(function(e){return{grid:e.grid,player:e.player}},function(e){return{}})(rt),it=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.fogMode,n=e.restartGame,a=e.toggleFogMode;return r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"score-item"},r.a.createElement("input",{onChange:a,id:"toggle",type:"checkbox",checked:t}),r.a.createElement("label",{htmlFor:"toggle"},"Toggle fog mode")),r.a.createElement("div",{className:"score-item"},r.a.createElement("div",{onClick:n,className:"restart-btn"}),r.a.createElement("span",{onClick:n,className:"setting-label"},"Restart")))}},{key:"handleKeyPress",value:function(e){switch(e.keyCode){case 70:this.props.toggleFogMode();break;case 82:this.props.restartGame();break;default:return}}}]),t}(a.Component),ct=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{toggleFogMode:function(){return e({type:x})},restartGame:function(){return e(function(e){e(xe("The grid resets itself....")),setTimeout(function(){return e(Object(s.batchActions)([Ge(),De(1),Ye()]))},1e3)})}}})(it),lt=function(e){var t=e.iconClass,n=e.title,a=e.value;return r.a.createElement("div",{className:"score-item"},r.a.createElement("div",{className:"icon cell ".concat(t)}),r.a.createElement("span",{className:"score-label"},"".concat(n,": ").concat(a)))},st=function(e){var t=e.grid,n=e.player,a="full"===$.VP_TYPE?"panel_fullscreen":"panel",o="".concat(a," scoreboard");return r.a.createElement("div",{className:o},r.a.createElement(lt,{iconClass:"potion",title:"Health",value:n.health}),r.a.createElement(lt,{iconClass:"back-".concat(t.dungeonLevel),title:"Zone",value:"".concat(t.dungeonLevel," - ").concat(t.dungeon.exitsComplete)}),r.a.createElement(lt,{iconClass:"weapon",title:"Weapon",value:"".concat(n.weapon.name," (+").concat(n.weapon.damage,")")}),r.a.createElement(lt,{iconClass:"shield",title:"Amour",value:"".concat(n.shield.name," (+").concat(n.shield.protection,")")}),r.a.createElement(lt,{iconClass:"gold",title:$.CURRENCY_GOLD_LABEL,value:"".concat(n.currency.gold)}),r.a.createElement(lt,{iconClass:"silver",title:$.CURRENCY_SILVER_LABEL,value:"".concat(n.currency.silver)}),r.a.createElement(lt,{iconClass:"copper",title:$.CURRENCY_COPPER_LABEL,value:"".concat(n.currency.copper)}),r.a.createElement(lt,{iconClass:"player",title:"Level",value:Math.floor(n.xp/100)}),r.a.createElement(lt,{iconClass:"triangle",title:"XP to level up",value:100-n.xp%100}),r.a.createElement(lt,{iconClass:n.examining.iconClass,title:n.examining.action,value:n.examining.aroundMe}))},ut=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={tips:["Use WASD or arrow keys to move","Press L to look at tiles around you","Defeat the Boss in Zone 4 to win","Toggle Fog Mode with the 'F' key","Restart the game with the 'R' key","Defeat enemies to increase your XP","Level up to increase your damage","A new weapon might not be as good as your current one","Be sure to gain as much XP as you can in each zone"],displayIdx:0,intervalId:null},e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=1,n=setInterval(function(){t===e.state.tips.length&&(t=0),e.setState({displayIdx:t}),t++},1e4);this.setState({intervalId:n})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"tips"},r.a.createElement("p",null," Tip: ",this.state.tips[this.state.displayIdx]))}}]),t}(a.Component),dt=n(35),pt=n.n(dt),ht=function(e){function t(e){var n;return Object(Q.a)(this,t),(n=Object(te.a)(this,Object(ne.a)(t).call(this,e))).state={requiresAuthentication:"python"===$.BACKEND,authenticated:!1,greet:"",authenticateCheckComplete:!1},n}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){console.log("DungeonCrawler",this.state),this.state.requiresAuthentication&&this.handleTwitterLoginClick()}},{key:"handleTwitterLoginClick",value:function(){var e=this;console.log("handleTwitterLoginClick",this.state);var t,n,a=this,r="127.0.0.1"===document.domain?"http://127.0.0.1:5000/api/twitter/auth":"https://probe.now.sh/api/twitter/auth";pt.a.get(r).then(function(e){console.log("Twitter response: ",e.data),e.data.screen_name&&(t=!0,n=e.data.screen_name+", shall we begin?")}).catch(function(a){console.log("Twitter error: ",a),e.errored=a,n="",t=!1}).finally(function(){!0,a.setState({authenticated:t,greet:n,authenticateCheckComplete:!0})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.grid,a=t.player,o="full"===$.VP_TYPE?"sidebar_fullscreen":"sidebar",i="full"===$.VP_TYPE?"app_fullscreen":"app";return console.log("config: ",$.BACKEND),r.a.createElement("div",null,r.a.createElement(Je,{level:n.dungeonLevel}),r.a.createElement("div",{id:i},r.a.createElement($e,null),r.a.createElement("div",{className:o},e.state.requiresAuthentication&&e.state.authenticateCheckComplete&&!e.state.authenticated?r.a.createElement("div",{className:"signinContainer",style:{margin:20}},r.a.createElement("a",{href:"/api/twitter/auth",style:{color:"white",textDecoration:"none",cursor:"pointer"}},"Signin with Twitter")):e.state.requiresAuthentication&&e.state.authenticateCheckComplete&&e.state.authenticated?r.a.createElement("div",{className:"signinContainer",style:{margin:20}},r.a.createElement("p",null,e.state.greet)):null,r.a.createElement("div",{className:"npcStore"},r.a.createElement(ot,null)),r.a.createElement("div",{className:"backpack"},r.a.createElement(ue,null)),r.a.createElement(st,{player:a,grid:n}),r.a.createElement(ct,null),r.a.createElement(Ze,null),$.TIPS_ALONG_BOTTOM?null:r.a.createElement(ut,null))),$.TIPS_ALONG_BOTTOM?r.a.createElement(ut,null):null)}}]),t}(a.Component),mt=Object(c.connect)(function(e){return{ui:e.ui,grid:e.grid,player:e.player}})(ht);n(80);var yt=Object(d.createLogger)({actionTransformer:function(e){return"BATCHING_REDUCER.BATCH"===e.type?(e.payload.type=e.payload.reduce(function(e,t){return(e?e+" => ":"")+t.type},""),e.payload):e}}),vt=Object(l.applyMiddleware)(u.a,yt)(l.createStore);i.a.render(r.a.createElement(c.Provider,{store:vt(Object(s.enableBatching)(Z))},r.a.createElement(mt,null)),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.7643110a.chunk.js.map