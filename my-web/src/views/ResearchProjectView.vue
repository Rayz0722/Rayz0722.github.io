<template>
  <div>
    <h1>Research Projects</h1>
    <div class="projects">
      <router-link to="/ResearchProject/project1" class="project-block">
        <div>
          <h2>Project 1</h2>
          <p>Short description of Project 1.</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchProjectView',
}
</script>

<style scoped>
.projects {
  display: flex;
  gap: 20px;
}

.project-block {
  display: block;
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.project-block:hover {
  background-color: #f0f0f0;
}
</style>
