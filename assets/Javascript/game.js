$(document).ready(function () {


    var compScore = Math.floor(Math.random() * 120) + 19;
    var userScore = Math.floor(Math.random() * 120) + 19;
    var btnOneScore = Math.floor(Math.random() * 12) + 1;
    var btnTwoScore = Math.floor(Math.random() * 12) + 1;
    var btnThreeScore = Math.floor(Math.random() * 12) + 1;
    var btnFourScore = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var losses = 0;


    document.getElementById("computerScore").innerHTML = compScore;

    console.log("comp score: ", compScore);
    console.log("user score: ", userScore);
    console.log("btn one: ", btnOneScore);
    console.log("btn two: ", btnTwoScore);
    console.log("btn three: ", btnThreeScore);
    console.log("btn four: ", btnFourScore);


    $(".btn-primary").on("click", function () {
        userScore = userScore + btnOneScore;
        document.getElementById("yourScore").innerHTML = userScore;
        if (userScore === compScore) {
            wins = wins + 1;
            document.getElementById("userWins").innerHTML = "Wins: " + wins;
            
            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);


        }
        else if (userScore > compScore) {
            losses = losses + 1;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);

        }

        console.log("New Total Score: ", userScore);
        console.log("wins: ", wins);

    })

    $(".btn-secondary").on("click", function () {
        userScore = userScore + btnTwoScore;
        document.getElementById("yourScore").innerHTML = userScore;
        if (userScore === compScore) {
            wins = wins + 1;
            document.getElementById("userWins").innerHTML = "Wins: " + wins;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);

        }
        else if (userScore > compScore) {
            losses = losses + 1;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);
        }
        console.log("New Total Score: ", userScore)
        console.log("wins: ", wins);
    })

    $(".btn-success").on("click", function () {
        userScore = userScore + btnThreeScore;
        document.getElementById("yourScore").innerHTML = userScore;
        if (userScore === compScore) {
            wins = wins + 1;
            document.getElementById("userWins").innerHTML = "Wins: " + wins;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);

        }
        else if (userScore > compScore) {
            losses = losses + 1;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);
        }
        console.log("New Total Score: ", userScore)
        console.log("wins: ", wins);
    })

    $(".btn-danger").on("click", function () {
        userScore = userScore + btnFourScore;
        document.getElementById("yourScore").innerHTML = userScore;
        if (userScore === compScore) {
            wins = wins + 1;
            document.getElementById("userWins").innerHTML = "Wins: " + wins;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);

        }
        else if (userScore > compScore) {
            losses = losses + 1;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;

            compScore = Math.floor(Math.random() * 120) + 19;
            userScore = Math.floor(Math.random() * 120) + 19;
            btnOneScore = Math.floor(Math.random() * 12) + 1;
            btnTwoScore = Math.floor(Math.random() * 12) + 1;
            btnThreeScore = Math.floor(Math.random() * 12) + 1;
            btnFourScore = Math.floor(Math.random() * 12) + 1;
            document.getElementById("computerScore").innerHTML = compScore;
            document.getElementById("yourScore").innerHTML = 0;
            console.log("new comp score: ", compScore);
            console.log("new user score: ", userScore);
            console.log("new btn one: ", btnOneScore);
            console.log("new btn two: ", btnTwoScore);
            console.log("new btn three: ", btnThreeScore);
            console.log("new btn four: ", btnFourScore);
        }
        console.log("New Total Score: ", userScore)
        console.log("wins: ", wins);
    })


})