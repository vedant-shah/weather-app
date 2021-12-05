console.log("Welcome to the weather app");
let weatherinfo;

function search() {
  let city = document.getElementById('search').value;
  // console.log(city);
  let api_key = config.api_key;

  let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      loc = data.location.name;
      country = data.location.country;
      temp_c = Math.round(data.current.temp_c);
      condition = data.current.condition.text;
      wind_kph = data.current.wind_kph;
      humidity = data.current.humidity;
      uv = data.current.uv;
      time = data.location.localtime;
      time = time.substring(10);
      is_day = data.current.is_day;
      // console.log(time);
      icon = geticon(condition, is_day);
      let html = `
              <div class="container d-flex justify-content-center align-items-center flex-row" style="margin-top: 30%;">
              <input class="form-control mr-sm-2 d-inline" id="search" type="search" placeholder="Search another City" style="width: 200px;" aria-label="Search" >
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="search()">Search</button>
            </div>
            <div class="container py-5 h-100 " style="margin-top:20%;">
          
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-8 col-lg-6 col-xl-4">
          
                  <div class="card" style="color: #4B515D; border-radius: 35px;">
                    <div class="card-body p-4" >
          
                      <div class="d-flex">
                        <h6 class="flex-grow-1">${loc}, ${country}</h6>
                        <h6>${time}</h6>
                      </div>
          
                      <div class="d-flex flex-column text-center mt-5 mb-4">
                        <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${temp_c}°C </h6>
                        <span class="small" style="color: #868B94">${condition}</span>
                      </div>
          
                      <div class="d-flex align-items-center">
                        <div class="flex-grow-1" style="font-size: 1rem;">
                          <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${wind_kph} km/h </span></div>
                          <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${humidity}% </span></div>
                          <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${uv}h </span></div>
                        </div>
                        <div>
                          <img src="${icon}" width="100px">
                        </div>
                      </div>
          
                    </div>
                  </div>
          
                </div>
              </div>
          
            </div>

            <div class="container" style="margin-top: 20%;">
    Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
    </div>
                            `

      // document.getElementById('head').remove();
      document.body.innerHTML = html;
    });
}

function geticon(condition, is_day) {

  if (is_day == 1) {

    switch (condition) {
      case 'Clear':
      case 'Sunny':
        return './weather/weather/64x64/day/113.png';
        break;
      case 'Partly cloudy':
        return './weather/weather/64x64/day/116.png';
        break;
      case 'CLoudy':
      case 'Overcast':
        return './weather/weather/64x64/day/122.png';
        break;
      case 'Mist':
        return './weather/weather/64x64/day/143.png';
        break;
      case 'Fog':
        return './weather/weather/64x64/day/248.png';
        break;
      case 'Light drizzle':
      case 'Patchy light rain':
      case 'Light rain':
      case 'Moderate rain':
      case 'Light rain shower':
      case 'Torrential rain shower':
      case 'Patchy light rain with thunder':
      case 'Moderate or heavy rain with thunder':
      case 'Moderate or heavy rain shower':
      case 'Heavy rain':
        return './weather/weather/64x64/day/308.png';
        break;
    }
  } else if (is_day == 0) {
    switch (condition) {
      case 'Clear':
        return './weather/weather/64x64/night/113.png';
        break;
      case 'Partly cloudy':
        return './weather/weather/64x64/night/116.png';
        break;
      case 'CLoudy':
      case 'Overcast':
        return './weather/weather/64x64/night/122.png';
        break;
      case 'Mist':
        return './weather/weather/64x64/night/143.png';
        break;
      case 'Fog':
        return './weather/weather/64x64/night/248.png';
        break;
      case 'Light drizzle':
      case 'Patchy light rain':
      case 'Light rain':
      case 'Moderate rain':
      case 'Light rain shower':
      case 'Torrential rain shower':
      case 'Patchy light rain with thunder':
      case 'Moderate or heavy rain with thunder':
      case 'Moderate or heavy rain shower':
      case 'Heavy rain':
        return './weather/weather/64x64/night/308.png';
        break;
    }
  }
}