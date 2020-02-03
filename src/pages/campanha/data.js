import React from 'react';


let s = 123456789;
function random() {
  
  return Math.floor(Math.random() * 6);
}



export function generateData(count) {
  var i;
  var meio = ['Facebook', 'Instagram', 'Propaganda no Google', 'Whats App', 'E-mail', 'Snapchat'];
  var meta = ['R$ 50.000', 'R$ 100.000', 'R$ 75.000', 'R$ 175.000', 'R$ 90.000', 'R$ 45.000'];
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
    var item = {
      id: i + 1,
      meio: meio[nameIndex],
      meta: meta[random()],
      duracao: duracao[random()],
      discount: discount[random()]
    };
    items.push(item);
  }
  return items;
}

