const googleApiKey = "AIzaSyA2QVmgNm76WWnklJlgmAZFV624Kxj3Ro0";
const mapsUrl = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${googleApiKey}`;

export default {
    getLocation: (input, callback) => {
        const url = `${mapsUrl}&input=${input}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then(x => x.json())
            .then(callback)
            .catch(console.error);
    }
}