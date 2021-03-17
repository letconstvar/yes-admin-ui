export function deepCopy (sourceArr: any) {
  let copyItem: any = isArray(sourceArr) ? [] : {};
  for (let key in sourceArr) {
    if (isObject(sourceArr[key]) || isArray(sourceArr[key])) {
      copyItem[key] = deepCopy(sourceArr[key])
    } else {
      copyItem[key] = sourceArr[key]
    }
  }
  return copyItem;
}

export function isObject (val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isArray (val: any) {
  return Object.prototype.toString.call(val) === '[object Array]'
}