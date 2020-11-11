<template>
    <div class="d-flex justify-content-center">
        <form action="http://elliotedwards.com/pdf/CV.pdf">
            <button type="button submit" target="_blank" class="btn btn-outline-primary download_button">Download</button>
        </form>
        <pdf
            class="pdf_area"
            src="http://elliotedwards.com/pdf/CV.pdf"
        ></pdf>
    </div>
</template>

<style scoped>
    .pdf_area {
        width: 70%;
        margin: auto;
    }
    .download_button {
        margin: auto;
    }
</style>

<script>
import pdf from 'vue-pdf'


export default {
    name: "Cv",
    components: {
        pdf
    }
}
</script>