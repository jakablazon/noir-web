$(document).ready(function() {
	var elements = document.querySelectorAll(".intro-bottom"), i = 0;
		Array.prototype.forEach.call(elements, function(element) { 
		setTimeout(function(){ element.classList.add("animated") }, 150*i)
		i++;
	});

	var elements = document.querySelectorAll(".intro-bottom-2"), i = 0;
		Array.prototype.forEach.call(elements, function(element) { 
		setTimeout(function(){ element.classList.add("animated") }, 150*i)
		i++;
	});

	var elements = document.querySelectorAll(".intro-bottom-3"), i = 0;
		Array.prototype.forEach.call(elements, function(element) { 
		setTimeout(function(){ element.classList.add("animated") }, 150*i)
		i++;
	});
});