export function moneyFormat(money) {
  if (typeof money !== "undefined") {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : "";
    return "$" + dollars + cents;
  }
  return "0";
}

export function getJson(options) {
  const { method, url } = options;
  let result = {};

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        result.products = xhr.response;
        result.headers = xhr
          .getAllResponseHeaders()
          .split("\r\n")
          .reduce((obj, item) => {
            let [key, value] = item.split(": ");
            obj[key] = value;
            return obj;
          }, {});
        resolve(result);
      } else {
        reject(xhr.status + ":" + xhr.statusText);
      }
    };
    xhr.onerror = () => reject("Something happen!");
  });
}
