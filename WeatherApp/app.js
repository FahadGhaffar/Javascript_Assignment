let getLocation = document.getElementById("getLocation");




async function btnSearch() {
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${getLocation.value}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
    ).then((res) => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
}


