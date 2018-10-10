import { View } from "./page";

export type ViewClass = typeof View;

export const $internalHooks = [
  "data",
  "onLoad",
  "onReady",
  "onShow",
  "onHide",
  "onUnload",
  "onPullDownRefresh",
  "onReachBottom",
  "onShareAppMessage",
  "onPageScroll",
  "onTabItemTap",
];

function componentFactory<S>(
  Cm: ViewClass,
  options: PageOpts<S> = {},
) {
  const proto = Cm.prototype;
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key === "constructor") {
      return;
    }
    console.log(key);
    options[key] = proto[key];
  });

  const data = new Cm().data;
  if (data) {
  // create plain data object
    const plainData = options.data || {};
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined) {
        plainData[key] = data[key];
      }
    });
    options.data = plainData as S;
  }

  Page(options);

  return Cm;
}

function Component<S>(options: PageOpts<S> = {}): any {
  if (typeof options === "function") {
    return componentFactory(options);
  }
  return (Cm: ViewClass) => {
    return componentFactory<S>(Cm, options);
  };
}

export default Component;
