import './Music.css'; 
export default function Music() {
  
  return (
    <div className = "musicpage">
      <div className = "header">
        <h2>This is a page about my music content</h2>
      </div>
    
      <div className = "container">
        <p className="custom-paragraph">I have a deep passion for music production, mixing, and music technology. 
        
        In past few years, I've dedicated myself to crafting and producing my own music, exploring a diverse range of styles. My work is not confined to a single genre; instead, it draws inspiration from a variety of influences, including electronic, cinematic, and hip-hop music. </p>

        <p className="custom-paragraph"> Most of my production is done using Ableton Live, where I bring my creative ideas to life. In addition to my digital production experience, I have hands-on experience with studio recording, particularly with grand piano, acoustic guitar, and drum sets.

        Recently, I participated in the Recording Arts Workshop at CCRMA, Stanford University, during the Summer of 2024, where I earned a certification in advanced recording techniques.</p>

        <p className="custom-paragraph"> Below, you'll find three playlists showcasing the different styles of music I create. The first playlist is electronic/edm like music, the second list is cinematic type music and the last list is beats demos.</p>
      </div>

            <div className="iframes-container">
        <iframe
          width="100%"
          height="400"
          scrolling="yes"
          frameBorder="0"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1871100785"
        ></iframe>

        <iframe
          width="100%"
          height="400"
          scrolling="yes"
          frameBorder="0"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1871133551"
        ></iframe>

        <iframe
          width="100%"
          height="400"
          scrolling="yes"
          frameBorder="0"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1869483101"
        ></iframe>
      </div>

    </div>)
}