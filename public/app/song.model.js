"use strict";
var Song = (function () {
    function Song(_id, name, key, progression, dateModified) {
        this._id = _id;
        this.name = name;
        this.key = key;
        this.progression = progression;
        this.dateModified = dateModified;
    }
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=song.model.js.map