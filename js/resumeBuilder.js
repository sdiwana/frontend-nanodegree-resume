

/* --------------------------------------------------------------------------------

Sandhya Diwana
resumeBuilder.js

The javaScript code reads from javaScript objects: bio, work, projects, and education.
It then inserts them to html code with JQuery functions to displays them on the browser.
The code also displays a map with locations from bio, work, and education, and
captures the coordinates of mouse click on the web page and displays them on console

-------------------------------------------------------------------------------- */


/* BIO object */
/* -------------------------------------------------------------------------------- */

var bio = {

				"name" : "Sandhya Diwana",

				"role" : "Web Developer",

				"contacts" : {"mobile" : "333-333-3333",

								"email" : "diwanas@gmail.com",

								"github" : "diwanas@gmail.com",

							 	"twitter" : "diwanas",

								"location" : "Columbia, MD 21046"

			},

			"welcomeMessage" : "Welcome to my resume",

			"skills" : ["HTML", "CSS", "GIT", "JavaScript"],

			"biopic" : "images/fry.jpg",

			/* Encapsulate display function for bio */

			"display" : function() {

				/* declare temporary variables, replace %data% with bio object variable values, and preprend to HTML tag */

				/* bio.role - since prepending, role first then name, but will get displayed as name then role */

				var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

				$("#header").prepend(formattedRole);

				/* bio.name */

				var formattedName = HTMLheaderName.replace("%data%", bio.name);

				$("#header").prepend(formattedName);

				/* bio.contact.mobile */

				var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

				$("#topContacts").prepend(formattedMobile);

				/* bio.contact.email */

				var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

				$("#topContacts").prepend(formattedEmail);

				/* bio.contact.github */

				var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);

				$("#topContacts").prepend(formattedGitHub);

				/* bio.contact.twitter */

				var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

				$("#topContacts").prepend(formattedTwitter);

				/* bio.contact.location */

				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

				$("#topContacts").prepend(formattedLocation);

				/* bio.biopic */

				var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

				$("#header").append(formattedBiopic);

				/* bio.welcomeMessage */

				var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

				$("#header").append(formattedWelcomeMessage);

				/* bio.skills */

				var formattedSkill;

				$("#header").append(HTMLskillsStart);

				for (skill in bio.skills) {

					formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

					$("#skills").append(formattedSkill);

				}

			}

		};


/* WORK object*/
/* -------------------------------------------------------------------------------- */

var work = {

	"jobs" : [

				{

					"employer" : "Self",

					"title" : "Consultant",

					"location" : "1600 Pennsylvania Avenue Northwest, Washington, DC 20500",

					"dates" : "2007 to Now",

					"description" : "Web Developer and Whatever Web Developer and Whatever Web Developer and Whatever Web Developer and Whatever Web Developer and Whatever ",

				},

				{

					"employer" : "Self",

					"title" : "Consultant",

					"location" : "Albuquerque, NM 87123",

					"dates" : "2001 to 2007",

					"description" : "Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever",

				}

			],

	/* Encapsulate display function for bio */

	"display" : function() {

				/* declare temporary variables */

				var formattedEmployer;

				var formattedTitle;

				var formattedLocation;

				var formattedWorkDates;

				var formattedWorkDescription;

				/* Loop through jobs array, replace %data% with work object variable values, and preprend to HTML tag */

				for (job in work.jobs) {

					/* Sandhya - fix for Report.  Insert WorkExperience Header and create a new DIV */

					$("#workExperience").append(HTMLworkStart);

					/* Format Employer and title, concat together for display */

					formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

					formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

					$(".work-entry:last").append(formattedEmployer + formattedTitle);

					/* Work Location */

					formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

					$(".work-entry:last").append(formattedLocation);

					/* Work Dates */

					formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

					$(".work-entry:last").append(formattedWorkDates);

					/* Work Description */

					formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

					$(".work-entry:last").append(formattedWorkDescription);

				}

			}

		};


/* PROJECTS object */
/* -------------------------------------------------------------------------------- */

