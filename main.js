var $gallery = document.querySelector('main');

var imageUrls = ['https://video-images.vice.com/_uncategorized/1530808338104-DULl7RpWAAA2lgG.jpeg',
  'https://i.pinimg.com/originals/96/f2/ea/96f2ea07ed793ea076d0cf45345d1227.jpg',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://i.pinimg.com/originals/b4/0b/e9/b40be9e3ec06a4e9a7b3108d0621f0b2.jpg'];

var $imageURLInput = document.querySelector('input');

var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageURLInput.value !== '') {
    imageUrls.push($imageURLInput.value);
    $imageURLInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
