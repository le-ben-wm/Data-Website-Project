/**
 * Created by session1 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Country', '2010 Biofuels', '2000 Biofuels'],
        ['United States', 887.6242, 105.54],
        ['Brazil', 527.32212, 183.8867],
        ['Germany', 62, 4.3],
        ['France', 55, 7.9],
        ['Canada', 26.4, 3.7],
        ['Spain', 24, 1.6],
    ]);

    var options = {
        title: 'Biofuels Consumed and Produced',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Barrels Consumed (thousand/day)',
            minValue: 0,
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Country',
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        },
        backgroundColor: "#f5f5f5"
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawLogScales);

function drawLogScales() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Actual Emissions (Estimated)');
    data.addColumn('number', 'Projected Emissions');

    data.addRows([
        [2006, 107.2295365, 107.2295366], [2007, 109.1206132, 109.0876776], [2008, 107.1679389, 110.9443705], [2009, 98.4893531, 113.8282874], [2010, 100.1263839, 115.7509504], [2011, 99.2838297, 117.6554834], [2012, 98.284400, 119.6994996], [2013, 96.799100, 121.5029989]
    ]);

    var options = {
        title: 'Greenhouse Gas Emissions',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Year',
            logScale: true,
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Greenhouse Gas Emissions (Million units)',
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        },
        series: {
            1: {curveType: 'function'}
        },
        backgroundColor: '#f5f5f5'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}
function alertButton() {
    alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
        var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
            "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
            "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");


        switch (startGame) {
            case "defend":
                var defendPlanet = prompt("There's smoke in the air, buildings taller then the clouds for miles on fire. The whole world in front of you is collapsing. Soldiers and " +
                    "civilians are dying all over and most Commanders have abandoned them. Now everyone on Serenity looks to you for leadership. Your primary objective is to find and secure " +
                    "Chancellor Keith, but you also need to get civilians out of danger. You have limited assets. What will you spend them on? Who will you save?  (chancellor/civilians)");

                if (defendPlanet === "chancellor") {
                    var serOneChan = prompt("You start sending out scouts and Serenity has been bombarded and turned into a complete war zone. Your scouts come back with good and bad news. " +
                        "They have found the chancellor injured and brought him back alive but unconscious and injured from a Methera Bot Execution Camp in the capital building. In the process, " +
                        "however, your scouts let several hundreds of civilians die to keep their cover. A nearby Atrar ship will pick up the Chancellor if you personally escort him to one " +
                        "of two LZ's. 1st LZ INTEL: The top of one of the only standing buildings battered by bombardment surrounded by city still actively crawling with Methera Bot-Men. " +
                        "2nd LZ INTEL: The tip of a nearby mountain surrounded by wildlife and forest area that is known to have a hidden Bot-Men Battle Battallion camp. (1/2)");

                    switch (serOneChan) {
                        case "2":
                            var serTwoChan1 = prompt("You move across the forest, trying to reach the mountain but you suddenly find a trail of tracks made from what you " +
                                "know are Methera Bot-Men. Now do you keep heading to the Mountain or try to ambush the camp?  (mountain/camp)");
                            if (serTwoChan1 === "camp") {
                                var dead2 = alert("Your ambush party was ambushed and you were killed");
                            } else if (serTwoChan1 === "camp") {
                                var gameWin2 = alert("You are suddenly ambushed when you're almost to the LZ and you rush the Chancellor to the ship, which you see is landing in " +
                                    "the distance. He barely makes it on board, but you feel a sharp pain in your chest. You're scared to look down but do so anyway to see that you were shot. " +
                                    "The pilot barely takes off with everyone onboard, but you're bleeding out. The Chancellor, however, calls upon a secretive support stash of ships and drives" +
                                    " away the alien invaders. Congratulations, you've sacrificed yourself to win the war. Game Win.");
                            }
                            break;
                        default:
                            alert("On the way to your objective, you get ambushed by a group of SuperBots. They were expecting you there. I'm Sorry, you have died.");
                            break;
                    }

                } else if (defendPlanet === "civilians") {
                    var serOneCiv = prompt("You send out rescue crews to the nearby buildings in the cities and find hundreds of people in the fire. The Methera Bot-Men were looking for" +
                        " civilian captives too, and your squads sacrifice lots of men to bring those innocent people out of harms way. In the fighting, your command center gets hacked by the enemy " +
                        "and plants a message showing you the execution of the Chancellor in what you recognize as the capital building and you see lots of hostages in the background. " +
                        "Your men, however, trace that the message from an underground sewer juncture. Your men are demoralized and say they'll do whatever you say only if you go with them. Now, " +
                        "where will you go?  (sewer/capital)");

                    if (serOneCiv === "capital") {
                        var capitalWall = alert("You and your men squirm through the city, avoiding detection to get to the capital building. The building is surrounded by a wall build with " +
                            "Metharian metalwork. Your men silently take out the guards and you're faced with a Quad code lock. You have to hack it and create your own passwords.");
                        var quest1 = prompt("Password One: What is most important to you?");
                        var quest2 = prompt("Password Two: If you could own a planet, what would you name it?");
                        var quest3 = prompt("Password Three: What would you name your imaginary friend?");
                        var quest4 = prompt("Password Four: What is your favorite color?");
                        var password = [quest1, quest2, quest3, quest4];
                        var serTwoCivCap = prompt("You enter the building and find two corridors, which will you take? (left/right)");
                        if (serTwoCivCap === "left") {
                            var dead1 = alert("You enter a room that has the floor dug out and filled with dangerous aliens of a poisonous species. A Bot-Man was secretly " +
                                "behind you and pushes you in, causing you to fall to your death. GAME OVER.");
                        } else if (serTwoCivCap === "right") {
                            var serTwoCivCapRit = alert("You enter a room full of hostages and you go to free them, but a Bot-Man was behind you and fights you." +
                                " You see his half-man, half-robot is weakest where the flesh and metal combine together. You strike those joints and the bot collapses. " +
                                "Your crew, which was far behind you, catches up just in time and destroys the bot. You must now free the prisoners " +
                                "from an ominous computer console and you need to reuse your password choices.");
                            var lock1 = prompt("What is password one:");
                            var lock2 = prompt("What is password two:");
                            var lock3 = prompt("What is password three:");
                            var lock4 = prompt("What is password four:");
                            if (lock1 === password[0] && lock2 === password[1] && lock3 === password[2] && lock4 === password[3]) {
                                var gameWin1 = alert("You unlock the hostages and accidentally disengage the mothership's support. You killed millions of ruthless " +
                                    "Methera soldiers and drive the survivors away. Congratulations! You saved the Atrar Union. Game Win.");
                            }
                        }
                        else {
                            var gameLose1 = alert("You got one or more of your passwords wrong and the console calls for the mothership's support. Your actions cause the deaths " +
                                "of millions and the fall of the the Atrar Union. Game Over.");
                        }
                    }

                }
                break;


            case "mothership":
                var mothership = prompt("The great commander John Flag calls a meeting of the council of the Atrar nation. He rises in front of the council and says " +
                    "\"The Atrar nation has taken enough beatings from the Methera Empire. This A.I. race has taken too much from us for too long, now it's time to take the " +
                    "fight back to them. We will make our final stand against" +
                    " the Methra by (blowing up their mothership/making a final stand in space)\"");
                if (mothership === "blowing up their mothership") {
                    var blowingUpTheirMothership = prompt("\"They destroyed our cities, they destroyed our home, they destroyed our world, but now we will destroy their world " +
                        "to avenge ours.\" The remaining forces of Atrar Nation gathers in the air ship hangers the next morning to prepare for their final stand. Commander " +
                        "John Flag is accompanied by his two best soldiers, John-117 and Kelly-078. \"You have all been trained for this moment, make your last stand count for " +
                        " the Atrar nation.\" John got into his ship armed with a (rifle/nuke)");
                    if (blowingUpTheirMothership === "nuke") {
                        var nuke = prompt("Stuff");
                    }
                    else if (blowingUpTheirMothership === "rifle") {
                        var rifle = prompt("work");
                    }
                }
                else if (mothership === "making a final stand in space") {
                    console.log("Star Trek");
                }
                break;

            case "talk":
                var speakWithLeader = prompt("Your meeting with the leader of the Methera invaders is going very well, until you see a sharp object hanging above you" +
                    " Do you continue the meeting or run back to your planet? (continue/run)");
                switch (speakWithLeader) {
                    case "continue":
                        var continueToSpeak = prompt("The Meeting continues and goes swell until the leader asks for a sacrifice or war," +
                            " He wants the Chancellor. Do you give him the Chancellor? (yes/no)");
                        switch (continueToSpeak) {
                            case "yes":
                                var yes = prompt("Along with the chancellor dies some of the Atrar Union's deepest secret's. Rumors are that he knew the location and communication codes to a" +
                                    " secret military base with extra support ships, but there is no such thing on record." +
                                    "I guess we'll never know.");
                                break;
                            case "no":
                                var no = prompt("You refuse the peace treaty. You start to sword fight with the Methera Empire leader. He takes a swing at you with this sword. Do you " +
                                    "roll out of the way or hold the sword sideways to block? (roll/block)");
                                break;
                            case "run":
                                alert("You attempt to run back to your planet, but are immediately shot by the guards. GAME OVER!");
                                break;
                        }
                        switch (no) {
                            case "roll":
                                var roll = prompt("You roll out of the way. Do you swing your sword back or run to think of a plan?  (swing/plan)");
                                break;
                            case "block":
                                alert("He hits your sword and you fall to your knees. He cuts your head off. GAME OVER!!!!!");
                        }
                        switch (roll) {
                            case "swing":
                                alert("You swing your sword and miss, and your sword gets stuck into the ground. Soren Lynx, the leader of the Methera Empire, cuts you half. GAME OVER!!!!!!");
                                break;
                            case "plan":
                                var plan = prompt("You hide in a corner to plan. Do you sleep it off or surrender? (sleep/surrender)");
                                switch (plan) {
                                    case "sleep":
                                        alert("You fall asleep thinking Soren Lynx wouldn't find you.You have a good sleep, but you never wake up again!!!!!!! GAME OVER!!!!!!!!");
                                        break;
                                    case "surrender":
                                        alert("You surrender and are thrown into the propeller. The war ends in defeat. You caused all of your people to die or become slaves. GAME OVER!!!!!!!");
                                        break;
                                }
                                break;
                        }
                        break;
                }
                break;
            case "flee":
                alert("As the Methera forces killed all of your friends and family several years ago, you have no attachment " +
                    "to the Atrar Union and decide to flee the planet in the interest of saving your own life. You get in your ship and prepare " +
                    "to take off. With the amount of fuel you have, there are only a few other planets you will be able to reach before you run " +
                    "out. The closest, Nustrye, is an ally of the Atrar Union and would probably welcome you in. However, you might also be seen " +
                    "as a traitor, as you are a commander in the Atrar military. The next planet, Pasleau, is known as a neutral group, often staying " +
                    "out of conflicts and not taking sides in wars. However, because of this, they often do not take in refugees from other " +
                    "nations. The furthest planet you can go to is Shaenga, which is one of the many planets in the galaxy that has not been widely " +
                    "colonized yet.");
                var fleePlanet = prompt("Which planet do you go to? (nustrye/pasleau/shaenga)");
                if (fleePlanet === "nustrye") {
                    var nustrye = prompt("You decide to head to the closest planet, Nustrye. When you arrive on the planet, you are immediately arrested. From what you can tell, " +
                        "the news that you have fled the Atrar Union has already reached Nustrye, and you have been labelled as a traitor. Do you try to break away, " +
                        "or do you resign yourself to your fate? (break away/ arrest)");
                    switch (nustrye) {
                        case "break away":
                            var breakChance = Math.random();
                            if (breakChance >= .5) {
                                var breakSuccess = alert("You decide to try to break away. You fight off the first officer and manage to run fast enough and find a hiding place. " +
                                    "You are able to wait out the war and live peacefully for the rest of your life. YOU WIN!")
                            }
                            else {
                                var breakFail = alert("You decide to try to break away. You manage to fight off the first officer, but you are quickly overwhelmed by" +
                                    "more. You are arrested and sentenced to death for being a traitor. GAME OVER.")
                            }
                            break;
                        case "arrest":
                            alert("You resign yourself to your fate. You are arrested and sentenced to death for being a traitor. GAME OVER.")
                            break;
                        default:
                    }
                }
                else if (fleePlanet === "pasleau") {
                    var pasleau = prompt("You decide to head to the middle planet, Pasleau. As you are approaching the planet, you are greeted by several warships, which you " +
                        "assume are from Pasleau. They ask you what your business with the planet is. Do you tell them the truth or do you lie? (truth/lie)")
                    switch (pasleau) {
                        case "truth":
                            var pasleauAccept = Math.random();
                            if (pasleauAccept >= .5) {
                                alert("You decide to tell the warships the truth about fleeing from the war between the Atrar Nation and the Methera Empire. To your surprise, " +
                                    "you are told that you are allowed to stay on the planet as a refugee. YOU WIN!")
                            }
                            else {
                                alert("You decide to tell the warships the truth about fleeing from the war between the Atrar Nation and the Methera Empire. As expected, " +
                                    "you are denied entry into the planet as a refugee. As you do not have enough fuel to fly to another planet, you are left to float in space " +
                                    "for the rest of your life. GAME OVER.")
                            }
                            break;
                        case "lie":
                            alert("You decide to lie to the warships about your situation, as you believe that lying would give you a better chance of gaining entry to the planet. " +
                                "However, you are unable to come up with something quickly, and are immediately fired upon on the basis of suspicious activity. GAME OVER.")
                            break;
                        default:
                    }
                }
                else if (fleePlanet === "shaenga") {
                    var shaenga = prompt("You decide to head to the farthest planet, Shaenga. As you are approaching the planet, you are met with several warships " +
                        "which you assume are from Shaenga. They ask you what your business is. You know that if you answer falsely and they find out later, you will be " +
                        "arrested. You tell them you are a refugee from the Atrar nation and have fled from the war. You are immediately turned away. Do you attempt to find " +
                        "a different way around, or do you resign yourself to your fate? (different/resign)")
                    switch (shaenga) {
                        case "different":
                            var findChance = Math.random();
                            if (findChance >= .5) {
                                alert("You decide to find a different, less populated area on the planet where you can land and wait out the war. After an hour and with only a " +
                                    "sliver left on your fuel gauge, you manage to find an uninhabited area where you can live in your ship and wait out the war. YOU WIN!")
                            }
                            else {
                                alert("You decide to find a different, less populated area on the planet where you can land and wait out the war. However, you are unable to " +
                                    "find a place to land before you run out of fuel and are left drifting endlessly for the rest of your life. GAME OVER.")
                            }
                            break;
                        case "resign":
                            alert("As you don't have enough fuel to travel to another planet, you resign yourself to your fate. You float off into space as you wait out your " +
                                "days until you run out of resources. GAME OVER.");
                            break;
                        default:
                        {
                        }
                    }
                }
                else {
                    alert("Please choose one of the options in the parentheses. Remember, answers are CASE SENSITIVE.")
                }
                }
    /* Work on your own part:
     Andy: Defend
     Nick: Mothership
     Marques: Talk
     Ben: Flee
     */
}
function adventure() {
    var storyConfirm = confirm("Are you ready to begin your adventure?")
    if (storyConfirm === true) {
        alert("DO NOT CAPITALIZE ANY ANSWERS");
        var storyBeginning = prompt("You are lost in the woods and it is turning night. As you are trying to find your way back, you come across" +
            " a cabin. Looking around, there appears to be no one around, and there is no light coming from the cabin. Do you " +
            "enter? (yes/no)");
        {
            if (storyBeginning === "yes") {
                var enterCabin = prompt("You enter the cabin and find that there is, in fact, no light source within the cabin. You take out your flashlight" +
                    " and turn it on to look around the cabin. The cabin is mostly empty, but you see a bed, a TV, and a radio. What do you do? (bed/tv/radio)")
                {
                    if (enterCabin === "bed") {
                        var cabinBed = prompt("You decide to sleep in the bed, as you are quite tired after wandering around in the woods for hours. You slip under" +
                            " the covers and quickly fall asleep. Suddenly, you are awoken by a loud thud that seems to have come from right outside the cabin. " +
                            "Do you investigate the sound or go back to sleep? (investigate/sleep)");
                        if (cabinBed === "investigate") {
                            alert("You get up and grab your flashlight to go investigate the noise. After you check around the cabin and see nothing, " +
                                "you move to go check outside. As you are about to open the door, you here a faint rustling of leaves. " +
                                "However, when you open the door and look around, there is nothing to be seen. After a few seconds, you catch a faint " +
                                "glimmer out of the corner of your eye, right before falling to the ground, paralyzed. The last thing you see before " +
                                "your vision goes dark is a large, shadowy figure emerge from the bushes, completely dark aside from gleaming, " +
                                "red eyes. GAME OVER.")
                        }
                        else if (cabinBed === "sleep") {
                            alert("After mulling it over in your head, you decide that the noise must have just been an animal doing its animal thing. " +
                                "The next time you wake up is to a sudden sharp pain in your chest. As your vision goes black, you can see the silhouette " +
                                "of a large, hulking figure walking out the door. GAME OVER.")
                        }
                    }
                    else if (enterCabin === "tv") {
                        var cabinTv = prompt("You turn on the TV and are quickly greeted by a screen full of static. After tinkering with the antennae, you can " +
                            "see a faint image, clouded by the static still present on the screen. Suddenly, you feel tired, and, before you " +
                            "know it, you pass out. While you are asleep, you have a very strange dream. In this dream, you see the silhouette of a person. You hear a voice, " +
                            "indistinguishable in gender, which you assume to be coming from the figure. \"Let's play a game, " +
                            "the rules are simple. Just follow along, and answer this riddle. If you get it right, you'll sleep through the night," +
                            " but if you are wrong, your life won't be long.\" The figure then asks, \"Who makes it, has no need of it. Who buys it, has no use for it. " +
                            "Who uses it can neither see nor feel it. What is it?\" What do you answer?");
                        if (cabinTv === "coffin") {
                            var answerRight = prompt("\"Congratulations, you win! You got it correct: a coffin! But don't rest so easy, you aren't quite done; we're just getting started" +
                                " with all the great fun. When you wake up, you'll look down and see: you've been tied up to the top of a tree! This isn't the part that should be concerning; " +
                                "for this tree you are tied to will also be burning! Good luck with this challenge, hope you make it out well. But for now, good luck, so long, and farewell!\" " +
                                "You wake up immediately after this surprisingly vivid dream to find that you are indeed tied to the top of a tree, and your eyes are watering from the smoke " +
                                "coming from under you. You can't do much, as your hands are behind your back. Do you try to loosen the ropes, or do you accept your fate? (loosen/accept)");
                            if (answerRight === "loosen") {
                                alert("You panickingly begin wiggling around in an attempt to loosen the ropes. After a few terrifying seconds, you feel slight relief as the ropes" +
                                    "slightly slacken. You excitedly redouble your efforts, causing the ropes to continue to loosen. Suddenly, the ropes come completely undone and you begin " +
                                    "hurtling towards the ground. As you approach the ground, you think about what you could have done differently, but are unable to come up with anything " +
                                    "in the short time it takes for the ground to come and greet you. GAME OVER.")
                            }
                            else if (answerRight === "accept") {
                                alert("You resign yourself to your fate at the top of this tree. As the fire consumes the rest of the tree, you can hear maniacal laughter " +
                                    "in the distance. GAME OVER.")
                            }
                        }
                        else if (cabinTv === "a coffin") {
                            var answerOtherRight = prompt("\"Congratulations, you win! You got it right: a coffin! But don't rest so easy, you aren't quite done; we're just getting started" +
                                " with all the great fun. When you wake up, you'll look down and see: you've been tied up, to the top of a tree! This isn't the part that should be concerning; " +
                                "for this tree you are tied to will also be burning! Good luck with this challenge, hope you make it out well. But for now, good luck, so long, and farewell!\" " +
                                "You wake up immediately after this surprisingly vivid dream to find that you are indeed tied to the top of a tree, and your eyes are watering from the smoke " +
                                "coming from under you. You can't do much, as your hands are behind your back. Do you try to loosen the ropes, or do you accept your fate? (loosen/accept)");
                            if (answerOtherRight === "loosen") {
                                alert("You panickingly begin wiggling around in an attempt to loosen the ropes. After a few terrifying seconds, you feel slight relief as the ropes" +
                                    "slightly slacken. You excitedly redouble your efforts, causing the ropes to continue to loosen. Suddenly, the ropes come completely undone and you begin " +
                                    "hurtling towards the ground. As you approach the ground, you think about what you could have done differently, but are unable to come up with anything " +
                                    "in the short time it takes for the ground to come and greet you. GAME OVER.")
                            }
                            else if (answerOtherRight === "accept") {
                                alert("You resign yourself to your fate at the top of this tree. As the fire consumes the rest of the tree, you can hear maniacal laughter " +
                                    "in the distance. GAME OVER.")
                            }
                        }
                        else {
                            alert("\"Oh how sad! You have failed! If you had thought harder, you might have prevailed! It's over, we're through; this game we are playing has ended for you. " +
                                "I suppose since you'll die, I'll tell you a secret; for when you are dead, you surely will keep it! It was quite obscure, the answer to win, but the answer " +
                                "for sure, was simply a coffin! Well, there you have it, my job here is done. Maybe the next person will be much more fun.\" The figure proceeds to pull out " +
                                "what appears to be a knife and plunges it into your chest. The feeling is all too real for a dream, and you find that the dream is fading from your vision. " +
                                "The last thing you see before the dream completely disappears is the figure waving at you, now fully visible as what you can only describe as a " +
                                "deranged jester, staring at you with an unnerving smile plastered on its face. GAME OVER.")
                        }
                    }
                    else if (enterCabin === "radio") {
                        var cabinRadio = prompt("You turn on the radio and are quickly greeted by the sound of static. After tinkering with the antennae, you can " +
                            "hear a strange noise coming from the radio. Suddenly, you feel tired, and, before you know it, you pass out. While you are asleep, " +
                            "you have a very strange dream. In this dream, everything around you is completely unclear. The only thing that IS clear is the shadowy, hulking " +
                            "figure making its way towards you. You also find that in this dream, you are unable to move. As the figure continues to walk toward you, you " +
                            "see that it is holding what seems like an axe in its right hand. Do you try to scream to wake yourself up, or do you wait and see what will happen? " +
                            "(scream/wait)");
                        if (cabinRadio === "scream") {
                            alert("You decide to attempt to scream in this dream to wake yourself up. The first few tries are unsuccessful, but on the third try, you are " +
                                "suddenly awoken. As you attempt to catch your breath and understand what just happened, you hear a voice behind you mutter, \"You should have " +
                                "stayed asleep.\" GAME OVER.")
                        }
                        else if (cabinRadio === "wait") {
                            alert("You decide to not do anything, as this is simply just a nightmare. The figure continues to shamble towards you, eyes gleaming, an " +
                                "unnerving smile plastered to its face. When it finally reaches you after what seems like hours, the figure raises the axe and brings it down " +
                                "on you. The feeling of the axe is incredibly vivid, almost too vivid for a dream. The dream begins to fade, and the last thing you see is " +
                                "the shadowy figure waving at you, the unnerving smile never leaving its face. GAME OVER.")
                        }

                    }
                }
            }
            else if (storyBeginning === "no") {
                alert("You ignore the cabin and continue looking for a way out of the woods. After an hour of walking, you can " +
                    "faintly hear the sound of cars driving. " +
                    "You walk towards the sound and come across a road. By hitchhiking, you are able to safely return home. YOU WIN.")
            }
            else {
                alert("Please enter one of the options in the parentheses.")
            }
        }
    }
    else {
        alert("k");
    }
}