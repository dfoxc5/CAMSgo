import Dexie from 'dexie';
import { Estate } from './estate';

export class MyAppDatabase extends Dexie {
   estates: Dexie.Table<Estate, number>;

   constructor () {
      super('MyAppDatabase');
      let db = this;
      db.version(1).stores({
         estates: '++id, firstName, lastName',
      });
      db.estates.mapToClass(Estate);
   }
}

export var db = new MyAppDatabase();


