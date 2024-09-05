<template>
  <div>
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="projects">
        <router-link to="/ResearchProject/project1" class="project-block">
          <div>
            <h2>Tennis Bole</h2>
            <p>A platform helps sports teams discover and recruit talents.</p>
          </div>
        </router-link>
      </div>
      <div class="projects">
        <router-link to="/ResearchProject/project2" class="project-block">
          <div>
            <h2>HoosLost&HoosFound</h2>
            <p>A lost and found website for university community</p>
          </div>
        </router-link>
      </div>
      <div class="projects">
        <router-link to="/ResearchProject/project3" class="project-block">
          <div>
            <h2>Multi-band Distortion VST</h2>
            <p>A multi-band distortion vst plugin using c++ and JUCE framework</p>
          </div>
        </router-link>
      </div>
      <div class="projects">
        <router-link to="/ResearchProject/project4" class="project-block">
          <div>
            <h2>FM bass synthesizer</h2>
            <p>A Game joystick bass synthesizer made by bela,puredata,and 3D printing works</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchProjectView',
}
</script>


<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; /* Centers the blocks vertically */
  gap: 40px; /* Adjust the gap between blocks as needed */
  margin-left: 40px;
}

.projects {
  width: 40%; 
  box-sizing: border-box;
}

.project-block {
  display: block;
  width: 500px;
  height: 120px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.project-block:hover {
  background-color: #f0f0f0;
}
</style>