var projects = {

		"projects" : [{

					"title" : "HTML website",

					"dates" : "December 2014",

					"description" : "Use all HTML tags and formatting",

					"images" : ["images/project.png", "images/project.png"]

				},

				{

					"title" : "CSS and HTML website",

					"dates" : "December 2014",

					"description" : "Use CSS file to format HTML file",

					"images" : []

			},

			{

				"title" : "JavaScript website",

				"dates" : "January 2015",

				"description" : "Incorporate JavaScript along with HTML and CSS",

				"images" : []

			}],

		"display" : function() {

				/* Declare temporary variables */

				var formattedTitle;

				var formattedDates;

				var formattedDescription;

				/* Loop through projects, format, and append them to HTML tags */

				for (project in projects.projects) {

					/* Sandhya - fix from Report.  Display Project Header and create a new DIV? */

					$("#projects").append(HTMLprojectStart);

					/* Project Titles */

					formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

					$(".project-entry:last").append(formattedTitle);

					/* Project Dates */

					formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

					$(".project-entry:last").append(formattedDates);

					/* Project Descriptions */

					formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

					$(".project-entry:last").append(formattedDescription);

					/* Declare temporary variable, loop through Image arrray and format and display Project Images */

					var formattedImage;

					if (projects.projects[project].images.length > 0)

					{

						for (image in projects.projects[project].images)

						{

							formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

							$(".project-entry:last").append(formattedImage);

						}

					}

				}

			}

		};


/* EDUCATION object */
/* -------------------------------------------------------------------------------- */

var education = {

	"schools" : [{

				"name" : "Johns Hopkins University",

				"degree" : "Master Degree",

				"dates" : 1996,

				"location" : "Baltimore, MD 21218-2683",

				"major" : "Computer Science"

			},

			{

				"name" : "University of Maryland",

				"degree" : "Bachelor Degree",

				"dates" : 1989,

				"location" : "College Park, MD 20742",

				"major" : "Computer Science"

			}],

	"onlineCourses" : [{

				"title" : "HTML",

				"school" : "Udacitty",

				"date" : 2014,

				"url" : "http://udacity.com"

			},

			{

				"title" : "JavaScript",

				"school" : "Udacitty",

				"date" : 2015,

				"url" : "http://udacity.com"

			}],

	"display" : function() {

				/* Append Education header */

				$("#education").append(HTMLschoolStart);

				/* Declare temporary variables */

				var formattedSchoolName;

				var formattedSchoolDegree;

				var formattedSchoolDates;

				var formattedSchoolLocation;

				var formattedSchoolMajor;

				/* Loop through schools, format and append the variables to HTML tags */

				for (school in education.schools) {

					/* Education school name and degree */

					formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

					formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

					$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

					/* School dates */

					formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

					$(".education-entry:last").append(formattedSchoolDates);

					/* School location */

					formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

					$(".education-entry:last").append(formattedSchoolLocation);

					/* School major */

					formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

					$(".education-entry:last").append(formattedSchoolMajor);

				}

				/* Display Online Class header */

				$(".education-entry").append(HTMLonlineClasses);

				/* Declare temporary variables */

				var formattedOnlineTitle;

				var formattedOnlineSchool;

				var formattedOnlineDate;

				var formattedOnlineURL;

				/* Loop through online courses, format and append them to HTML tags */

				for (course in education.onlineCourses) {

					/* format Title and School name, concat and append them to HTML tag */

					formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

					formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

					$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

					/* Online course dates */

					formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);

					$(".education-entry:last").append(formattedOnlineDate);

					/* Online school URLs */

					formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

					$(".education-entry:last").append(formattedOnlineURL);

				}

		}

};


/* MAP */
/* -------------------------------------------------------------------------------- */
/* Map is displayed through helper.js */
/* Sandhya - not required, but converted map into an object with display function */

/* Append a google map */
var map = {

	"display" : function() {

		$("#mapDiv").append(googleMap);
	}
};


/* FOOTER */
/* -------------------------------------------------------------------------------- */
/* Sandhya - Fix for Report.  Add contact labels and data. */

var footer = {

	"display" : function(bioContacts) {

		var formattedHTMLcontactGenericLabel;

		var formattedHTMLcontactGenericData;

		//Loop through bio.contacts, get property names inside contact and their value
		for(var contact in bioContacts) {

			var data = bioContacts[contact];

			//function to first replace contact label in the HTML,
			formattedHTMLcontactGenericLabel = HTMLcontactGeneric.replace("%contact%", contact);

			//then reuse formattedHTMLcontactGenericLabel string and replace data.
			formattedHTMLcontactGenericData = formattedHTMLcontactGenericLabel.replace("%data%", data);

			//finally prepend to footerContacts div id.
			$("#footerContacts").append(formattedHTMLcontactGenericData);
		}

	}
};


/* OBJECT FUNCTION CALLS */
/* -------------------------------------------------------------------------------- */
/* Call functions to display resume bio, education, work, and project sections */

bio.display();

education.display();

work.display();

projects.display();

map.display();

footer.display(bio.contacts);
