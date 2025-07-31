import "./LostFound.css";

export default function LostFound() {
  return (
    <div className="l-container">
      <h1>HoosLost & HoosFound</h1>
      <div className="images">
        <img
          src="/assets/mainpage1.png"
          alt="Main 1"
          className="prototype-image"
        />
        <img
          src="/assets/mainpage2.png"
          alt="Main 2"
          className="prototype-image"
        />
      </div>

      <p>
        HoosLost&HoosFound is a lost and found website project designed for
        university community. People can see the lost items and found items on
        the main page's map. There will be pins when the items are uploaded and
        approved by admin users. click on the pins, users can see the name,
        location, picture, and description of the item. They can also search for
        items by category and location. Users can upload their lost or found
        items to the website. Admins can manage the items and users.
      </p>

      <p>
        The project is based on Django framework and Heroku cloud platform. The
        most essential functions are 1. Integrated Google Oauth2 to allow users
        login with google emails. 2. Applied Google Map API for real time map
        checking and pin markers on the map. 3. Integrated with Google Cloud
        Storage for image data storing and sharing.
      </p>

      <div className="images">
        <img
          src="/assets/userpage.png"
          alt="User 1"
          className="prototype-image"
        />
      </div>
      <p>
        This is the page for user infomation and login/logout for th users. In
        this page, they can change their display name, add their phone number.
        The email is auto captured when they using google email to login. This
        page also gives users some instructions on modify personal information.
      </p>

      <div className="images">
        <img
          src="/assets/upload.png"
          alt="Upload 1"
          className="prototype-image"
        />
      </div>
      <p>
        The upload page is for users to upload their lost or found items. They
        can enter the name of item, location, and upload the image of the item.
        They can also add a description of the item. To add the location, they
        can manually enter the address which google map will auto fit the
        address, or click on "get location" button where calls the web broswer
        to share the current location.
      </p>

      <div className="images">
        <img
          src="/assets/manageupload.png"
          alt="Manage 1"
          className="prototype-image"
        />
      </div>

      <p>
        The manage upload page is only displayed for administrative users. They
        can see all the items uploaded by users. Everytime a person upload an
        item, the item will go to the manage upload page and wait until the
        admin user to approve it. Otherwise, the upload item from normal users
        will not be displayed on the map. Admin user can also delete the items
        after the item is claimed by some people.
      </p>
    </div>
  );
}
