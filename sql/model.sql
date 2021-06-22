create database internship_app;

create table categories(
    category_id serial not null primary key,
    category_title varchar(124) not null,
    category_added_at timestamptz default current_timestamp
);

insert into categories (category_title) values ('ToDo');

create table tasks(
    task_id serial not null primary key,
    category_id int references categories(category_id),
    task_text varchar(246) not null,
    task_added_at timestamptz default current_timestamp
);

insert into tasks (category_id, task_text) values (1,'Task1');

create table users (
    user_id serial not null primary key,
    task_id int references tasks(task_id),
    user_name varchar(164) not null,
    user_password varchar(60) not null,
    user_created_at timestamptz default current_timestamp
);

insert into users(user_name, user_password) values ('admin', 'bismillah');

create table comments (
    comment_id serial not null primary key,
    task_id int references tasks(task_id),
    user_id int references users(user_id),
    comment_text varchar(246) not null,
    comment_created_at timestamptz default current_timestamp
);