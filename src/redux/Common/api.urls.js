const airtable_api = () => `https://api.airtable.com/v0/appYvuZ1oL4JpsCfV`;

const apiUrls = {
    getPlayers: () => `${airtable_api()}/Users`,
    createPlayer: () => `${airtable_api()}/Users/`
};

export default apiUrls;
