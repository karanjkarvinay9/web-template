const colors = ['#80DEEA', '#FFE338', '#EA3333', '#00E600', '#B4BAB9', '#FF9D5C', '#B44DE0'];

const ssc_subject = ['General Awareness', 'English Language and Comprehension', 'Quantitative Aptitude'];

const ssc_topics = ['Hiatory', 'Geography', 'Economy', 'Biology', 'Polity', 'Chemistry', 'Physics',
'Computer', 'Synonyms', 'Antonyms', 'One Word Substitution', 'Sentence Completion', 'Spotting Errors',
'Sentence improvement', 'Idioms & Phrases', 'Spelling Test', 'Reading comprehension', 'Number System', 
'Congruence and similarity of triangles', 'Fractions and Decimals', 'Circle and its chords, tangents', 
'Percentage', 'Angles subtended by chords of a circle', 'Ratio & Proportion', 'Common tangents to two or more circles',
 'Square root'];

 banking_subject = ['Reasoning Ability', 'English Language', 'Quantitative Aptitude']

 banking_topics = ['Coding & Decoding', 'Puzzles', 'Seating Arrangement', 'Logical reasoning',
'Ranking and Order', 'Alphanumeric series', 'Data sufficiency', 'Syllogism', 'Input and output',
'Reading comprehension','cloze test',,'fill in the blanks','tenses rules','paragraph completion',
'Sentence Rearrangement/ jumbled sentences','error detection','preposition rules','idioms & phrases',
'Simplification and Approximation', 'Profit & loss', 'Number Series', 'Quadratic equations', 'Problems on Ages',
'Boat and Stream', 'Data Interpretation', 'speed, time & distance','percentage']

function get_active_element(){
	v = document.getElementsByClassName('dropdown-item active')
	return v[0];
}


function changeclass(parm){
	v = get_active_element()
	if (parm == v){
		return null
	}
	if (v.innerHTML == 'SSC')	{
		v.classList.remove("active");
		active = document.getElementById('banking');
		active.classList.add('active');
	}	
	else{
		v.classList.remove("active");
		active = document.getElementById('ssc');
		active.classList.add("active");
	}

	createCarousel();
}


function createCarousel() {
	document.getElementById('exam').innerHTML = get_active_element().innerHTML; 
	color_div = document.getElementsByClassName('filler');
	j = 0
	for (var i = 0; i < color_div.length; i++) {
		random_color = colors[Math.floor(Math.random() * colors.length)];
		j=j+1;
		document.getElementById("filler-"+j).style.backgroundColor = random_color;
		color_div[i];
		carousel_context()
	}
}


function carousel_context(){
	if (get_active_element().innerHTML == 'SSC')
	{
		subject = document.getElementsByClassName('subject-name');
		for (var i = 0; i < subject.length; i++) {
			subject[i].innerHTML = ssc_subject[i];
		}
		title = document.getElementsByClassName('card-title');
		for (var i = 0; i < title.length; i++) {
			title[i].innerHTML = ssc_topics[i];
		}
	}	

	else{
		
		subject = document.getElementsByClassName('subject-name');
		for (var i = 0; i < subject.length; i++) {
			subject[i].innerHTML = banking_subject[i];
		}
		title = document.getElementsByClassName('card-title');
		for (var i = 0; i < title.length; i++) {
			title[i].innerHTML = banking_topics[i];
		}

	}

}