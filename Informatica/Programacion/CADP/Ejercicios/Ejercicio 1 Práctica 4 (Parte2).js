Ejercicio 1 Práctica 4 (Parte2)



const;
dF: 500
type
numeros: array 1..dF of integer;
var
v := numeros;


procedure cargarVector (var v: numeros, dF: integer);
var
    i: integer;
begin
    for i: 1 to dF do begin
    read (v[i]);
    end;
end; 


function encontré (v: numeros): Boolean;
var
   i, n: integer;
begin
for i:= 1 to dF do begin
    read(n);
    encontré (v[i] = n); 
    end;
end;


function encontréOrdenado (v:numeros, valor integer): Boolean;
var
    n: integer;
begin
    n:= 1
    while (v[n] < valor) do begin



