<template>
    <div class="Resume">
      <!-- <h1>This is an resume / cv page</h1>-->
      <!-- <a :href="pdfUrl" target="Download PDF"> Download PDF </a> -->
      <iframe :src="pdfUrl" width="70%" height="1000px"></iframe>
    </div>
  
  
  </template>


<script>
// Importing a PDF file from assets
import pdfUrl from '@/assets/Ruiyang_CV.pdf';

export default {
  data() {
    return {
      pdfUrl
    };
  }
}
</script>