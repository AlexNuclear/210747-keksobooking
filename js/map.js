'use strict';
var AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var address = 'location.' + Math.random() + ',' + ' ' + 'location.' + (Math.random() * 10);

var getPrice = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var price = getPrice(1000, 1000000);
var type = ['flat', 'house', 'bungalo']

var getRooms = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var rooms = getRooms(1, 5);

var getGuests = function() {
  return Math.floor(Math.random() * 10);
}

var guests = getGuests();
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var description = '';
var photos = [];

var getLocationX = function (min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getLocationY = function (min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var templates = [];
for (var i = 0; i < 8; i++) {
  var template = {
    avatar: 'img/avatars/user' + AVATARS[i] + '.png',
    title: titles[i],
    address: address,
    price: price,
    type: type[i],
    rooms: rooms,
    guests: guests,
    checkin: CHECKIN[i],
    checkout: CHECKOUT[i],
    features: features[i],
    description: description,
    photos: photos,
    location: {
      x: getLocationX(300,900),
      y: getLocationY(100,500)
    }
  };
  var mapPin = document.createElement ('div');
  mapPin.className = 'pin';
  mapPin.innerHTML = '<img src="' + template.avatar + '">';
  var pinImage = mapPin.children[0]
  pinImage.className = 'rounded';
  pinImage.style.width = 40 + 'px';
  pinImage.style.height = 40 + 'px';
  templates.push(template);
  mapPin.style.left = (template.location.x - 28) + 'px';
  mapPin.style.top = (template.location.y - 38) + 'px';
  var fragment = document.createDocumentFragment();
  fragment.appendChild(mapPin);
 document.querySelector('.tokyo__pin-map').appendChild(fragment);

};
var lodgeTemplate = document.querySelector('#lodge-template');
var titleElement  = document.querySelector('.lodge__title');
var data = templates[0].title;
titleElement.innerHTML = data;

var addressElement  = document.querySelector('.lodge__address');
var data = templates[0].address;
addressElement.innerHTML = data;

var priceElement  = document.querySelector('.lodge__price');
var data = templates[0].price;
priceElement.innerHTML = data + '&#x20bd;/ночь';

var guestsElement  = document.querySelector('.lodge__rooms-and-guests');
var data = 'для ' + templates[0].guests + ' Гостей ' + 'в ' + templates[0].rooms + ' Комнатах';
guestsElement.innerHTML = data

var checkElement  = document.querySelector('.lodge__checkin-time');
var data = 'Заезд после ' + templates[0].checkin + ' выезд до ' + templates[0].checkout;
checkElement.innerHTML = data;


var featuresElements = document.querySelector('.lodge__features');
var featureItem = '';

for (var i = 0; i < features.length; i++) {
  var featuresCreateElement = document.createElement('span');
  featuresCreateElement.className = 'feature__image' + ' ' + 'feature__image--' + features[i];
  featuresElements.appendChild(featuresCreateElement);
  }

var dialogWindow = document.querySelector('.dialog')
var Pins = document.querySelectorAll('.pin');

popUp.addEventListener('click', function(evt) {
});

for (var i = 0;i < Pins.length; i++) {
    popUp.classList.add('pin--active');
}
