// script.js
import config from './config.js';

let map;
let selectedLatLng = null;

async function initMap() {
  const res = await fetch(config.apiUrl);
  const memories = await res.json();

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.033964, lng: 121.564472 },
    zoom: 12,
  });

  map.addListener("click", (e) => {
    selectedLatLng = e.latLng;
    document.getElementById("status").innerText = `已選地點：(${selectedLatLng.lat().toFixed(5)}, ${selectedLatLng.lng().toFixed(5)})`;
  });

  memories.forEach(m => {
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(m.lat), lng: parseFloat(m.lng) },
      map,
      title: m.name
    });

    const info = new google.maps.InfoWindow({
      content: `
        <div class="marker-info">
          <h4>${m.name}</h4>
          <p>${m.note}</p>
          <img src="${m.photoUrl}" />
        </div>
      `
    });

    marker.addListener("click", () => info.open(map, marker));
  });
}

document.getElementById("submit").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const note = document.getElementById("note").value;
  const photo = document.getElementById("photo").files[0];

  if (!name || !note || !photo || !selectedLatLng) {
    alert("請填寫所有欄位並選擇地點");
    return;
  }

  document.getElementById("status").innerText = "上傳中...";

  const formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", config.uploadPreset);

  const uploadRes = await fetch(`https://api.cloudinary.com/v
