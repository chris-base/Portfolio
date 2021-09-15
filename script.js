const pages = [];
pages.push(document.getElementById('home'));
pages.push(document.getElementById('projects'));
pages.push(document.getElementById('contact'));

// for (page in pages) {

// 	if (document.URL.indexOf("#" + page.id) >= 0) {
// 		page.style.display = 'block';
// 	} else if (document.URL.indexOf('/') >= 0) {
// 		page.style.display = 'none';
// 	}

// }

const changePage = pageToOpen => {

	console.log('clicked');

	pages.forEach(page => {
		if (page.id === pageToOpen) {
			page.style.display = 'block';
			location.href = '#' + page.id;
		} else {
			page.style.display = 'none';
		}
	});

}