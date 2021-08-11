export function moneyFormat(money) {
  if (money != 0) {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : "";
    return "$" + dollars + cents;
  }
  return "0";
}
