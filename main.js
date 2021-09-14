const city = document.getElementById('city')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const highTemp = document.getElementById('high-temp')
const lowTemp = document.getElementById('low-temp')
const title = document.getElementById('title')
const icon = document.getElementById('icon')

// hourly Ids 
const hrsIcon = document.getElementById('Ihrs')
const hrsIcon1 = document.getElementById('Ihrs1')
const hrsIcon2 = document.getElementById('Ihrs2')
const hrsIcon3 = document.getElementById('Ihrs3')
const hrsIcon4 = document.getElementById('Ihrs4')
const hrsIcon5 = document.getElementById('Ihrs5')
const hrsIcon6 = document.getElementById('Ihrs6')
const hrsIcon7 = document.getElementById('Ihrs7')
// temp 
const hrs0temp = document.getElementById('hrs0temp')
const hrs1temp = document.getElementById('hrs1temp')
const hrs2temp = document.getElementById('hrs2temp')
const hrs3temp = document.getElementById('hrs3temp')
const hrs4temp = document.getElementById('hrs4temp')
const hrs5temp = document.getElementById('hrs5temp')
const hrs6temp = document.getElementById('hrs6temp')
const hrs7temp = document.getElementById('hrs7temp')

// Time 
let getHour = new Date().getHours()
let currentTime = getHour +1
let time1 = currentTime + 1
let time2 = time1 + 1
let time3 = time2 + 1 
let time4 = time3 + 1

document.getElementById('currentTime').innerHTML = ` Now`
document.getElementById('time1').innerHTML = time1
document.getElementById('time2').innerHTML = time2
document.getElementById('time3').innerHTML = time3
document.getElementById('time4').innerHTML = time4


// get hour 


let ctime = currentTime.innerHTML = `${getHour + 1}`
time1.innerHTML =  `${ctime + 1} h`
time2.innerHTML = `${time1 + 1} h`
time3.innerHTML = `${time2 + 1} h`
time4.innerHTML = `${time3 + 1} h`




// daiiy Ids

// document.getElementById('day1').innerHTML = `<p>${today}</p>`
// document.getElementById('day2').innerHTML = time4
// document.getElementById('day3').innerHTML = time4
// document.getElementById('day4').innerHTML = time4





// api key
const auth = 'f1a7b0cdb13277e638d1d521993b9bc1'

// get user current location
navigator.geolocation.getCurrentPosition(position => {

    console.log(position)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${auth}&units=metric`)
    .then(res => {
                    if (!res.ok) {
                        throw Error("Weather data not available")
                    }
                    return res.json()
                })
                .then(data => {
                  console.log(data)

                  //current waether details
                  const iconUrl =  `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`

                  title.textContent = data.timezone
                  description.innerHTML = ` ${data.current.weather[0].description}`
                  temp.innerHTML = `${Math.round(data.current.temp)} &#176 C`
                  
                  icon.innerHTML = `<img src="${iconUrl}"> `
                  lowTemp.innerHTML = `L: ${Math.round(data.daily[0].temp.min)} &#176`
                  highTemp.innerHTML = `<span> H: </span> ${Math.round(data.daily[0].temp.max)} &#176`

                  // end of top


                  //start of main

                  //hourly weather
                  const hourIcon = `http://openweathermap.org/img/wn/${data.hourly[0].weather[0].icon}@2x.png`

                  hrsIcon.innerHTML = `<img src="${hourIcon}" class="img-fluid">`

                //   hr icons 
              const hourIcon1 = `http://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}@2x.png`


hrsIcon1.innerHTML = `<img src="${hourIcon1}" class="img-fluid">`


               const con2 = `http://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}@2x.png`

               hrsIcon2.innerHTML = `<img src="${con2}" class="img-fluid">`

               const con3 = `http://openweathermap.org/img/wn/${data.hourly[3].weather[0].icon}@2x.png`


               hrsIcon3.innerHTML = `<img src="${con3}" class="img-fluid">`

               const con4 = `http://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}@2x.png`


               hrsIcon4.innerHTML = `<img src="${con4}" class="img-fluid">`

           
                //   hourly temp
                  hrs0temp.innerHTML = `${Math.round(data.hourly[0].temp)} &#176`
                hrs1temp.innerHTML = `${Math.round(data.hourly[1].temp)} &#176`
              hrs2temp.innerHTML = `${Math.round(data.hourly[2].temp)} &#176`
                hrs3temp.innerHTML = `${Math.round(data.hourly[3].temp)} &#176`
                hrs4temp.innerHTML = `${Math.round(data.hourly[4].temp)} &#176`

                   
                // weather background
                switch (data.current.weather[0].main) {
                    case "Snow":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
                      break;
                    case "Clouds":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
                      break;
                    case "Fog":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
                      break;
                    case "Rain":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
                      break;
                    case "Clear":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                      break;
                    case "Thunderstorm":
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
                      break;
                      case "haze":
                        document.getElementById("card-top").style.backgroundImage =
                          "url('https://mdbgo.io/ascensus/mdb-advanced/img/haze.gif')";
                        break;
                    default:
                      document.getElementById("card-top").style.backgroundImage =
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                      break;
                  }

                             // daily weather

// daily icons
 const dailyIcon1 = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`

 const dailyIcon2 = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`

 const dailyIcon3 = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`


// daily temp
let today = `${Math.round(data.daily[0].temp.day)} &#176`
let tomorrow = `${Math.round(data.daily[1].temp.day)} &#176`
let dayAfter = `${Math.round(data.daily[2].temp.day)} &#176`

document.getElementById('day1').innerHTML = ` <p>Today: </p>  <p> ${today}</p>  <img src="${dailyIcon1}" class="img-fluid">`
document.getElementById('day2').innerHTML = `<p>Tomorrow: </p> <p>${tomorrow}</p> <img src="${dailyIcon2}" class="img-fluid">`
document.getElementById('day3').innerHTML = ` <p>Day after: </p> <p>${dayAfter}</p> <img src="${dailyIcon3}" class="img-fluid">`


                
                 }).catch(err => console.error(err))
        });
    

