type Shape = 'circles'|'squares'|'triangles';
type Vector = [number,number];

declare class Entity {
	readonly id: string;
	readonly position: Vector;
	readonly energy: number;
	readonly energy_capacity: number;
}

declare class Structure extends Entity {
	readonly size: number;
	readonly collision_radius: number;
	readonly structure_type: 'base'|'outpost'|'star';
}

declare class Base extends Structure {
	readonly structure_type: 'base';
	readonly player_id: string;
	readonly shape: Shape;
	readonly sight: {
		readonly friends_beamable:string[];
		readonly enemies_beamable:string[];
		readonly friends:string[];
		readonly enemies:string[];
		readonly structures:string[];
	};
	readonly hp: 0|1;
	readonly color: string; //"rgba(128,140,255,1)" etc
	readonly current_spirit_cost: number
}

declare class Outpost extends Structure {
	readonly structure_type: 'outpost';
	readonly control: string;
	readonly range: number;
	readonly last_energized: string;
	readonly sight: {
		readonly enemies: string[]
	};
}

declare class Star extends Structure {
	readonly structure_type: 'star';
	readonly last_energized: string;
	readonly active_in: number; //?
	readonly active_out: number; //?
}

declare class Spirit extends Entity {
	readonly player_id: string;
	readonly shape: Shape;
	readonly size: number;
	readonly last_energized: string;
	readonly color: string; //"rgba(128,140,255,1)" etc.
	readonly mark: string;
	readonly sight: {
		readonly friends_beamable: string[];
		readonly enemies_beamable: string[];
		readonly friends: string[];
		readonly enemies: string[];
		readonly structures: string[];
	};
	readonly merged: string[];
	readonly qcollisions: string[]; //?
	readonly hp: 0|1;
	readonly move_speed: number; //might be a multiple of 20? starts at 1

	set_mark(mark:string):void;
	shout(message:string):void;
	move(destination:Vector):void;
	energize(target:Entity|string):void;
	merge(target:Spirit):void;
	divide():void;
	jump(target:Vector):void;
	explode():void;
}

declare class Graphics {
	set style(style:string);
	set linewidth(width:number);
	line(start:Vector, end:Vector):void;
	circle(position:Vector, radius:number):void;
	rect(topLeft:Vector, bottomRight:Vector):void;
}

declare var memory: Record<string, any>;
declare readonly var spirits: Record<string, Spirit>;
declare readonly var my_spirits: Spirit[];
declare readonly var stars: Record<string, Star>;
declare readonly var star_a1c:Star;
declare readonly var star_p89:Star;
declare readonly var star_zxq:Star;
declare readonly var bases: Record<string, Base>;
declare readonly var outposts: Record<string, Outpost>;
declare readonly var outpost: Outpost;
declare readonly var outpost_mdo: Outpost;
declare readonly var this_player_id: string;
declare readonly var base: Base;
declare readonly var enemy_base: Base;
declare readonly var players: {
	readonly p1: string;
	readonly p2: string;
};
declare readonly var tick: number;
declare readonly var graphics: Graphics;
