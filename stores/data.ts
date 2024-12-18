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
        venues: [] as string[]
    }),
    actions: {
        setQueryFilter(filter: string) {
            this.search.filters = [filter];
        },
        setQuerySearch(search: string) {
            this.search.search = search;
        },
        setClusterId(cluster_id: number) {
            this.search.cluster_id = cluster_id;
        },
        clearConcerts() {
            this.concerts = [];
        },
        getConcerts() {
            return this.concerts;
        },
        async fetchConcerts() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/search', {
                    query: this.search.search,
                    filters: this.search.filters,
                    cluster_id: this.search.cluster_id
                });
                this.concerts = response.data.results;
            } catch (error) {
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
        }
    }
});