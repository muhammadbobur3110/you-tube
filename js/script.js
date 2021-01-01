var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

// var elIdish = $_('.idish');
// var elButton = $_('button', elIdish);

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

var counter = 0;

var lists = [];
var recommended = [];
var food = [];

var elVideosItem = $_('.videos__item');
var elVideosImg = $_('.videos__img');
var elVideosBtn = $_('.videos__btn');
var elVideosSpan = $_('.videos__span');
var elVideosTitle = $_('.videos__title');
var elVideosTexts = $_('.videos__texts');
var elVideosTextViewers = $_('.videos__text--viewers');
var elVideosTextDay = $_('.videos__text--day');
var elVideosTextName = $_('.videos__text--name');
var elVidesList = $_('.videos__list')

var elRecommendedItem = $_('.recommended__item');
var elRecommendedImg = $_('.recommended__img');
var elRecommendedBtn = $_('.recommended__btn');
var elRecommendedSpan = $_('.recommended__span');
var elRecommendedTitle = $_('.recommended__title');
var elRecommendedTexts = $_('.recommended__texts');
var elRecommendedTextViewers = $_('.recommended__text--viewers');
var elRecommendedTextDay = $_('.recommended__text--day');
var elRecommendedTextName = $_('.recommended__text--name');
var elRecommendedList = $_('.recommended__list')

var elFoodItem = $_('.food__item');
var elFoodImg = $_('.food__img');
var elFoodBtn = $_('.food__btn');
var elFoodSpan = $_('.food__span');
var elFoodTitle = $_('.food__title');
var elFoodTexts = $_('.food__texts');
var elFoodTextViewers = $_('.food__text--viewers');
var elFoodTextDay = $_('.food__text--day');
var elFoodTextName = $_('.food__text--name');
var elFoodList = $_('.food__list')

var elVideosTemplate = $_('.template__item').content;
var elVideosItems = elVideosTemplate.cloneNode(true);
var elImg = $_('videos__img', elVideosItems)



  lists.push({
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=1',
    watch: 'L',
    minutes: '2:15',
    title: 'A Brief History Of Creation',
    viewers: '8k views',
    day: '3 dasy ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=2',
    watch: 'L',
    minutes: '8:00',
    title: 'Selecting The Right Hotel',
    viewers: '123k views',
    day: '1 months ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=3',
    watch: 'L',
    minutes: '5:32',
    title: 'Asteroids',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=4',
    watch: 'L',
    minutes: '5:32',
    title: 'Telescopes 101',
    viewers: '11k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=5',
    watch: 'L',
    minutes: '5:32',
    title: 'Medical Care Is Just',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=6',
    watch: 'L',
    minutes: '5:32',
    title: 'Moon Gazing',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  }
  );

  console.log(lists)



var createVideoElement = function (video, index){
  var elVideosItems = elVideosTemplate.cloneNode(true);


  $_('.videos__img', elVideosItems).src = video.video;
  $_('.videos__btn', elVideosItems).textContent = video.watch;
  $_('.videos__btn', elVideosItems).dataset.contactId = video.index
  $_('.videos__span', elVideosItems).textContent = video.minutes;
  $_('.videos__title', elVideosItems).textContent = video.title;
  $_('.videos__text--viewers', elVideosItems).textContent = video.viewers;
  $_('.videos__text--day', elVideosItems).textContent = video.day;
  $_('.videos__text--name', elVideosItems).textContent = video.name;
  // elBtn.dataset.contactId = elVideosItem;

  return elVideosItems;
}

var displayVideos = function () {

  var elVideosFragment = document.createDocumentFragment();

  lists.forEach(function (item, index){
    elVideosFragment.appendChild(createVideoElement(item));
  });

  elVidesList.appendChild(elVideosFragment);
}

displayVideos();






var elRecommendedTemplate = $_('.template__item2').content;
var elRecommendedItems = elRecommendedTemplate.cloneNode(true);
var elImg2 = $_('Recommended__img', elRecommendedItems);

