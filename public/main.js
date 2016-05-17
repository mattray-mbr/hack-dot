// JS FILE FOR GABRIEL LEON'S CODING EXERCISE FOR THE FEDERATION





// angular module declaration and dependancy injection here

var app = angular.module('myApp',['ngAnimate'])

// angular module declaration and dependancy injection here



// angular controller (front-end controller) here

app.controller('myController',['$scope',function ($scope) {



	// functions that control the scrolling speed of the parallax element, notice that we could have used JQuery's $(document).height() to make the speed dependent on html document size

	var parallax = function () {
		var parallaxImage  = document.getElementById("parallax")
		parallaxImage.style.top = - (window.pageYOffset)/(1.4) + "px"
	}
	window.addEventListener("scroll", parallax, false)

	// functions that control the scrolling speed of the parallax element, notice that we could have used JQuery's $(document).height() to make the speed dependent on html document size



	// functions and boolean variables that control the dropdown menus here
	
	$scope.showAboutTheCrew = false
	$scope.showSecondSeason = false
	$scope.showTheSpacecraft= false
	$scope.showNested       = false

	$scope.preventMenuClose = false
	$scope.preventNestedMenuClose = false

	$scope.preventMenuCloseFunction = function () {
		if ($scope.preventMenuClose === true) {
			$scope.showAboutTheCrew = false
			$scope.showSecondSeason = false
			$scope.showTheSpacecraft= false
			$scope.showNested       = false
			$scope.preventMenuClose = false
			$scope.preventNestedMenuClose = false
		} else if ($scope.preventNestedMenuClose === true) {
			$scope.showAboutTheCrew = false
			$scope.showSecondSeason = false
			$scope.showTheSpacecraft= false
			$scope.showNested       = false
			$scope.preventMenuClose = false
			$scope.preventNestedMenuClose = false
		}
	}
	$scope.showAboutTheCrewFunction = function () {
		console.log("About the Crew")
		$scope.showNested       = false
		$scope.showSecondSeason = false
		$scope.showTheSpacecraft= false
		$scope.preventMenuClose = false
		$scope.preventNestedMenuClose = false
		if ($scope.showAboutTheCrew === false) {
			$scope.showAboutTheCrew = true
			setTimeout(function () {$scope.preventMenuClose = true},100)
		} else {
			$scope.showAboutTheCrew = false
			$scope.preventMenuClose = false
		}
	}
	$scope.showSecondSeasonFunction = function () {
		console.log("Second Season")
		$scope.showNested       = false
		$scope.showAboutTheCrew = false
		$scope.showTheSpacecraft= false
		$scope.preventMenuClose = false
		$scope.preventNestedMenuClose = false
		if ($scope.showSecondSeason === false) {
			$scope.showSecondSeason = true
			setTimeout(function () {$scope.preventMenuClose = true},100)
		} else {
			$scope.showSecondSeason = false
			$scope.preventMenuClose = false
		}
	}
	$scope.showTheSpacecraftFunction = function () {
		console.log("The Spacecraft")
		$scope.showNested       = false
		$scope.showAboutTheCrew = false
		$scope.showSecondSeason = false
		$scope.preventMenuClose = false
		$scope.preventNestedMenuClose = false
		if ($scope.showTheSpacecraft === false) {
			$scope.showTheSpacecraft = true
			setTimeout(function () {$scope.preventMenuClose = true},100)
		} else {
			$scope.showTheSpacecraft = false
			$scope.preventMenuClose = false
		}
	}
	$scope.showNestedFunction = function () {
		console.log("Engine")
		$scope.preventMenuClose = false
		$scope.preventNestedMenuClose = false
		if ($scope.showNested === false) {
			$scope.showNested = true
			setTimeout(function () {$scope.preventNestedMenuClose = true},100)
			setTimeout(function () {$scope.preventMenuClose = true},100)
		} else {
			$scope.showNested = false
			setTimeout(function () {$scope.preventNestedMenuClose = true},100)
			setTimeout(function () {$scope.preventMenuClose = true},100)
		}
	}

	// functions and boolean variables that control the dropdown menus here



	// function that translates a string with no punctuation from English to 'pig' Klingon

	$scope.translateToKlingon = function (englishString) {
		var wordsArray = englishString.split(" ")
		for ( var i = 0; i < wordsArray.length; i++ ) {
			var lettersArrayInWord = wordsArray[i].split("")
			if ( lettersArrayInWord.length === 1 ) {
				lettersArrayInWord.push("-")
				lettersArrayInWord.push("w")
				lettersArrayInWord.push("o")
				lettersArrayInWord.push("r")
			} else if ( lettersArrayInWord[0].toLowerCase() === "a" || lettersArrayInWord[0].toLowerCase() === "e" || lettersArrayInWord[0].toLowerCase() === "i" || lettersArrayInWord[0].toLowerCase() === "o" || lettersArrayInWord[0].toLowerCase() === "u" ) {
				var lastLetter = lettersArrayInWord[lettersArrayInWord.length - 1]
				lettersArrayInWord.push("-")
				lettersArrayInWord.push(lastLetter)
				lettersArrayInWord.push("o")
				lettersArrayInWord.push("r")
			} else if ( lettersArrayInWord[0].toLowerCase() === "t" && lettersArrayInWord[1].toLowerCase() === "h" ) {
				var letterToAppend = lettersArrayInWord[0]
				lettersArrayInWord.splice(0,1)
				lettersArrayInWord.splice(0,1)
				if ( letterToAppend === letterToAppend.toUpperCase() ) {
					var newFirstLetter = lettersArrayInWord[0].toUpperCase()
					lettersArrayInWord.splice(0,1,newFirstLetter)
				} 
				lettersArrayInWord.push("-")
				lettersArrayInWord.push("t")
				lettersArrayInWord.push("h")
				lettersArrayInWord.push("o")
				lettersArrayInWord.push("r")
			} else {
				var letterToAppend = lettersArrayInWord[0]
				lettersArrayInWord.splice(0,1)
				if ( letterToAppend === letterToAppend.toUpperCase() ) {
					var newFirstLetter = lettersArrayInWord[0].toUpperCase()
					lettersArrayInWord.splice(0,1,newFirstLetter)
				} 
				lettersArrayInWord.push("-")
				lettersArrayInWord.push(letterToAppend.toLowerCase())
				lettersArrayInWord.push("o")
				lettersArrayInWord.push("r")
			}
			wordsArray.splice(i,1,lettersArrayInWord.join(""))
		}
		return wordsArray.join(" ")
	}

	// function that translates a string with no punctuation from English to 'pig' Klingon



	// functions that print the English translation of the 'pig' Klingon links selected

	$scope.captain = function () {
		console.log("captain")
	}
	$scope.hyperspaceFAQS = function () {
		console.log("hyperspace faqs")
	}
	$scope.firstSeason = function () {
		console.log("first season")
	}
	$scope.plot = function () {
		console.log("plot")
	}
	$scope.cast = function () {
		console.log("cast")
	}
	$scope.plasmaDrive = function () {
		console.log("plasma drive")
	}
	$scope.warpDrive = function () {
		console.log("warp drive")
	}
	$scope.bridge = function () {
		console.log("bridge")
	}
	$scope.cabins = function () {
		console.log("cabins")
	}

	// functions that print the English translation of the 'pig' Klingon links selected



}])

// angular controller (front-end controller) here