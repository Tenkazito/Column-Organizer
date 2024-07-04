const mergeSort = async (array, callback, delay, setIsSorting) => {
    setIsSorting(true);
    const merge = async (arr, aux, leftStart, mid, rightEnd) => {
      let left = leftStart;
      let right = mid + 1;
      let index = leftStart;
  
      while (left <= mid && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
          aux[index] = arr[left];
          left++;
        } else {
          aux[index] = arr[right];
          right++;
        }
        index++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        callback([...aux], index); // Actualiza el estado con el array combinado
      }
  
      while (left <= mid) {
        aux[index] = arr[left];
        left++;
        index++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        callback([...aux], index); // Actualiza el estado con el array combinado
      }
  
      while (right <= rightEnd) {
        aux[index] = arr[right];
        right++;
        index++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        callback([...aux], index); // Actualiza el estado con el array combinado
      }
  
      for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = aux[i];
      }
    };
  
    const mergeSortRecursive = async (arr, aux, leftStart, rightEnd) => {
      if (leftStart >= rightEnd) {
        return;
      }
  
      const mid = Math.floor((leftStart + rightEnd) / 2);
  
      await mergeSortRecursive(arr, aux, leftStart, mid);
      await mergeSortRecursive(arr, aux, mid + 1, rightEnd);
      await merge(arr, aux, leftStart, mid, rightEnd);
    };
  
    const aux = [...array];
    await mergeSortRecursive(array, aux, 0, array.length - 1);
    await callback([...array], undefined);
    await setIsSorting(false);
};

export { mergeSort };