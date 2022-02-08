export function getInterpolators() {
  function firstSectionForegroundInterpolator(proportion) {
    if (proportion < 0) {
      return { opacity: 0, transform: "translateX(-20rem)" };
    } else if (proportion > 1) {
      return { opacity: 0, transform: "translateX(20rem)" };
    } else {
      return {};
    }
  }

  function firstSectionBackgroundInterpolator(proportion) {
    const scale = ((10/(proportion + 3))-2.3);
    if (scale <= .31) {
      return {
        transform: `scale3d(${.31}, ${.31}, ${.31})`,
      }
    } else {
      return {
        transform: `scale3d(${scale}, ${scale}, ${scale})`,
      }
    }
  }

  function firstSectionBackgroundImageInterpolator(proportion) {
    if (proportion < .2) {
      return { opacity: proportion * 5 };
    } else {
      return { opacity: 1 };
    }
  }

  return {
    firstSectionForegroundInterpolator,
    firstSectionBackgroundInterpolator,
    firstSectionBackgroundImageInterpolator,
  };
}
