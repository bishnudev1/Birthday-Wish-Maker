import "./style.css"
import React, { useState } from "react";
import whatsapp from './whatsapp.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'

function App() {

  const [name, setName] = useState('');
  // console.log(name)

  var wishText = `“Sweetheart, I treasure you more than I treasure all my possessions, including my life itself. Nothing short of death will ever have the power to keep me from being with you and making you happy all the days of your life my love ${name} 💖💖💖.”`

  const getWish = () => {
    const relation = document.getElementById('wish');
    if (relation.value === 'partner') {
      const resultArea = document.getElementById('resultArea');
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'bestFriend') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“Happy birthday to my crazy, fun, fabulous best friend! I love you to the moon and back and am so grateful for your friendship and all the fun times we’ve shared this year. I hope you have a great day! ${name} 🤪🤪🤪.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'sister') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“My dear sister, I hope you have a wonderful birthday, and that the year ahead is full of joy, excitement, and adventure! ${name} 😇😇😇.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'brother') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“Words will never suffice to describe the special bond that we have, brother. I can only hope that my actions will serve to demonstrate my love for you ${name} 😎😎😎.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'teacher') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“Wishing a happy and blessed birthday to my favourite teacher of all time! I’m very fortunate to have found such a wonderful mentor in you! ${name} ✍️✍️✍️.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'mom') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“Roses are red, violets are blue. There’s no one I’d rather turn to you in times of trouble than you. Happy birthday to you mom, you’re the best ${name} 🥰🥰🥰.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'dad') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“My hero, my idol, and my biggest mentor.
      I am the man that I am today because of
      you, dad ${name} 🤗🤗🤗.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'friend') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“A day doesn’t go by that I don’t thank God for our friendship. Happy birthday to the most loyal person I know ${name} 🥳🥳🥳.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
    else if (relation.value === 'unknown') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“I hope your birthday is full of sunshine and rainbows and love and laughter! Sending many good wishes to you on your special day ${name} 😉😉😉.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }

    else if (relation.value === 'pet') {
      const resultArea = document.getElementById('resultArea');
      wishText = `“I know you may not understand the words, ‘’Happy birthday’’ exactly but we’ve always had this connection and you seem to understand me my petty ${name} 😉😉😉.”`;
      if (name !== '') {
        resultArea.innerHTML = wishText;
      }
      else {
        alert("Enter name first!")
      }
    }
  }

  /*const copyText = () => {
    navigator.clipboard.writeText("Bishnudev Khutia")
    console.log(wishText)
  }
*/


  return (
    <div className="App">
      <div className="mainContainer">
        <div className="Header">
          <h3 style={{ padding: "20px", fontFamily: "cursive" }} >Birthday Wish Generator</h3>
          <div style={{ paddingBottom: "20px" }} className="imgArea" >
            <img src="https://png.pngtree.com/element_origin_min_pic/16/11/03/e4ed5225389875a4ef528f6f3dfa04d6.jpg" alt="icon" />
          </div>
        </div>
        <div className="mainBody">
          <input id="myName" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name..." />
          <select name="wish" id="wish">
            <option value="partner">Partner</option>
            <option value="friend">Friend</option>
            <option value="bestFriend">Best Friend</option>
            <option value="mom">Mom</option>
            <option value="dad">Dad</option>
            <option value="pet">Pet</option>
            <option value="sister">Sister</option>
            <option value="brother">Brother</option>
            <option value="teacher">Teacher</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="descArea">
          <p id="resultArea"></p>
        </div>
        <div className="footer">
          <div className="socials">
            <a target="_blank" onClick={() => { window.location.href = `https://twitter.com/intent/tweet?text=${wishText}` }}>
              <img alt="twitter" src={twitter}
              />
            </a>
            <a onClick={() => { window.location.href = `https://api.whatsapp.com/send?text=${wishText}` }}>
              <img alt="whatsapp" src={whatsapp}
              />
            </a>
            <a onClick={() => { window.location.href = `https://www.linkedin.com/share?text=${wishText}` }}>
              <img alt="linkedin" src={linkedin}
              />
            </a>
          </div>
          <button id="myBtn" onClick={() => getWish()}>Generate</button>
          {/* <div className="copyRight">
            <p className="creditText" >Developed by Bishnudev Khutia</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}


export default App;
