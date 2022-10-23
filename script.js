function setUp(stu)
{
  let container = document.createElement("div");
  container.setAttribute("class", "student-container");
  let section1 = document.createElement("section");
  section1.setAttribute("class", "stu-section1");

  let section2 = document.createElement("section");
  section2.setAttribute("class", "stu-section2");

  let stuNameCnt = document.createElement("div");
  stuNameCnt.setAttribute("class", "student-name")
  let stuName = document.createTextNode(stu.name);
  stuNameCnt.appendChild(stuName);

  let stuGenCnt = document.createElement("div");
  stuGenCnt.setAttribute("class", 'other-deatils')
  let stuGen = document.createTextNode(stu.gender);
  stuGenCnt.appendChild(stuGen);

  let stuMailCnt = document.createElement("div");
  stuMailCnt.setAttribute("class", 'other-deatils')
  let stuMail = document.createTextNode(stu.email);
  stuMailCnt.appendChild(stuMail);

  let stuMobileCnt = document.createElement("div");
  stuMobileCnt.setAttribute("class", 'other-deatils')
  let stuMobile = document.createTextNode(stu.mobile);
  stuMobileCnt.appendChild(stuMobile);

  let stuDOBCnt = document.createElement("div");
  stuDOBCnt.setAttribute("class", 'other-deatils')
  let stuDOB = document.createTextNode(stu.dob);
  stuDOBCnt.appendChild(stuDOB);
  
  let stuAddressCnt = document.createElement("div");
  stuAddressCnt.setAttribute("class", 'other-deatils')
  let stuAddress = document.createTextNode(stu.address);
  stuAddressCnt.appendChild(stuAddress);

  section1.appendChild(stuNameCnt);
  section1.appendChild(stuGenCnt);
  section1.appendChild(stuMailCnt);
  section1.appendChild(stuMobileCnt);
  section1.appendChild(stuDOBCnt);
  section1.appendChild(stuAddressCnt);

  container.appendChild(section1);

  let outputCnt = document.getElementById("output");

  let imageCnt = document.createElement("div");
  let image = document.createElement("img");
  if(stu.gender == 'Male') {  
  image.setAttribute("src", "https://www.shareicon.net/data/512x512/2016/06/25/786551_people_512x512.png");
  } else {
    image.setAttribute("src", "https://img.freepik.com/premium-vector/portrait-young-girl-with-long-dark-hair-avatar-smiling-girl-yellow-sweater_195968-622.jpg?w=2000");
  }
  image.setAttribute("height", "100");

  imageCnt.appendChild(image);
  section2.appendChild(imageCnt);
  container.appendChild(section2);
  outputCnt.appendChild(container);
}

function saveRecord()
{
  let student = {};

  let fname = document.getElementById("first-name").value;
  let mname = document.getElementById("middle-name").value;
  let lname = document.getElementById("last-name").value;

  let fullName = fname + " " + mname + " " + lname;

  let e = document.getElementById("Birthday_Day");
  let value = e.options[e.selectedIndex].value;
  let dob = value + " ";
  e = document.getElementById("Birthday_Month");
  value = e.options[e.selectedIndex].value;
  dob += value + ", ";
  e = document.getElementById("Birthday_Year");
  value = e.options[e.selectedIndex].value;
  dob += value;

  let mobile = document.getElementById("mobile-number").value;

  let email = document.getElementById("email-id").value;

  let gender = document.querySelector('input[name="gender"]:checked').value;

  let address = document.getElementById("full-address").value;

  student['name'] = fullName;
  student['dob'] = dob;
  student['gender'] = gender;
  student['address'] = address;
  student['mobile'] = mobile;
  student['email'] = email;

  setUp(student);
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);