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
    if (proportion < -0.3) {
      return { transform: `translateY(20rem) scaleX(0.05)` };
    } else if (proportion < 0) {
      const position = -proportion * 20 * 3.3;
      const scale = 1 + proportion * 3.3 * 0.95;
      return { transform: `translateY(${position}rem) scaleX(${scale})` };
    } else if (proportion < 1) {
      return {};
    } else if (proportion < 1.3) {
      const scale = (1.3 - proportion) / 0.3;
      return { transform: `scaleX(${scale})` };
    } else {
      return { transform: "scaleX(0)" };
    }
  }

  return {
    firstSectionForegroundInterpolator,
    firstSectionBackgroundInterpolator,
  };
}
