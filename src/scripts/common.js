export function importAllImage(r, target) {
    r.keys().forEach(key => target[key.substring(2).replace(".png", "").replace(".jpg", "")] = r(key));
}