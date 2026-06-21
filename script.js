async function getWeather(){

    const city =
        document.getElementById("cityInput").value;

    const result =
        document.getElementById("weatherResult");

    try{

        const response =
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5832bf1f69788913cfd0955ba9b0faa5&units=metric`
            );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>

            <p>
                Temperature:
                ${data.main.temp} °C
            </p>

            <p>
                Humidity:
                ${data.main.humidity} %
            </p>

            <p>
                Wind Speed:
                ${data.wind.speed} m/s
            </p>
        `;

    }
    catch(error){

        result.innerHTML =
            `<p>${error.message}</p>`;
    }
}
