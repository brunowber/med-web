import React from 'react';

let s = 123456789;
function random() {
  return Math.floor(Math.random() * 6);
}



export function generateData(count) {
  var i;
  var dia = ['Dia 1', 'Dia  2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6'];
  var meta = ['50000', '100000', '75000', '175000', '90000', '45000'];
  var contato = ['25', '60', '8', '100', '90', '83'];
  var agenda = ['8', '25', '30', '50', '45', '41'];
  var proposta = ['4', '12', '15', '25', '22', '20'];
  var fechados = ['2', '6', '7', '12', '11', '10'];
  var progresso = ['1', '0.15', '0.20', '0.05', '0.08', '0.07'];
  var items = [],
    startBirthDate = Date.parse('1/1/1975'),
    endBirthDate = Date.parse('1/1/1992');

  for (i = 0; i < count; i++) {
    var birthDate = new Date(startBirthDate + Math.floor(
      random() *
                (endBirthDate - startBirthDate) / 10));
    birthDate.setHours(12);

    var nameIndex = random();
    var qtDias = 6;
    var item = {
      id: i + 1,
      dia: dia[i],
      meta: "R$ "+(~~(parseInt(meta[i])/qtDias)),
      contato: contato[i],
      agenda: agenda[i],
      proposta: proposta[i],
      fechados: fechados[i],
      progresso: progresso[random()]
    };
    items.push(item);
  }
  return items;
}

