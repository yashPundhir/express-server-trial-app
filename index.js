const express = require("express"); // require module syntax (old style or common JS style)
// import express from "express"; // (new style or module JS style)
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

const githubData = {
	login: "yashPundhir",
	id: 114079239,
	node_id: "U_kgDOBsy2Bw",
	avatar_url: "https://avatars.githubusercontent.com/u/114079239?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/yashPundhir",
	html_url: "https://github.com/yashPundhir",
	followers_url: "https://api.github.com/users/yashPundhir/followers",
	following_url:
		"https://api.github.com/users/yashPundhir/following{/other_user}",
	gists_url: "https://api.github.com/users/yashPundhir/gists{/gist_id}",
	starred_url:
		"https://api.github.com/users/yashPundhir/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/yashPundhir/subscriptions",
	organizations_url: "https://api.github.com/users/yashPundhir/orgs",
	repos_url: "https://api.github.com/users/yashPundhir/repos",
	events_url: "https://api.github.com/users/yashPundhir/events{/privacy}",
	received_events_url:
		"https://api.github.com/users/yashPundhir/received_events",
	type: "User",
	site_admin: false,
	name: "Yash Pundhir",
	company: null,
	blog: "https://yash-pundhir-portfolio-sj.netlify.app/",
	location: "INDIA",
	email: null,
	hireable: null,
	bio: "Just a beginner trying to learn Web Development in MERN Stack.",
	twitter_username: "YashPundhirr",
	public_repos: 142,
	public_gists: 0,
	followers: 4,
	following: 12,
	created_at: "2022-09-21T12:38:10Z",
	updated_at: "2024-10-08T01:55:33Z",
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/github", (req, res) => {
	res.send("github route is searched");
});

app.get("/login", (req, res) => {
	res.send("<h1>login route</h1>");
});

app.get("/githubData", (req, res) => {
	res.json(githubData);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
