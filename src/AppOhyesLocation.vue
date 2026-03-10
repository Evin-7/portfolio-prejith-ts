<template>
  <div class="map-wrapper">
    <!-- Header -->
    <div class="map-header">
      <h1 class="map-title">📍 People Map</h1>
      <span class="map-count">{{ people.length }} locations</span>
    </div>

    <!-- Filter / Search -->
    <div class="map-controls">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 Search by name or city..."
        class="search-input"
      />
      <button class="btn-reset" @click="resetView">Reset View</button>
    </div>

    <!-- Map Container -->
    <div id="map" ref="mapRef" class="map-container"></div>

    <!-- Sidebar: People List -->
    <div class="sidebar">
      <p class="sidebar-title">People</p>
      <ul class="people-list">
        <li
          v-for="person in filteredPeople"
          :key="person.id"
          class="person-item"
          :class="{ active: selectedId === person.id }"
          @click="focusPerson(person)"
        >
          <span class="person-avatar">{{ person.name.charAt(0) }}</span>
          <div class="person-info">
            <strong>{{ person.name }}</strong>
            <small>{{ person.city }}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleMap',

  data() {
    return {
      map: null,
      markers: [],
      selectedId: null,
      search: '',

      // ✅ Replace this array with your actual data
      people: [
        { id: 1,  name: 'Arjun Nair',        city: 'Thiruvananthapuram', lat: 8.5241,  lon: 76.9366 },
        { id: 2,  name: 'Divya Menon',       city: 'Kollam',             lat: 8.8932,  lon: 76.6141 },
        { id: 3,  name: 'Gokul Pillai',      city: 'Pathanamthitta',     lat: 9.2648,  lon: 76.7870 },
        { id: 4,  name: 'Haritha Krishnan',  city: 'Alappuzha',          lat: 9.4981,  lon: 76.3388 },
        { id: 5,  name: 'Ishaan Varma',      city: 'Kottayam',           lat: 9.5916,  lon: 76.5222 },
        { id: 6,  name: 'Jaya Suresh',       city: 'Idukki',             lat: 9.9189,  lon: 77.1025 },
        { id: 7,  name: 'Kiran Unni',        city: 'Ernakulam',          lat: 9.9312,  lon: 76.2673 },
        { id: 8,  name: 'Lakshmi Raj',       city: 'Thrissur',           lat: 10.5276, lon: 76.2144 },
        { id: 9,  name: 'Manu George',       city: 'Palakkad',           lat: 10.7867, lon: 76.6548 },
        { id: 10, name: 'Nithya Babu',       city: 'Malappuram',         lat: 11.0730, lon: 76.0740 },
        { id: 11, name: 'Oommen Chacko',     city: 'Kozhikode',          lat: 11.2588, lon: 75.7804 },
        { id: 12, name: 'Priya Santhosh',    city: 'Wayanad',            lat: 11.6854, lon: 76.1320 },
        { id: 13, name: 'Rajeev Kumar',      city: 'Kannur',             lat: 11.8745, lon: 75.3704 },
        { id: 14, name: 'Sindhu Mohan',      city: 'Kasaragod',          lat: 12.4996, lon: 74.9869 },
        { id: 15, name: 'Tijo Thomas',       city: 'Kochi',              lat: 9.9390,  lon: 76.2610 },
        { id: 16, name: 'Uma Devi',          city: 'Thrissur',           lat: 10.5300, lon: 76.2200 },
        { id: 17, name: 'Vinod Prakash',     city: 'Kozhikode',          lat: 11.2450, lon: 75.7720 },
        { id: 18, name: 'Ananya Rajan',      city: 'Kollam',             lat: 8.9100,  lon: 76.6300 },
        { id: 19, name: 'Bibin Alex',        city: 'Kottayam',           lat: 9.6050,  lon: 76.5100 },
        { id: 20, name: 'Chithra Bose',      city: 'Palakkad',           lat: 10.7750, lon: 76.6600 },
        { id: 21, name: 'Deepak Sasi',       city: 'Thiruvananthapuram', lat: 8.5300,  lon: 76.9500 },
        { id: 22, name: 'Elsa Mathew',       city: 'Alappuzha',          lat: 9.5000,  lon: 76.3200 },
        { id: 23, name: 'Faizal Rahman',     city: 'Malappuram',         lat: 11.0850, lon: 76.0600 },
        { id: 24, name: 'Girish Nambiar',    city: 'Kannur',             lat: 11.8800, lon: 75.3600 },
        { id: 25, name: 'Hema Chandran',     city: 'Idukki',             lat: 9.9100,  lon: 77.0900 },
        { id: 26, name: 'Ibrahim Kunju',     city: 'Wayanad',            lat: 11.6900, lon: 76.1200 },
        { id: 27, name: 'Jasmine Philip',    city: 'Ernakulam',          lat: 9.9400,  lon: 76.2800 },
        { id: 28, name: 'Krishnadev Nair',   city: 'Kasaragod',          lat: 12.5100, lon: 74.9900 },
        { id: 29, name: 'Lincy Joseph',      city: 'Pathanamthitta',     lat: 9.2700,  lon: 76.7800 },
        { id: 30, name: 'Mohan Das',         city: 'Kochi',              lat: 9.9600,  lon: 76.2900 },
      ],
    }
  },

  computed: {
    filteredPeople() {
      const q = this.search.toLowerCase()
      return this.people.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
      )
    },
  },

  mounted() {
    this.initMap()
  },

  beforeUnmount() {
    if (this.map) this.map.remove()
  },

  watch: {
    filteredPeople() {
      this.renderMarkers()
    },
  },

  methods: {
    initMap() {
      // Leaflet must be loaded via CDN in index.html (see README below)
      const L = window.L
      if (!L) {
        console.error('Leaflet not loaded. Add Leaflet CDN to index.html')
        return
      }

      this.map = L.map(this.$refs.mapRef, {
        center: [10.5, 76.5],
        zoom: 8,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(this.map)

      this.renderMarkers()
    },

    renderMarkers() {
      const L = window.L
      // Remove old markers
      this.markers.forEach(m => m.remove())
      this.markers = []

      this.filteredPeople.forEach(person => {
        const marker = L.circleMarker([person.lat, person.lon], {
          radius: 10,
          fillColor: '#3b82f6',
          color: '#1d4ed8',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.85,
        })
          .addTo(this.map)
          .bindPopup(
            `<div style="font-family:sans-serif;min-width:120px">
              <strong style="font-size:14px">${person.name}</strong><br/>
              <span style="color:#555">📍 ${person.city}</span><br/>
              <small style="color:#888">${person.lat.toFixed(4)}, ${person.lon.toFixed(4)}</small>
            </div>`,
            { maxWidth: 200 }
          )

        marker.on('click', () => {
          this.selectedId = person.id
        })

        this.markers.push(marker)
      })
    },

    focusPerson(person) {
      this.selectedId = person.id
      this.map.flyTo([person.lat, person.lon], 10, { duration: 1 })
      // Open popup for this person's marker
      const idx = this.filteredPeople.findIndex(p => p.id === person.id)
      if (this.markers[idx]) this.markers[idx].openPopup()
    },

    resetView() {
      this.selectedId = null
      this.search = ''
      this.map.flyTo([10.5, 76.5], 8, { duration: 1 })
    },
  },
}
</script>

<style scoped>
.map-wrapper {
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr 260px;
  grid-template-areas:
    "header  header"
    "controls controls"
    "map     sidebar";
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background: #f1f5f9;
}

/* Header */
.map-header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: #1e3a5f;
  color: white;
}
.map-title  { margin: 0; font-size: 20px; font-weight: 700; }
.map-count  { font-size: 13px; background: #3b82f6; padding: 4px 12px; border-radius: 20px; }

/* Controls */
.map-controls {
  grid-area: controls;
  display: flex;
  gap: 10px;
  padding: 10px 16px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}
.search-input {
  flex: 1;
  padding: 8px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
}
.search-input:focus { border-color: #3b82f6; }
.btn-reset {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.btn-reset:hover { background: #2563eb; }

/* Map */
.map-container {
  grid-area: map;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: #fff;
  border-left: 1px solid #e2e8f0;
  overflow-y: auto;
  padding: 12px 0;
}
.sidebar-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #94a3b8;
  padding: 0 14px 8px;
  border-bottom: 1px solid #f1f5f9;
  margin: 0 0 6px;
}
.people-list { list-style: none; margin: 0; padding: 0; }
.person-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 0.15s;
  border-left: 3px solid transparent;
}
.person-item:hover         { background: #f8fafc; }
.person-item.active        { background: #eff6ff; border-left-color: #3b82f6; }
.person-avatar {
  width: 34px;
  height: 34px;
  background: #dbeafe;
  color: #1d4ed8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.person-info         { display: flex; flex-direction: column; }
.person-info strong  { font-size: 13px; color: #1e293b; }
.person-info small   { font-size: 11px; color: #64748b; }
</style>