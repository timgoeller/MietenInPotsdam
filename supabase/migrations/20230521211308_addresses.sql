create table public.addresses (
  id integer primary key generated always as identity,
  street text,
  house_number integer,
  addition text
);