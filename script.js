$(document).ready(function () {

    $("#luckyBtn").on("click", function () {
        var luckyPic = "https://user-images.githubusercontent.com/74163812/109253869-b9d27080-77be-11eb-822c-822861bee845.png"
        document.getElementById('luckyPic').src = luckyPic.replace('90x90', '225x225');
    })



var checkIfSpell = true;
var classCheck = "";
//get all the inputs from the localstorage
if (localStorage.length != 0) {
    //hit point local storage
    if (localStorage.getItem("hitPoint") != "undefined") {
        var hitPoint = localStorage.getItem("hitPoint", hitPoint);
        $("#hp").val(hitPoint);

    }
    //armorclass local storage
    if (localStorage.getItem("armorClass") != "undefined") {
        var armorClass = localStorage.getItem("armorClass", armorClass);
        $("#ac").val(armorClass);
    }
    if (localStorage.getItem("level") != "undefined") {
        var level = localStorage.getItem("level", level);
        $("#lev").val(level);
    }
    //speed local storage
    if (localStorage.getItem("speed") != "undefined") {
        var speed = localStorage.getItem("speed", speed);
        $("#sp").val(speed);
    }
    //initiative local storage
    if (localStorage.getItem("initiative") != "undefined") {
        var initiative = localStorage.getItem("initiative", initiative);
        $("#int").val(initiative);
    }
    //profeciency local storage
    if (localStorage.getItem("prof") != "undefined") {
        var prof = localStorage.getItem("prof", prof);
        $("#pb").val(prof);
    }
    //character stats local storage
    if (localStorage.getItem("str2") != "undefined") {
        var str2 = localStorage.getItem("str2", str2);
        $("#str2").val(str2);
    }
    if (localStorage.getItem("dex2") != "undefined") {
        var dex2 = localStorage.getItem("dex2", dex2);
        $("#dex2").val(dex2);
    }
    if (localStorage.getItem("con2") != "undefined") {
        var con2 = localStorage.getItem("con2", con2);
        $("#con2").val(con2);
    }
    if (localStorage.getItem("intl2") != "undefined") {
        var intl2 = localStorage.getItem("intl2", intl2);
        $("#intl2").val(intl2);
    }
    if (localStorage.getItem("wis2") != "undefined") {
        var wis2 = localStorage.getItem("wis2", wis2);
        $("#wis2").val(wis2);
    }
    if (localStorage.getItem("charisma2") != "undefined") {
        var charisma2 = localStorage.getItem("charisma2", charisma2);
        $("#charisma2").val(charisma2);
    };

    //skills local storage
    if (localStorage.getItem("acrobatics2") != "undefined") {
        var acrobatics2 = localStorage.getItem("acrobatics2", acrobatics2);
        $("#acrobatics2").val(acrobatics2);
    }
    if (localStorage.getItem("animal2") != "undefined") {
        var animal2 = localStorage.getItem("animal2", animal2);
        $("#animal2").val(animal2);
    }
    if (localStorage.getItem("arcana2") != "undefined") {
        var arcana2 = localStorage.getItem("arcana2", arcana2);
        $("#arcana2").val(arcana2);
    }
    if (localStorage.getItem("athletics2") != "undefined") {
        var athletics2 = localStorage.getItem("athletics2", athletics2);
        $("#athletics2").val(athletics2);
    }
    if (localStorage.getItem("deception2") != "undefined") {
        var deception2 = localStorage.getItem("deception2", deception2);
        $("#deception2").val(deception2);
    }
    if (localStorage.getItem("history2") != "undefined") {
        var history2 = localStorage.getItem("history2", history2);
        $("#history2").val(history2);
    }
    if (localStorage.getItem("insight2") != "undefined") {
        var insight2 = localStorage.getItem("insight2", insight2);
        $("#insight2").val(insight2);
    }
    if (localStorage.getItem("intimidation2") != "undefined") {
        var intimidation2 = localStorage.getItem("intimidation2", intimidation2);
        $("#intimidation2").val(intimidation2);
    }
    if (localStorage.getItem("invest2") != "undefined") {
        var invest2 = localStorage.getItem("invest2", invest2);
        $("#invest2").val(invest2);
    }
    if (localStorage.getItem("med2") != "undefined") {
        var med2 = localStorage.getItem("med2", med2);
        $("#med2").val(med2);
    }
    if (localStorage.getItem("nature2") != "undefined") {
        var nature2 = localStorage.getItem("nature2", nature2);
        $("#nature2").val(nature2);
    }
    if (localStorage.getItem("percep2") != "undefined") {
        var percep2 = localStorage.getItem("percep2", percep2);
        $("#percep2").val(percep2);
    }
    if (localStorage.getItem("perform2") != "undefined") {
        var perform2 = localStorage.getItem("perform2", perform2);
        $("#perform2").val(perform2);
    }
    if (localStorage.getItem("pers2") != "undefined") {
        var pers2 = localStorage.getItem("pers2", pers2);
        $("#pers2").val(pers2);
    }
    if (localStorage.getItem("rel2") != "undefined") {
        var rel2 = localStorage.getItem("rel2", rel2);
        $("#rel2").val(rel2);
    }
    if (localStorage.getItem("sleight2") != "undefined") {
        var sleight2 = localStorage.getItem("sleight2", sleight2);
        $("#sleight2").val(sleight2);
    }
    if (localStorage.getItem("stealth2") != "undefined") {
        var stealth2 = localStorage.getItem("stealth2", stealth2);
        $("#stealth2").val(stealth2);
    }
    if (localStorage.getItem("surv2") != "undefined") {
        var surv2 = localStorage.getItem("surv2", surv2);
        $("#surv2").val(surv2);
    }

    //notes local storage
    if (localStorage.getItem("subject") != "undefined") {
        var subject = localStorage.getItem("subject", subject);
        $("#subject").val(subject);
    }


    //weapon local storage
    if (localStorage.getItem("weaponbtn") != "weapon typearrow_drop_down") {
        var weaponDropDown = localStorage.getItem("weaponbtn", $('.weaponbtn').text());
        $('.weaponbtn').text(weaponDropDown);
    }
    //checkbox localstorage
    $('input[type=checkbox]').each(function () {
        for (x in localStorage) {
            if (x == $(this)[0].id) {
                this.checked = true;
            }
        }
    });

    //inventory and weapon localstorage
    if (localStorage.getItem("subject") != null) {
        var subject = localStorage.getItem("subject", $('#subject').val());
        $('#subject').val((subject));
    }
    if (localStorage.getItem("weapon-name") != null) {
        var weapon = localStorage.getItem("weapon-name", $('#weapon-name').val());
        $('#weapon-name').val(weapon);
    }
    if (localStorage.getItem("attack-bonus") != null) {
        var attack = localStorage.getItem("attack-bonus", $('#attack-bonus').val());
        $('#attack-bonus').val(attack);
    }
    if (localStorage.getItem("damage-dice") != null) {
        var damage = localStorage.getItem("damage-dice", $('#damage-dice').val());
        $('#damage-dice').val(damage);
    }
}
//open the spell modal
$('#addModel').modal();
//function to fill the class using api get method    
function fillClass() {
    const pathUrl = "https://api.open5e.com/classes/";
    $.ajax({
        url: pathUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            for (var i = 0; i < result.results.length; i++) {
                var li = "<li>" + result.results[i].name + "</li>";
                $("#classDrop").append(li);
            }
        },
        error: function (result) {

        }
    });
}

function fillSpell() {
    var p = "";
    var check = true;
    for (var page = 1; page <= 7; page++) {
        const spellUrl = "https://api.open5e.com/spells/?page=" + page;
        $.ajax({
            url: spellUrl,
            type: "GET",
            dataType: "json",
            success: function (result) {
                for (var i = 0; i < result.results.length; i++) {
                    var arrayCheck = [];
                    arrayCheck = result.results[i].dnd_class.split(",");
                    for (var j = 0; j < arrayCheck.length; j++) {

                        if (arrayCheck[j] == classCheck) {
                            if (check == true) {
                                p = result.results[i].name;

                                check = false;
                            }
                            var li = "<li><a style='color:white' class='waves-effect waves-light btn modal-trigger'  href='#addModel'>" + result.results[i].name + "</a></li>";
                            $("#spellDrop").append(li);
                        }
                    }

                }
                if (p != "") {
                    $('.spellbtn').text("Spells");
                }
                else {
                    $('.spellbtn').text("No spell");
                }


            },
            error: function (result) {
            }
        });
    }
}

//function when the spell drop down is clicked
var nameCheck = "";
$('#spellDrop').on("click", function (event) {
    nameCheck = event.target.innerText;
    $('.spellbtn').text(nameCheck);
    for (var page = 1; page <= 7; page++) {
        const spellUrl = "https://api.open5e.com/spells/?page=" + page;
        if (event.target.innerHTML != "") {
            $.ajax({
                url: spellUrl,
                type: "GET",
                dataType: "json",
                success: function (result) {
                    for (var i = 0; i < result.results.length; i++) {
                        var value = event.target;
                        if (result.results[i].name == value.textContent) {
                            var name = event.target.innerText;
                            var description = result.results[i].desc;
                            //var level = result.results[i].level_int;
                            var range = result.results[i].range;
                            var v = "<div class='modal-content'> <h4 style='background-color:#26a69a;color:white'>Spell Info</h4><span class='spellBold'>Name: </span><span>" + name + "</span><br><span class='spellBold'>Description: </span><span>" + description + "</span><br><span class='spellBold'>Range: </span><span>" + range + "</span><br><span class='spellBold'>Level: </span><span>" + level + "</span></div>";
                            $("#addModel").html('').append(v);
                            var footer = "<div class='modal-footer'><a href='#!' class='modal-close waves-effect waves-green btn-flat'>Agree</a></div>";
                            $("#addModel").prepend(footer);
                        }
                    }
                },
                error: function (result) {
                }
            });
        }
    }
});
//function when the weapons drop down is clicked
$('#weaponDrop').on("click", function (event) {
    var weaponCheck = event.target.innerText;
    $('.weaponbtn').text(weaponCheck);
});
//function when weapons dropdown is clicked
function fillWeapon() {
    const weaponUrl = "https://api.open5e.com/weapons/";
    $.ajax({

        url: weaponUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            for (var i = 0; i < result.results.length; i++) {
                var li = "<li>" + result.results[i].name + "</li>";
                $("#weaponDrop").append(li);
            }
        },
        error: function (result) {
        }
    });
}
//function for when uer click on the add weapon
$("#add-weapon").on("click", function () {
    var name = 'what &#39s my name?!';
    var addRow = "<div class='col s4'><input id='weapon-name' value='" + name + "'></div><div class='col s4'><input id='attack-bonus' value='How hard do you hit?'></div><div class='col s4'><input id='damage-dice' value='What&#39s the damage?'></div>";
    $(".flexbox").append(addRow);
});
//when user click the save button all the character sheet information will be saved on local storage
$("#save-button").on("click", function () {
    var hitPoint = $("#hp").val();
    var level = $("#lev").val();
    var armorClass = $("#ac").val();
    var speed = $("#sp").val();
    var initiative = $("#int").val();
    var prof = $("#pb").val();
    var str2 = $("#str2").val();
    var dex2 = $("#dex2").val();
    var con2 = $("#con2").val();
    var intl2 = $("#intl2").val();
    var wis2 = $("#wis2").val();
    var charisma2 = $("#charisma2").val();
    var arcana2 = $("#arcana2").val();
    var acrobatics2 = $("#acrobatics2").val();
    var animal2 = $("#animal2").val();
    var athletics2 = $("#athletics2").val();
    var deception2 = $("#deception2").val();
    var history2 = $("#history2").val();
    var insight2 = $("#insight2").val();
    var intimidation2 = $("#intimidation2").val();
    var invest2 = $("#invest2").val();
    var med2 = $("#med2").val();
    var nature2 = $("#nature2").val();
    var percep2 = $("#percep2").val();
    var perform2 = $("#perform2").val();
    var pers2 = $("#pers2").val();
    var rel2 = $("#rel2").val();
    var sleight2 = $("#sleight2").val();
    var stealth2 = $("#stealth2").val();
    var surv2 = $("#surv2").val();
    var subject = $("#subject").val();

    localStorage.setItem("hitPoint", hitPoint);
    localStorage.setItem("armorClass", armorClass);
    localStorage.setItem("level", level);
    localStorage.setItem("speed", speed);
    localStorage.setItem("initiative", initiative);
    localStorage.setItem("prof", prof);
    localStorage.setItem("str2", str2);
    localStorage.setItem("dex2", dex2);
    localStorage.setItem("con2", con2);
    localStorage.setItem("intl2", intl2);
    localStorage.setItem("wis2", wis2);
    localStorage.setItem("charisma2", charisma2);
    localStorage.setItem("arcana2", arcana2);
    localStorage.setItem("acrobatics2", acrobatics2);
    localStorage.setItem("animal2", animal2);
    localStorage.setItem("athletics2", athletics2);
    localStorage.setItem("deception2", deception2);
    localStorage.setItem("history2", history2);
    localStorage.setItem("insight2", insight2);
    localStorage.setItem("intimidation2", intimidation2);
    localStorage.setItem("invest2", invest2);
    localStorage.setItem("med2", med2);
    localStorage.setItem("nature2", nature2);
    localStorage.setItem("percep2", percep2);
    localStorage.setItem("perform2", perform2);
    localStorage.setItem("pers2", pers2);
    localStorage.setItem("rel2", rel2);
    localStorage.setItem("sleight2", sleight2);
    localStorage.setItem("stealth2", stealth2);
    localStorage.setItem("surv2", surv2);
    localStorage.setItem("subject", subject);
    localStorage.setItem("spellbtn", $('.spellbtn').text());

    $('input[type=checkbox]').each(function () {
        if (this.checked) {
            localStorage.setItem($(this)[0].id, $(this).val());
        }
    });

});
});