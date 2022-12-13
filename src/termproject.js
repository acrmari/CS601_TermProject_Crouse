
function  changeP(elementId) {
  let msg1 = "";
  let msg2 = "";
  let msg3 = "";
  if (document.getElementById("job").checked === true)
  { msg1 = "IP network engineer - 24 years";
    msg2 = "Service provisioning and incident resolution";
    msg3 = "State government and higher education";
  } if (document.getElementById("student").checked === true)
  { msg1 = "Pursuing Masters in Computer Information Systems from Boston U ";
    msg2 = "Pursuing concentration in Application Development";
    msg3 = "Heavily engaged in statewide infrastructure replacement endeavor at LSU LONI";
  }   if (document.getElementById("5year").checked === true)
  { msg1 = "Complete job related network projects and provide exceptional support";
    msg2 = "Complete Master's IN CIS Application Development program and other coursework";
    msg3 = "Obtain part time remote employment in application development";
  }   if (document.getElementById("10year").checked === true)
  { msg1 = "Utilizing applications development skills in full time network engineer position";
    msg2 = "Continuing course work and study of programming languages";
    msg3 = "Researching network related applications";
  }   if (document.getElementById("future").checked === true)
  { msg1 = "Working full-time in applications development";
    msg2 = "Engaging in online community projects related to programming";
    msg3 = "Writing animated interactive IP networking tutorials";
  }
  document.getElementById("line1").innerHTML = msg1;
  document.getElementById("line2").innerHTML = msg2;
  document.getElementById("line3").innerHTML = msg3;
}

