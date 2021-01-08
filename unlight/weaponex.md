<font size=6>**<span id="title">强化武器攻略 | Unlight</span>**</font>

<div id="go2top">
    <img id="go2top_bg" src="img/ticket_small.png" />
    <div id="go2top_tip" onclick="window.scrollTo({top:0,behavior:'smooth'});"></div>
</div>
<style>
    img{
        background: white;
    }
    #go2top{
        z-index: 10;
        position: fixed;
        right: 15%;
        bottom: 5%;
        box-shadow: 1px 1px 1px rgba(0,0,0,0);
    }
    #go2top:hover{
        box-shadow: 1px 1px 1px rgba(0,0,0,.4);
    }
    #go2top > div{
        position: absolute;
        top: 0;
        left: 0;
    }
    #go2top #go2top_tip{
        font-size: 16px;
        opacity: 0;
        color: white;
        width: 100%;
        height: 100%;
        text-align: center;
        font-weight: 500;
        vertical-align: middle;
        padding-right: 12px;
        transition: 0.15s linear;
    }
    #go2top #go2top_tip:after{
        content: 'Top';
    }
    #go2top #go2top_tip:hover{
        opacity: 1;
    }
    .heimu{
        background: black;
        color: black;
    }
    .heimu:hover{
        color: white;
    }
    .md-footnote-view{
        display: none;
        z-index: 10;
        position: absolute;
        padding: 5px;
        margin-left: 4px;
        background: #eeeeee;
        border: 1px solid #dddddd;
        border-radius: 5px;
        visibility: hidden;
        opacity: 0;
        transition: 0.2s linear;
        font-size: small;
        font-weight: normal;
        box-shadow: 2px 2px 3px rgba(0,0,0,.35);
    }
    .md-footnote:hover .md-footnote-view{
        display: inline-block;
        visibility: visible;
        opacity: 1;
    }
</style>
<script>
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
</script>


<font size=5>目录</font>

[toc]

# 为什么要做强化武器？（我能获得什么？）

## 通用强化武器

![近攻9通武](img/通武_近攻9.png)

* 所有角色&怪物都可以装备。

* 通用数值（第一行）合计值上限2，添加琉璃宝玉可提升至合计值上限3。4项数值可自由调整。
* 任务&涡专用数值（第二行）各20点。（上限为当前等级，武器等级上限为20）



![梅丽4专](img/4专_梅丽.png)

## 专用强化武器

* 只有特定角色的L卡和R卡可以装备，复活卡不能
* 通用数值与通武相同

* 任务&涡专用数值在通武的基础上额外各5点，即最大为4项各25。

* <font color=red>附带角色专属被动技能，减少技能的发动消耗。</font>

