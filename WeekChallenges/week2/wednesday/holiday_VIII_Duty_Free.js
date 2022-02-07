function dutyFree(normPrice, discount, hol){
  var discountprice = (discount/100)*(normPrice);
  var result = hol/discountprice;
  return Math.floor(result);
}
