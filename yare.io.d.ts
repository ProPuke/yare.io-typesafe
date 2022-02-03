type Shape = 'circles'|'squares'|'triangles';
type Vector = [number,number];

declare interface Entity {
	id: string;
	position: Vector;
	energy: number;
	energy_capacity: number;
}

declare interface Structure extends Entity {
	size: number;
	collision_radius: number;
	structure_type: 'base'|'outpost'|'star';
}

declare interface Base extends Structure {
	structure_type: 'base';
	player_id: string;
	shape: Shape;
	sight: {
		friends_beamable:string[];
		enemies_beamable:string[];
		friends:string[];
		enemies:string[];
		structures:string[];
	};
	hp: 0|1;
	color: string; //"rgba(128,140,255,1)" etc
	current_spirit_cost: number
}

declare interface Outpost extends Structure {
	structure_type: 'outpost';
	control: string;
	range: number;
	last_energized: string;
	sight: {
		enemies: string[]
	};
}

declare interface Star extends Structure {
	structure_type: 'star';
	last_energized: string;
	active_in: number; //?
	active_out: number; //?
}

declare interface Spirit extends Entity {
	player_id: string;
	shape: Shape;
	size: number;
	last_energized: string;
	color: string; //"rgba(128,140,255,1)" etc.
	mark: string;
	sight: {
		friends_beamable: string[];
		enemies_beamable: string[];
		friends: string[];
		enemies: string[];
		structures: string[];
	};
	merged: string[];
	qcollisions: string[]; //?
	hp: 0|1;
	move_speed: number; //might be a multiple of 20? starts at 1

	shout(message:string):void;
	move(destination:Vector):void;
	energize(target:Vector|Entity):void;
	divide():void;
}

interface Graphics {
	set style(style:string);
	set linewidth(width:number);
	line(start:Vector, end:Vector):void;
	circle(position:Vector, radius:number):void;
	rect(topLeft:Vector, bottomRight:Vector):void;
}

declare let memory: Record<string, any>;
declare const spirits: Record<string, Spirit>;
declare const my_spirits: Spirit[];
declare const stars: Record<string, Star>;
declare const star_a1c:Star;
declare const star_p89:Star;
declare const star_zxq:Star;
declare const bases: Record<string, Base>;
declare const outposts: Record<string, Outpost>;
declare const outpost: Outpost;
declare const outpost_mdo: Outpost;
declare const this_player_id: string;
declare const base: Base;
declare const enemy_base: Base;
declare const players: {
	p1: string;
	p2: string;
};
declare const tick: number;
declare const graphics: Graphics;
