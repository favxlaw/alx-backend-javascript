//task and task2 are declared with let,
// ensuring that they are block-scoped and not overwritten within the conditional block.
export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      task = true;
      task2 = false;
    }
  
    return [task, task2];
  }
  