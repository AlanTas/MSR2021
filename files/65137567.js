var ctors = [typeof NodeList !== "undefined" && NodeList, typeof HTMLCollection !== "undefined" && HTMLCollection];
for (var n = 0; n < ctors.length; ++n) {
    var ctor = ctors[n];
    if (ctor && ctor.prototype && !ctor.prototype.forEach) {
        ctor.prototype.forEach = Array.prototype.forEach;
        if (typeof Symbol !== "undefined" && Symbol.iterator && !ctor.prototype[Symbol.iterator]) {
            Object.defineProperty(ctor.prototype, Symbol.iterator, {
                value: Array.prototype[Symbol.itereator],
                writable: true,
                configurable: true
            });
        }
    }
}
