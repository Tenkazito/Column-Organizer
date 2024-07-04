const quickSort = async (array, callback, delay, setIsSorting) => {
    setIsSorting(true);
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          await new Promise((resolve) => setTimeout(resolve, delay));
          callback([...arr], j); // Llama al callback con el array actualizado y el índice actual
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      await new Promise((resolve) => setTimeout(resolve, delay));
      callback([...arr], high); // Llama al callback con el array actualizado y el índice actual
      return i + 1;
    };
  
    const quickSortRecursive = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSortRecursive(arr, low, pi - 1);
        await quickSortRecursive(arr, pi + 1, high);
      }
    };
  
    await quickSortRecursive(array, 0, array.length - 1);
    await callback([...array], undefined);
    await setIsSorting(false);
  };

export { quickSort };