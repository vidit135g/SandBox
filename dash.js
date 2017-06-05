
var outputContent = $("#outPut").contents();

var editorHtml = CodeMirror.fromTextArea(document.getElementById('editorHtml'), {
    autoCloseTags: true,
    mode: 'text/html',
    lineNumbers: true,
    theme: '3024-night',
    scrollbarStyle: "simple"

});
var editorCss = CodeMirror.fromTextArea(document.getElementById('editorCss'), {
    mode: 'text/css',
    lineNumbers: true,
    theme: '3024-night',
    autoCloseBrackets: true,
    scrollbarStyle: "simple"
});
var editorJs = CodeMirror.fromTextArea(document.getElementById('editorJs'), {
    mode: 'text/javascript',
    lineNumbers: true,
    theme: '3024-night',
    scrollbarStyle: "simple",
    autoCloseBrackets: true

});

editorHtml.on("change", function () {
    updateHtmlPreview(editorHtml.getValue());
});

editorCss.on("change", function () {
    updateCssPreview(editorCss.getValue());
});

editorJs.on("change", function () {
    updateJsPreview(editorJs.getValue());
});

$("#view").click(function () {
function updateHtmlPreview(htmlText) {
    outputContent.find("body").html(htmlText);
    updateJsPreview(editorJs.getValue());
}

function updateCssPreview(cssText) {
    outputContent.find("head").html("<style>" + cssText + "</style>");
}

function updateJsPreview(jsText) {
    outputContent.find('body script').remove()
    var script = outputContent[0].createElement('script');
    script.text = jsText;
    outputContent.find('body')[0].appendChild(script);
}
    updateHtmlPreview(editorHtml.getValue());
    updateCssPreview(editorCss.getValue());
    updateJsPreview(editorJs.getValue())
})
