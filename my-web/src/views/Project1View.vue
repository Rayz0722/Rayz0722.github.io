<template>
    <div>
      <h2>Tennis Bole</h2>
      <div class = "container">
      <h4>Introduction</h4>
      <p>
        This is a project initialized in Hacklytics 2021 GT Athletics - Tennis Track. 
        It is designed to help university coaches to find talented tennis players in various websites from high school to college level.
        In the end, this project won the Best GT Athletics in Hacklytics 2021, our team gained the contract from the GT Athletics to further develop the project. Therefore, the display part of the project is only for the Hacklytics version.
        Here is an archived repo of github: <a href="https://github.com/LideLinusZhang/Tennis" target="_blank">Tennis Bole</a>
      </p>
      <h4>How we built it</h4>
      <p>
        The project can be divided into two parts: the fetcher and the analyzer. The fetcher is a web crawler written with Python and fetches players’ data such as names and scores from UTR and ATP Tour. The fetched data are stored as .csv files and can be read by the analyzer.

        The analyzer is a GUI program written with C#. It reads the .csv files, cross-references player data from UTR and ATP Tour, and generates unified player entries, removing players based on age limits. Then, based on the unified entries, the analyzer calculates a rank/score (called MyRank) based on UTR scores, ATP rankings, and user-defined weights.

        All players’ data are displayed in a list, sorted by MyRank in descending order to help coaches to identify prospects. Country statistics, such as average UTR, ATP, and MyRank of a country, are also presented for coaches to identify big opportunity areas.
      </p>
      
      
      </div> 
  </div>
  </template>
  
  <script>
  export default {
    name: 'Project1View',
  }
  </script>

<style scoped>

.container {
  max-width: 1000px; /* Adjust the width of the container */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px; /* Add padding around the content */
  text-align: left; /* Align text to the left */
  margin-top: 10px;
}

</style>