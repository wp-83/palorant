const maps = [
    {
        name: 'fireball',
        image: [
            '../../ASSETS/image/maps/01 - fireball/1.jpg',
            '../../ASSETS/image/maps/01 - fireball/2.jpg',
            '../../ASSETS/image/maps/01 - fireball/3.jpg',
            '../../ASSETS/image/maps/01 - fireball/4.jpg',
            '../../ASSETS/image/maps/01 - fireball/5.jpg',
            '../../ASSETS/image/maps/01 - fireball/6.jpg'
        ],
        description: "FIREBALL is the most popular map using by players. This map has two sides and very complex for beginner. Then, it also has many rooms with available place for hiding.",
        video: '../../ASSETS/video/maps/01-fireball.mp4'
    },
    {
        name: 'cloudy',
        image: [
            '../../ASSETS/image/maps/02 - cloudy/1.jpg',
            '../../ASSETS/image/maps/02 - cloudy/2.jpg',
            '../../ASSETS/image/maps/02 - cloudy/3.jpg',
            '../../ASSETS/image/maps/02 - cloudy/4.jpg',
            '../../ASSETS/image/maps/02 - cloudy/5.jpg',
            '../../ASSETS/image/maps/02 - cloudy/6.jpg'
        ],
        description: "CLOUDY is the simplest map in this game. This map has few place to hide from enemies and many open-source place. This map is suitable for player that likes war from starting the game.",
        video: '../../ASSETS/video/maps/02-cloudy.mp4'
    },
    {
        name: 'snowlake',
        image: [
            '../../ASSETS/image/maps/03 - snowlake/1.jpg',
            '../../ASSETS/image/maps/03 - snowlake/2.jpg',
            '../../ASSETS/image/maps/03 - snowlake/3.jpg',
            '../../ASSETS/image/maps/03 - snowlake/4.jpg',
            '../../ASSETS/image/maps/03 - snowlake/5.jpg',
            '../../ASSETS/image/maps/03 - snowlake/6.jpg'
        ],
        description: "SNOWLAKE  is  map  that  everywhere  is  fullfill  with  snow. Although it looks simple, this map has many hidden traps that can kill everyone who meets them.",
        video: '../../ASSETS/video/maps/03-snowlake.mp4'
    },
    {
        name: 'last-urban',
        image: [
            '../../ASSETS/image/maps/04 - last-urban/1.jpg',
            '../../ASSETS/image/maps/04 - last-urban/2.jpg',
            '../../ASSETS/image/maps/04 - last-urban/3.jpg',
            '../../ASSETS/image/maps/04 - last-urban/4.jpg',
            '../../ASSETS/image/maps/04 - last-urban/5.jpg',
            '../../ASSETS/image/maps/04 - last-urban/6.jpg'
        ],
        description: "LAST-URBAN is a good map for beginner. It is not too much complicated while playing. There are only two sides and few of buildings. It also has enough place for hiding.",
        video: '../../ASSETS/video/maps/04-last-urban.mp4'
    },
    {
        name: 'forest',
        image: [
            '../../ASSETS/image/maps/05 - forest/1.jpg',
            '../../ASSETS/image/maps/05 - forest/2.jpeg',
            '../../ASSETS/image/maps/05 - forest/3.jpeg',
            '../../ASSETS/image/maps/05 - forest/4.jpeg',
            '../../ASSETS/image/maps/05 - forest/5.jpeg',
            '../../ASSETS/image/maps/05 - forest/6.jpeg'
        ],
        description: "FOREST is the map which is built for pro player. There are three sides in this map. It is FIREBALL and SNOWLAKE as a single map. It will be difficult for player that doesn't have enough skill and tactics.",
        video: '../../ASSETS/video/maps/05-forest.mp4'
    }
];

const roles = [
    {
        name: 'connector',
        image: '../../ASSETS/image/roles/connector.png'
    },
    {
        name: 'executor',
        image: '../../ASSETS/image/roles/executor.png'
    },
    {
        name: 'healer',
        image: '../../ASSETS/image/roles/healer.png'
    },
    {
        name: 'initiator',
        image: '../../ASSETS/image/roles/initiator.png'
    }
];

const agents = [
    {
        name: 'alexa',
        image: '../../ASSETS/image/agents/alexa.png',
        role: roles[1],
        favMap: maps[0],
        description: "As her role, executor, ALEXA always be a leader for her team while playing. Her ability to fight with head-shot is incredible and unique."
    },
    {
        name: 'aroha',
        image: '../../ASSETS/image/agents/aroha.png',
        role: roles[1],
        favMap: maps[2],
        description: "AROHA is a boy with special spy ability. He is able to know where all the enemies hide. He is also a monster killer in every match."
    },
    {
        name: 'browlie',
        image: '../../ASSETS/image/agents/browlie.png',
        role: roles[3],
        favMap: maps[3],
        description: "BROWLIE always dominates in every match. The skill to construct tactics for winning the match is incredible. He is a real initiator."
    },
    {
        name: 'jackie',
        image: '../../ASSETS/image/agents/jackie.png',
        role: roles[0],
        favMap: maps[4],
        description: "As a wanderer, JACKIE always be a communicator in a team while playing. He always ensures his team as a good team on helping each others for winning the game."
    },
    {
        name: 'jetglue',
        image: '../../ASSETS/image/agents/jetglue.png',
        role: roles[2],
        favMap: maps[2],
        description: "JETGLUE always be a nice healer in a team. She always ensures every people in her team are still alive during the match. She is also a nice shooter in specific distance."
    },
    {
        name: 'lanavo',
        image: '../../ASSETS/image/agents/lanavo.png',
        role: roles[1],
        favMap: maps[0],
        description: "LANAVO is a cruel girl while playing. She always kills someone who she met. No one can escape from her before dying in front of her."
    },
    {
        name: 'ramli',
        image: '../../ASSETS/image/agents/ramli.png',
        role: roles[2],
        favMap: maps[3],
        description: "'A nice man', that's a quote which can describe him. RAMLI is the best agent for healer. He can help other agents who need help fast. He is also a killer man."
    },
    {
        name: 'rateno',
        image: '../../ASSETS/image/agents/rateno.png',
        role: roles[0],
        favMap: maps[1],
        description: "RATENO is a real connector agent. Every team that has him always be the winner of the match. A good communication and head of the team-work are really suitable to him."
    },
    {
        name: 'roger',
        image: '../../ASSETS/image/agents/roger.png',
        role: roles[3],
        favMap: maps[4],
        description: "ROGER is a man with a good strategic while playing. He can predict where the enemies located. He is a real “fortune-teller” in this game. "
    }
];

