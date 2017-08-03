// //监听dom变化
$(document).bind('DOMNodeInserted', function () {
    removeAllDragEvent();
    startDrag();
});

var _dragAttrName = 'attr-drag';
var _dragAttrValue = 'drag';
var _dragAttrElement;
var _dragElement = null;
function startDrag() {
    var _dragMove = false;
    var _x, _y;
    _dragAttrElement = "[" + _dragAttrName + "='" + _dragAttrValue + "']";
    $(_dragAttrElement).click(function () {
    }).mousedown(function (e) {
        if (!e.target.attributes.getNamedItem(_dragAttrName)
            || !e.target.attributes.getNamedItem(_dragAttrName).nodeValue)
            return;
        if (e.target.attributes.getNamedItem(_dragAttrName).nodeValue != _dragAttrValue)
            return;
        e.stopPropagation();
        // map.dragging.disable();
        _dragElement = e.target.parentElement;
        // $(_dragElement).fadeTo('fast', 0.7);
        $(_dragAttrElement).css('cursor', 'move');
        _dragMove = true;
        _x = e.pageX - parseInt($(_dragElement).css('left'));
        _y = e.pageY - parseInt($(_dragElement).css('top'));

        $(document).mousemove(function (event) {
            if (_dragMove) {
                var x = event.pageX - _x;
                var y = event.pageY - _y;
                $(_dragElement).css({top: y, left: x});
            }
        }).mouseup(function () {
            removeDocumentEvent();
            _dragMove = false;
            // $(_dragElement).fadeTo('fast', 1);
            $(_dragAttrElement).css('cursor', '');
            // map.dragging.enable();
            /**********************控制不可以拖出浏览器可见区域 开始**********************/
            if (parseInt($(_dragElement).css('top')) < 80)
                $(_dragElement).css('top', 100);
            var maxTop = document.body.clientHeight - parseInt($(_dragElement).css('height'));
            if (parseInt($(_dragElement).css('top')) > maxTop)
                $(_dragElement).css('top', maxTop);
            if (parseInt($(_dragElement).css('left')) < 0)
                $(_dragElement).css('left', 0);
            var maxLeft = document.body.clientWidth - parseInt($(_dragElement).css('width'));
            if (parseInt($(_dragElement).css('left')) > maxLeft)
                $(_dragElement).css('left', maxLeft);
            /**********************控制不可以拖出浏览器可见区域 结束**********************/
        });
    });

}

function removeAllDragEvent() {
    removeDocumentEvent();
    if (_dragAttrElement && _dragAttrElement.length != 0) {
        $(_dragAttrElement).unbind('click');
        $(_dragAttrElement).unbind('mousedown');
    }
}

function removeDocumentEvent() {
    $(document).unbind('mousemove');
    $(document).unbind('mouseup');
}