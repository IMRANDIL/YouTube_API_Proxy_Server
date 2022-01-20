const APP_URL = 'https://youtube-api-app2.herokuapp.com/videos';

const videosElem = document.querySelector('#videos');

const fetchData = async (url) => {
    const data = await fetch(url);
    const response = await data.json();
    // console.log(response);
    response.forEach((item) => {
        console.log(item);
        const columnDiv = document.createElement('div');
        columnDiv.className = 'col-4';
        const videoelem = document.createElement('div');
        videoelem.className = 'card';
        columnDiv.appendChild(videoelem);
        const img = document.createElement('img');
        if (item.snippet.thumbnails.high) {
            img.src = item.snippet.thumbnails.high.url;
        }

        img.className = 'card-img-top';
        const mediaBody = document.createElement('div');
        mediaBody.className = 'card-body';
        if (item.snippet.title === 'Private video') return;
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = item.snippet.title;
        mediaBody.appendChild(h5);
        videoelem.appendChild(img);
        videoelem.appendChild(mediaBody);

        videosElem.appendChild(columnDiv);

    })
}


fetchData(APP_URL);