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
  { id: 'action', name: 'Action', icon: 'https://imgs.crazygames.com/icon/Action.svg' },
  { id: 'puzzle', name: 'Puzzle', icon: 'https://imgs.crazygames.com/icon/Puzzle.svg' },
  { id: 'racing', name: 'Racing', icon: 'https://imgs.crazygames.com/icon/Action.svg' },
  { id: 'sports', name: 'Sports', icon: 'https://imgs.crazygames.com/icon/Sports.svg' },
  { id: 'adventure', name: 'Adventure', icon: 'https://imgs.crazygames.com/icon/Adventure.svg' }
]

export const games = [
  {
    id: '1',
    title: 'War Groups',
    description: 'Roll down an endless slope, avoiding obstacles and collecting points in this fast-paced 3D game.',
    category: 'action',
    thumbnail: 'https://imgs.crazygames.com/war-groups_16x9/20250225042244/war-groups_16x9-cover?metadata=none&quality=85&width=273&fit=crop',
    url: 'https://www.crazygames.com/game/slope',
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
    url: 'https://8-ball-billiards-classic.game-files.crazygames.com/8-ball-billiards-classic/10/index.html',
    plays: 12000000,
    likes: 2200,
    instructions: '8 Ball Billiards Classic is much like the classic in-person game -- your goal is to pocket all your balls (either solids or stripes) and sink the 8-ball to win. Use your mouse to aim the cue stick and adjust the power of your shot. Click and drag the cue stick back to set your shot’s power, then release it to strike the cue ball. This is a 2-player game, so carefully plan each shot to outmaneuver whoever you\'re playing with and clear the table before they do!',
    controls: "Move your mouse to aim\n" +
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
]