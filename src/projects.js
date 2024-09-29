import blog1 from "./img/blog1.png";
import blog2 from "./img/blog2.png";
import blog3 from "./img/blog3.png";
import blogHome from "./img/blogHome.png";
import cinema1 from "./img/cinema1.png";
import cinema2 from "./img/cinema2.png";
import cinema3 from "./img/cinema3.png";
import cinemaHome from "./img/cinemaHome.png";
import music1 from "./img/music1.png";
import music2 from "./img/music2.png";
import music3 from "./img/music3.png";
import musicHome from "./img/musicHome.png";
import port1 from "./img/port1.png";
import port2 from "./img/port2.png";
import port3 from "./img/port3.png";
import portHome from "./img/portHome.png";
import rawg1 from "./img/rawg1.png";
import rawg2 from "./img/rawg2.png";
import rawg3 from "./img/rawg3.png";
import rawgHome from "./img/rawgHome.png";
import spa1 from "./img/spa1.png";
import spa2 from "./img/spa2.png";
import spa3 from "./img/spa3.png";
import spaHome from "./img/spaHome.png";
import task1 from "./img/task1.png";
import task2 from "./img/task2.png";
import task3 from "./img/task3.png";
import taskHome from "./img/taskHome.png";
import yt1 from "./img/yt1.png";
import yt2 from "./img/yt2.png";
import yt3 from "./img/yt3.png";
import ytHome from "./img/ytHome.png";
import stat1 from "./img/stat1.png";
import stat2 from "./img/stat2.png";
import stat3 from "./img/stat3.png";
import statHome from "./img/statHome.png";
import cdlHome from "./img/cdlHome.png";
import cargame from "./img/cargame.png";

export const projects = () => {
  return [
    {
      name: "CDL Predictor",
      description:
        "Developed and optimized a machine learning pipeline using PyTorch and GPU acceleration to predict esports player performance through ensemble learning and hyperparameter tuning.\nIntegrated multiple neural network architectures with traditional machine learning models (KNN, Logistic Regression, Random Forest) into a robust ensemble, leveraging GPU-accelerated XGBoost for enhanced predictive power.\nCreated a Python web scraper to dynamically gather data on all active Call of Duty pro players to feed into the machine learning models.\nAchieved up to 70% correct predictions in over 230 trials.",
      repo: "https://github.com/Seamarr/CDL_Predictor",
      url: "/work/cdlPredictor",
      id: 0,
      languages: ["Python"],
      technology: ["PyTorch", "XGBoost"],
      mainImg: cdlHome,
      images: [],
    },
    {
      name: "Blog App",
      description:
        "This is a full on blog app. It has a database to keep track of all the users who register, their profiles, and posts. It also has private views to only allow authorized users to see",
      repo: "https://github.com/Seamarr/blogAppCM",
      url: "/work/blogApp",
      id: 1,
      languages: ["Python", "HTML5", "CSS"],
      technology: ["Django"],
      mainImg: blogHome,
      images: [blog1, blog2, blog3],
    },
    {
      name: "RawGames",
      description:
        "This app calls on the rawg api to display info on video games. The presets are popular, upcoming, and new games, but the user can look up any video game and get info on it",
      repo: "Not Public",
      url: "/work/rawGames",
      id: 2,
      languages: ["JavaScript", "HTML5", "CSS"],
      technology: ["React JS"],
      mainImg: rawgHome,
      images: [rawg1, rawg2, rawg3],
    },
    {
      name: "CarGame",
      description:
        "This is my final project for my computer graphics class. It is a car game where the user can drive around a track and collect coins. The user also has some control over the physics of the game by being able to change the max speed allowed, mass of the car, applied force of the engine, braking force of the breaks, and a 'universal' coefficient of friction. All of these things work together using known physics formulas to create a semi-real physics experience.",
      repo: "https://github.com/Seamarr/CarProject/tree/main",
      url: "/work/carGame",
      id: 3,
      languages: ["JavaScript"],
      technology: ["Tiny Graphics"],
      mainImg: cargame,
      images: [],
    },
    {
      name: "Music Player",
      description:
        "This is a music player with fresh animations. Only the preset music is available, but the data to be able to play the music is received from an api",
      repo: "https://github.com/Seamarr/musicPlayerCM",
      url: "/work/music",
      id: 4,
      languages: ["JavaScript", "HTML5", "CSS"],
      technology: ["React JS"],
      mainImg: musicHome,
      images: [music1, music2, music3],
    },
    {
      name: "Task App",
      description:
        "This is an app to keep track of your tasks. The front-end is managed by React, and the back-end by Django",
      repo: "https://github.com/Seamarr/taskDjCM",
      url: "/work/task",
      id: 5,
      languages: ["JavaScript", "Python", "HTML5", "CSS"],
      technology: ["React JS", "Django"],
      mainImg: taskHome,
      images: [task1, task2, task3],
    },
    {
      name: "Youtube Search",
      description:
        "This app calls on the youtube api to display videos from youtube that the user searches.",
      repo: "https://github.com/Seamarr/ytHooksCM",
      url: "/work/ytsearch",
      id: 6,
      languages: ["JavaScript", "HTML5", "CSS"],
      technology: ["React JS"],
      mainImg: ytHome,
      images: [yt1, yt2, yt3],
    },
    {
      name: "Portoflio Website",
      description:
        "This is a portfolio website with cool interactive animations",
      repo: "Not Public",
      url: "/work/port",
      id: 7,
      languages: ["JavaScript", "HTML5", "CSS"],
      technology: ["React JS"],
      mainImg: portHome,
      images: [port1, port2, port3],
    },
    {
      name: "Fortnite Stat Tracker",
      description:
        "This uses a fortnite api to get and display data on fortnite players across epic games, playstation, and xbox. It also gets the current item shop to know whats live to buy at all times.",
      repo: "Not Public",
      url: "/work/statTracker",
      id: 8,
      languages: ["JavaScript", "HTML5", "CSS"],
      technology: ["React JS"],
      mainImg: statHome,
      images: [stat1, stat2, stat3],
    },
  ];
};
