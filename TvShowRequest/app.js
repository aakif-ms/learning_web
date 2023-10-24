const search = document.querySelector("#searchForm");
const clear = document.querySelector("#clear")
const poster = document.querySelector('#poster');
search.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchValue = search.elements.query.value;
    const config = { params: { q: searchValue } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
    console.log(res.data);
    createImg(res.data)
    search.elements.query.value = '';
})

const createImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            const name = document.createElement('p');
            name.innerText = result.show.name;
            img.src = result.show.image.medium;
            poster.append(img);
            poster.append(name);
        }
    }
}

function deleteImg() {
    let child = poster.firstElementChild;
    while (child) {
        poster.removeChild(child);
        child = poster.firstElementChild;
    }
}

clear.addEventListener('click', deleteImg);


