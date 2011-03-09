/**
 * jQuery alter plugin
 * This jQuery plugin was inspired from clojure alter function.
 * @name jquery.alter.0.1.js
 * @author dom
 * @version 0.1
 * @category jQuery plugin
 * @copyright (c) 2011 dom
 * @license :-/
 * @example:
 *
 * $('.some_class').alter('text', function(text) {
 *    return text.replace('ello', 'hello');
 * });
 *
 * is equivalent to
 *
 * $('.some_class').each(function() {
 *   var x = $(this).text();
 *   $(this).text(x.replace('ello', 'hello');
 * );
 *
 */

jQuery.fn.alter = function(what, fn) {
    this.each(function() {
        $(this)[what](fn($(this)[what]()));
    });
};

