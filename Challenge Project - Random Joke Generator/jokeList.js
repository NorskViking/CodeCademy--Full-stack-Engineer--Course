const jokes = [
    {
        "joke": "A Swede, a Dane, and a Norwegian are on a vacation in Italy. They get lost and can't find their way back to their hotel. The Swede pulls out his phone and tries to use a map app, but there's no signal. The Dane starts panicking and yelling for help. The Norwegian calmly sits down on a bench and smiles. The Swede and Dane ask him why he's so relaxed. The Norwegian says, 'Relax? I'm not lost. I'm on an adventure!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are watching the Olympics. A Swedish athlete wins a gold medal. The Swede jumps up and down with pride. A Danish athlete wins a silver medal. The Dane sighs and mutters, 'Almost.'  A Norwegian athlete doesn't even qualify for the finals. The Norwegian cheers and says, 'At least he participated!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are shopping for furniture. The Swede sees a sleek, minimalist chair and loves it for its simplicity. The Dane sees a comfortable recliner and wants it for relaxation. The Norwegian sees a flat-pack chair and smiles. Confused, the Swede and Dane ask him why he's happy with such a basic option. The Norwegian replies, 'Because it only comes in three pieces! Finally, something I can actually assemble!'"
    },
    {
        "joke": " A Swede, a Dane, and a Norwegian are invited to a dinner party. The Swede brings a fancy dessert everyone raves about. The Dane brings a delicious casserole. The Norwegian brings a brown paper bag. The host asks him what's inside. The Norwegian proudly pulls out a roll of paper towels and says, 'In case someone spills the Swede's dessert or the Dane's casserole!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are in a business meeting. The Swede gives a long, detailed presentation. The Dane interrupts constantly with questions. The Norwegian falls asleep halfway through. When the Swede finishes, the boss asks for their feedback. The Norwegian wakes up with a jolt and says, 'Sounds great! Let's do it!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian attend a fashion show. The Swede admires a classic, elegant dress. The Dane loves a trendy outfit with bold colors. The Norwegian points at a model wearing a potato sack and says, 'Now that's something comfortable!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian visit an art museum. The Swede stands in awe before a complex abstract painting. The Dane appreciates a detailed landscape scene. The Norwegian stares at a blank canvas and smiles. The Swede and Dane ask him what he finds so interesting. The Norwegian shrugs and says, 'I like the way the artist captured the emptiness of existence.'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are stuck in a traffic jam. The Swede gets frustrated and honks his horn repeatedly. The Dane starts yelling at other drivers. The Norwegian pulls out a book and starts reading calmly. The Swede and Dane ask him how he can be so relaxed. The Norwegian says, 'Getting angry won't make the traffic move any faster. Besides, I finally have time to finish this book!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are on a hike. The Swede complains about the steep climb. The Dane worries about getting lost. The Norwegian enjoys the scenery and fresh air. When they reach the top, they're rewarded with a breathtaking view. The Swede takes a selfie to show off. The Dane checks his phone for signal. The Norwegian simply sits down and takes it all in."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are enjoying a sauna. The Swede can only handle a few minutes of the heat and rushes out. The Dane likes it hot and stays in for a long time. The Norwegian throws a bucket of water on the hot coals, creating even more heat, and smiles with delight."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are on a business trip to England. They enter a restaurant and struggle to understand the menu. The Swede points to a random dish and hopes for the best. The Dane tries to decipher the ingredients with a dictionary app. The Norwegian walks up to the waiter and confidently says, 'Just bring us your national dish, please' The waiter looks confused and says, 'Fish and chips?' The Norwegian beams and says, 'Perfect!'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian decide to build a birdhouse together. The Swede meticulously follows the instructions and uses high-quality materials. The Dane cuts corners and uses whatever scrap wood he can find. The Norwegian looks at the plans, throws them aside, and starts building a completely different design based on his own intuition."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian go on a camping trip. The Swede brings a luxurious tent with all the amenities. The Dane packs a practical tent with just the essentials. The Norwegian shows up with a simple tarp and a sleeping bag, ready to sleep under the stars."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian team up for a pub quiz. The Swede excels at general knowledge questions. The Dane dominates the history round. The Norwegian struggles with most questions but shines in the music trivia round, thanks to his vast collection of obscure folk songs."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian go through airport security. The Swede calmly puts his belongings through the scanner. The Dane meticulously unpacks his entire carry-on bag. The Norwegian sets off the metal detector with a hidden pocket knife he completely forgot about."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian pick a movie to watch together. The Swede wants to see a critically acclaimed foreign film. The Dane prefers a Hollywood action blockbuster. The Norwegian suggests a quirky documentary about competitive cheese rolling."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian lose their wallets at a concert. The Swede frantically searches for his wallet, worried about his credit cards. The Dane retraces his steps, hoping someone found it. The Norwegian shrugs and says, 'At least I still have my phone to call a taxi.'"
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian browse the gift shop at a museum. The Swede buys a tasteful replica of a historical artifact. The Dane purchases a practical travel mug with the museum logo. The Norwegian picks up a plush toy mascot that looks vaguely related to the museum's theme."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian are waiting for a bus. The Swede stands impatiently, checking his watch every few minutes. The Dane complains about the slow public transportation system. The Norwegian observes the scenery and people around him with a sense of curiosity."
    },
    {
        "joke": "A Swede, a Dane, and a Norwegian win the lottery together. The Swede invests his winnings in a safe and secure portfolio. The Dane uses his money to pay off his debts and buy a comfortable new home. The Norwegian quits his job, travels the world, and experiences new cultures."
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        "joke": "A man walks into a library and asks the librarian for books about paranoia. The librarian whispers, 'They're right behind you!'"
    },
    {
        "joke": "I don't trust stairs. They're always up to something."
    },
    {
        "joke": "I went to the zoo the other day. It had only one dog. It was a Shih Tzu."
    },
    {
        "joke": "I used to be addicted to soap, but I'm clean now."
    },
    {
        "joke": "What do you call a cow with no legs? Ground beef!"
    },
    {
        "joke": "What do you call a lazy kangaroo? A pouch potato."
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two tired."
    },
    {
        "joke": "What do you call a fish with no legs? Still a fish!"
    },
    {
        "joke": "I tried to catch fog yesterday. I mist."
    },
    {
        "joke": "I finally bought some self-help books. Now I'm just helping myself to the books."
    },
    {
        "joke": "Did you hear about the restaurant on the moon? Great food, no atmosphere."
    },
    {
        "joke": "Jokes about kleptomania are taken very seriously."
    },
    {
        "joke": "No matter how much you push the envelope, it will always be stationery."
    },
    {
        "joke": "To err is human, but to moo is bovine."
    },
    {
        "joke": "What did the router say to the doctor? 'It hurts when IP'"
    },
    {
        "joke": "Did you hear about the Viking who was reincarnated? He was Bjorn again."
    },
    {
        "joke": "What do you get when you cross a rabbit with a water hose? Hare spray."
    },
    {
        "joke": "My dolphin puns are terrible on porpoise"
    },
    {
        "joke": "I'm thinking for reasons to go to Switzerland. The flag is a big plus."
    },
    {
        "joke": "A backwards poet writes inverse"
    },
    {
        "joke": "Why shouldn't you use 'beef stew' as a computer password? It's not stroganoff."
    },
    {
        "joke": "What do you call a cat who wants to sit on you when you're working on your computer? A laptop."
    },
    {
        "joke": "Why did the computer show up at work late? It had a hard drive."
    },
    {
        "joke": "Did you hear about the octopus who stopped printing? It ran out of ink."
    },
    {
        "joke": "What did the computer confess at the concert? 'I like big bytes and I cannot lie.'."
    },
    {
        "joke": "How does a computer get drunk? It takes screenshots."
    },
    {
        "joke": "Why did the PowerPoint Presentation cross the road? To get to the other slide."
    },
    {
        "joke": "What swashbuckling feline had to keep turning off its computer? Puss in Reboots."
    },
    {
        "joke": "What do you call a sleepy little computer? A naptop!"
    },
    {
        "joke": "What kind of music is rooted in a set of computer commands? Algorithm and Blues."
    },
    {
        "joke": "Did you hear the one about the broken computer that needed a place to stay? It had nowhere to crash."
    },
    {
        "joke": "What did the teacher say to the Disney insect learning to use a computer mouse? 'Jiminy, click it!'"
    },
    {
        "joke": "Have you heard of the new band called 1023 Megabytes? They’re pretty good, but they don’t have a gig just yet."
    },
    {
        "joke": "What’s the biggest lie in the entire universe? “I have read and agree to the Terms & Conditions.”"
    },
    {
        "joke": "What did the Wall Street computer say to impress the woman at the bar? “You know, I have a lot of cache.”"
    },
    {
        "joke": "Why did the man get fired from his job at the keyboard factory? He wasn’t putting in enough shifts."
    },
    {
        "joke": "Why did the Windows tech guy get in trouble for goofing off on a Mac? His jokes weren’t PC."
    },
    {
        "joke": "What was Obi-Wan Kenobi’s advice to Jedis with computer problems? “May the force-quit be with you.”"
    },
    {
        "joke": "Did you hear about the cyclops whose computer crashed? He called Eye-T."
    },
    {
        "joke": "Who do stoners call when they have computer problems? High-T."
    },
    {
        "joke": "Why did SpongeBob call IT? He needed help bubble-shooting."
    },
    {
        "joke": "Who do witches use to fix computer problems? IT hexperts."
    },
    {
        "joke": "Why is Halloween an IT guy’s least favorite holiday? There’s a ghost in the machine."
    },
    {
        "joke": "What do IT workers call “the talk” they have with their children? The birds and the US-Bees."
    },
    {
        "joke": "What do you call a popular program about technology experts? Must-See IT."
    },
    {
        "joke": "What do IT guys say when they totally get your frustration? “Word.”"
    },
    {
        "joke": "Did you hear about the IT guy who was falsely arrested? He was mainframed."
    },
    {
        "joke": "How does IT generally solve problems with email? They give it a positive Outlook."
    },
    {
        "joke": "Why did the polar bear call tech support? His screen was frozen."
    },
    {
        "joke": "How many technical-support agents does it take to screw in a lightbulb? Press 1 to continue."
    },
    {
        "joke": "What is the funniest tech hub in California? Silly-con Valley."
    },
    {
        "joke": "What do you get when you cross a dog with a tech CEO? Bark Zuckerberg."
    },
    {
        "joke": "What doubles as a dance club and computer help desk? Disco-tech support."
    },
    {
        "joke": "What did the tech-repair guy say when he couldn’t figure out the computer problem? “It’s all Geek to me!”"
    },
    {
        "joke": "Did you hear about the computer tech who gained weight? He was bad at managing cookies."
    },
    {
        "joke": "Why shouldn’t you name your boat after anything computer-related? It’ll have a greater chance of syncing."
    },
    {
        "joke": "Who did Captain Kirk call when his computer crashed? Star Trek support."
    },
    {
        "joke": "Did you hear about the monkeys who shared an Amazon account? They were Prime mates."
    },
    {
        "joke": "What do kids call Macbook chargers? Apple juice!"
    },
    {
        "joke": "What do you get when you cross a demon assassin with a slow streaming service? Buffering the Vampire Slayer."
    },
    {
        "joke": "What do you get when you cross painted performance artists with a wireless connection? Blue Man Tooth."
    },
    {
        "joke": "What kind of connection do trapeze artists use to log onto the internet? High-wireless."
    },
    {
        "joke": "Which country has the slowest Wi-Fi? Germany. It’s the wurst!"
    },
    {
        "joke": "What do Hawaii and an area with a good internet connection have in common? They’re both hotspots."
    },
    {
        "joke": "What message pops up on Russian computers when you can’t get a Wi-Fi signal? Inter-nyet."
    },
    {
        "joke": "How could you tell the college town had bad Wi-Fi? It didn’t have enough bars."
    },
    {
        "joke": "Why did the router and modem fall in love? They had a great connection."
    }
]

export default jokes;
