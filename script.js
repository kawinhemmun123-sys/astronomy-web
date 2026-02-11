const planets = {
  mercury: {
    name: "ดาวพุธ",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
    detail: "ดาวพุธอยู่ใกล้ดวงอาทิตย์ที่สุด อุณหภูมิเปลี่ยนแปลงรุนแรงมาก"
  },
  venus: {
    name: "ดาวศุกร์",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
    detail: "ดาวศุกร์มีบรรยากาศหนาและร้อนจัดจากภาวะเรือนกระจก"
  },
  earth: {
    name: "โลก",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
    detail: "โลกเป็นดาวเคราะห์ที่มีสิ่งมีชีวิตและน้ำในสถานะของเหลว"
  },
  mars: {
    name: "ดาวอังคาร",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
    detail: "ดาวอังคารมีสีแดง และเป็นเป้าหมายสำคัญในการสำรวจ"
  },
  jupiter: {
    name: "ดาวพฤหัสบดี",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
    detail: "ดาวเคราะห์ที่ใหญ่ที่สุด มีพายุจุดแดงใหญ่"
  },
  saturn: {
    name: "ดาวเสาร์",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
    detail: "ดาวเสาร์โดดเด่นด้วยวงแหวนขนาดใหญ่"
  },
  uranus: {
    name: "ดาวยูเรนัส",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
    detail: "ดาวยูเรนัสหมุนเอียงเกือบ 90 องศา"
  },
  neptune: {
    name: "ดาวเนปจูน",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png",
    detail: "ดาวเนปจูนมีลมแรงที่สุดในระบบสุริยะ"
  }
};

function showPlanet(key) {
  const p = planets[key];
  document.getElementById("planetName").innerText = p.name;
  document.getElementById("planetImage").src = p.img;
  document.getElementById("planetDetail").innerText = p.detail;
}
