/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//Making a request for my user ID and the associated info
// Declare value of cards and grab with query selector to select div with class of .cards to populate
//with my DOM element
const cards = document.querySelector('.cards');

// axios.get is utilized to create a Promise where once data is delivered from the gitHub API the
// value of cardCreator will hold the function established gitHubCard which takes the argument of response.data
//which is the data received from axios this is then appended to the cards value that was originally declared
//thereby populating the div .cards with gitHub information populated cards within the DOM element
axios.get('https://api.github.com/users/RichardEsquivel').then((response) => {
	const cardCreator = gitHubCard(response.data);
	cards.append(cardCreator);
});
// console.log(itsMe);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

//*** Creating function for GitHub Profile Card

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//array of followers used to populate the for each which is utilized to run the axios javascript library
//and populate the .cards div
const followersArray = [
	'Jason-Aviles',
	'lucasbaze',
	'DerekEtman',
	'pusheadmetal',
	'DanielWallen87',
	'NicholasInterest1'
];

followersArray.forEach((followersArray) => {
	axios.get(`https://api.github.com/users/${followersArray}`).then((response) => {
		const cardCreator = gitHubCard(response.data);
		cards.append(cardCreator);
	});
});
// axios.get('https://api.github.com/users/RichardEsquivel/followers')
// .then((response) => {
// 	console.log(response);
// 	response.data
// 		.forEach((items) => {
// 			let gitFollower = new divCards(items);
// 			newCard.appendChild(gitFollower);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHubCard(user) {
	//Creating div container for profile card and adding classes to elements of the gitHubCard
	const card = document.createElement('div');
	card.classList.add('card');

	//Setting Source of userImg from url and adding image to Card container, append function equivalent to appendChild
	const userImg = document.createElement('img');
	userImg.src = user.avatar_url;
	card.append(userImg);

	//Establish cardInfo div and add the style class of card-info, append cardInfo to card div
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	card.append(cardInfo);

	//Creates name heading in an h3 adds style class .name to element
	const name = document.createElement('h3');
	name.classList.add('name');

	//This will take the name value from the data received from the axios GET response
	name.textContent = user.name;

	//Establish username in p element, add style .username will receive username from login in response from GET
	const userName = document.createElement('p');
	userName.classList.add('username');
	userName.textContent = user.login;

	//Set user location element and user template string to display 'Location : user location
	const userLocation = document.createElement('p');
	userLocation.textContent = `Location: ${user.location || 'Somewhere!'}`;

	//GitProfile url link will be nested
	const gitProfile = document.createElement('p');
	const gitAddress = document.createElement('a');
	gitAddress.href = user.html_url;

	//Establish element of followers and following and display in template literal
	const followers = document.createElement('p');
	followers.textContent = `Followers: ${user.followers}`;
	const following = document.createElement('p');
	following.textContent = `Following: ${user.following}`;

	//Create bio p element and append to cardInfo element
	const bio = document.createElement('p');
	bio.textContent = `Bio: ${user.bio || 'none'}`;

	//setting up Structure for page appending elements created in the DOM to the parent div card and other containers such as cardInfo
	//Using append can append multiple nodes at once
	card.append(userImg, cardInfo);
	cardInfo.append(name, userName, userLocation, gitProfile, followers, following, bio);
	gitProfile.append(gitAddress);

	//return value of card so it can be utilized
	return card;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.




/* List of LS Instructors Github username's: 
 Jason-Aviles
 lucasbaze
DerekEtman
pusheadmetal
DanielWallen87
NicholasInterest1

*/
