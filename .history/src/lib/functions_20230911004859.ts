export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  export function matchUrl(url) {
    return window.location.pathname === url;
  }