recommended.push({
  id: ++counter,
  img: 'https://picsum.photos/540/250?random=7',
  watch: 'L',
  minutes: '3:40',
  title: 'Dude You Re Getting A Telescope',
  viewers: '8k views',
  day: '3 dasy ago',
  name: 'Gussie French'
},
{
  id: ++counter,
  img: 'https://picsum.photos/540/250?random=8',
  watch: 'L',
  minutes: '8:00',
  title: 'Moon Gazing',
  viewers: '123k views',
  day: '1 months ago',
  name: 'Dollie Blair'
},
{
  id: ++counter,
  img: 'https://picsum.photos/540/250?random=9',
  watch: 'L',
  minutes: '5:32',
  title: 'Moon Gazing',
  viewers: '43k views',
  day: '12 days ago',
  name: 'Dollie Blair'
}
);

var createRecommendElement = function (recommend, index){
  var elRecommendedItems = elRecommendedTemplate.cloneNode(true);


  $_('.recommended__img', elRecommendedItems).src = recommend.img;
  $_('.recommended__btn', elRecommendedItems).textContent = recommend.watch;
  $_('.recommended__btn', elRecommendedItems).dataset.contactId = recommend.index
  $_('.recommended__span', elRecommendedItems).textContent = recommend.minutes;
  $_('.recommended__title', elRecommendedItems).textContent = recommend.title;
  $_('.recommended__text--viewers', elRecommendedItems).textContent = recommend.viewers;
  $_('.recommended__text--day', elRecommendedItems).textContent = recommend.day;
  $_('.recommended__text--name', elRecommendedItems).textContent = recommend.name;
  // elBtn.dataset.contactId = elVideosItem;

  return elRecommendedItems;
}

var displayRecommends = function () {

  var elRecommendedFragment = document.createDocumentFragment();

  recommended.forEach(function (recommend, index){
    elRecommendedFragment.appendChild(createRecommendElement(recommend));
  });

  elRecommendedList.appendChild(elRecommendedFragment);
}

displayRecommends();

////////////////////////////////////////
//////////////////////////////////////// FOOD
////////////////////////////////////////

var elFoodTemplate = $_('.template__item3').content;
var elFoodItems = elFoodTemplate.cloneNode(true);
var elImg3 = $_('food__img', elFoodItems)



  food.push({
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=1',
    watch: 'L',
    minutes: '2:15',
    title: 'A Brief History Of Creation',
    viewers: '8k views',
    day: '3 dasy ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=2',
    watch: 'L',
    minutes: '8:00',
    title: 'Selecting The Right Hotel',
    viewers: '123k views',
    day: '1 months ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=3',
    watch: 'L',
    minutes: '5:32',
    title: 'Asteroids',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=4',
    watch: 'L',
    minutes: '5:32',
    title: 'Telescopes 101',
    viewers: '11k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=5',
    watch: 'L',
    minutes: '5:32',
    title: 'Medical Care Is Just',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  },
  {
    id: ++counter,
    video: 'https://picsum.photos/250/150?random=6',
    watch: 'L',
    minutes: '5:32',
    title: 'Moon Gazing',
    viewers: '43k views',
    day: '12 days ago',
    name: 'Dollie Blair'
  }
  );

  console.log(food)



var createFoodElement = function (drink, index){
  var elFoodItems = elFoodTemplate.cloneNode(true);


  $_('.food__img', elFoodItems).src = drink.video;
  $_('.food__btn', elFoodItems).textContent = drink.watch;
  $_('.food__btn', elFoodItems).dataset.contactId = drink.index
  $_('.food__span', elFoodItems).textContent = drink.minutes;
  $_('.food__title', elFoodItems).textContent = drink.title;
  $_('.food__text--viewers', elFoodItems).textContent = drink.viewers;
  $_('.food__text--day', elFoodItems).textContent = drink.day;
  $_('.food__text--name', elFoodItems).textContent = drink.name;
  // elBtn.dataset.contactId = elVideosItem;

  return elFoodItems;
}

var displayFood = function () {

  var elFoodFragment = document.createDocumentFragment();

  food.forEach(function (item, index){
    elFoodFragment.appendChild(createFoodElement(item));
  });

  elFoodList.appendChild(elFoodFragment);
}

displayFood();