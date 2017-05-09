
exports.findMinMax = function findMinMax(lists){
  var maxNumber;var minNumber;
  maxNumber = lists[0];
  minNumber = lists[0];
  for (i=0;i<lists.length;i++){
    if (lists[i] > maxNumber){
      maxNumber = lists[i];
    }else{
      minNumber = lists[i]
    }
  }
  if (minNumber === maxNumber){
    return [minNumber];
 }else{
   return [minNumber,maxNumber];
 }
}

