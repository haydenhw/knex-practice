create type grocery as enum (
		'dairy',
		'meat',
		'produce',
		'dry goods',
		'deli'
);

create table shopping_list (
		id serial primary key,
   	price decimal,
		grocery grocery,
		name text,
		date_added timestamp default now(),
		checked boolean default false
);

