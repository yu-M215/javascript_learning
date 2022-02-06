'use strict';

var pet = { type: 'スノーホワイトハムスター', name: 'キラ' };

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet);

// 既存のプロパティ値を変更
pet.name = '山田きら';
// 既存のプロパティを削除
delete pet.type;
// 新規のプロパティを追加
pet.weight = 42;