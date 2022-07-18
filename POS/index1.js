/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    // Constant Variables
    const FRAME_RATE = 60;
    const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

    // Game Item Objects
    var sub = 0;
    var total = 0;
    var tax = 0;
    var rate = 0.11;
    let cart = [];
    const inv = [
        {
            "price": 1.30,
            "id": '1x Apple'
        },
        {
            "price": 1.43,
            "id": "1x Banana"
        },
        {
            "price": 1.12,
            "id": "1x Coconut"
        },
        {
            "price": 2.72,
            "id": "1x Donut"
        },
        {
            "price": 1.79,
            "id": "1x Eggplant"
        },
        {
            "price": 1.19,
            "id": "1x Fig"
        },
        {
            "id": "1lb Green Bean",
            "price": 0.64
        }
    ]

    // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $("#apple").click(apple);                                           // change 'eventType' to the type of event you want to handle
    $("#banana").click(banana);
    $("#coconut").click(coconut);
    $("#donut").click(donut);
    $("#eggplant").click(eggplant);
    $("#fig").click(fig);
    $("#green").click(green);

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// CORE LOGIC ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    /* 
    On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
    by calling this function and executing the code inside.
    */
    function newFrame() {
        checkTicketSize();

    }

    /* 
    Called in response to events.
    */
   function checkTicketSize() {
    if ($("#text-box").height() >= 637) {
        $('#cart').first().remove();
    }
   }
    function apple() {
        sub = sub + inv[0].price;
        cart.push(inv[0].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[0].id)
                 .addClass("ticket");
        updateText();
    }
    function banana() {
        sub = sub + inv[1].price;
        cart.push(inv[1].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[1].id)
                 .addClass("ticket");
        updateText();
    }
    function coconut() {
        sub = sub + inv[2].price;
        cart.push(inv[2].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[2].id)
                 .addClass("ticket");
        updateText();
    }
    function donut() {
        sub = sub + inv[3].price;
        cart.push(inv[3].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[3].id)
                 .addClass("ticket");
        updateText();
    }
    function eggplant() {
        sub = sub + inv[4].price;
        cart.push(inv[4].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[4].id)
                 .addClass("ticket");
        updateText();
    }
    function fig() {
        sub = sub + inv[5].price;
        cart.push(inv[5].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[5].id)
                 .addClass("ticket");
        updateText();
    }
    function green() {
        sub = sub + inv[6].price;
        cart.push(inv[6].id);
        taxCalc();
        $("<li>").insertAfter("#cart")
                 .text(inv[6].id)
                 .addClass("ticket");
        updateText();
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    function updateText() {
        $("#sub").text("Subtotal: $" + sub.toFixed(2));
        $("#tax").text("Tax: $" + tax.toFixed(2));
        $("#total").text("Total: $" + total.toFixed(2));
    }
    function taxCalc() {
        tax = rate * sub;
        total = sub + tax;
    }

}