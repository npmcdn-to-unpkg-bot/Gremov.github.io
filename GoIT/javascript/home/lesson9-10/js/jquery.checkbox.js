jQuery(document).ready(function(){



    jQuery(".niceCheck").each(

    /* ïðè çàãðóçêå ñòðàíèöû ìåíÿåì îáû÷íûå íà ñòèëüíûå checkbox */

    function() {



        changeCheckStart(jQuery(this));



    });



});





function changeCheck(el)

/* 
 016
 ôóíêöèÿ ñìåíû âèäà è çíà÷åíèÿ ÷åêáîêñà ïðè êëèêå íà êîíòåéíåð ÷åêáîêñà (òîò, êîòîðûé îòâå÷àåò çà íîâûé âèä)
 017
 el - span êîíòåéíåð äëÿ îáû÷íîãî ÷åêáîêñà
 018
 input - ÷åêáîêñ
 019
 */

{



    var el = el,

    input = el.find("input").eq(0);



    if(el.attr("class").indexOf("niceCheckDisabled")==-1)

    {

        if(!input.attr("checked")) {

            el.addClass("niceChecked");

            input.attr("checked", true);

        } else {

            el.removeClass("niceChecked");

            input.attr("checked", false).focus();

        }

    }



    return true;

}



function changeVisualCheck(input)

{

    /*
     042
     ìåíÿåì âèä ÷åêáîêñà ïðè ñìåíå çíà÷åíèÿ
     043
     */

    var wrapInput = input.parent();

    if(!input.attr("checked")) {

        wrapInput.removeClass("niceChecked");

    }

else

    {

        wrapInput.addClass("niceChecked");

    }

}



function changeCheckStart(el)
/* 
 056
 íîâûé ÷åêáîêñ âûãëÿäèò òàê <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
 057
 íîâûé ÷åêáîêñ ïîëó÷àåò òåæå name, id è äðóãèå àòðèáóòû ÷òî è áûëè ó îáû÷íîãî
 058
 */

{



    try

    {

        var el = el,

        checkName = el.attr("name"),

        checkId = el.attr("id"),

        checkChecked = el.attr("checked"),

        checkDisabled = el.attr("disabled"),

        checkTab = el.attr("tabindex"),

        checkValue = el.attr("value");

        if(checkChecked)

        el.after("<span class='niceCheck niceChecked'>"+

        "<input type='checkbox'"+

        "name='"+checkName+"'"+

        "id='"+checkId+"'"+

        "checked='"+checkChecked+"'"+

        "value='"+checkValue+"'"+

        "tabindex='"+checkTab+"' /></span>");

    else

        el.after("<span class='niceCheck'>"+

        "<input type='checkbox'"+

        "name='"+checkName+"'"+

        "id='"+checkId+"'"+

        "value='"+checkValue+"'"+

        "tabindex='"+checkTab+"' /></span>");



        /* åñëè checkbox disabled - äîáàâëÿåì ñîîòâñìòâóþùè êëàññ äëÿ íóæíîãî âèäà è äîáàâëÿåì àòðèáóò disabled äëÿ âëîæåííîãî chekcbox */

        if (checkDisabled)

        {

            el.next().addClass("niceCheckDisabled");

            el.next().find("input").eq(0).attr("disabled","disabled");

        }



        /* öåïëÿåì îáðàáîò÷èêè ñòèëèçèðîâàííûì checkbox */

        el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });

        el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });

        if(jQuery.browser && jQuery.browser.msie)

        {

            el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });

        }

        el.remove();

    }

catch(e)

    {
        console.log('error');
        // åñëè îøèáêà, íè÷åãî íå äåëàåì

    }



    return true;

}