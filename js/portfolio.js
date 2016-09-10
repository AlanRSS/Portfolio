$(function(){
	var model = {
		"bio" : {
			"name" : "Alan Santos",
			"role" : "Developer",
			"welcomeMessage": "Hey I'm a computer guy, who pretty much likes to learn, learn and learn about all kinds of stuff",
			"contact": "923747301",
			"skills": ["programing", "css", "html", "Javascript", "git", "animation", "windows server", "linux", "tribox", "n+", "SQL", "C#", "Adobe Creative suite"],
			"email": "alanrss_1@hotmail.com",
			"location": "Lubango, Angola",
			"image": "images/Alan.jpg",
		},
		"education" : {
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
				"name": "Heriot Watt University",
				"city": "Johannesburg SA",
				"degree": "BSC",
				"major": "Computer Sistems",
				"year": "2012-2014"
			} ],
			"onlineCourses": [{
				"name": "Udacity",
				"degree": "Front End Web Developer",
				"URL": "www.udacity.com",
				"year": "2015"
			} ],

		},
		"work" : {
			"job": [{
				"employer": "PSL",
				"role": "web designer and developer",
				"year": "2015",
				"location": "Lubango ANG",
				"description": " Development of logos, business cards and website for the company."
			},
			{
				"employer": "Microsoft",
				"role": "Retail Specialist",
				"year": "2015",
				"location": "Luanda, ANG",
				"description": " Manage Microsoft retail ecosystem in Angola by developing intiatives with partners and delivering the right skills for them to drive the sales processes on the retail ecosystem."
			},
			{
				"employer": "Banco Nacional de Angola",
				"role": "Business Analyst",
				"year": "2015",
				"location": "Luanda, ANG",
				"description": "Software developer and Analyst"
			}],
		},
		projects: {
			"project": [ {
				"title": "PSLLogo",
				"year": "2015",
				"location": "Luanda, ANG",
				"description": "logo development for a company that is being built in Angola, the development took several hours and the logo elemnts reference cultural and business related elements.",
				"image": "images/psl.png"
			},
			{
				"title": "Cria comigo",
				"year": "2015",
				"location": "Luanda, ANG",
				"description": "Initiative that focused on delivering an hour of code to K12 kids using TouchDevelop during my experience at Microsoft, I lectured and developed the image of the initiative that was driven with the rest of the team.",
				"image": "images/cria.png"
			} ]
		}
	}
	var octopus = {
		
		"displaybio": function() {
			"use strict"
			var value;
			var bio_h = "<h1 class= 'panel_header'>Bio</h1>";
			var name = "<h2 class= 'name'>" + model.bio.name + "</h2>";
			var role = "<h3 class= 'role'>" + model.bio.role + "</h3>";
			var welcomeMessage = "<h2 class= 'welcomeMessage'>" + model.bio.welcomeMessage + "</h3>";
			var contact = "<h3 class= 'contact'>" + model.bio.contact + "</h2>";
			var skills = "<ul class= 'skills'>";
			for(value in model.bio.skills) {
				
					skills= skills  +"<li>" + model.bio.skills[value] + "</li>";
			} 
			skills = skills + "</ul>";
			var bioinfo = bio_h + name + role + welcomeMessage + contact + skills+ "<img class= 'aladin' src='images/aladin.jpg'/>";
			return bioinfo;
		},
		"displayedu": function() {
			var value;
			var edu_h = "<h1 class= 'panel_header'>Education</h1>";
			var edu_b = "<div class='edubody'>"+ edu_h;
			for (value in model.education.schools) {
				var name = "<h2 class= 'name'>" + model.education.schools[value].name + "</h2>";
				var city = "<h3 class= 'city'>" + model.education.schools[value].city + "</h3>";
				var degree = "<h3 class= 'degree'>" + model.education.schools[value].degree + "</h3>";
				var major = "<h3 class= 'major'>" + model.education.schools[value].major + "</h3>";
				var year = "<h3 class= 'year'>" + model.education.schools[value].year + "</h3>";
				edu_b = edu_b + "<div class= 'school'>" + name + city + degree + major + year + "<hr></div>"; 
			}
			for (value in model.education.onlineCourses) {
				var name = "<h2 class= 'name'>" + model.education.onlineCourses[value].name + "</h2>";
				var url = "<h3 class= 'city'>" + model.education.onlineCourses[value].URL + "</h3>";
				var degree = "<h3 class= 'degree'>" + model.education.onlineCourses[value].degree + "</h3>";
				var year = "<h3 class= 'year'>" + model.education.onlineCourses[value].year + "</h3>";
				edu_b = edu_b + "<div class= 'school'>" + name + url + degree + year + "<hr></div>"; 
			}
			edu_b = edu_b + "</div>";
			return edu_b;
		},
		"displaywork": function() {
			var value;
			var work_h = "<h1 class= 'panel_header'>Work</h1>";
			var work_b = "<div class='workbody'>"+ work_h;
			for (value in model.work.job) {
				var name = "<h2 class= 'name'>" + model.work.job[value].employer + "</h2>";
				var role = "<h3 class= 'role'>" + model.work.job[value].role + "</h3>";
				var location = "<h3 class= 'location'>" + model.work.job[value].location + "</h3>";
				var description = "<h3 class= 'description'>" + model.work.job[value].description + "</h3>";
				var year = "<h3 class= 'year'>" + model.work.job[value].year + "</h3><hr>";
				work_b = work_b + "<div class= 'work'>" + name + location + role + description + year + "</div>"; 
			}
			work_b = work_b + "</div>";
			return work_b
		},
		"displayprojects": function() {
			var value;
			var projects_h = "<h1 class= 'panel_header'>Projects</h1>";
			var project_b = "<div class='projectbody'>"+ projects_h;
			for (value in model.projects.project) {
				var name = "<h2 class= 'title'>" + model.projects.project[value].title + "</h2>";
				var image = "<img class= 'image' src='" + model.projects.project[value].image + "'></>";
				var location = "<h3 class= 'location'>" + model.projects.project[value].location + "</h3>";
				var description = "<h3 class= 'description'>" + model.projects.project[value].description + "</h3>";
				var year = "<h3 class= 'year'>" + model.projects.project[value].year + "</h3><hr>";
				project_b = project_b + "<div class= 'work'>" + name + location + image + description + year + "</div>"; 
			}


/*$('<img/>')
.addClass('image').attr({src:'xpto', }).appendTo('alvo');
$('alvo')append($('<img/>').addClass('gfdgfd')).app*/



			project_b = project_b + "</div>";
			return project_b
		},

		
		"init": function() {
			"use strict"
			view.init();
			var buttons = $('.spbutton');
			var biobutton = $('#biobutton');
			var edubutton = $('#edubutton');
			var workbutton = $('#workbutton');
			var projectsbutton = $('#projectsbutton');

			biobutton.click(function() {
				view.panelAppend(octopus.displaybio());
				console.log('clicked');
				buttons.toggleClass("clicked",false);
				biobutton.toggleClass("clicked", true);
				
			});
			edubutton.click(function() {
			view.panelAppend(octopus.displayedu());
			buttons.toggleClass("clicked",false);
			console.log('clicked');
			});
			workbutton.click(function() {
			view.panelAppend(octopus.displaywork());
			buttons.toggleClass("clicked",false);
			console.log('clicked');
			});
			projectsbutton.click(function() {
			view.panelAppend(octopus.displayprojects());
			buttons.toggleClass("clicked",false);
			console.log('clicked');
			});

		}

		
	}
	var view = {
		"menu": "<div id = 'biobutton' class = 'spbutton col-1'><a>Bio</a></div><div id = 'edubutton' class = 'spbutton col-1'><a>Education</a></div><div id = 'workbutton' class = 'spbutton col-1'><a>Work</a></div><div id = 'projectsbutton' class = 'spbutton col-1'><a>Projects</a></div>",
		
		"panelAppend": function(x) {
			"use strict"
			$("#painel").html("");
			$("#painel").html(x);
		},
		"init": function() {
			"use strict";
			$("#menu").append(view.menu);
			view.panelAppend(octopus.displaybio());
		},

		"render": function(){

		}
	}
	octopus.init();
	$
}());