/* canvas-toBlob.js
 * Implement .toBlob() method for HTML5 canvas element.
 * 2015-05-27
 * By cuixiping  https://github.com/cuixiping
 */

if(window.atob && window.Blob && window.Uint8Array && !HTMLCanvasElement.prototype.toBlob){
    HTMLCanvasElement.prototype.toBlob = function(callback, type, encoderOptions){
        var dataurl = this.toDataURL(type, encoderOptions);
        var bstr = atob(dataurl.split(',')[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        var blob = new Blob([u8arr], {type: type});
        callback.call(this, blob);
    };
}
