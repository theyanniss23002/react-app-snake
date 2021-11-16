const airtable_api = () => `https://api.airtable.com/v0/appYvuZ1oL4JpsCfV`;
const ip_api = () => `https://geolocation-db.com/json`;

const apiUrls = {
    getPlayers: () => `${airtable_api()}/Users`,
    createPlayer: () => `${airtable_api()}/Users/`,
    getIp: () => `${ip_api()}/json`
};

export default apiUrls;
