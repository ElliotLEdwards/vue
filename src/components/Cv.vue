<template>
    <div>
        <pdf
            src="http://elliotedwards.com/pdf/CV.pdf"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"
        ></pdf>
    </div>
</template>
<style scoped>

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