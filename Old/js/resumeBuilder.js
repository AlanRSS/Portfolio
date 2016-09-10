var value, NewName;
var bio = {
  "name": "Alan Santos",
  "role": "developer",
  "welcomeMessage": "Hey Guys!",
  "contact": "923747301",
  "skills": ["programing", "css", "html", "git", "animation", "windows server", "linux", "tribox", "n+", "SQL", "C#", "Adobe Creative suite"],
  "email": "alanrss_1@hotmail.com",
  "location": "Lubango, Angola",
  "image": "images/Alan.jpg",
  "displaybio": function () {
   "use strict";
   var specialname = HTMLheaderName.replace("%data%", bio.name);
   var specialrole = HTMLheaderRole.replace("%data%", bio.role);
   var Picture = HTMLbioPic.replace("%data%", bio.image);
   var specialWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
   var specialContact = HTMLmobile.replace("%data%", bio.contact);
   var specialMail = HTMLemail.replace("%data%", bio.email);
   var specialLocation = HTMLlocation.replace("%data%", bio.location);
   $("#main").prepend(specialWelcomeMessage);
   $("#main").prepend(Picture + specialname + "<p></p>" + specialrole);
   $("#topContacts").append("<br>" + "<p>" + specialMail + "</p><p>" + specialContact + "</p><p>" + specialLocation + "</p>");
   $("#header").append(HTMLskillsStart);
   for (value in bio.skills) {
    if (bio.skills.hasOwnProperty(value) === true) {
     var formattedSkill = HTMLskills.replace("%data%", bio.skills[value]);
     $("#skills").append(formattedSkill);
    }
   }
  }
 };
var education = {
  "schools": [ {
   "name": "Colegio 123",
   "city": "Lubango ANG",
   "degree": "High School",
   "major" : "biological and phisical sciences",
   "year": "2004-2010"
  },
   {
    "name": "WLS- Witts language school",
    "city": "Johannesburg SA",
    "degree": "Language",
    "major": "English for academical objectives",
    "year": "2011"
   },
   {
    "name": "CTI- Heriot Watt",
    "city": "Johannesburg SA",
    "degree": "BSC",
    "major": "CompEngi",
    "year": "2012-2014"
   } ],
  "onlineCourses": [{
   "name": "Udacity",
   "degree": "Front End Web Developer",
   "URL": "www.udacity.com",
   "year": "2015"
  } ],
  "displayEducation": function () {
   "use strict";
   for (value in education.schools) {
    $("#education").append(HTMLschoolStart);
    if (education.schools.hasOwnProperty(value) === true) {
     var formattedSchool = HTMLschoolName.replace("%data%", education.schools[value].name);
     $(".education-entry:last").append(formattedSchool);
     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[value].degree);
     $(".education-entry:last").append(formattedDegree);
     var formattedDate = HTMLschoolDates.replace("%data%", education.schools[value].year);
     $(".education-entry:last").append(formattedDate);
     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[value].major);
     $(".education-entry:last").append(formattedMajor);
    }
   }
  },
  "displayOnline": function () {
   "use strict";
   for (value in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);
    if (education.onlineCourses.hasOwnProperty(value) === true) {
     var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[value].name);
     $(".education-entry:last").append(formattedName);
     var formattedDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[value].degree);
     $(".education-entry:last").append(formattedDegree);
     var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[value].year);
     $(".education-entry:last").append(formattedDate);
     var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[value].URL);
     $(".education-entry:last").append(formattedURL);
    }
   }
  }
 };
var work = {
  "job": [{
   "employer": "PSL",
   "role": "web designer and developer",
   "year": "2015",
   "location": "Lubango ANG",
   "description": " Development of logos, business cards and website for the company."
  },
   {
    "employer": "Farost",
    "role": "student",
    "year": "1998-2015",
    "location": "Lubango ANG, Johannesburg SA",
    "description": " Under the orientation of my parents I studied and built my academical curriculum"
   }],
  "displayWork": function () {
   "use strict";
   for (value in work.job) {
    $("#workExperience").append(HTMLworkStart);
    if (work.job.hasOwnProperty(value) === true) {
     var formattedWork = HTMLworkEmployer.replace("%data%", work.job[value].employer);
     $(".work-entry:last").append(formattedWork);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.job[value].role);
     $(".work-entry:last").append(formattedTitle);
     var formattedDate = HTMLworkDates.replace("%data%", work.job[value].year);
     $(".work-entry:last").append(formattedDate);
     var formattedDescription = HTMLworkDates.replace("%data%", work.job[value].description);
     $(".work-entry:last").append(formattedDescription);
    }
   }
  }
 };
var projects = {
  "project": [ {
   "title": "PSLLogo",
   "year": "2015",
   "location": "Luanda, ANG",
   "description": "logo development for a company that is being built in Angola, the development took several hours and the logo elemnts reference cultural and business related elements",
   "image": "images/logo.jpg"
  } ],
  "displayProjects": function () {
   "use strict";
   for (value in projects.project) {
    $("#projects").append(HTMLprojectStart);
    if (projects.project.hasOwnProperty(value) === true) {
     var formattedName = HTMLprojectTitle.replace("%data%", projects.project[value].title);
     $(".project-entry:last").append(formattedName);
     var formattedDate = HTMLprojectDates.replace("%data%", projects.project[value].year);
     $(".project-entry:last").append(formattedDate);
     var formattedDesc = HTMLprojectDescription.replace("%data%", projects.project[value].description);
     $(".project-entry:last").append(formattedDesc);
     var formattedURL = HTMLprojectImage.replace("%data%", projects.project[value].image);
     $(".project-entry:last").append(formattedURL);
    }
   }
  }
 };
bio.displaybio();
work.displayWork();
education.displayEducation();
education.displayOnline();
projects.displayProjects();
$("#main").append(internationalizeButton);

function inName(name) {
 "use strict";
 try {
  var NameArray = bio.name.trim().split(" ");
 }
 catch (e) {
   console.log("yo", e);
  }
 console.log(NameArray);
 NameArray[1] = NameArray[1].toUpperCase();
 NewName = NameArray.join(" ");
 name = NewName;
 return name;
}
$("#mapDiv").append(googleMap);
