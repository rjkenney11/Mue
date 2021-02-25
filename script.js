$(document).ready(function () {

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
        if (localStorage.getItem("charis2") != "undefined") {
            var charis2 = localStorage.getItem("charis2", charis2);
            $("#charis2").val(charis2);
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
        localStorage.clear();
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
        var charis2 = $("#charis2").val();
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
        localStorage.setItem("charis2", charis2);
        localStorage.setItem("classbtn", $('.classbtn').text());
        localStorage.setItem("spellbtn", $('.spellbtn').text());
        var levelbtn = $("#char-name").val();
        localStorage.setItem("levelbtn", $('.levelbtn').text());
        localStorage.setItem("racebtn", $('.racebtn').text());
        localStorage.setItem("backbtn", $('.backbtn').text());
        localStorage.setItem("strengthbtn", $('.strengthbtn').text());
        localStorage.setItem("DEXTERITYbtn", $('.DEXTERITYbtn').text());
        localStorage.setItem("WISDOMbtn", $('.WISDOMbtn').text());
        localStorage.setItem("CONSTITUTIONbtn", $('.CONSTITUTIONbtn').text());
        localStorage.setItem("CHARISMAbtn", $('.CHARISMAbtn').text());
        localStorage.setItem("INTELLIGENCEbtn", $('.INTELLIGENCEbtn').text());
        $('input[type=checkbox]').each(function () {
            if (this.checked) {
                localStorage.setItem($(this)[0].id, $(this).val());
            }
        });

        localStorage.setItem("subject", $('#subject').val());
        localStorage.setItem("weapon-name", $('#weapon-name').val());
        localStorage.setItem("attack-bonus", $('#attack-bonus').val());
        localStorage.setItem("damage-dice", $('#damage-dice').val());
        localStorage.setItem("weaponbtn", $('.weaponbtn').text());

    });
});