var nameList = [
  "Anil Sharma",
  "UK007",
  "Abhitulya",
  "Dev9876",
  "Flying Beast",
  "Sourav Joshi",
  "Anamika2569",
  "jai chand",
  "deepak_mishra",
  "ram226",
  "suresh_sharma",
  "bhupendra_jogi",
  "sourabh_dwivedi",
  "roshan_singh",
  "babita236",
  "prem chopra",
  "priyanka sexana",
  "vibhuti",
  "sharamaji007",
  "mountain_vlogger",
  "sonu_sharma",
  "vivek_chaurasiya",
  "rajat_sharma",
  "yogesh",
  "virender_singh",
  "sahil_khanna",
  "raja_babu459",
  "Bablu_dubey",
  "Suresh",
  "Shankar",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function randomMessage() {
  var messages = [
    "जय श्री राम 🖐️",
    "I am very excited to visit ayodhya",
    "I'm doing well, thanks for asking.",
    "Hello everyone✌️✌️✌️",
    "I'm waiting for the long time",
    "This will going to interesting 🙌🙌🙌",
    "This will boost the tourism",
    "#Masterstroke",
    "🙌🙌🙌🙌🙌",
    "Jai shree Ram",
  ];
  var randomNumber = Math.floor(Math.random() * messages.length);
  return messages[randomNumber];
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
