document.getElementById("change").addEventListener("click", change);

function change() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://api.exchangeratesapi.io/v1/latest?access_key= MY_ACCESKEY"
  );
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * rate;
    } 
  };
  
  xhr.send();
}
