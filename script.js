const pages = [];
pages.push(document.getElementById('home'));
pages.push(document.getElementById('projects'));
pages.push(document.getElementById('contact'));


const onStartup = () => {

	let loadedOnPage = false;

	for (page in pages) {

		if (document.URL.indexOf("#" + pages[page].id) >= 0) {
			pages[page].style.display = 'block';
			loadedOnPage = true;
		} else {
			pages[page].style.display = 'none';
		}

	}

	if (!loadedOnPage) {
		document.getElementById('home').style.display = 'block';
		loadedOnPage = false;
	}
}

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

onStartup();