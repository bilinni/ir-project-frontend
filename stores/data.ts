import { defineStore } from 'pinia';
import axios from 'axios';

interface Concert {
    id: number;
    name: string;
    date: string;
    location: string;
    venues: string;
}

interface searchQuery {
    search: string | null;
    filters: string[] | null;
    cluster_id: number | null;
}

export const useDataStore = defineStore('data', {
    state: () => ({
        search: {
            search: '',
            filters: null,
            cluster_id: null
        } as searchQuery,
        concerts: [] as Concert[],
        locations: [] as string[],
        venues: [] as string[],
        clusterKeywords: Object,
        selectedLocation: '' as string,
        selectedVenue: '' as string,
        concert: null as Concert | null
    }),
    actions: {
        setQueryFilter(filter: [string]) {
            this.search.filters = filter;
        },
        setQuerySearch(search: string) {
            this.search.search = search;
        },
        setClusterId(cluster_id: number) {
            this.search.cluster_id = cluster_id;
        },
        setSelectedLocation(location: string) {
            this.selectedLocation = location;
        },
        setSelectedVenue(venue: string) {
            this.selectedVenue = venue;
        },
        clearConcerts() {
            this.concerts = [];
        },
        getConcerts() {
            return this.concerts;
        },
        getSelectedLocation() {
            return this.selectedLocation;
        },
        getSelectedVenue() {
            return this.selectedVenue;
        },
        getKeywords() {
            return this.search.filters;
        },
        async fetchConcerts() {
            try {
                let filters = [];
                if (this.selectedLocation) {
                    filters.push(this.selectedLocation);
                }
                if (this.selectedVenue) {
                    filters.push(this.selectedVenue);
                }
                if (this.search.filters) {
                    filters.push(...this.search.filters);
                }
                const response = await axios.post('http://127.0.0.1:8000/search', {
                    query: this.search.search,
                    filters: filters,
                    cluster_id: this.search.cluster_id
                });
                this.concerts = response.data.results;
            } catch (error) {
                this.concerts = [];
                console.error('Error fetching concerts:', error);
            }
        },
        async fetchLocations() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/locations');
                this.locations = response.data.locations;
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        },
        async fetchVenues() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/venue');
                this.venues = response.data.venue;
            } catch (error) {
                console.error('Error fetching venues:', error);
            }
        },
        async fetchConcertById(concertId: number) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/event/${concertId}`);
                this.concert = response.data.event;
            } catch (error) {
                this.concert = null;
                console.error('Error fetching concert by ID:', error);
            }
        },
        async fetchClusterKeywords() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/cluster-keywords', {
                    "text_col": "text",
                    "num_clusters": 30,
                    "num_keywords": 3
                  });
                this.clusterKeywords = response.data.keywords;
            } catch (error) {
                console.error('Error fetching cluster keywords:', error);
            }
        }
    }
});