import React from 'react';

let s = 123456789;
function random() {
  return Math.floor(Math.random() * 6);
}



export function generateData(count) {
  var i;
  var dia = ['Dia 1', 'Dia  2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6'];
  var meta = ['50000', '100000', '75000', '175000', '90000', '45000'];
  var duracao = ['45','30','31','20','365','90'];
  var discount = ['1', '0.15', '0.20', '0.05', '0.08', '0.07'];
  var items = [],
    startBirthDate = Date.parse('1/1/1975'),
    endBirthDate = Date.parse('1/1/1992');

  for (i = 0; i < count; i++) {
    var birthDate = new Date(startBirthDate + Math.floor(
      random() *
                (endBirthDate - startBirthDate) / 10));
    birthDate.setHours(12);

    var nameIndex = random();
    var qt = 6;
    var item = {
      id: i + 1,
      dia: dia[i],
      meta: ~~(parseInt(meta[i]) / qt),
      duracao: duracao[random()],
      discount: discount[random()]
    };
    items.push(item);
  }
  return items;
}

