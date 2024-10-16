function weather() {
  let city = document.getElementById("place").value;
  let name = document.getElementById("name");
  let degrees = document.getElementById("degree");
  let windSpeed = document.getElementById("wind");
  let fog = document.getElementById("foog");
  let pressure = document.getElementById("pressure");
  let MaxTemp = document.getElementById("Max-Temp");
  let minTemp = document.getElementById("Min-temp");
  let id = document.getElementById("idnbr");
  let seelevel = document.getElementById("seelevel");
  let clouds = document.getElementById("Clouds");

  let ApiKey = "5895e0bad79912587fdc3eb2838f1312";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.name;
      // console.log(data);
      degrees.innerHTML = Math.floor(data.main.feels_like - 273) + "°C";
      windSpeed.innerHTML = data.wind.speed + "KmpH";
      fog.innerHTML = data.main.humidity + "%";
      pressure.innerHTML = data.main.pressure + "Pr";
      MaxTemp.innerHTML = data.main.temp_max + "°C";
      minTemp.innerHTML = data.main.temp_min + "°C";
      id.innerHTML = data.sys.id;
      seelevel.innerHTML = data.main.sea_level;
      clouds.innerHTML = data.clouds.all;
      place.value = "";
    });
}
