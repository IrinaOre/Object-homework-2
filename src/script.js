"use strict";

const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export const popupAttacks = function (object) {
  const specialAttacks = [];
  for (const attack of character.special) {
    const { id, name, description, icon } = attack;
    specialAttacks.push({
      id,
      name,
      description:
        description !== undefined ? description : "Описание недоступно",
    });
  }
  return specialAttacks;
};
console.log(popupAttacks(character));
