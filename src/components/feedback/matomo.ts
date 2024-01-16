declare global {
  interface Window {
    _mtm: any[];
  }
}

export function like() {
  window._mtm.push(["feedback", "feedback", "like"]);
}

export function dislike() {
  window._mtm.push(["feedback", "feedback", "dislike"]);
}
