const heapSort = async (array, callback, delay, setIsSorting) => {
    setIsSorting(true);
    const heapify = async (arr, length, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < length && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < length && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        await new Promise((resolve) => setTimeout(resolve, delay));
        callback([...arr], largest); // Actualiza el estado
  
        await heapify(arr, length, largest);
      }
    };
  
    const buildMaxHeap = async (arr) => {
      const length = arr.length;
      for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        await heapify(arr, length, i);
      }
    };
  
    await buildMaxHeap(array);
  
    for (let i = array.length - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      await new Promise((resolve) => setTimeout(resolve, delay));
      callback([...array], i); // Actualiza el estado
  
      await heapify(array, i, 0);
    }
    callback([...array], undefined); // Actualiza el estado
    await setIsSorting(false);
};

export { heapSort };  