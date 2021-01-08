document.querySelector('title').innerText = document.querySelector('#title').innerText;
HTMLElement.prototype.appendHTML = function(html){
    let tmpel = document.createElement('div');
    let fragment = document.createDocumentFragment();
    tmpel.innerHTML = ''+html;
    let nodes = tmpel.childNodes;
    for(let i = 0, len = nodes.length; i<len ; i++)
    fragment.appendChild(nodes[i]);
    this.appendChild(fragment);
};
const updateDOM = (ignored)=>{
    document.querySelectorAll('.md-footnote').forEach(el=>{
        if (el.hastooltip) return;
        el.appendHTML('<div class="md-footnote-view">' + document.querySelector('a[name="df' + el.firstChild.name + '"]').parentElement.children[1].outerHTML + '</div>');
        el.hastooltip = true;
    });
    document.querySelectorAll('a[href^="h"]').forEach(el=>{
        el.setAttribute('target','_blank');
    });
};
const watchObserver = new MutationObserver(updateDOM);
watchObserver.observe(document.querySelector('body'), { childList: true, subtree: true });