 async function getWeather() {

    let city = document.getElementById("city").value.trim();
    let apiKey = "3ab2e51b52f4c27fc6f9ac691510abdc";

    if (city === "") {
        alert("Enter city name");
        return;
    }

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + city + ",IN" + 
              "&appid=" + apiKey + 
              "&units=metric";

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod != 200) {
            alert("City not found");
            return;
        }

        document.getElementById("temp").innerHTML =
            "Temperature: " + data.main.temp + "°C";

        document.getElementById("desc").innerHTML =
            "Condition: " + data.weather[0].description;

        document.getElementById("humidity").innerHTML =
            "Humidity: " + data.main.humidity + "%";

    } catch (error) {
        alert("Check internet");
    }
}