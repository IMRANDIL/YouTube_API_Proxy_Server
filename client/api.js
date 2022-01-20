const APP_URL = 'https://youtube-api-app2.herokuapp.com/videos';

const videosElem = document.querySelector('#videos');

const filterInput = document.querySelector('#filter');

// const rowcontainer = document.querySelector('.row')

let videoElementById = {};


window.addEventListener('DOMContentLoaded', async () => {
    const loading = document.querySelector('.loading');
    loading.textContent = `Loading...`
    const data = await fetch(APP_URL);
    const response = await data.json();

    if (response) {
        loading.textContent = '';
    }
    // console.log(response);
    response.forEach((item) => {
        console.log(item);
        const columnDiv = document.createElement('div');
        columnDiv.className = 'col-4';
        videoElementById[item.id] = columnDiv;
        const link = document.createElement('a');
        link.href = `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`;
        link.setAttribute('target', '_blank');
        const videoelem = document.createElement('div');
        videoelem.className = 'card';

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
        columnDiv.appendChild(link);
        videosElem.appendChild(columnDiv);
        link.appendChild(videoelem)

    });

    //search input....

    filterInput.addEventListener('keyup', (e) => {
        const inputValue = e.target.value;

        if (response) {
            response.forEach((video) => {
                const regExp = new RegExp(inputValue, 'gi');

                if (video.snippet.title.match(regExp)) {
                    //show video..

                    videoElementById[video.id].style.display = '';

                }
                else {

                    videoElementById[video.id].style.display = 'none';
                }
            })
        }
    })


})






