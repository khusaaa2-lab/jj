// Normalised coordinates measured on campus-loop-A frame 0 (1280 × 720).
// Internal rooms deliberately share their parent building, never a second roof.
export const sourceSize = { width: 1280, height: 720 };
export const campusMedia = {
  video: '/media/campus/campus-A.mp4',
  poster: '/media/campus/poster.webp',
  approved: '/media/campus/approved.webp',
};
export const campusAnchors = {
  'main-building': { point: [.247, .380], polygon: [[.088,.458],[.23,.296],[.274,.312],[.282,.469],[.14,.557]] },
  'learning-wing': { point: [.416, .351], polygon: [[.279,.355],[.402,.265],[.562,.365],[.507,.451],[.355,.382]] },
  'tech-lab': { point: [.577, .452], polygon: [[.48,.44],[.603,.354],[.675,.416],[.653,.529],[.588,.585],[.488,.506]] },
  courtyard: { point: [.353, .525], polygon: [[.268,.516],[.323,.454],[.43,.476],[.446,.553],[.381,.608],[.295,.584]] },
  'dining-a': { point: [.188, .627], polygon: [[.09,.617],[.186,.563],[.273,.642],[.237,.727],[.14,.723]] },
  'dining-b': { point: [.364, .757], polygon: [[.283,.73],[.363,.654],[.446,.724],[.441,.818],[.341,.89],[.281,.813]] },
  workshop: { point: [.565, .765], polygon: [[.51,.716],[.555,.684],[.611,.747],[.693,.824],[.681,.889],[.551,.829]] },
  'football-field': { point: [.788, .641], polygon: [[.602,.642],[.722,.487],[.97,.609],[.849,.857]] },
  residence: { point: [.835, .378], polygon: [[.743,.307],[.951,.387],[.939,.463],[.743,.391]] },
  library: { point: [.796, .193], polygon: [[.699,.141],[.899,.191],[.89,.258],[.701,.204]] },
  'ideas-garden': { point: [.49, .938], polygon: [[.409,.898],[.465,.847],[.641,.957],[.565,.997],[.445,.997]] },
};
export const internalPlaces = { 'gaming-zone': 'tech-lab', 'quiet-room': 'learning-wing' };
export const anchorFor = id => campusAnchors[internalPlaces[id] || id];
// Illustrative pedestrian line measured on visible paths, not surveyed navigation.
const start = [[.29,.61],[.281,.554],[.273,.503]], centre = [.426,.57];
export const campusPaths = {
  'main-building': start,
  courtyard: [...start,[.313,.581],[.35,.596]],
  'learning-wing': [...start,[.313,.581],centre,[.447,.504],[.437,.473]],
  'tech-lab': [...start,[.313,.581],centre,[.48,.57],[.51,.59]],
  'dining-a': [[.29,.61],[.29,.68],[.24,.74]],
  'dining-b': [[.29,.61],[.304,.696],[.327,.7]],
  workshop: [...start,[.313,.581],centre,[.473,.69],[.49,.763],[.535,.804]],
  'football-field': [...start,[.313,.581],centre,[.48,.57],[.546,.638],[.595,.638]],
  residence: [...start,[.313,.581],centre,[.48,.57],[.704,.448],[.797,.48]],
  library: [...start,[.313,.581],centre,[.48,.57],[.704,.448],[.719,.384],[.713,.322],[.726,.277]],
  'ideas-garden': [[.29,.61],[.304,.696],[.327,.7],[.473,.69],[.49,.763],[.598,.884],[.54,.951]],
};
export const pathFor = id => campusPaths[internalPlaces[id] || id] || [];
export function campusLayout(width, height, zoom = 1, x = .5, y = .5) {
  const base = Math.min(width / 1280, height / 720);
  const scale = base * Math.max(1, Math.min(2, zoom));
  const w = 1280 * scale, h = 720 * scale;
  const clamp = (value, size, viewport) => size <= viewport ? (viewport-size)/2 : Math.min(0, Math.max(viewport-size, value));
  const left = clamp(width / 2 - x*w, w, width);
  const top = clamp(height / 2 - y*h, h, height);
  return { scale, width:w, height:h, left, top, x:(width/2-left)/w, y:(height/2-top)/h };
}
