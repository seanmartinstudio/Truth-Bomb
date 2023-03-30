const emotions = [
  "Happy", "Sad", "Angry", "Fearful", "Ashamed", "Surprised", "Disgusted",
  "Excited", "Proud", "Anxious", "Jealous", "Lonely", "Hopeful", "Content",
  "Nostalgic", "Confused", "Irritated", "Embarrassed", "Insecure", "Envious",
  "Grateful", "Joyful", "Apprehensive", "Overwhelmed", "Disappointed", "Guilt",
  "Comfortable", "Optimistic", "Bitter", "Vulnerable", "Rejected", "Regret",
  "Satisfied", "Amused", "Frustrated", "Humiliated", "Indecisive", "Resentful",
  "Serene", "Awestruck", "Pessimistic", "Paranoid", "Alienated", "Despair",
  "Enraged", "Infuriated", "Horrified", "Desperate", "Desolate", "Bewildered",
  "Excited", "Thrilled", "Euphoric", "Panicked", "Humbled", "Flustered",
  "Calm", "Tranquil", "Peaceful", "Disoriented", "Melancholy", "Devastated",
  "Optimistic", "Positive", "Negative", "Tense", "Terrified", "Inadequate",
  "Overjoyed", "Ecstatic", "Overcome", "Hysterical", "Perplexed", "Worried",
  "Appreciative", "Thankful", "Uncomfortable", "Unhappy", "Scared", "Ashamed",
  "Inspired", "Moved", "Helpless", "Exhausted", "Overwhelmed", "Indifferent",
  "Vexed", "Upset", "Offended", "Guilty", "Displeased", "Touched",
  "Elated", "Disillusioned", "Empowered", "Impatient", "Defeated", "Lost"
];

let currentIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2)
  background(0);
}

function draw() {
  background(0);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255)
  text(emotions[currentIndex], width/2, height/2);

  currentIndex++;

  if (currentIndex === emotions.length) {
    currentIndex = 0;
  }
}
