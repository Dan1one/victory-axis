const getDomainFromTickValues = (props) => {
  const orientation = props.orientation || (props.dependentAxis ? "left" : "bottom");
  const vertical = {top: false, bottom: false, left: true, right: true};
  const isVertical = vertical[orientation];
  const stringTicks = props.tickValues && typeof props.tickValues[0] === "string";
  let domain;
  // Since we declared that `tickValues` must be a homogenous array, we only
  // need to do a string check on the first item.
  if (stringTicks) {
    domain = [1, props.tickValues.length];
  } else {
    // coerce ticks to numbers
    const ticks = props.tickValues.map((value) => +value);
    domain = [Math.min(...ticks), Math.max(...ticks)];
  }
  if (isVertical) {
    domain.reverse();
  }
  return domain;
};

const getDomain = (props) => {
  if (props.domain) {
    return props.domain;
  } else if (props.tickValues) {
    return getDomainFromTickValues(props);
  }
  return props.scale.domain();
};

export default {getDomain};
