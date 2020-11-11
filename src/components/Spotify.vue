<template>
    <div>
        toto
    </div>
</template>

<script>
export default {
    name: "Spotify",
    data() {
        return {
            spotifyApi: ""
        }
    },
    created() {
        var SpotifyWebApi = require('spotify-web-api-node');
        var spotifyApi = new SpotifyWebApi({
            clientId: '6dd62c766bac4b9985f79172443bbfe7',
            clientSecret: '924bb59a88af425facc483ebf976945c',
            redirectUri: 'http://www.example.com/callback'
        });
        console.log(spotifyApi.searchArtists('Kendrick'))
   },
   methods: {
       getAlbum() {
            this.spotifyApi.getArtistAlbums(
                '43ZHCT0cAZBISjO8DG9PnE',
                { limit: 10, offset: 20 },
                function(err, data) {
                    if (err) {
                        console.error('Something went wrong!');
                    } else {
                        //console.log(data.body);
                        return data.body
                    }
                }
            );
       }
   }
   
}
</script>

<style scoped>

</style>