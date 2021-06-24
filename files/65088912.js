// Start class CreateTurnQueue
initQueue(list = {}) {
   
   const newMap = new Map();
   
   // Both Object and Map has entries method although the order is different
   const iterator = list.entries();
   
   for(const item of iterator) {
      const [point, creature] = item;
      newMap.set(point, creature);
      this.creatureArray.push(creature);
   }
   this.creatureMap = newMap;
   
}
// End class CreateTurnQueue
