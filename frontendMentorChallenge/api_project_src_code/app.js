const showResult = document.querySelector('.show_result');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const latlon = { lat: '', lng: '' } || { lat: '30.5', lng: '50.5' };
mapboxgl.accessToken =
    'pk.eyJ1IjoidGhhbmh0dWFuOTYiLCJhIjoiY2t0NzM0MHpuMG9lbTJvcW5zYTQwOGdmbCJ9.yXoZ7JjKVYp-SfzoEpVu8A';

document.addEventListener('DOMContentLoaded', () => {
    showResult.innerHTML = `<div class="result_id_address result">
                        <h3>ip address</h3>
                        <span class="idAddress">1</span>
                    </div>
                    <div class="result_location result">
                        <h3>location</h3>
                        <span class="location">2</span>
                    </div>
                    <div class="result_timezone result">
                        <h3>timezone</h3>
                        <span class="timezone">3</span>
                    </div>
                    <div class="result_isp result">
                        <h3>isp</h3>
                        <span class="isp">4</span>
                    </div>`;
});

searchBtn.addEventListener('click', () => {
    const searchIp = searchInput.value || '8.8.8.8';
    axios
        .get(
            `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_dLcnbG6gFlBiNG9HPXwPdw4IHOler&ipAddress=${searchIp}`
        )
        .then((res) => res.data)
        .then((data) => {
            if (data) {
                latlon.lng = data.location.lng;
                latlon.lat = data.location.lat;
                console.log(latlon);
                let ipInfo = {
                    ip: data.ip,
                    isp: data.isp,
                    location: data.location,
                };
                console.log(ipInfo);
                showResult.innerHTML = `<div class="result_id_address result">
                        <h3>ip address</h3>
                        <span class="idAddress">${ipInfo.ip}</span>
                    </div>
                    <div class="result_location result">
                        <h3>location</h3>
                        <span class="location">${ipInfo.location.city}, ${ipInfo.location.country}</span>
                    </div>
                    <div class="result_timezone result">
                        <h3>timezone</h3>
                        <span class="timezone">${ipInfo.location.timezone}</span>
                    </div>
                    <div class="result_isp result">
                        <h3>isp</h3>
                        <span class="isp">${ipInfo.isp}</span>
                    </div>`;
                searchInput.value = '';
            } else {
                showResult.innerHTML = `IP address not found`;
                searchInput.value = '';
            }
        })
        .then(() => {
            console.log(latlon);

            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: latlon,
                zoom: 7,
            });
            const marker = new mapboxgl.Marker().setLngLat(latlon).addTo(map);
        });
});
