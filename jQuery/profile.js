var courses = [ 
	{ name : "Java 101", category : "PROG", dateCreated : "1/1/2015", description : "Wow" },
  	{ name : "MongoDB 101", category : "DB", dateCreated : "2/1/2015", description : "Good" },
  	{ name : "Express 101", category : "PROG", dateCreated : "3/1/2015", description : "Better" },
  	{ name : "AngularJS 101", category : "WEB", dateCreated : "4/1/2015", description : "Best" },
  	{ name : "NodeJS 101", category : "PROG", dateCreated : "5/1/2015", description : "Awesome" } ];

$(function() {
	loadCourses();
	renderCourses();
	initRemoveHandler();
	initAddHandler();
});

function loadCourses() {
	if ($.localStorage.isEmpty('courses')) {
		console.log('empty');
		$.localStorage.set('courses', courses);
	} else {
		courses = $.localStorage.get('courses');
		console.log(courses);	
	}
}

function renderCourses() {
	var template = createTemplate();
	for(var i = 0; i < courses.length; i++) {
		if (courses[i] !== null ) {
			newRow = template.clone();
			newRow.attr('id', i);
			newRow.find('.course_name').html(courses[i].name);
			newRow.find('.course_cat').html(courses[i].category);
			newRow.find('.course_date').html(courses[i].dateCreated);
			newRow.find('.course_description').html(courses[i].description);
			$('#course_table').append(newRow);
		}
	}
}

function addCourse(id) {
	$.localStorage.set('courses', courses);
}

function removeCourse(id) {
	$('#' + id).remove();
	delete courses[id];
	$.localStorage.set('courses', courses);
	console.log(courses);
}

function createTemplate() {
	var rowTemplate = $('<tr class="course_row"><td class="course_name"></td><td class="course_cat"></td><td class="course_date"></td><td class="course_description"></td><td><button class="course_edit btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></button><button class="course_remove btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button></td></tr>');
	return rowTemplate;
}

function initRemoveHandler() {
	$('#course_table').on('click', '.course_remove', function(event) {
		removeCourse($(event.target).closest('.course_row').attr('id'));
	});
}

function openForm() {
	console.log('sup');
}

function initAddHandler() {
	$('.course_add').click(function() {
		openForm();
	});
}

function initEditHandler() {

}



