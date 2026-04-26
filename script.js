const apiKey = "4b52f18f663b4b50aa3174444262604";

console.log("v3: The script is updated and running!"); // Check your F12 console for this!

async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (!city) {
        showError("Please enter a city name!");
        return;
    }

    try {
        // CHEAT CODE: If the user didn't type a comma (meaning they didn't specify a country),
        // we quietly append ", India" to prioritize Indian cities. 
        let searchQuery = city;
        if (!city.includes(",")) {
            searchQuery = `${city}, India`; 
        }

        // Fetch using the customized search query
        let weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}&aqi=yes`;
        let response = await fetch(weatherUrl);
        let data = await response.json();

        // If it fails (e.g., they searched for "New York" and "New York, India" doesn't exist),
        // we fall back to exactly what they typed.
        if (data.error) {
            weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
            response = await fetch(weatherUrl);
            data = await response.json();
            
            if (data.error) {
                showError("City not found.");
                return;
            }
        }

        // DISPLAY DATA
        document.getElementById("weatherResult").classList.remove("hidden");
        document.getElementById("errorMsg").innerText = "";

        document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temp").innerText = `${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = data.current.condition.text;
        
        let iconUrl = data.current.condition.icon;
        if (iconUrl.startsWith("//")) {
            iconUrl = "https:" + iconUrl;
        }
        document.getElementById("weatherIcon").src = iconUrl;

        document.getElementById("wind").innerText = data.current.wind_kph + " km/h";
        document.getElementById("humidity").innerText = data.current.humidity + "%";
        document.getElementById("aqi").innerText = data.current.air_quality?.pm2_5?.toFixed(1) || "N/A";

        changeBackground(data.current.condition.text);

    } catch (error) {
        showError("Something went wrong!");
        console.error(error); 
    }
}

function showError(msg) {
    document.getElementById("errorMsg").innerText = msg;
    document.getElementById("weatherResult").classList.add("hidden");
}

function changeBackground(condition) {
    const body = document.body;

    if (condition.includes("Sunny") || condition.includes("Clear")) {
        body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
    } 
    else if (condition.includes("Rain") || condition.includes("Drizzle")) {
        body.style.background = "linear-gradient(135deg, #4e54c8, #8f94fb)";
    } 
    else if (condition.includes("Cloud") || condition.includes("Overcast")) {
        body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    } 
    else {
        body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
    }
}