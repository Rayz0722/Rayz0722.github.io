<template>
  <h1>{{ msg }}</h1>
  <div class="profile-container">
    <div>
      <a :href="linkedInUrl" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i> <!-- linkedin Icon-->
      </a>

      <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> <!-- GitHub Icon -->
      </a>
      <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>  <!-- Instagram Icon -->
      </a>
    </div>
    <div class="MyProfile">
      <p> Hi there! I'm Ruiyang Zhou, and this is my personal website.</p>
      <p> Email: rz3zv@virginia.edu Tel: 434-257-7610</p>
      <p> Education: University of Virginia, Bachelor of Art, Computer Science</p>
      <p> Field of Interest: Computer architecture,Computer System, Digital Signal Processing, Music production, Sound Synthesis, Audio Engineering etc.</p>
      <p> Programming Languages: C++, Python, X86 Assembly, HTML, Java, Javascript </p>
      <p> Technology/Environment: Xilinx Vitis, JUCE, Django, OpenCL, Vivado, Vue.js, SolidWorks, Ardruino, Latex, Ableton, Pure data</p>
      <p> Courses Taken : Software Development Method, Discrete Math, Program and Data Representation,  Intro to Cybersecurity, Advanced Software Development, Discrete Math and Theory 2 , Data Structure and Algorithm 2, Computer Architecture, Hardware Security, Digital Signal Processing, Operating System.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProfile',
  props: {
    msg: String
  },
  data() {
    return {
      linkedInUrl: 'https://www.linkedin.com/in/ruiyang-zhou', // LinkedIn URL
      githubUrl: 'https://github.com/Rayz0722', // GitHub URL
      instagramUrl: 'https://www.instagram.com/rayzry22/', // Instagram URL
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-container {
  margin: 100px; 
}
.MyProfile {
  text-align: left;
  padding: 20px; /* Add padding if you want space inside the block */
  border: 1px solid #ccc; /* Optional: Add a border around the block */
  border-radius: 10px; /* Optional: Add rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for better visibility */
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #969897;
}

i {
  font-size: 30px;
  margin-right: 20px;
}
i.fa-linkedin {
  color: #0077b5; /* LinkedIn brand color */
}
i.fa-github {
  color: #333; /* GitHub brand color */
}
i.fa-instagram {
  color: #e4405f; /* Instagram brand color */
}
</style>
