function merge(arr, low, mid, high) {
    let temp = new Array();

    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low;i <= high;i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    // Base case
    if (low >= high) return;        

    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);

    merge(arr, low, mid, high);

}


const arr = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(arr, 0, arr.length-1);
console.log(arr);
