
import { velocityHelpers  } from 'velocity-react'
export const enterAnimation = velocityHelpers.registerEffect({
  defaultDuration: 700,
  calls: [
	  [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
  ],
  reset: { transformPerspective: 0 }
});

export const leaveAnimation = velocityHelpers.registerEffect({
  defaultDuration: 700,
  calls: [
	  [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
  ],
  reset: { transformPerspective: 0, rotateY: 0 }
});
