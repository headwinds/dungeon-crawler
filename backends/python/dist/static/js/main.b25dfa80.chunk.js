(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(84)},81:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o),c=n(4),l=n(17),s=n(11),u=n(33),d=n(34),p=n(13),h=n(14),m=n(1),y=n(35),f=n.n(y),v="ADD_GOLD",g="REMOVE_GOLD",O="ADD_SILVER",E="REMOVE_SILVER",b="ADD_COPPER",w="REMOVE_COPPER",T="ADD_WEAPON",k="ADD_SHIELD",_="ADD_XP",C="CHANGE_ENTITY",j="CHANGE_PLAYER_POSITION",P="CREATE_LEVEL",I="MODIFY_HEALTH",M="NEW_MESSAGE",L="PLAYER_BOUGHT_ITEM",A="PLAYER_SOLD_ITEM",N="PLAYER_TRADE_SUCCESS",S="PLAYER_TRADE_FAIL",R="TALK_TO_NPC",D="RESTART",x="TOGGLE_FOG_MODE",G="LOOK_AROUND",H="RESET_DUNGEON",V="SET_END_GAME",Y="UPDATE_DUNGEON",U="SET_DUNGEON_LEVEL",B="TOGGLE_NPC_STORE",K="NPC_SOLD_ITEM",W=[{id:0,name:"Bellwoods",exits:1,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:1,name:"Bellwoods",exits:2,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:2,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:3,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"},{id:4,name:"Bellwoods",exits:5,exitsComplete:0,questsComplete:0,type:"dungeon"}],F={entities:[[]],dungeonLevel:0,dungeonTransit:0,dungeon:Object(m.a)({},W[0]),playerPosition:[],endGame:"unknown"},z={health:100,xp:100,gold:0,currency:{gold:0,silver:0,copper:500},weapon:{name:"Fist",damage:100},shield:{name:"Pants",protection:1},examining:{iconClass:"floor",title:"",action:"Look",aroundMe:"press l to look around"},inventory:[],npcsAroundMe:[]},q=n(15),X={OWNER:"headwinds",TIPS_ALONG_BOTTOM:!1,GAME_SHOW_TITLE:!1,VP_TYPE:"full",FOG_MODE:!1,GAME_TITLE:"Cabin Quest",GAME_SUBTITLE:" explore time between city and country",GAME_URL:"https://cabinquest.now.sh",MAX_INVENTORY_ITEMS:6,BACKEND:"python",WORLDSET:"cabinquest"},$={OWNER:X.OWNER,VP_WIDTH_RATIO_CONTAINED:30,VP_HEIGHT_RATIO_CONTAINED:21,VP_HEIGHT_RATIO_FULL:1,VP_WIDTH_RATIO_FULL:1,FULL_GRID_RATIO_WIDTH:24,FULL_GRID_RATIO_HEIGHT:19,VP_TYPE:X.VP_TYPE,GAME_TITLE:X.GAME_TITLE,GAME_SUBTITLE:X.GAME_SUBTITLE,GAME_SHOW_TITLE:X.GAME_SHOW_TITLE,TIPS_ALONG_BOTTOM:X.TIPS_ALONG_BOTTOM,FOG_MODE:X.FOG_MODE,CURRENCY_GOLD_LABEL:"Gold",CURRENCY_SILVER_LABEL:"Silver",CURRENCY_COPPER_LABEL:"Copper",GAME_URL:X.GAME_URL,MAX_INVENTORY_ITEMS:X.MAX_INVENTORY_ITEMS,BACKEND:X.BACKEND,WORLDSET:X.WORLDSET},J={fogMode:$.FOG_MODE,messages:[],showNPCStore:!1},Z=Object(l.combineReducers)({grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:var r=Object(h.a)(a.coords,2),o=r[0],i=r[1],c=f()(e.entities,Object(p.a)({},i,Object(p.a)({},o,{$set:a.entity})));return Object(m.a)({},e,{entities:c});case j:return Object(m.a)({},e,{playerPosition:a});case V:return Object(m.a)({},e,{endGame:a});case P:return Object(m.a)({},e,{playerPosition:a.playerPosition,entities:a.entities});case Y:return Object(m.a)({},e,{dungeon:a});case U:return Object(m.a)({},e,{dungeonLevel:a.level,dungeon:W[a.level-1],dungeonTransit:a.transit});case H:return Object(m.a)({},e,{dungeonLevel:0,dungeon:W[0]});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=e.currency;switch(n){case R:return Object(m.a)({},e,{npcsAroundMe:a.npcsAroundMe});case L:case A:return Object(m.a)({},e,{currency:a.currency,inventory:a.inventory});case v:case g:return Object(m.a)({},e,{currency:Object(m.a)({},r,{gold:a})});case O:case E:return Object(m.a)({},e,{currency:Object(m.a)({},r,{silver:a})});case b:case w:return Object(m.a)({},e,{currency:Object(m.a)({},r,{copper:a})});case T:return Object(m.a)({},e,{weapon:a});case k:return Object(m.a)({},e,{shield:a});case _:return Object(m.a)({},e,{xp:e.xp+a});case I:return Object(m.a)({},e,{health:a});case D:return z;case G:var o=e.examining;return Object(m.a)({},e,{examining:Object(m.a)({},o,a)});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case M:return Object(m.a)({},e,{messages:[].concat(Object(q.a)(e.messages),[a])});case x:return Object(m.a)({},e,{fogMode:!e.fogMode});case B:return Object(m.a)({},e,{fogMode:!e.showNPCStore});case D:return J;default:return e}}}),Q=n(5),ee=n(6),te=n(8),ne=n(7),ae=n(9),re=n(3),oe=function(e){var t=e.item,n=e.handleMouseOver,a=e.handleMouseOut,o=e.handleClick;return console.log("item render: ",t),r.a.createElement("div",{onMouseOver:n,onMouseOut:a,onClick:o,className:t.type,style:{display:"block",position:"relative",border:"1px solid #333",margin:5,width:25,height:25}})},ie=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={isOpen:!1},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"toggleOpen",value:function(){var e=!this.state.isOpen;this.setState({isOpen:e})}},{key:"handleMouseOver",value:function(){}},{key:"handleMouseOut",value:function(){}},{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return r.a.createElement(oe,{key:n,item:t,handleMouseOver:e.handleMouseOver,handleMouseOut:e.handleMouseOver,handleClick:e.handleClick})});return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},t)}},{key:"handleKeyPress",value:function(e){switch(console.log("keyCode: ",e.keyCode),e.keyCode){case 73:this.toggleOpen();break;default:return}}}]),t}(a.Component),ce=Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(ie),le=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={isOpen:!1},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"toggleOpen",value:function(){var e=!this.state.isOpen;this.setState({isOpen:e})}},{key:"handleMouseOver",value:function(){}},{key:"handleMouseOut",value:function(){}},{key:"handleEquipClick",value:function(e){}},{key:"handleDiscardClick",value:function(e){}},{key:"handleTradeClick",value:function(e){}},{key:"handleCraftClick",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",null)}},{key:"handleKeyPress",value:function(e){switch(console.log("keyCode: ",e.keyCode),e.keyCode){case 73:break;default:return}}}]),t}(a.Component),se=(Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(le),function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={itemSelected:null},e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handleItemSelected",value:function(){}},{key:"render",value:function(){var e=this.props.player;return console.log("Backpack render: ",e.inventory),r.a.createElement("div",{className:"panel"},r.a.createElement(ce,{items:e.inventory,handleItemSelected:this.handleItemSelected}))}}]),t}(a.Component)),ue=Object(c.connect)(function(e){return{player:e.player}},function(e){return{}})(se),de=n(2),pe=n.n(de);function he(e){return{type:O,payload:e}}function me(e){return{type:b,payload:e}}function ye(e,t){switch(t.level){case 1:return me(10+e.currency.copper);case 2:return me(10+e.currency.copper),he(1+e.currency.silver);case 2:return me(100+e.currency.copper),he(5+e.currency.silver);case 3:return me(25+e.currency.copper),he(10+e.currency.silver);case 4:return me(5+e.currency.copper),he(100+e.currency.silver),n=1+e.currency.gold,{type:v,payload:n};default:return me(10+e.currency.copper)}var n}var fe,ve,ge="full"===$.VP_TYPE?Math.floor(window.innerWidth/$.FULL_GRID_RATIO_WIDTH):80,Oe="full"===$.VP_TYPE?Math.floor(window.innerHeight/$.FULL_GRID_RATIO_HEIGHT):60,Ee=ge,be=Oe,we="full"===$.VP_TYPE?25:15,Te=[7,12],ke=function(){for(var e=function(e,t){for(var n=t.x,a=t.y,r=t.width,o=void 0===r?1:r,i=t.height,c=void 0===i?1:i,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"floor",s=a;s<a+c;s++)for(var u=n;u<n+o;u++)e[s][u]={type:l};return e},t=[],n=0;n<be;n++){t.push([]);for(var a=0;a<Ee;a++)t[n].push({type:0,opacity:pe.a.random(.3,.8)})}var r=Object(h.a)(Te,2),o=r[0],i=r[1],c={x:pe.a.random(1,Ee-i-15),y:pe.a.random(1,be-i-15),height:pe.a.random(o,i),width:pe.a.random(o,i)};return function t(n,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:we;return r+a.length>o||!a.length?n:(n=function(t,n){var a=n.x,r=n.y,o=n.width,i=n.height,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Te,l=Object(h.a)(c,2),s=l[0],u=l[1],d=[],p={height:pe.a.random(s,u),width:pe.a.random(s,u)};p.x=pe.a.random(a,a+o-1),p.y=r-p.height-1,p.doorx=pe.a.random(p.x,Math.min(p.x+p.width,a+o)-1),p.doory=r-1,d.push(p);var m={height:pe.a.random(s,u),width:pe.a.random(s,u)};m.x=a+o+1,m.y=pe.a.random(r,i+r-1),m.doorx=m.x-1,m.doory=pe.a.random(m.y,Math.min(m.y+m.height,r+i)-1),d.push(m);var y={height:pe.a.random(s,u),width:pe.a.random(s,u)};y.x=pe.a.random(a,o+a-1),y.y=r+i+1,y.doorx=pe.a.random(y.x,Math.min(y.x+y.width,a+o)-1),y.doory=r+i,d.push(y);var f={height:pe.a.random(s,u),width:pe.a.random(s,u)};f.x=a-f.width-1,f.y=pe.a.random(r,i+r-1),f.doorx=a-1,f.doory=pe.a.random(f.y,Math.min(f.y+f.height,r+i)-1),d.push(f);var v=[];return d.forEach(function(n){(function(e,t){var n=t.x,a=t.y,r=t.width,o=void 0===r?1:r,i=t.height,c=void 0===i?1:i;if(a<1||a+c>e.length-1)return!1;if(n<1||n+o>e[0].length-1)return!1;for(var l=a-1;l<a+c+1;l++)for(var s=n-1;s<n+o+1;s++)if("floor"===e[l][s].type)return!1;return!0})(t,n)&&(t=e(t,n),t=e(t,{x:n.doorx,y:n.doory},"door"),v.push(n))}),{grid:t,placedRooms:v}}(n,a.pop()),a.push.apply(a,Object(q.a)(n.placedRooms)),r+=n.placedRooms.length,t(n.grid,a,r))}(t=e(t,c),[c])},_e=[{name:"Big Stick",damage:10},{name:"Club",damage:15},{name:"Rusty Sword",damage:20},{name:"Butcher Knife",damage:25},{name:"Mace",damage:30},{name:"Flail",damage:35},{name:"Long Sword",damage:40},{name:"Broad Sword",damage:50}],Ce=[{name:"Hat",protection:1,type:"shield"},{name:"Bracers",protection:5,type:"shield"},{name:"Rusty Shield",protection:10,type:"shield"},{name:"Wooden Shield",protection:12,type:"shield"},{name:"Leather Shield",protection:20,type:"shield"},{name:"Chain Shield",protection:25,type:"shield"},{name:"Plate Shield",protection:40,type:"shield"},{name:"Elven Shield",protection:50,type:"shield"}],je={1:"Rat",2:"Kobold",3:"Dark Elf",4:"Troll",5:"Boss"},Pe=[{type:"neutral",name:"Jack Rabbit",health:5,weapon:{name:"teeth",protection:1},armour:{name:"fur",protection:10},speed:1,accuracy:1,treaure:[{name:"pelt",cost:{gold:0,silver:0,copper:5}}]},{type:"neutral",name:"Cariboo",health:25,weapon:{name:"horns",damage:100},armour:{name:"fur",protection:10},speed:10,accuracy:10,treaure:[{name:"hide",cost:{gold:0,silver:0,copper:25}}]},{type:"neutral",name:"Buffalo",health:1225,weapon:{name:"horns",damage:100},armour:{name:"fur",protection:1},speed:10,accuracy:100,treaure:[{name:"hide",cost:{gold:1,silver:10,copper:25}}]}],Ie=[{name:"Alspen",description:"",profession:"Trader",inventory:[(fe={name:"sword",cost:30},Object(p.a)(fe,"cost",{gold:0,silver:0,copper:30}),Object(p.a)(fe,"type","weapon"),fe),{name:"health potion",cost:{gold:0,silver:0,copper:30},type:"potion"},(ve={name:"shield",cost:30},Object(p.a)(ve,"cost",{gold:0,silver:0,copper:30}),Object(p.a)(ve,"type","shield"),ve)],type:"npc",portrait:"",selected:!1,greetings:["I have the best deals."]}],Me=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=[];4===n&&a.push({health:400,level:5,type:"boss"});for(var r=Ie.filter(function(e){return"trader"===e.profession.toLowerCase()})[0],o=[],i=0;i<30;i++)o.push(Object(m.a)({},r));for(var c=[],l=0;l<7;l++)c.push({health:30*n+40,level:pe.a.random(n,pe.a.random(n-1?n-1:n,n+1)),type:"enemy",name:je[n]});for(var s=[],u=0;u<7;u++)s.push({health:30*n+40,level:pe.a.random(n,pe.a.random(n-1?n-1:n,n+1)),type:"neutral",name:Pe[n]});var d=[];n<4&&d.push({type:"exit"});for(var p=t.get("itemSet").filter(function(e){return"potion"===e.type}).filter(function(e){return"health"===e.modifies})[0],h=[],y=0;y<5;y++)h.push(Object(m.a)({},p));for(var f=t.get("itemSet").filter(function(e){return"food"===e.type}).filter(function(e){return"mushroom"===e.name})[0],v=[],g=0;g<5;g++)v.push(Object(m.a)({},f));for(var O=[],E=_e.filter(function(e){return e.damage<10*n+10}).filter(function(e){return e.damage>10*n-10}),b=0;b<3;b++){var w=Object.assign({},E[pe.a.random(0,E.length-1)]);w.type="weapon",O.push(w)}for(var T=[],k=Ce.filter(function(e){return e.protection<10*n+10}).filter(function(e){return e.protection>10*n-10}),_=0;_<3;_++){var C=Object.assign({},k[pe.a.random(0,k.length-1)]);C.type="shield",T.push(C)}var j=[];[h,v,c,s,O,T,d,[{type:"player"}],o,a].forEach(function(t){for(;t.length;){var n=Math.floor(Math.random()*Ee),a=Math.floor(Math.random()*be);"floor"===e[a][n].type&&("player"===t[0].type&&(j=[n,a]),e[a][n]=t.pop())}});for(var P=0;P<e.length;P++)for(var I=0;I<e[0].length;I++)"door"===e[P][I].type&&(e[P][I].type="floor");return{entities:e,playerPosition:j}},Le=n(10),Ae=Object(Le.a)({name:"generic item",modifies:"health",by:10,type:"item"}),Ne=Object(Le.a)({type:"enemy",name:"",health:100,weapon:"",armour:"",speed:10,accuracy:10}),Se=(Object(Le.a)({name:"generic item",modifies:"none",by:0,type:"weapon",damage:10}),Object(Le.a)({itemSet:[],enemySet:[],neutralSet:[],npcSet:[],shieldSet:[],weaponSet:[],type:"worldset"})),Re=new Ae({name:"Health Potion",modifies:"health",by:10,type:"potion"}),De=new Ae({name:"mushroom",modifies:"health",by:10,type:"food"}),xe=new Le.c([De,Re]),Ge=new Ne({name:"Rat",health:10,weapon:"teeth",armour:"fur",speed:10,accuracy:10,level:1}),He=new Ne({name:"Kolbold",health:10,weapon:"teeth",armour:"fur",speed:10,accuracy:10,level:1}),Ve=new Ne({name:"Dark Elf",health:10,weapon:"teeth",armour:"fur",speed:10,accuracy:10,level:1}),Ye=new Ne({name:"Boss",health:10,weapon:"teeth",armour:"fur",speed:10,accuracy:10,level:1}),Ue=new Se({itemSet:xe,enemySet:new Le.c([Ge,He,Ve,Ye]),neutralSet:new Le.c([De]),npcSet:new Le.c([De]),shieldSet:new Le.c([De]),weaponSet:new Le.c([De])}),Be=new Le.b(Ue.toJS()),Ke={headwinds:Be,peted:Be}[$.OWNER];function We(e){return{type:_,payload:e}}function Fe(e,t){return{type:C,payload:{entity:e,coords:t}}}function ze(e){return{type:j,payload:e}}function qe(e){return{type:P,payload:Me(ke(),Ke,e)}}function Xe(e){return{type:I,payload:e}}function $e(e){return{type:M,payload:e}}function Je(){return{type:D}}function Ze(e,t){return{type:U,payload:{level:e,transit:t}}}function Qe(e){return{type:V,payload:e}}function et(){return{type:H}}var tt=function(e){return function(t,n){var a=n(),r=a.grid,o=a.player,i=r.playerPosition.slice(0),c=Object(h.a)(i,2),l=c[0],u=c[1],d=Object(h.a)(e,2),p=d[0],y=d[1],f=[p+l,y+u],v=r.entities[u][l],g=r.entities[u+y][l+p],O=[];switch(g.type&&"enemy"!==g.type&&"boss"!==g.type&&("npc"===g.type?O.push(Fe(Object(m.a)({},g),[l,u]),Fe(v,f),ze(f)):O.push(Fe({type:"floor"},[l,u]),Fe(v,f),ze(f))),g.type){case"boss":case"enemy":var E=Math.floor(o.xp/100),b=Math.floor(o.weapon.damage*pe.a.random(1,1.3)*E);if(g.health-=b,g.health>0){var w=Math.floor(pe.a.random(4,7)*g.level)-o.shield.protection;if(O.push(Fe(g,f),Xe(o.health-w),$e("FIGHT! You hurt the enemy with attack of [".concat(b,"].\tThe enemy hits back with an attack of [").concat(w,"].  Enemy has [").concat(g.health,"] health remaining."))),o.health-w<=0)return t(Xe(0)),setTimeout(function(){return t(Qe("death"))},250),setTimeout(function(){return t($e("YOU DIED"))},1e3),setTimeout(function(){return t($e("Everything goes dark.."))},2e3),setTimeout(function(){return t($e("You resolve to try harder next time"))},4e3),setTimeout(function(){return t($e("The grid resets itself...."))},6e3),void setTimeout(function(){return t(Object(s.batchActions)([Je(),qe(1),et()]))},8e3)}g.health<=0&&("boss"===g.type?(O.push(We(10*g.level),ye(o,g),Fe({type:"floor"},[l,u]),Fe(v,f),ze(f),$e("VICTORY! Your attack of [".concat(b,"] is too powerful for the enemy, who dissolves before your very eyes."))),setTimeout(function(){return t(Qe("victory"))},250),setTimeout(function(){return t($e("YOU DEFATED THE BOSS!"))},1e3),setTimeout(function(){return t($e("The BOSS emits an almighty scream"))},2e3),setTimeout(function(){return t($e("You bask momentarily in your glory"))},4e3),setTimeout(function(){return t($e("The grid resets itself...."))},6e3),setTimeout(function(){return t(Object(s.batchActions)([Je(),qe(1),et()]))},8e3)):(O.push(We(10*g.level),ye(o,g),Fe({type:"floor"},[l,u]),Fe(v,f),ze(f),$e("VICTORY! Your attack of [".concat(b,"] is too powerful for the enemy, who dissolves before your very eyes."))),setTimeout(function(){return t($e("You gain 10XP and feel yourself growing stronger.."))},2500),(o.xp+10)%100===0&&setTimeout(function(){return t($e("LEVEL UP!"))},5e3)));break;case"exit":if(r.dungeon.exitsComplete===r.dungeon.exits)setTimeout(function(){return t(Object(s.batchActions)([Ze(r.dungeonLevel+1,r.dungeonLevel+1),qe(r.dungeonLevel+1)]))},3e3),O.push($e("The cells start to shift... you transit to zone ".concat(r.dungeonLevel+1))),setTimeout(function(){return t(Ze(r.dungeonLevel+1,"transit-".concat(r.dungeonLevel+1)))},250);else{var _=r.dungeon,C=Object(m.a)({},_,{exitsComplete:_.exitsComplete+1});O.push($e("You enter the tunnel and pass into the next zone")),setTimeout(function(){return t(Object(s.batchActions)([(e=C,{type:Y,payload:e}),qe(r.dungeonLevel)]));var e},250)}break;case"potion":"health"===g.modifies&&O.push(Xe(o.health+g.by),$e("You drink a potion for ".concat(g.by," ").concat(g.modifies)));break;case"food":"health"===g.modifies&&O.push(Xe(o.health+g.by),$e("You eat a ".concat(g.name," for ").concat(g.by," ").concat(g.modifies)));break;case"weapon":O.push({type:T,payload:g},$e("You pick up a ".concat(g.name)));break;case"shield":O.push(function(e){return{type:k,payload:e}}(g),$e("You pick up a ".concat(g.name)))}t(Object(s.batchActions)(O))}};var nt=function(e){var t=e.cell,n=e.distance,a=e.visible,o=(e.zone,e.transit),i=t.opacity;return a&&n>10?i=0:0!==t.type&&(i=1),r.a.createElement("div",{className:t.type?"".concat(t.type," cell"):"back-".concat(o," cell"),style:{opacity:i}})};function at(e){return console.log("getCreditsAsCopper ",e),100*e.currency.gold+10*e.currency.silver+e.currency.copper}function rt(){return{type:S}}function ot(e,t,n){return function(a,r){var o=[];if(console.log("max ",$.MAX_INVENTORY_ITEMS),console.log("max vs",t.inventory.length),t.inventory.length>=$.MAX_INVENTORY_ITEMS)return o.push(rt(),$e("You have no room for it!")),a(Object(s.batchActions)(o));var i=at(t),c=at(e);if(i>c){var l=function(e){var t=Math.floor(e/100),n=e%100,a=Math.floor(n/10);return{gold:t,silver:a,copper:a%10}}(i-c),u=[].concat(Object(q.a)(t.inventory),[e]);o.push(function(e,t){return{type:K,payload:{item:e,npc:t}}}(n,e),{type:L,payload:{inventory:u,currency:l}});var d=r().player;d.inventory.length<6?[].concat(Object(q.a)(d.inventory),[e]):Object(q.a)(d.inventory);o.push({type:N},$e("You bought a [".concat(e.name,"].")))}else{var p="Rats! You can't afford it - you're short ".concat(c-i," copper.");o.push(rt(),$e(p))}return a(Object(s.batchActions)(o))}}var it=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.cellProps,t=e.key,n=e.cell,a=e.distance,o=e.zone,i=e.transit,c=e.visible;return r.a.createElement(nt,{key:t,cell:n,distance:a,zone:o,transit:i,visible:c})}},{key:"handleKeyPress",value:function(e){switch(console.log("code:",e.keyCode),e.keyCode){case 76:this.props.lookAround(this.props.grid.entities);break;case 84:var t=function(e){var t=[];if(e.map(function(e){var n=e.filter(function(e){return e.distanceFromPlayer<=2});e.filter(function(e){e.type}),n.length>0&&t.push(n)}),t.length>0){var n=[];return t.map(function(e){var t=e.filter(function(e){return"npc"===e.type});t&&t.length>0&&t.map(function(e){return n.push(e)})}),n}return null}(this.props.grid.entities);t.length>0&&this.props.talkToNPC(t);break;case 72:break;default:return}}}]),t}(a.Component),ct=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{lookAround:function(t){return e(function(e){var t=[],n="",a="floor";return e.map(function(e){var n=e.filter(function(e){return e.distanceFromPlayer<=2});e.filter(function(e){"npc"===e.type&&console.log("hey npc: ",e)}),n.length>0&&t.push(n)}),console.log("beside me:",t),t.length>0&&t.map(function(e){e.map(function(e){var t=0===e.type?"wall":e.type;if("floor"!==t&&"wall"!==t){var r="";switch(e.type){case"weapon":r=" "+e.name+" +"+e.damage,a=e.type;break;case"shield":r=" "+e.name+" +"+e.protection,a=e.type;break;case"boss":case"enemy":r=" "+e.name+" lvl "+e.level+" health "+e.health,a=e.type;break;case"exit":r=" Stairs leading down ",a=e.type;break;case"npc":r=" "+e.profession+" "+e.name,a=e.type;break;case"potion":r=" Health Potion ",a=e.type}n+=r}})}),console.log("iconClass: ",a),""===n&&(n="not much to see here",a="floor"),{type:G,payload:{action:"Look",aroundMe:n,iconClass:a}}}(t))},talkToNPC:function(t){return e(function(e){return{type:R,payload:{npcsAroundMe:e}}}(t))}}})(it),lt=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={viewportWidth:0,viewportHeight:0},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e.handleResize=e.handleResize.bind(Object(re.a)(Object(re.a)(e))),e.VP_HEIGHT_OFFSET=5,e.VP_MINIMUM_HEIGHT=22,e.VP_WIDTH_RATIO="full"===$.VP_TYPE?$.VP_WIDTH_RATIO_FULL:$.VP_WIDTH_RATIO_CONTAINED,e.VP_HEIGHT_RATIO="full"===$.VP_TYPE?$.VP_HEIGHT_RATIO_FULL:$.VP_HEIGHT_RATIO_CONTAINED,e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentWillMount",value:function(){var e=window.innerWidth/this.VP_WIDTH_RATIO,t=Math.max(this.VP_MINIMUM_HEIGHT,window.innerHeight/this.VP_HEIGHT_RATIO-this.VP_HEIGHT_OFFSET);this.setState({viewportWidth:e,viewportHeight:t}),this.props.createLevel(),this.props.setDungeonLevel(1,1)}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",pe.a.throttle(this.handleKeyPress,100)),window.addEventListener("resize",pe.a.debounce(this.handleResize,500)),this.props.triggerOpeningMessages()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",pe.a.throttle(this.handleKeyPress,100)),window.removeEventListener("resize",pe.a.debounce(this.handleResize,500))}},{key:"handleKeyPress",value:function(e){if("number"===typeof this.props.grid.dungeonLevel)switch(e.keyCode){case 38:case 87:this.props.playerInput([0,-1]);break;case 39:case 68:this.props.playerInput([1,0]);break;case 40:case 83:this.props.playerInput([0,1]);break;case 37:case 65:this.props.playerInput([-1,0]);break;default:return}}},{key:"handleResize",value:function(e){var t=e.target.innerWidth/this.VP_WIDTH_RATIO,n=Math.max(this.VP_MINIMUM_HEIGHT,e.target.innerHeight/this.VP_HEIGHT_RATIO-this.VP_HEIGHT_OFFSET);this.setState({viewportWidth:t,viewportHeight:n})}},{key:"render",value:function(){var e=this,t=this.state.viewportHeight-this.state.viewportHeight%2,n=this.state.viewportWidth-this.state.viewportWidth%2,a=this.props.grid.entities,o=Object(h.a)(this.props.grid.playerPosition,2),i=o[0],c=o[1],l=pe.a.clamp(c-t/2,0,a.length-t),s=Math.max(i+n/2,n),u=Math.max(c+t/2,t),d=pe.a.clamp(i-n/2,0,a[0].length-n),p=a.map(function(e,t){return e.map(function(e,n){var a=Math.abs(c-t)+Math.abs(i-n);return e.distanceFromPlayer=a,e})}).filter(function(e,t){return t>=l&&t<u}).map(function(t,n){return r.a.createElement("div",{key:n,className:"row"},t.filter(function(e,t){return t>=d&&t<s}).map(function(t,n){if("player"===t.type){var a={key:n,cell:t,distance:t.distanceFromPlayer,zone:e.props.grid.dungeonLevel,transit:e.props.grid.dungeonTransit,visible:e.props.fogMode};return r.a.createElement(ct,{key:n,cellProps:a})}return r.a.createElement(nt,{key:n,cell:t,distance:t.distanceFromPlayer,zone:e.props.grid.dungeonLevel,transit:e.props.grid.dungeonTransit,visible:e.props.fogMode})}))});return r.a.createElement("div",{className:"grid-wrapper"},p)}}]),t}(a.Component),st=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{playerInput:function(t){return e(tt(t))},createLevel:function(){return e(qe())},setDungeonLevel:function(t,n){return e(Ze(t,n))},triggerOpeningMessages:function(){return e(function(e){e($e("Welcome to The Grid...")),setTimeout(function(){e($e("You find yourself in a world filled with strange cells"))},3e3),setTimeout(function(){e($e("'Hmm... there must be a way out of here..'"))},6e3)})}}})(lt),ut=function(e){var t=e.level,n="full"===$.VP_TYPE?"strip_fullscreen":"strip",a=$.GAME_SHOW_TITLE?{display:"flex"}:{display:"none"};return r.a.createElement("div",{className:n,style:a},r.a.createElement("h1",null,r.a.createElement("span",{className:"title title-".concat(t)},$.GAME_TITLE)," ",$.GAME_SUBTITLE))},dt=Object(c.connect)(function(e){return{messages:e.ui.messages}})(function(e){var t=e.messages;return r.a.createElement("div",{className:"panel messages"},r.a.createElement("ul",null,t.slice(-3).map(function(e,t){return r.a.createElement("li",{key:t},e)})))}),pt=function(e){var t=e.item,n=(e.handleMouseOver,e.handleMouseOut,e.handleClick),a=e.scope;return console.log("item render: ",t),r.a.createElement("div",Object(p.a)({className:t.type,onClick:function(){return n(t,a)}},"className","selectItem"),r.a.createElement("div",null,t.name),r.a.createElement("div",null,function(e){return 0===e.cost.gold?0===e.cost.copper?"$"+e.cost.silver+" silver":"$"+e.cost.silver+" silver "+e.cost.copper+" copper":0===e.cost.silver?"$"+e.cost.copper+" copper":0===e.cost.silver&&0===e.cost.copper?"$"+e.cost.gold+" gold":0===e.cost.silver?"$"+e.cost.gold+" gold "+e.cost.copper+" copper":"$"+e.cost.gold+" gold "+e.cost.silver+" silver "+e.cost.copper+" copper"}(t)))},ht={display:"flex",flexDireciton:"row",justifyContent:"space-between"},mt=function(e){function t(e){var n;Object(Q.a)(this,t),n=Object(te.a)(this,Object(ne.a)(t).call(this,e)),console.log("store ",n.props);var a=Math.floor(Math.random()*n.props.storeOwner.greetings.length);return n.state={conversation:n.props.storeOwner.greetings[a],items:n.props.storeOwner.inventory,selectedItem:null,storeOwner:n.props.storeOwner},n.handleKeyPress=n.handleKeyPress.bind(Object(re.a)(Object(re.a)(n))),n}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleSelectItemClick",value:function(e,t){var n=t;console.log("handleSelectItemClick self ",n),n.setState({selectedItem:e})}},{key:"handleKeyPress",value:function(e){}},{key:"handleBuyItemClick",value:function(){if(console.log("buy item"),null!==this.state.selectedItem){var e=this.props.player,t=this.state.selectedNPC,n=Object(m.a)({},this.state.selectedItem,{currency:this.state.selectedItem.cost});this.props.tradeItem(n,e,t)}}},{key:"render",value:function(){var e=this,t=this.props;t.npc,t.player;return r.a.createElement("div",null,r.a.createElement("div",{style:ht},r.a.createElement("div",null,this.state.storeOwner.name)),r.a.createElement("div",null,this.state.conversation),r.a.createElement("div",null,r.a.createElement("div",{style:ht},e.state.items.map(function(t,n){return r.a.createElement(pt,{item:t,key:n,handleClick:e.handleSelectItemClick,scope:e})}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"npcStoreButton",onClick:function(){return e.handleBuyItemClick()}},"Buy"))))}}]),t}(a.Component),yt=Object(c.connect)(function(e){return{grid:e.grid,player:e.player}},function(e){return{tradeItem:function(t,n,a){return e(ot(t,n,a))},newMessage:function(t){return e($e(t))}}})(mt),ft=[{name:"sword",cost:30,currency:"copper"},{name:"health potion",cost:30,currency:"copper"},{name:"shield",cost:30,currency:"copper"}],vt=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={conversation:"conversational text here...",items:ft,selectedItem:ft[0],npcs:[],selectedNPC:null},e.handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(e){window.addEventListener("keydown",this.handleKeyPress),console.log("npc-store componentDidUpdate",e),e.player.npcsAroundMe}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"componentWillReceiveProps",value:function(e){console.log("npc-store componentDidReceiveProps",e)}},{key:"handleItemClick",value:function(e){}},{key:"handleKeyPress",value:function(e){}},{key:"handleSelectNPC",value:function(e){this.setState({selectedNPC:e})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.npc,t.player);return r.a.createElement("div",{className:"panel"},function(){if(n.npcsAroundMe.length>0&&null===e.state.selectedNPC){var t=n.npcsAroundMe.map(function(t,n){return r.a.createElement("div",{key:n,className:"selectItem",onClick:function(){return e.handleSelectNPC(t)}},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("p",null,t.name)))});return r.a.createElement("div",null,r.a.createElement("div",null,"Who would you like to speak to?"),t)}return null}(),function(){if(null!==e.state.selectedNPC){var t=e.state.selectedNPC;return console.log("owner: ",t),console.log("this.state: ",e.state),r.a.createElement(yt,{storeOwner:t})}}())}}]),t}(a.Component),gt=Object(c.connect)(function(e){return{grid:e.grid,player:e.player}},function(e){return{}})(vt),Ot=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(re.a)(Object(re.a)(e))),e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.fogMode,n=e.restartGame,a=e.toggleFogMode;return r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"score-item"},r.a.createElement("input",{onChange:a,id:"toggle",type:"checkbox",checked:t}),r.a.createElement("label",{htmlFor:"toggle"},"Toggle fog mode")),r.a.createElement("div",{className:"score-item"},r.a.createElement("div",{onClick:n,className:"restart-btn"}),r.a.createElement("span",{onClick:n,className:"setting-label"},"Restart")))}},{key:"handleKeyPress",value:function(e){switch(e.keyCode){case 70:this.props.toggleFogMode();break;case 82:this.props.restartGame();break;default:return}}}]),t}(a.Component),Et=Object(c.connect)(function(e){var t=e.ui,n=e.grid,a=e.player;return{fogMode:t.fogMode,grid:n,player:a}},function(e){return{toggleFogMode:function(){return e({type:x})},restartGame:function(){return e(function(e){e($e("The grid resets itself....")),setTimeout(function(){return e(Object(s.batchActions)([Je(),qe(1),et()]))},1e3)})}}})(Ot),bt=function(e){var t=e.iconClass,n=e.title,a=e.value;return r.a.createElement("div",{className:"score-item"},r.a.createElement("div",{className:"icon cell ".concat(t)}),r.a.createElement("span",{className:"score-label"},"".concat(n,": ").concat(a)))},wt=function(e){var t=e.grid,n=e.player,a="full"===$.VP_TYPE?"panel_fullscreen":"panel",o="".concat(a," scoreboard");return r.a.createElement("div",{className:o},r.a.createElement(bt,{iconClass:"potion",title:"Health",value:n.health}),r.a.createElement(bt,{iconClass:"back-".concat(t.dungeonLevel),title:"Zone",value:"".concat(t.dungeonLevel," - ").concat(t.dungeon.exitsComplete)}),r.a.createElement(bt,{iconClass:"weapon",title:"Weapon",value:"".concat(n.weapon.name," (+").concat(n.weapon.damage,")")}),r.a.createElement(bt,{iconClass:"shield",title:"Amour",value:"".concat(n.shield.name," (+").concat(n.shield.protection,")")}),r.a.createElement(bt,{iconClass:"gold",title:$.CURRENCY_GOLD_LABEL,value:"".concat(n.currency.gold)}),r.a.createElement(bt,{iconClass:"silver",title:$.CURRENCY_SILVER_LABEL,value:"".concat(n.currency.silver)}),r.a.createElement(bt,{iconClass:"copper",title:$.CURRENCY_COPPER_LABEL,value:"".concat(n.currency.copper)}),r.a.createElement(bt,{iconClass:"player",title:"Level",value:Math.floor(n.xp/100)}),r.a.createElement(bt,{iconClass:"triangle",title:"XP to level up",value:100-n.xp%100}),r.a.createElement(bt,{iconClass:n.examining.iconClass,title:n.examining.action,value:n.examining.aroundMe}))},Tt=function(e){function t(){var e;return Object(Q.a)(this,t),(e=Object(te.a)(this,Object(ne.a)(t).call(this))).state={tips:["Use WASD or arrow keys to move","Press L to look at tiles around you","Defeat the Boss in Zone 4 to win","Toggle Fog Mode with the 'F' key","Restart the game with the 'R' key","Defeat enemies to increase your XP","Level up to increase your damage","A new weapon might not be as good as your current one","Be sure to gain as much XP as you can in each zone"],displayIdx:0,intervalId:null},e}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=1,n=setInterval(function(){t===e.state.tips.length&&(t=0),e.setState({displayIdx:t}),t++},1e4);this.setState({intervalId:n})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"tips"},r.a.createElement("p",null," Tip: ",this.state.tips[this.state.displayIdx]))}}]),t}(a.Component),kt=n(36),_t=n.n(kt),Ct=function(e){function t(e){var n;return Object(Q.a)(this,t),(n=Object(te.a)(this,Object(ne.a)(t).call(this,e))).state={requiresAuthentication:"python"===$.BACKEND,authenticated:!1,greet:"",authenticateCheckComplete:!1},n}return Object(ae.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){console.log("DungeonCrawler",this.state),this.state.requiresAuthentication&&this.handleTwitterLoginClick()}},{key:"handleTwitterLoginClick",value:function(){var e=this;console.log("handleTwitterLoginClick",this.state);var t,n,a=this,r="127.0.0.1"===document.domain?"http://127.0.0.1:5000/api/twitter/auth":"https://"+document.domain+"/api/twitter/auth";_t.a.get(r).then(function(e){console.log("Twitter response: ",e.data),e.data.screen_name&&(t=!0,n=e.data.screen_name+", shall we begin?")}).catch(function(a){console.log("Twitter error: ",a),e.errored=a,n="",t=!1}).finally(function(){!0,a.setState({authenticated:t,greet:n,authenticateCheckComplete:!0})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.grid,a=t.player,o="full"===$.VP_TYPE?"sidebar_fullscreen":"sidebar",i="full"===$.VP_TYPE?"app_fullscreen":"app";return console.log("config: ",$.BACKEND),r.a.createElement("div",null,r.a.createElement(ut,{level:n.dungeonLevel}),r.a.createElement("div",{id:i},r.a.createElement(st,null),r.a.createElement("div",{className:o},e.state.requiresAuthentication&&e.state.authenticateCheckComplete&&!e.state.authenticated?r.a.createElement("div",{className:"signinContainer",style:{margin:20}},r.a.createElement("a",{href:"/api/twitter/auth",style:{color:"white",textDecoration:"none",cursor:"pointer"}},"Signin with Twitter")):e.state.requiresAuthentication&&e.state.authenticateCheckComplete&&e.state.authenticated?r.a.createElement("div",{className:"signinContainer",style:{margin:20}},r.a.createElement("p",null,e.state.greet)):null,r.a.createElement("div",{className:"npcStore"},r.a.createElement(gt,null)),r.a.createElement("div",{className:"backpack"},r.a.createElement(ue,null)),r.a.createElement(wt,{player:a,grid:n}),r.a.createElement(Et,null),r.a.createElement(dt,null),$.TIPS_ALONG_BOTTOM?null:r.a.createElement(Tt,null))),$.TIPS_ALONG_BOTTOM?r.a.createElement(Tt,null):null)}}]),t}(a.Component),jt=Object(c.connect)(function(e){return{ui:e.ui,grid:e.grid,player:e.player}})(Ct);n(81);var Pt=Object(d.createLogger)({actionTransformer:function(e){return"BATCHING_REDUCER.BATCH"===e.type?(e.payload.type=e.payload.reduce(function(e,t){return(e?e+" => ":"")+t.type},""),e.payload):e}}),It=Object(l.applyMiddleware)(u.a,Pt)(l.createStore);i.a.render(r.a.createElement(c.Provider,{store:It(Object(s.enableBatching)(Z))},r.a.createElement(jt,null)),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.b25dfa80.chunk.js.map