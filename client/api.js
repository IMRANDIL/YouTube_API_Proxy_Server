const APP_URL = 'https://youtube-api-app2.herokuapp.com/videos';

const fetchData = async (url) => {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
}


fetchData(APP_URL);