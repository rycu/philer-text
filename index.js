const philers = [
  //Please check list to avoid duplications
  //and please keep in alphabetical order
  "Big Phily Style",
  "Don't be afraid to catch Phils",
  "Girls on Philm",
  "Ian Phil",
  "My heart Phil go on",
  "One Phil on my wagon",
  "Phil-I-Am",
  "Phil my heart with joy and gladness",
  "Phil or no Phil",
  "Phil your boots",
  "Philbo Baggins",
  "Philiam the conqueror",
  "Philing for divorce",
  "Philer of the community",
  "Philingsgate Fish Market",
  "Sheer act of Phil",
  "Tesco Phil Deal",
  "Tears on my Philow",
  "The Phils are alive with the sound of music",
  "Three Philed Robin Reliant",
  "Where there's a Phil, there's a way"
];

const philer = () => philers[Math.floor(Math.random() * philers.length)];

export default philer;