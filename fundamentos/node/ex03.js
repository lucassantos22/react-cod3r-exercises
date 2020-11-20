const s1 = require('./ex03_singleton');
const s2 = require('./ex03_singleton');
//Ambos apontam pro mesmo modulo que foi criada, a mesma instância é devolvida.

s1();
s2();
s1();
s2();