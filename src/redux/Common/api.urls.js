const marvel_api = () => `https://gateway.marvel.com:443/`;

const apiUrls = {
    getCharacters: () =>
        `${marvel_api()}/v1/public/characters?apikey=17344f605a6f1caecd4354aa4c5158e7`
};

export default apiUrls;
