const philers = [
  //Please check list to avoid duplications
  //and please keep in alphabetical order
  "Don't be afraid to catch Phils",
  "Girls on Philm",
  "Ian Phil",
  "One Phil on my wagon",
  "Phil Deal",
  "Phil my heart with joy and gladness",
  "Phil or no Phil",
  "Phil your boots",
  "Philbo Baggins",
  "Philing for divorce",
  "Phillingsgate Fish Market",
  "The Phils are alive with the sound of music",
  "Three Philed Robin Reliant",
  "Where there's a Phil there's a way"
];

const philer = () => philers[Math.floor(Math.random() * philers.length)];

export default philer;
