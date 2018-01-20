var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value){
  var obj2 = Object.assign({}, obj);
  obj2[key] = value;
  return obj2;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]= value;
  return obj;
}