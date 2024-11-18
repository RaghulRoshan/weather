const apikey="436faef9f6c8ea72d6f4f8185d61b61b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather( city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
            document.querySelector(".error").style.display ="block";
             document.querySelector(".weather").style.display ="none";
        }else{
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML =Math.round (data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
                if(data.weather[0].main =="Clouds"){
                    weatherIcon.src="images/Clouds.png";
                }
                else if(data.weather[0].main =="Clear"){
                    weatherIcon.src="images/Clear.png";
                }
                else if(data.weather[0].main =="Rain"){
                    weatherIcon.src="images/Rain.png";
                }
                else if(data.weather[0].main =="Drizzle"){
                    weatherIcon.src="images/Drizzle.png";
                }
                else if(data.weather[0].main =="Mist"){
                    weatherIcon.src="images/Mist.png";
                }
                else if(data.weather[-0].main =="Snow"){
                    weatherIcon.src="images/Snow.png";
                }
                else if(data.weather[0].main =="Sunny"){
                    weatherIcon.src="images/Sunny.png";
                }
                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display ="none";
            }
   
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