const newsCategories = [
    {
        label: "feature updates",
        textColor: "#000000",
        backgroundColor: "#5DB996"
    },
    {
        label: "events",
        textColor: "#ffffff",
        backgroundColor: "#3572EF"
    },
    {
        label: "socials",
        textColor: "#000000",
        backgroundColor: "#FBF6E9"
    },
    {
        label: "announcements",
        textColor: "#000000",
        backgroundColor: "#A7E6FF"
    }
];

// date-format: mm.dd.yyy
const news = [
    {
        headline: "JUST 30 SECONDS FOR KILLING 4 ENEMIES!",
        category: newsCategories[2],
        desc: "SENzekken killed four enemies in the first 30 seconds of the match. He did it on his live streaming last night.",
        date: '03.27.2025',
        image: '../../ASSETS/image/news/01.jpg'
    },
    {
        headline: "PENDANTS AS THE NEW STRENGTH",
        category: newsCategories[0],
        desc: "Pendant will give extra abilities to agents according to type of pendant. It only can be accessed during a match.",
        date: '03.01.2025',
        image: '../../ASSETS/image/news/02.jpg'
    },
    {
        headline: "WINNER OF THE SEASON IS COMING!",
        category: newsCategories[3],
        desc: "'killmons' squad totaly won the tournament of this season. The tactic while playing is so marvelous.",
        date: '02.17.2025',
        image: '../../ASSETS/image/news/03.jpg'
    },
    {
        headline: "NEW SEASON WILL COME SOON",
        category: newsCategories[3],
        desc: "This season will end soon and new season will come. New season will start in the beginning of April.",
        date: '01.31.2025',
        image: '../../ASSETS/image/news/04.jpg'
    },
    {
        headline: "NEW SCOPE IS AVAILABLE NOW!",
        category: newsCategories[0],
        desc: "Start from today, PALORANT has release '8x scope'. This scope makes the sight more clearly and details.",
        date: '03.27.2025',
        image: '../../ASSETS/image/news/05.jpg'
    },
    {
        headline: "LET'S JOIN OUR TOURNAMENT!",
        category: newsCategories[3],
        desc: "2025 is coming. That's the time for the tournament of this season. The registration still opens 'till January, 20 2025.",
        date: '01.01.2025',
        image: '../../ASSETS/image/news/06.jpg'
    },
    {
        headline: "MEET AND GREET WITH CARIN ALEXI!",
        category: newsCategories[1],
        desc: "Let's meet Carin Alexi, PALORANT pro player, on January 10th, 2025! You will get special experience with her.",
        date: '12.02.2024',
        image: '../../ASSETS/image/news/07.jpg'
    },
    {
        headline: "UPDATE IS STILL ON PROGRESS",
        category: newsCategories[3],
        desc: "Dear PALORANT's player, we apologize that our developer team is still processing the graphic updates for the guns.",
        date: '11.20.2024',
        image: '../../ASSETS/image/news/08.jpg'
    },
    {
        headline: "LET'S PLAY TOGETHER WITH PRO PLAYERS!",
        category: newsCategories[1],
        desc: "Don't miss the chance to play together with pro players of PALORANT! This event will be held on December, 05 2024.",
        date: '11.03.2024',
        image: '../../ASSETS/image/news/09.jpg'
    },
    {
        headline: "JETGLUE BECOMES STRONGER THAN USUAL!",
        category: newsCategories[0],
        desc: "PALORANT has added some new skills for Jetglue. Those skills will make her stronger than usual.",
        date: '10.05.2024',
        image: '../../ASSETS/image/news/10.jpg'
    },
    {
        headline: "PALORANT FOR A FULL DAY PLAYING!",
        category: newsCategories[2],
        desc: "Some gamers play PALORANT for 24 hours! That sounds weird, but it's fact! See it on their youtube channel.",
        date: '09.25.2024',
        image: '../../ASSETS/image/news/11.jpg'
    },
    {
        headline: "GLOVES WITH SPECIAL ABILITIES!",
        category: newsCategories[0],
        desc: "New item has released. These gloves have magic power to see footsteps of the nearest enemy clearly.",
        date: '09.10.2024',
        image: '../../ASSETS/image/news/12.jpg'
    },
];

const agentsBookIdx = [0, 2, 5, 7, 4];