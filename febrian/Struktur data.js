
let S1_SI = [
["Febrian","21.51.0007"],
["Ilham","21.51.0008"],
["Khamal","21.51.0020"],
["Huda","21.51.0005"],
["hapis","21.51.0009"],
["agatha","21.51.0010"],
["Zul","21.51.0001"],
["ifa","21.51.0003"],
["Refin","21.51.0004"],
["yusron","21.51.0011"]
];
let fLen = S1_SI.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text +=  "<li>" + S1_SI[i] + "</li>" + "<hr></hr>";
}
text += "</ul>";
 
document.getElementById("nourut").innerHTML = text;





