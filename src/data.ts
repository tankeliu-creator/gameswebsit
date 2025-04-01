export interface Game {
  id: string
  title: string
  description: string
  category: string
  thumbnail: string
  url: string
  plays: number
  likes: number
  instructions: string
  controls: Record<string, string>
}

export interface Category {
  id: string
  name: string
}

export const categories = [
  { id: 'action', name: 'Action' },
  { id: 'puzzle', name: 'Puzzle'  },
  { id: 'racing', name: 'Racing'  },
  { id: 'sports', name: 'Sports' },
  { id: 'adventure', name: 'Adventure'}
]

export const games = [
  {
    id: '1',
    title: 'War Groups',
    description: 'Roll down an endless slope, avoiding obstacles and collecting points in this fast-paced 3D game.',
    category: 'action',
    thumbnail: 'https://imgs.crazygames.com/war-groups_16x9/20250225042244/war-groups_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/war-groups/index.html?v=1.327',
    plays: 15000000,
    likes: 250000,
    instructions: 'War Groups is a strategic war game set in the dangerous and mysterious Zone, where your goal is to capture all sectors and eliminate your enemies. Choose from over 10 unique factions, including stalkers, bandits, military forces, and sectarians, and build your army by collecting powerful artifacts.\n' +
        '\n' +
        'Trade equipment, form alliances, and wage wars to establish dominance over the Zone. Explore a massive map with over 15 sectors filled with anomalies, mutants, and rival groups. Strengthen your strategy, conquer territories, and prove yourself as the ultimate leader.',
    controls: "Left-click = interact with in-game buttons\n" +
        "Drag left-click on the map = move the camera view\n" +
        "Mouse-scroll = zoom in / out",
    features:"10+ unique factions to choose from, each with different playstyles.\n" +
        "A vast world with 15+ sectors filled with dangers and opportunities.\n" +
        "Tactical warfare where alliances and betrayals shape the Zone.\n" +
        "Equipment and artifact trading to strengthen your forces.\n" +
        "Territory capture to expand your influence and eliminate rivals."
  },

  {
    id: '2',
    title: 'Kingdom Solitaire',
    description: 'Test your timing skills by stacking blocks as high as possible in this minimalist puzzle game.',
    category: 'puzzle',
    thumbnail: 'https://imgs.crazygames.com/kingdom-solitaire_16x9/20250327081311/kingdom-solitaire_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/kingdom-solitaire/index.html?v=1.327',
    plays: 10000000,
    likes: 180000,
    instructions: 'Kingdom Solitaire is a captivating journey where you, as Tony the butler, restore a majestic castle by mastering challenging solitaire levels. Delight in vibrant artwork, unique cards, and exciting mechanics while uncovering a heartwarming tale of a queen and her beloved pets. With constant updates introducing fresh surprises, your royal adventure will never grow dull!',
    controls: "Use the left mouse button to play.",
    features:""
  },
  {
    id: '3',
    title: 'Moto X3M',
    description: 'Race your motorcycle through challenging obstacle courses in this action-packed racing game.',
    category: 'racing',
    thumbnail: 'https://imgs.crazygames.com/games/moto-x3m/cover_16x9-1700625476572.png?metadata=none&quality=40&width=273&fit=crop&dpr=2',
    url: 'https://games.crazygames.com/en_US/moto-x3m/index.html?v=1.327',
    plays: 12000000,
    likes: 200000,
    instructions: 'Moto X3M is a driving bike game that takes dirt bike racing to the next level. It combines high-speed thrills with a test of precision and timing across 22 adrenaline-filled levels. Each course introduces fresh, intense obstacles—from gravity-defying loops to dangerous ramps and explosive traps—keeping you on the edge of your seat. Gear up, strap on your helmet, and prepare to perform stunts of a lifetime as you race against the clock.',
    controls: "Press the up arrow key to accelerate\n" +
        "Balance your bike with the left and right arrow keys\n" +
        "Break by pressing the down arrow key\n" +
        "Perform flips and other stunts to gain time\n" +
        "Don't crash",
    features:""
  },
  {
    id: '4',
    title: 'Playground',
    description: 'Playground is an action game where creativity meets destruction in an open-ended cubic sandbox! Whether you’re building grand cities, orchestrating epic battles, or just causing mayhem, the possibilities are endless! What will you build or destroy first?',
    category: 'action',
    thumbnail: 'https://imgs.crazygames.com/playground_16x9/20250311120048/playground_16x9-cover?metadata=none&quality=70&width=539',
    url: 'https://games.crazygames.com/en_US/playground/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Playground is an action game where creativity meets destruction in an open-ended cubic sandbox! Whether you’re building grand cities, orchestrating epic battles, or just causing mayhem, the possibilities are endless! What will you build or destroy first?',
    controls: "Use the left mouse button to interact with sandbox objects.",
    features:""
  },
  {
    id: '5',
    title: '8 Ball Billiards Classic',
    description: '8-Ball Billiards is a free online pool game in our sports category ideal for one or two players. You can play solo against AI or challenge other players in two-player mode. The game is easy for anyone to play, so pick up a cue and line up your first shot.',
    category: 'sports',
    thumbnail: 'https://imgs.crazygames.com/8-ball-billiards-classic_16x9/20231108025958/8-ball-billiards-classic_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/8-ball-billiards-classic/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: '8 Ball Billiards Classic is much like the classic in-person game -- your goal is to pocket all your balls (either solids or stripes) and sink the 8-ball to win. Use your mouse to aim the cue stick and adjust the power of your shot. Click and drag the cue stick back to set your shot’s power, then release it to strike the cue ball. This is a 2-player game, so carefully plan each shot to outmaneuver whoever you\'re playing with and clear the table before they do!',
    controls: "Move your mouse to aim \n"+
    "Drag the left mouse button backward to set power and release it to shoot",
    features:"Easy and intuitive controls\n" +
        "Play against the computer or a friend\n" +
        "Keep track of your stats\n" +
        "Smooth graphics and animations\n" +
        "Save your in-game progress to your CrazyGames account"
  },
  {
    id: '6',
    title: 'Basketball Superstars',
    description: 'Basketball Superstars is a dynamic basketball experience where you create and train your ultimate player. Customize your gear, enhance your skills, and face intense rivals in fast-paced matches. Whether you are outsmarting opponents or perfecting your strategy, each game delivers action and excitement as you strive to dominate the court and showcase your prowess.',
    category: 'sports',
    thumbnail: 'https://imgs.crazygames.com/basketball-superstars_16x9/20250117063641/basketball-superstars_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/basketball-superstars/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Basketball Stars is a fast-paced, arcade-style basketball game where you compete in one-on-one matches. Use the Arrow Keys to move around the court and dribble past your opponent. Press and hold the Spacebar to shoot, releasing it at the right moment for a perfect shot. If you\'re close to the hoop, pressing Spacebar will let you perform a slam dunk. On defense, you can steal the ball by getting close to your opponent and tapping Spacebar when they’re dribbling. Time your jumps carefully to block incoming shots.\n' +
        '\n' +
        'Aggressive play is key in Basketball Stars! When your opponent is on offense, stay close and look for the perfect moment to steal the ball. Time your movements carefully—when they’re dribbling, tap Spacebar to snatch it away. If they go for a shot, jump at the right moment to block it.\n' +
        '\n' +
        'Once you have possession, don’t hesitate—drive toward the hoop and take your shot. Whether you’re aiming for a long-range jumper or a slam dunk, act fast and keep the pressure on. Quick decisions and relentless attacks will keep your opponent on their toes and give you the edge in every match!\n' +
        '\n' +
        'As you play, you’ll earn coins scattered around the court and receive rewards for winning matches. You can claim free daily stars and upgrade your coins, stars, and tickets to enhance your gameplay. Special packs are available for purchase, offering different combinations of tickets, stars, and coins.\n' +
        '\n' +
        'Packs include:\n' +
        '\n' +
        'Super Pack 1: 1 ticket, 3 stars, 2,000 coins\n' +
        'Super Pack 2 (Most Popular): 1 ticket, 8 stars, 7,500 coins\n' +
        'Super Pack 3 (Biggest Boost): 1 ticket, 20 stars, 15,000 coins\n' +
        'Customization is a key part of the experience, allowing you to change your basketball outfit and modify your character’s appearance. Your performance is graded based on defense, shooting, speed, and dunking, so strategize your playstyle to dominate the court!',
    controls: "Move = Use the Arrow Keys to dribble and navigate around the court."+
    "Shoot = Press and hold the Spacebar, then release it at just the right moment to score." +
        "Dunk = Get close to the hoop and press the Spacebar to slam it home with style!" +
    "Steal = Get close to your opponent and tap the Spacebar to steal the ball." +
    "Block = Tap the Spacebar at just the right time to block your opponent’s shot." ,
    features:""
  },
  {
    id: '7',
    title: 'Foot Battle Ball',
    description: 'Foot Battle Ball is a strategic soccer challenge where you face up to seven defenders at once. With limited kicks per round, every move counts. Outsmart your opponents with precision and quick reflexes to secure victory. Featuring a fresh twist on classic football, this game offers intuitive one-finger gameplay and fast-paced action. Can you outplay them all?',
    category: 'sports',
    thumbnail: 'https://imgs.crazygames.com/foot-battle-ball_16x9/20250304074105/foot-battle-ball_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/foot-battle-ball/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Foot Battle Ball is a strategic soccer challenge where you face up to seven defenders at once. With limited kicks per round, every move counts. Outsmart your opponents with precision and quick reflexes to secure victory. Featuring a fresh twist on classic football, this game offers intuitive one-finger gameplay and fast-paced action. Can you outplay them all?',
    controls: "Tap and hold to reach the ball"+
    "Drag to aim and prepare your shot",
    features:""
  },
  {
    id: '8',
    title: 'Hotfoot Baseball',
    description: 'Hotfoot Baseball is a lively sports game featuring cartoony players and easy one-click controls. Swing, run, and score as you make quick decisions to outplay your opponents. Choose your favorite baseball nation and aim for the championship. With simplified rules and fast-paced action, this game brings the thrill of baseball to everyone!',
    category: 'sports',
    thumbnail: 'https://imgs.crazygames.com/hotfoot-baseball_16x9/20250205060321/hotfoot-baseball_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/hotfoot-baseball/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Hotfoot Baseball is a lively sports game featuring cartoony players and easy one-click controls. Swing, run, and score as you make quick decisions to outplay your opponents. Choose your favorite baseball nation and aim for the championship. With simplified rules and fast-paced action, this game brings the thrill of baseball to everyone!',
    controls: "Use the left mouse button to swing the bat."+
    "When your player reaches the base, click the player again to run to the next base.",
    features:""
  },
  {
    id: '9',
    title: 'Castle Craft',
    description: 'Castle Craft is a mystical adventure puzzle game where you merge resources while looking for Fiona\'s missing husband, Michael, all the while uncovering plenty of mysteries along the way. Begin in a fog-covered land, using ancient keys to explore hidden realms and trace the path of your lost family through different eras. Discover mysterious lands and piece together an enchanting legacy.',
    category: 'adventure',
    thumbnail: 'https://imgs.crazygames.com/castle-craft_16x9/20250203045450/castle-craft_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/castle-craft/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Step into the wonderous world of Castle Craft, where you play as farmer Fiona, determined on her heartfelt mission to reunite with her husband after a mysterious separation. Your adventure begins in a simple garden, where you combine garden beds and plants to breathe new life into the land—this is the merge element of the game. As you cultivate your wheat fields, you will harvest crops to trade for mystical keys that dispel the fog, revealing hidden territories and secrets waiting to be uncovered.\n' +
        '\n' +
        'As Fiona restores the land, her journey takes her toward new clues about her husband Michael’s whereabouts, such as his misplaced headphones, and she encounters friendly helpers along the way. Among them is Aiden, a kind woodsman who helps her clear obstacles like a stubborn tree stump. Together, Fiona and Aiden gather timber and merge logs to create essential tools and craft materials, unlocking treasure chests filled with valuable rewards to continue on her quest.\n' +
        '\n' +
        'Every decision you make shapes Fiona’s path, allowing her to rebuild and expand her world. What begins as a small garden evolves into a thriving medieval kingdom, complete with bustling marketplaces and grand castles. As you progress, the adventure deepens, introducing new lands teeming with hidden treasures, mysterious puzzles, and historical figures who assist in unraveling the mysteries of time and family.\n' +
        '\n' +
        'To embark on this journey, start by merging three wheat sprouts to cultivate a full wheat crop, then continue merging similar items to develop the garden further. Harvest the wheat to trade for keys that unlock new areas, dispelling the fog and revealing untapped potential. Treasure chests, once opened, offer unique items and heroes to aid Fiona in reclaiming and revitalizing the land. Each merge brings you closer to tracing your family’s footsteps through history and unraveling the secrets of the past.',
    controls: "Drag the left mouse button to merge items.",
    features:""
  },
  {
    id: '10',
    title: 'Obby: Dumb or Genius IQ Test',
    description: 'Obby: Dumb or Genius IQ Test is a game where intelligence is everything! Boost your IQ by completing mini-games, taking on challenges, and battling in PvP duels. Collect IQ points from the map, win games for extra rewards, and try your luck on the wheel of fortune for bonus IQ! Compete against other players, earn cups, and exchange them for pets. The higher your IQ, the better your status. Climb the leaderboard and prove you’re the smartest player in the game!',
    category: 'adventure',
    thumbnail: 'https://imgs.crazygames.com/obby-dumb-or-genius-iq-test_16x9/20250303073714/obby-dumb-or-genius-iq-test_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/obby-dumb-or-genius-iq-test/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Explore the world of geniuses, participate in mini-games, and improve your IQ. Use cups to unlock new pets! Carefully study the game world. There are many surprises and unique rewards hidden throughout.',
    controls: "PC Controls \n"+
    "WASD = move \n"+
    " Space = jump \n"+
    " V = pets menu \n"+
    "C = tasks menu \n"+
    "P = settings \n"+
    "Tab = show / hide mouse cursor \n"+
        "Left-click = interact with in-game buttons / play the mini-games \n"+
        "Mobile Controls \n"+
    "Virtual joystick = move \n"+
    "Up button = jump \n",
    features:""
  },
  {
    id: '11',
    title: 'Stronghold Dude',
    description: 'Stronghold Dude is a strategy game where you build your medieval city and shape your empire\'s destiny. Face thrilling battles, weave through tales of knights and princesses, and conquer legendary dragons. With survival, tactics, and planning at its core, this adventure invites you to master the art of conquest in a world of magic and epic challenges.',
    category: 'adventure',
    thumbnail: 'https://imgs.crazygames.com/stronghold-dude_16x9/20250328021221/stronghold-dude_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/stronghold-dude/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Stronghold Dude is a strategy game where you build your medieval city and shape your empire\'s destiny. Face thrilling battles, weave through tales of knights and princesses, and conquer legendary dragons. With survival, tactics, and planning at its core, this adventure invites you to master the art of conquest in a world of magic and epic challenges.',
    controls: "Use the left mouse button or WASD or arrow keys to play.",
    features:""
  },
  {
    id: '12',
    title: 'Heroes Assemble',
    description: 'Heroes Assemble is a strategy-packed adventure where you unite legendary heroes across eras. Craft unique strategies by pairing them with adorable, powerful pets. Dive into unpredictable dungeons with Rogue-like elements for endless surprises. Challenge yourself with thrilling modes like boss battles, arenas, alliances, and more. Your choices shape every epic moment!',
    category: 'adventure',
    thumbnail: 'https://imgs.crazygames.com/heroes-assemble_16x9/20250313190823/heroes-assemble_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://games.crazygames.com/en_US/heroes-assemble/index.html?v=1.327',
    plays: 12000000,
    likes: 2200,
    instructions: 'Main Task\n' +
        '\n' +
        'Players need to collect heroes and pets, build a powerful team, challenge levels, explore dungeons, participate in competitions and guild activities, battle or cooperate with other players, acquire resources and surprise rewards, and continuously improve their strength.\n' +
        'Use strategy and resource management to complete various tasks and adventures in the game, ultimately becoming the strongest!',
    controls: "Use the left mouse button to play.\n" ,
    features:""
  },
  {
    id: "13",
    title: "Stickman Clash",
    description: "Stickman Clash is a thrilling action battle game where you battle as stickman warriors armed with an array of exciting weapons. Engage in fast-paced combat, outsmart opponents, and showcase your skills in dynamic arenas. The game\'s captivating action and challenging mechanics keep you hooked as you strive to become the ultimate stickman champion!",
    category: "action",
    thumbnail: "https://imgs.crazygames.com/stickman-clash_16x9/20250221023221/stickman-clash_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/stickman-clash/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "Stickman Clash combines fun, chaos, and unpredictable physics, making every battle a unique experience! Stand out in battle by customizing your stickman! Choose your character\'s colors, heads, and weapons to reflect your unique style. \n "+
      "Choose from an arsenal, including boxing gloves, ice cream, boots, daggers, guitars, katanas, bombs, portal guns, and scythes. Each weapon adds a unique twist to your strategy. \n"+
       "Battle in stunning environments like a sea surrounded by a giant octopus. But beware—the creatures are the least of your worries as chaos unfolds!\n"+
"Stickman dynamics make every move unpredictable, and your movement is limited by the WASD keys. Your character flops around, making precise targeting difficult. However, constant movement can work in your favor—it’s harder to hit a moving target and easier to surprise your opponent with unexpected strikes.\n"+
"Stickman Clash is designed for one or two players, and three- and four-player modes are planned for even more chaotic fun!\n"+
"Survival mode \n"+
"Work together to fend off waves of monsters and defend your base. Use bombs strategically to clear crowds without harming teammates.\n"+
" Boss Fights\n"+
"These epic battles test your skills. The pickaxe-wielding boss is especially challenging—dodge its attacks and counter with well-timed bombs. Teamwork and precision are your best allies here.\n"+
" Game Tips\n"+
"Stay agile: The more you move, the harder you are to hit.\n"+
"Use the environment: Maps come with unique challenges and opportunities.\n"+
" Master timing: Especially in boss fights, precision and teamwork are key.\n"+
"Experiment: Try different weapons and strategies to discover what works best for you.",
    controls: "Player 1 \n"+
        "W = jump\n"+
    "A = backward\n"+
    "S = shield\n"+
    "D = forward\n"+
    "Player 2\n"+
    "Arrow up = jump\n"+
    "Arrow left = forward\n"+
    "Arrow down = shield\n"+
    "Arrow right = backward\n"+
    "Player 3\n"+
    "I = jump\n"+
    "J = forward\n"+
    "K = shield\n"+
    "L = backward",
    features:""
  },
  {
    id: "14",
    title: "Survival Rush!",
    description: "Survival Rush is a thrilling multiplayer survival action game packed with dynamic mini-games that test your skills, strategy, and reflexes. Compete in high-stakes challenges, outwit opponents, and embrace the fast-paced excitement. Whether teaming up with friends or meeting new rivals, every round is an electrifying mix of fun and intensity. Do you have what it takes to emerge victorious?",
    category: "action",
    thumbnail: "https://imgs.crazygames.com/survival-rush_16x9/20250304180509/survival-rush_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/survival-rush/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "You start the game of Survival Rush by entering a room name if you know of one, and if not leave it blank to be placed in a random adventure. Each room throws you into a completely different challenge, testing your speed, strategy, and survival instincts. The challenges are a bit surreal and sometimes downright eerie.\n"+
        "One challenge drops you into a deadly game of red light, green light one two three. A towering doll watches your every move, ready to take you down the moment you slip up. Run when the light is green, freeze when it turns red, and don’t even think about moving at the wrong time.\n"+
        "Another challenge sends you leaping across floating blocks, but not all of them are stable. Some will hold your weight—others will send you plunging into the abyss. Step carefully, time your jumps, and don’t trust every platform you see.\n"+
        "In the most chaotic rooms, you’ll find yourself on the run from relentless pursuers, ready to pummel you into oblivion. Swing your baseball bat to fight back, keep moving, and always watch your back—because in Survival Rush, danger never takes a break.\n"+
        "Stay sharp, follow the rules, and don’t let distractions throw you off. Your fellow players might cheer you on, but only the toughest make it to the end. Think you’ve got what it takes? Prove it!\n"+
        "Want exclusive skins, expert tips, and more? Join the Survival Rush Discord server.",
    controls: "Right-click / F = use a power-up \n "+
        "T = dance \n "+
        "WASD / arrow keys = move",
    features:""
  },
  {
    id: "15",
    title: "Mahjongg Solitaire",
    description: "Mahjongg Solitaire is an online mahjong puzzle board game featuring traditional rules and modern visuals. There are no shuffles, and the game is timed, but the game's pace is relaxed.",
    category: "puzzle",
    thumbnail: "https://imgs.crazygames.com/games/mahjongg-solitaire/cover_16x9-1707829450935.png?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/mahjongg-solitaire/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "Spot the patterns\n "+
        "Mahjong is a tricky puzzle game. There are so many tiles, many of which look the same but feature slight differences. Along with the need to spot these patterns, you can’t move any pieces with both sides blocked. The left or right side needs to be accessible, at least.\n "+
    "Use hints when you’re stuck\n "+
    "Mahjongg Solitaire features hints if you get stuck, but unlike some other mahjong games, it does not have a shuffle feature. The games are also timed, meaning there is some urgency to how many tiles you can match.\n "+
    "When the game ends, you’ll get a score for the tiles you matched and a bonus for how far you got in the game before your time ran out.",
    controls: "Use the left mouse button to interact.",
    features:""
  },
  {
    id: "16",
    title: "Nuts Puzzle: Sort By Color",
    description: "Nuts Puzzle: Sort by Color is a classic puzzle game where you sort various colored nuts onto screws until they are all the same color. As you progress through the levels, the puzzles get trickier, requiring you to plan your moves carefully and think several steps ahead. With each successful sort, you'll feel a satisfying sense of accomplishment. Get ready to test your strategy and problem-solving skills as you work your way through increasingly complex and colorful challenges!",
    category: "puzzle",
    thumbnail: "https://imgs.crazygames.com/nuts-puzzle-sort-by-color_16x9/20241104143423/nuts-puzzle-sort-by-color_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/nuts-puzzle-sort-by-color/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "Organize the nuts\n "+
        "To play Nuts Puzzle: Sort by Color, start by clicking on the nut you want to move, then select the screw where you want to place it. You can only place a nut on another screw if it’s either empty or if the top nut on that screw matches the color of the nut you’re moving. This simple rule sets the stage for the puzzle-solving challenge, as you’ll need to strategically plan your moves to ensure each screw ends up with nuts of a single color.\n "+
        "As you progress, the game introduces more nuts and a wider range of colors, making the puzzles increasingly complex. New challenges, such as hard mode levels, add an extra layer of difficulty by hiding the color of nuts until you move a piece from above them. These added twists will test your strategic thinking and problem-solving skills as you work through each level, striving to complete the puzzle with fewer moves and greater efficiency.\n "+
        "Use helpers\n "+
        "It’s at this point that you may need to use the undo, reset, and extra screw options, which are available on every level. However, you can only win extra screws from chests and at the winner wheel. Clicking the screw icon adds an extra screw to free up more space. The undo button has a finite number of uses, but these are restored on each level. You can use the reset button to start the level over from scratch if you have no choice.",
    controls: "Use the left mouse button to select a stack and move the nut.",
    features:"Play increasingly tricky levels\n" +
        "Sort colors neatly onto screws\n" +
        "Earn rewards for puzzle completion\n" +
        "Use helpers when you’re stuck"
  },
  {
    id: "17",
    title: "BlockBuster Puzzle",
    description: "BlockBuster Puzzle is a Tetris-like game where you match colorful blocks so they disappear from the game screen. Unlock new realms and challenges as you progress, enjoying vibrant graphics and immersive gameplay. Prove your skills as a true puzzle master with every level you advance.",
    category: "puzzle",
    thumbnail: "https://imgs.crazygames.com/blockbuster-puzzle_16x9/20241118032546/blockbuster-puzzle_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/blockbuster-puzzle/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "There are a few tutorials throughout the game to help guide you with controls and strategy, but this may not be necessary as the game is fairly straightforward. You get a series of blocks in various geometric shapes placed on the side of the game screen. Click on the one you want to move and carry it to the game board. \n "+
        "Each geometric shape may or may not fit together on the main game board - this is where your strategic eye comes in. Place each geometric shape on the board in a position to get one full line of gapless blocks. When you do this, that entire line will disappear. \n "+
        "Various rounds will allow you to collect more points, as some blocks are bedazzled with jewels worth more. You may have prompted a few moves, like clearing the board or undoing your last move. Take the suggestion, as it usually gets you out of a jam.",
    controls: "Use the left mouse button to interact with the in-game UI\n" +
        "Drag the left mouse button to put the blocks into the grid",
    features:""
  },
  {
    id: "18",
    title: "Super Star Car",
    description: "Super Star Car is a driving Formula 1 racing game that puts you in the driver’s seat of high-speed action with a vast selection of cars and iconic circuits. Start your career as a professional racer and climb the ranks through thrilling campaign races, upgrading your car to enhance performance along the way. With simple controls that let you navigate sharp corners effortlessly, stunning 3D graphics, realistic engine sounds, and customizable camera views, the game offers an immersive and adrenaline-packed experience.",
    category: "racing",
    thumbnail: "https://imgs.crazygames.com/super-star-car_16x9/20250113072430/super-star-car_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/super-star-car/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "Super Star Car is all about speed, precision, and strategy as you race through an exciting career mode. Every time you finish a race in this mode, you’ll earn stars and money, helping you climb the leaderboard and unlock new opportunities. Use your winnings to upgrade your car strategically, boosting its performance and ensuring that every race feels fresh and thrilling. \n"+
    "The game features several tracks, each with its own unique challenges. You can select from iconic maps such as Arcport Circuit, Yafield Park, Riverside Circuit, and many more. Each track will test your skills, particularly when it comes to navigating those sharp curves. As expected, corners are the most challenging part of the game—you’ll need to hold your steering steady to maintain control. If you find yourself off the track, simply press the space bar to reset and get back into the action.\n"+
    "To aid your racing strategy, there’s a mini-map in the bottom-left corner of your screen, giving you a sneak peek at upcoming turns and obstacles so you can prepare ahead. Keep an eye on your speedometer, located at the bottom-right corner, to adjust your pace and avoid spinning out on tight bends.\n"+
    "One of the standout features of Super Star Car is its multiple view modes. You can race from a bird' s-eye view, chase your car from behind, or fully immerse yourself in the action by switching to the driver’s seat view. This versatility lets you experience the game from different perspectives, adding to its excitement and variety.\n"+
    "The heart of the game lies in its career mode, where every win brings you closer to the coveted championship trophy. It’s not just about crossing the finish line first; it’s also about improving your car with carefully chosen upgrades. A better-performing car will help you dominate tougher races as you progress through the campaign.\n"+
    "Get ready to tackle adrenaline-pumping tracks and outmaneuver your rivals.",
    controls: "W or up arrow to accelerate \n"+
        "AD or left and right arrow keys to steer\n"+
        "C to change camera view\n"+
        "Spacebar to respawn position",
    features:"Fully featured career mode\n" +
        "Several tracks to race on\n" +
        "Profile with detailed stats\n" +
        "In-car and 3rd-person views\n" +
        "Detailed 3D graphics"
  },
  {
    id: "19",
    title: "Street Racer 2",
    description: "Street Racer 2 is a driving drag-racing game where your goal is to win races, upgrade, and buy new cars. This game offers an exhilarating mix of play modes, including drag racing, off-road challenges, and arcade-style fun. Each mode delivers a distinct experience, whether chasing high-speed thrills, conquering rugged terrain, or enjoying adrenaline-packed track action.",
    category: "racing",
    thumbnail: "https://imgs.crazygames.com/street-racer-2_16x9/20250128090821/street-racer-2_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/street-racer-2/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "In Street Car Racer 2, players are tasked with selecting a car from the auto salon—the starting vehicle is the Model ToyGR86, Class A, boasting 295 horsepower, a 2.4L engine, six gears, and a weight of 1.93 tons. Once a car is chosen, it’s time to hit the streets and start racing!\n" +
    "Open the map to select a race, beginning with a 402-meter sprint. Players will need to choose a contender for each race. Be mindful of opponents—without upgrades, it's best to pick a rival of similar strength.\n" +
    "One of the game’s standout features is the variety of over 80 unique racing locations, each filled with its own set of challenges that test driving skills. This diversity ensures that every race is a fresh experience.\n" +
    "Customization plays a significant role in this game—performance upgrades allow players to fine-tune their cars, improving speed, handling, and overall power. With a wide range of sports cars to unlock, players can craft their ideal racing machine and dominate the competition.\n" +
    "In the race itself, it's crucial to shift gears at the right time and avoid overheating the engine to prevent losing speed or crashing. Players can choose between automatic or manual mode to suit their preferred playstyle.\n" +
    "With these features combined, Street Car Racer 2 provides an exhilarating, customizable racing experience full of thrilling challenges and endless possibilities.",
    controls: "A / left arrow key = reverse \n "+
    "D / right arrow key = accelerate \n "+
    "W / up arrow key = gear up \n "+
    "S / down arrow key = gear down \n "+
    "R = restart \n "+
    "P = pause \n "+
    "Shift = turbo",
    features:""
  },
  {
    id: "20",
    title: "Racing in City",
    description: "Racing in City is a driving game where you dodge traffic and complete challenges. Navigate through city traffic on a range of tracks while sitting with a view from behind the wheel. Participate in a long and illustrious driving career. Earn points and cash them in for cars and upgrades.",
    category: "racing",
    thumbnail: "https://imgs.crazygames.com/racing-in-city_16x9/20231006103935/racing-in-city_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    url: "https://games.crazygames.com/en_US/racing-in-city/index.html?v=1.327",
    plays: 15000000,
    likes: 250000,
    instructions: "Start your career \n"+
    "It’s time to rev the engine of your career and take off through a long series of career-defining challenges. Career mode takes you on a journey to new locations and greater challenges that test your skills behind the wheel and reward you more over time. \n"+
    "Dodge traffic \n"+
    "Your ability to earn money is limitless. Start a one-way or two-way traffic game and drive for as long as you can. Take risky gambles like driving close to other cars and racing down the wrong side of the road at high speeds to earn bonus points. You can buy new roads to drive on with the money you earn. \n"+
    "Buy and upgrade cars \n"+
    "There is an extensive range of customizations for your cars. Not only can you tune up the engine and all of the car’s internal workings, but you can also add spoilers, brake calipers and other cosmetic features to make your car look amazing.",
    controls: "Use WASD or arrow keys to control the car.",
    features:""
  },
]