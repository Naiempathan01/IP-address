function getInfo(ip) {
  let ipAddress = "106.193.107.157";
  fetch(`http://ip-api.com/json/${ipAddress}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("ip").innerHTML = data.query;
      document.getElementById("lat").innerHTML = data.lat;
      document.getElementById("long").innerHTML = data.lon;
      document.getElementById("city").innerHTML = data.city;
      document.getElementById("long").innerHTML = data.lon;
      document.getElementById("reg").innerHTML = data.region;
      document.getElementById("host").innerHTML = data.as;
      document.getElementById("org").innerHTML = data.org;
      document.getElementById("timezone").innerHTML = data.timezone;
      document.getElementById("pin").innerHTML = data.zip;
      document.getElementById("msg").innerHTML = data.Message;
    })
    .catch((err) => {
      console.log(`catch error ${err}`);
    });

  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
    formatter = new Intl.DateTimeFormat([], options);
  console.log(options);

  document.getElementById("date").innerHTML = formatter.format(new Date());
}
getInfo();

let pin = "414502";
fetch(`https://api.postalpincode.in/pincode/${pin}`)
  .then((data) => {
    return data.json();
  })
  .then((postData) => {
    console.log(postData);
    document.getElementById("msg").innerHTML = postData[0].Message;
    document.getElementById("name").innerHTML = postData[0].PostOffice[0].Name;
    document.getElementById("branch").innerHTML =
      postData[0].PostOffice[0].BranchType;
    document.getElementById("status").innerHTML =
      postData[0].PostOffice[0].DeliveryStatus;
    document.getElementById("dist").innerHTML =
      postData[0].PostOffice[0].District;
    document.getElementById("div").innerHTML =
      postData[0].PostOffice[0].Division;

    document.getElementById("name2").innerHTML = postData[0].PostOffice[1].Name;
    document.getElementById("branch2").innerHTML =
      postData[0].PostOffice[1].BranchType;
    document.getElementById("status2").innerHTML =
      postData[0].PostOffice[1].DeliveryStatus;
    document.getElementById("dist2").innerHTML =
      postData[0].PostOffice[1].District;
    document.getElementById("div2").innerHTML =
      postData[0].PostOffice[1].Division;

    document.getElementById("name3").innerHTML = postData[0].PostOffice[2].Name;
    document.getElementById("branch3").innerHTML =
      postData[0].PostOffice[2].BranchType;
    document.getElementById("status3").innerHTML =
      postData[0].PostOffice[2].DeliveryStatus;
    document.getElementById("dist3").innerHTML =
      postData[0].PostOffice[2].District;
    document.getElementById("div3").innerHTML =
      postData[0].PostOffice[2].Division;

    document.getElementById("name4").innerHTML = postData[0].PostOffice[3].Name;
    document.getElementById("branch4").innerHTML =
      postData[0].PostOffice[3].BranchType;
    document.getElementById("status4").innerHTML =
      postData[0].PostOffice[3].DeliveryStatus;
    document.getElementById("dist4").innerHTML =
      postData[0].PostOffice[3].District;
    document.getElementById("div4").innerHTML =
      postData[0].PostOffice[3].Division;

    document.getElementById("name5").innerHTML = postData[0].PostOffice[4].Name;
    document.getElementById("branch5").innerHTML =
      postData[0].PostOffice[4].BranchType;
    document.getElementById("status5").innerHTML =
      postData[0].PostOffice[4].DeliveryStatus;
    document.getElementById("dist5").innerHTML =
      postData[0].PostOffice[4].District;
    document.getElementById("div5").innerHTML =
      postData[0].PostOffice[4].Division;
  });

function myFunction() {
  // Declare variables
  var input, filter, div, span, txtValue;
  input = document.getElementById("searchText");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("content");
  span = span.getElementsByTagName("span");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < span.length; i++) {
    a = span[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      span[i].style.display = "";
    } else {
      span[i].style.display = "none";
    }
  }
}