export const homeAnim = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const nameAnim = {
  hidden: {y: -300},
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};
export const titleAnim = {
  hidden: {y: 500},
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};
export const projectAnim = {
  hidden: {y: 500},
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fade = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
export const pageFade = {
  hidden: {opacity: 0, y: -300},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const photoAnim = {
  hidden: {scale: 1.5, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: 0.75,
    },
  },
};

export const expandAnim = {
  hidden: {scale: 0.5, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity:0,
    transition: {
      duration: 0.5,
    },
  },
};
