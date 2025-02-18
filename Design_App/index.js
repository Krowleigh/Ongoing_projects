
/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    // Constant Variables
    var FRAME_RATE = 60;
    var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

    // Game Item Objects
    var list = [
        {
            id: "O4042",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CookieCake_SummerVibesOnlyPineapple_KO-1200x800-c6f5639.jpg"
        },
        {
            id: "O0412",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-HaveAGreatSummer-O4012-640x640-86244f3.jpg"
        },
        {
            id: "O4041",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/Pool_Time.jpg"
        },
        {
            id: "O4040",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-ThankYou_ThanksALatte-O4040-640x640-86244f3.jpg"
        },
        {
            id: "O4035",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/March_On.jpg"
        },
        {
            id: "O4030",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GACC_Cake_Watermelon-1400x800-675b640-1.jpg"
        },
        {
            id: "O4013",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/FamilyReunion_D1008_sm-1400x800-7332283-1.jpg"
        },
        {
            id: "O4029P",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-BonVoyage-rectangle-O4029-640x640-86244f3.jpg"
        },
        {
            id: "O4028",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-FirstSleepover-O4028-640x640-86244f3.jpg"
        },
        {
            id: "O4020",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-GirlsNightOut-O4020-1400x800-e7bfd1b.jpg"
        },
        {
            id: "O4019",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-SadToSeeYouGo-O4019-640x640-86244f3.jpg"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-GoodLuckBestWishes-O4018-1400x800-86244f3.jpg",
            id: "O4018"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-JustToBrightenYourDay-O4017-640x640-86244f3.jpg",
            id: "O4017"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-BestFriendsForever-O4016-800x800-e7bfd1b.jpg",
            id: "O4016"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-YoureTheBest-O4011-800x800-e7bfd1b.jpg",
            id: "O4011"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-Ribbon-O4010-800x800-e7bfd1b.jpg",
            id: "O4010"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-PigOut-O4009-640x640-86244f3.jpg",
            id: "O4009"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-PokerNight-O4008-943x800-92ea6e3.jpg",
            id: "O4008"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-ThankYou_ANoteOfThanksMusicNotes-O4006-800x800-e7bfd1b.jpg",
            id: "O4006"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-GetWell_GetWellSoonFromTheBunch-O4005-640x640-86244f3.jpg",
            id: "04005"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_SpecialOcc-BreakALeg-O4039-640x640-86244f3.jpg",
            id: "O4039"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/Prom.jpg",
            id: "O4024"
        },
        {
            id: "B1004",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/07/4cb8a30b2fa44e5995be753429d8fb22.png"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/CookieCake_HappyBdayOlivia_Silo_403_KO-500x500-050dd60.png",
            id: "B1030"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GACC_Cake_Dude-1400x800-52d7dbc-1.jpg",
            id: "B1041"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBD29Forever-B1038-800x800-e7bfd1b-1.jpg",
            id: "B1038"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/HBD-Jenny.jpg",
            id: "B1037"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBDFirstBday-B1025-1400x800-86244f3.jpg",
            id: "B1025"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/HBD-Dump-Truck.jpg",
            id: "B1036"
        },
        {
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBDCrown-B1028-640x640-86244f3-1.jpg",
            id: "B1028"
        },
        {
            id: "B1035",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/Popcorn-HBD.jpg"
        },
        {
            id: "B1039",
            img: 'https://www.greatamericancookies.com/wp-content/uploads/2021/08/BirthdayBBall_2016-1400x800-d117e07.jpg'
        },
        {
            id: "B1029",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/Little-Monster.jpg"
        },
        {
            id: "B1034",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/Fish.jpg"
        },
        {
            id: "B1027",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBDBoot-B1027-640x640-86244f3-1.jpg"
        },
        {
            id: "B1026",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBDGuitar-B1026-640x640-fac4a00-1.jpg"
        },
        {
            id: "B1023",
            img: "https://www.greatamericancookies.com/wp-content/uploads/2021/08/GAC_CC_HBDMotorcycle-B1023-500x500-55e3268.png"
        },

    ]

    // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)                       // change 'eventType' to the type of event you want to handle

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// CORE LOGIC ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    /* 
    On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
    by calling this function and executing the code inside.
    */
    function newFrame() {


    }

    /* 
    Called in response to events.
    */
    $("#submit").click(examineCode);
    function examineCode() {
            $("#img").remove();
            for (i = 0; i < list.length; i++) {
                if (list[i].id === $("#code").val()) {
                    var img = $('<img id="img">');
                    img.attr('src', list[i].img);
                    img.appendTo('#image');
                }
            }
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////


    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }

}
