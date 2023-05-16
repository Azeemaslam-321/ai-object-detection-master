const src = cv.imread('image');
const gray = new cv.Mat();
cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

const faces = new cv.RectVector();
const classifier = new cv.CascadeClassifier();
classifier.load('haarcascade_frontalface_default.xml');
classifier.detectMultiScale(gray, faces, 1.1, 3, 0);

for (let i = 0; i < faces.size(); ++i) {
  const faceRect = faces.get(i);
  const point1 = new cv.Point(faceRect.x, faceRect.y);
  const point2 = new cv.Point(faceRect.x + faceRect.width, faceRect.y + faceRect.height);
  cv.rectangle(src, point1, point2, [255, 0, 0, 255], 2);
}

cv.imshow('canvas', src);
