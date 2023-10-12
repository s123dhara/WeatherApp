const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const err404 = document.querySelector('.not-found')

search.addEventListener('click',()=>{
    const apiKey= '7964279a53c1d011d0080ed3d4a4224b'
    const city = document.querySelector('.search-box input').value;

    if(city === '')
     return ;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(json =>{
        if(json.cod === '404')
        {
            container.style.height = '400px';
            weatherBox.style.display = 'none'
            weatherDetails.style.display = 'none';
            err404.style.display ='block'
            err404.classList.add('fadeIn')
            return;
        }

        err404.style.display ='none'
        err404.classList.remove('fadeIn')
        
        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')

        switch(json.weather[0].main)
        {
            case 'Clear':
                    image.src = 'clearl.png';
                    document.body.style.backgroundImage = 'url("clear.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break;

                case 'Rain':
                    image.src = 'rainl.png';
                    document.body.style.backgroundImage = 'url("rainy.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break;

                case 'Snow':
                    image.src = 'snowl.png';
                    document.body.style.backgroundImage = 'url("snowy.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break;

                case 'Clouds':
                    image.src = 'cloudl.png';
                    document.body.style.backgroundImage = 'url("cloudy.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break;

                case 'Haze':
                    image.src = 'mistl.png';
                    document.body.style.backgroundImage = 'url("haze.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break;
               case 'Smoke':
                    image.src = 'smokyl.png';
                    document.body.style.backgroundImage = 'url("smoke.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break; 
                case 'Fog':
                    image.src = 'fogl.png';
                    document.body.style.backgroundImage = 'url("fog.jpg")';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundPosition = 'center center';
                    break; 

                default:
                    image.src = '';
                    document.body.style.backgroundImage = 'url("photo.jpg")';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;

        description.innerHTML =  `${json.weather[0].description}`
        humidity.innerHTML = `${json.main.humidity}%`
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

        weatherBox.style.display = ''
        weatherDetails.style.display = ''
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn')
        container.style.height = '599px'

    });

})
