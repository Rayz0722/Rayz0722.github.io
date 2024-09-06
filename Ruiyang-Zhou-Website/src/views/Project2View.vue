<template>
    <div>
    <h2>HoosLost&HoosFound</h2>
  </div>
  <div class = "container">
    <div class="images">
      <img src="@/assets/mainpage1.png" alt="Main 1" class="prototype-image">
      <img src="@/assets/mainpage2.png" alt="Main 2" class="prototype-image">
    </div>
    <p>
      HoosLost&HoosFound is a lost and found website project designed for university community. 
      People can see the lost items and found items on the main page's map. There will be pins when the items are uploaded and approved by admin users. click on the pins, users can see the name, location, picture, and description of the item.
      They can also search for items by category and location. Users can upload their lost or found items to the website. Admins can manage the items and users.
    </p>

    <p>
    The project is based on Django framework and Heroku cloud platform. The most essential functions are 1. Integrated Google Oauth2 to allow users login with google emails. 2. Applied Google Map API for real time map
checking and pin markers on the map. 3. Integrated with Google Cloud Storage for image data storing and sharing.
    </p>
    
    <div class="images">
      <img src="@/assets/userpage.png" alt="User 1" class="prototype-image">
    </div>
    <p>
      This is the page for user infomation and login/logout for th users. In this page, they can change their display name, add their phone number. The email is auto captured when they using google email to login. This page also gives users some instructions on modify personal information.
    </p>

    <div class="images">
      <img src="@/assets/upload.png" alt="Upload 1" class="prototype-image">
    </div>
    <p>
      The upload page is for users to upload their lost or found items. They can enter the name of item, location, and upload the image of the item. They can also add a description of the item. 
      To add the location, they can manually enter the address which google map will auto fit the address, or click on "get location" button where calls the web broswer to share the current location.
    </p>

    <div class="images">
      <img src="@/assets/manageupload.png" alt="Manage 1" class="prototype-image">
    </div>
    <p>
      The manage upload page is only displayed for administrative users. They can see all the items uploaded by users. Everytime a person upload an item, the item will go to the manage upload page and wait until the admin user to approve it. Otherwise, the upload item from normal users will not be displayed on the map.
      Admin user can also delete the items after the item is claimed by some people.
    </p>

    <p>
      This project is currently offline and not deployed due to the fee of the service and api.
      To learn more about this project's code, you can click on the link to the github where I cloned from the school repo:
    </p>
      <a href="https://github.com/Rayz0722/HoosLost-HoosFound" target="_blank">HoosLost-HoosFound</a>
   

  </div>

  </template>
  
  <script>
  export default {
    name: 'Project2View',
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

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Space between the images and the paragraph */
}

.prototype-image {
  max-width: 45%; /* Ensure both images fit side by side */
  height: auto;
  margin: 0 10px; /* Space between the two images */
}
</style>