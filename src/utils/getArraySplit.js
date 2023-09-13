

function getArraySplit(array, elementsBySubarray) {
    const subarrays = [];
    for (let i = 0; i < array.length; i += elementsBySubarray) {
      subarrays.push(array.slice(i, i + elementsBySubarray));
    }
    return subarrays;
  }

export default getArraySplit