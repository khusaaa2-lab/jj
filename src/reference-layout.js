// Metres, Y up, +Z towards the terraces. Manually interpreted from the supplied
// aerial image: an architectural reconstruction, not surveyed photogrammetry.
export const referenceBuildings = [
  { id: 'main-building', key: 'west-hall', x: -39, z: -5, w: 34, d: 12, y: 6, h: 7.4, roof: 'gable-x' },
  { id: 'main-building', key: 'west-gable', x: -53, z: -2, w: 9, d: 19, y: 6, h: 6.3, roof: 'gable-z' },
  { id: 'main-building', key: 'rear-gable', x: -42, z: -15, w: 13, d: 22, y: 6, h: 7.4, roof: 'gable-z' },
  { id: 'learning-wing', key: 'rear-gallery', x: -2, z: -20, w: 56, d: 10, y: 6, h: 7.4, roof: 'gable-x', gallery: true },
  { id: 'tech-lab', key: 'technology', x: 30, z: -3, w: 28, d: 22, y: 6, h: 6.7, roof: 'hip', glass: true },
  { id: 'dining-a', key: 'lakeside-dining', x: -40, z: 31, w: 24, d: 15, y: 2, h: 4.7, roof: 'gable-x', dining: true },
  { id: 'dining-b', key: 'garden-dining', x: -6, z: 48, w: 25, d: 16, y: 0, h: 5, roof: 'hip', dining: true },
  { id: 'workshop', key: 'workshop', x: 32, z: 44, w: 15, d: 11, y: 0, h: 4.6, roof: 'gable-x' },
  { id: 'residence', key: 'residence', x: 69, z: -40, w: 37, d: 11, y: 8, h: 7, roof: 'gable-x', gallery: true },
  { id: 'library', key: 'mountain-library', x: 66, z: -67, w: 33, d: 10, y: 24, h: 4.9, roof: 'planted', glass: true },
];
export const referencePlaces = {
  'main-building': { point: [-28, 32, -3], focus: [-35, 15, -3], radius: 38 },
  'learning-wing': { point: [-1, 17, -19], focus: [-2, 10, -17], radius: 34 },
  courtyard: { point: [-6, 20, 8], focus: [-6, 9, 8], radius: 28 },
  'tech-lab': { point: [30, 19, -3], focus: [30, 9, 0], radius: 31 },
  'dining-a': { point: [-40, 10, 31], focus: [-40, 4, 34], radius: 28 },
  'dining-b': { point: [-6, 9, 48], focus: [-6, 3, 50], radius: 28 },
  workshop: { point: [32, 8, 44], focus: [40, 3, 45], radius: 29 },
  'football-field': { point: [87.1, 3, 13], focus: [87.1, 3, 10], radius: 43 },
  residence: { point: [69, 19, -40], focus: [69, 11, -38], radius: 34 },
  library: { point: [66, 31, -66], focus: [66, 26, -63], radius: 32 },
  'ideas-garden': { point: [20, 3, 67], focus: [20, 1, 65], radius: 27 },
};
export const referenceParents = { 'gaming-zone': 'tech-lab', 'quiet-room': 'learning-wing' };
export const referencePlace = id => referencePlaces[referenceParents[id] || id];
// Pedestrian entries are separate from roof/label coordinates. Explicit Y levels
// follow the stepped terraces and hillside approach rather than crossing roofs.
export const referenceRoutes = {
  'main-building': [[-23,6.2,4],[-23,6.2,10]],
  courtyard: [[-23,6.2,4],[-23,6.2,10],[-18,6.2,16],[-9,6.2,20]],
  'learning-wing': [[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[-3,6.2,-12]],
  'tech-lab': [[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[17,6.2,11],[24,6.2,10]],
  'dining-a': [[-23,6.2,4],[-23,6.2,10],[-25,6.2,18],[-26,2.2,25],[-28,2.2,38]],
  'dining-b': [[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[-20,2.2,28],[-21,2.2,38],[-21,.2,48]],
  workshop: [[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[27,.2,51]],
  'football-field': [[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[18,2.2,24],[48,2.2,24],[64.9,2.2,15]],
  residence: [[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[45,8.2,-29],[69,8.2,-32]],
  library: [[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[36,8.2,-29],[40,13,-44],[51,18,-48],[49,24.2,-58],[58,24.2,-60]],
  'ideas-garden': [[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[20,.2,66]],
};
export const referenceRoute = id => referenceRoutes[referenceParents[id] || id] || [];
export const courtyard = { x: -6, z: 8, y: 6, radius: 14 };
export const pitch = { x: 87.1, z: 11, y: 2.12, w: 43, d: 64, yaw: 0 };
export function terrainHeight(x, z) {
  const smooth = (a,b,t) => { const v=Math.max(0,Math.min(1,(t-a)/(b-a)));return v*v*(3-2*v); };
  const plateau = 6*smooth(-48,-30,z)*(1-smooth(17,33,z))*(1-smooth(42,53,x))*smooth(-69,-60,x);
  const shoreZ=-50+5*Math.sin(x*.06)+3*Math.sin(x*.14);
  const shore = -4*(1-smooth(shoreZ-12,shoreZ+10,z));
  const hill = 44*Math.exp(-(((x-94)/46)**2)-((z+91)/48)**2)*smooth(25,48,x)*(1-smooth(-29,-23,z));
  let height=Math.max(plateau, hill)+shore-.6;
  // A real lower courtyard exposes the technology building's lower floor.
  if(x>14&&x<48&&z>8&&z<28)height=Math.min(height,1);
  // Library excavation: the rocky shoulder continues behind and around it.
  if(x>48&&x<85&&z>-73&&z<-57)height=Math.min(height,23.65);
  return height;
}
