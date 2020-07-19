<template>
    <div>
       
    </div>
</template>

<script>
import { SpotifyWebApi } from './spotify.js';

export default {
    name: "Spotify",
    beforeMount(){
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken('');
    },
    data() {
        return {
           // s: SpotifyWebApi
        }
    }
}
</script>

<style scoped>

</style>