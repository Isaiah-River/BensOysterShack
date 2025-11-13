<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ben's Oyster Shack</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .background {
            width: 100%;
            height: 100vh;
            background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
            background-size: 400% 400%;
            animation: rainbow 10s ease infinite;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .title {
            font-size: 4rem;
            color: white;
            text-shadow: 0 0 20px #fff, 0 0 30px #ff0, 0 0 40px #ff0, 0 0 50px #ff0, 0 0 75px #ff0;
            animation: titleAnimation 2s infinite alternate;
        }

        .oysters-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }

        .oysters {
            font-size: 3rem;
            color: white;
            text-shadow: 0 0 20px #ff0, 0 0 30px #ff0;
            animation: oysterAnimation 2s infinite alternate;
            margin: 10px 0;
        }

        img {
            width: 300px;
            height: auto;
            margin: 20px 0;
        }

        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes titleAnimation {
            0% { transform: scale(1); color: #ff0; }
            100% { transform: scale(1.2); color: #ff00ff; }
        }

        @keyframes oysterAnimation {
            0% { transform: scale(1); color: #ff0000; }
            50% { transform: scale(1.5); color: #00ff00; }
            100% { transform: scale(1); color: #0000ff; }
        }
    </style>
</head>
<body>
    <div class="background">
        <h1 class="title">Welcome to Ben's <br>Oyster Shack!</h1>
        <div class="oysters-container">
            <p class="oysters">Fresh Oysters from Ontario!</p>
            <p class="oysters">Best Oysters in the World!!</p>
            <img src="ben.png" alt="Ben's Oyster Shack">
            <p class="oysters">We Only Sell the Best!!!</p>
        </div>
    </div>
</body>
</html>
