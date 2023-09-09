async function clickHandler(){            
    // alert('clicked');
    // alert(document.getElementById('weather').innerText);


    // Fetch the weather details
    let url = `https://api.openweathermap.org/data/2.5/weather?q=manhattan&appid=93f26e3c57081a6210de53b8dcfdfea4`;
    let response = await fetch(url);
    console.log(response.json());


    // print to console
    // get needed info and display it in div
        await fetch(url)
        .then (( weather) => {return weather.json()})
        .then(displayData);
    
    function displayData(data){
        console.log(data)
        console.log(data.main.temp_min)
        document.getElementById(weather).innerHTML=`<h3> Manhattan</h3>



s