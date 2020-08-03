const classes = [
  'Warlock',
  'Hunter',
  'Titan'
];

const armor = {
  0: [ //warlock
    [
      {
        type: 3,
        name: 'Tangled Web Bond',
        image: 'tangled-web-bond.jpg',
        description: '"In my company, the Ether flows." —The Spider',
        rune0: 1,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/4256272077'
      },
      {
        type: 3,
        name: 'Exodus Down Bond',
        image: 'exodus-down-bond.jpg',
        description: 'This Guardian armor was repurposed from old Exodus Black crew flight suits.',
        rune0: 1,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/874856664'
      },
      {
        type: 3,
        name: 'Reverie Dawn Bond',
        image: 'reverie-dawn-bond.jpg',
        description: '"Perhaps it was not the correct choice. But it was the right choice." —Yasmin Eld',
        rune0: 1,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/3602032567'
      },
      {
        type: 3,
        name: 'Opulent Scholar Bond',
        image: 'opulent-scholar-bond.jpg',
        description: '"I have foreseen the end of all things. The novenary, the Awoken Queen, the sad, strange little man on his rickety boat. They believe they\'ve seen the same. What they don\'t know will destroy them." —Emperor Calus',
        rune0: 1,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1250649843'
      },
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Gloves',
        image: 'tangled-web-gloves.jpg',
        description: '"The Kells are dead or mad. The era of Houses is over. So I came to the Shore." —Arrha, transl. from Eliksni',
        rune0: 4,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/2502004600'
      },
      {
        type: 2,
        name: 'Exodus Down Gloves',
        image: 'exodus-down-gloves.jpg',
        description: '"Captain, the orbit of 7066 Nessus is different from what Cosmodrome calculated." —Flight Officer Samantha Blaise',
        rune0: 4,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2029766091'
      },
      {
        type: 2,
        name: 'Reverie Dawn Gloves',
        image: 'reverie-dawn-gloves.jpg',
        description: '"For starlight was my mother, and my father was the dark." —Queen Mara Sov',
        rune0: 4,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/2761343386'
      },
      {
        type: 2,
        name: 'Opulent Scholar Gloves',
        image: 'opulent-scholar-gloves.jpg',
        description: '"I have foreseen the work that will bring this system together. I\'ll need your wisdom." —Emperor Calus',
        rune0: 4,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/3072788622'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Boots',
        image: 'tangled-web-boots.jpg',
        description: '"I was of kings. Then of exiles. Now I\'m here. The Shore is bad… but everywhere else is worse." —Brivi, transl. from Eliksni',
        rune0: 5,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/537272242'
      },
      {
        type: 2,
        name: 'Exodus Down Boots',
        image: 'exodus-down-boots.jpg',
        description: '"We might be stopping at Nessus after all. We just lost the starboard engine." —Chief Eng. Kaoru Zuykova',
        rune0: 5,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/3545981149'
      },
      {
        type: 2,
        name: 'Reverie Dawn Boots',
        image: 'reverie-dawn-boots.jpg',
        description: '"What has been awoken can slumber no more." —Techeun Kalli',
        rune0: 5,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/188778964'
      },
      {
        type: 2,
        name: 'Opulent Scholar Boots',
        image: 'opulent-scholar-boots.jpg',
        description: '"I have foreseen the apex of your heuristic potential. Should you wish it, this system shall collapse from the ideas you\'ve made into weapons. And make way for what\'s coming. O champion mine." —Emperor Calus',
        rune0: 5,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1285460104'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Hood',
        image: 'tangled-web-hood.jpg',
        description: '"I was at the Final Attempt. I saw a Guardian wield a gun that left molten gold in her wake. I ran and never looked back." —Avrok, transl. from Eliksni',
        rune0: 8,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/1664085089'
      },
      {
        type: 2,
        name: 'Exodus Down Hood',
        image: 'exodus-down-hood.jpg',
        description: '"I used some of my own code to program this armor! But if you die, it\'s your fault. Not mine." —Failsafe',
        rune0: 8,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2731698402'
      },
      {
        type: 2,
        name: 'Reverie Dawn Hood',
        image: 'reverie-dawn-hood.jpg',
        description: '"I\'ve learned not to be ashamed of the fear. It\'s to be expected, given what we are." —Pavel Nolg',
        rune0: 8,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/185695659'
      },
      {
        type: 2,
        name: 'Opulent Scholar Hood',
        image: 'opulent-scholar-hood.jpg',
        description: '"I have foreseen the victories that your wisdom shall win in my name. Over and over." —Emperor Calus',
        rune0: 8,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/831222279'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Robes',
        image: 'tangled-web-robes.jpg',
        description: '"Let them have the Great Machine. They deserve it." —Mithrax, transl. from Eliksni',
        rune0: 10,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/1034149520'
      },
      {
        type: 2,
        name: 'Exodus Down Robes',
        image: 'exodus-down-robes.jpg',
        description: '"Adjust course two degrees. It\'s a long way to Kepler-186, folks. We don\'t have time to tour Nessus." —Capt. Masoud Jacobson',
        rune0: 10,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2218838661'
      },
      {
        type: 2,
        name: 'Reverie Dawn Tabard',
        image: 'reverie-dawn-tabard.jpg',
        description: '"There is a place where we can remember who we are." —Imogen Rife',
        rune0: 10,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/2859583726'
      },
      {
        type: 2,
        name: 'Opulent Scholar Robes',
        image: 'opulent-scholar-robes.jpg',
        description: '"I have foreseen what must fall so the Empire may rise. Your mastery of knowledge apocryphal shall make true Cabal of us all." —Emperor Calus',
        rune0: 10,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/2026757026'
      }
    ]
  ],
  1: [ //hunter
    [
      {
        type: 3,
        name: 'Tangled Web Cloak',
        image: 'tangled-web-cloak.jpg',
        description: '"In my company, the Ether flows." —The Spider',
        rune0: 1,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/25091086'
      },
      {
        type: 3,
        name: 'Exodus Down Cloak',
        image: 'exodus-down-cloak.jpg',
        description: 'This Guardian armor was repurposed from old Exodus Black crew flight suits.',
        rune0: 1,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2252973221'
      },
      {
        type: 3,
        name: 'Reverie Dawn Cloak',
        image: 'reverie-dawn-cloak.jpg',
        description: '"Perhaps it was not the correct choice. But it was the right choice." —Yasmin Eld',
        rune0: 1,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/3306564654'
      },
      {
        type: 3,
        name: 'Opulent Stalker Cloak',
        image: 'opulent-stalker-cloak.jpg',
        description: '"I have foreseen the end of all things. The novenary, the Awoken Queen, the sad, strange little man on his rickety boat. They believe they\'ve seen the same. What they don\'t know will destroy them." —Emperor Calus',
        rune0: 1,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1135872734'
      },
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Grips',
        image: 'tangled-web-grips.jpg',
        description: '"The Kells are dead or mad. The era of Houses is over. So I came to the Shore." —Arrha, transl. from Eliksni',
        rune0: 4,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/3609169817'
      },
      {
        type: 2,
        name: 'Exodus Down Grips',
        image: 'exodus-down-grips.jpg',
        description: '"Captain, the orbit of 7066 Nessus is different from what Cosmodrome calculated." —Flight Officer Samantha Blaise',
        rune0: 4,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/3875829376'
      },
      {
        type: 2,
        name: 'Reverie Dawn Grasps',
        image: 'reverie-dawn-grasps.jpg',
        description: '"For starlight was my mother, and my father was the dark." —Queen Mara Sov',
        rune0: 4,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/1705856569'
      },
      {
        type: 2,
        name: 'Opulent Stalker Grips',
        image: 'opulent-stalker-grips.jpg',
        description: '"I have foreseen the work that will bring this system together. I\'ll need your wisdom." —Emperor Calus',
        rune0: 4,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1370039881'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Strides',
        image: 'tangled-web-strides.jpg',
        description: '"I was of kings. Then of exiles. Now I\'m here. The Shore is bad… but everywhere else is worse." —Brivi, transl. from Eliksni',
        rune0: 5,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/2206284939'
      },
      {
        type: 2,
        name: 'Exodus Down Strides',
        image: 'exodus-down-strides.jpg',
        description: '"We might be stopping at Nessus after all. We just lost the starboard engine." —Chief Eng. Kaoru Zuykova',
        rune0: 5,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2953649850'
      },
      {
        type: 2,
        name: 'Reverie Dawn Strides',
        image: 'reverie-dawn-strides.jpg',
        description: '"What has been awoken can slumber no more." —Techeun Kalli',
        rune0: 5,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/344548395'
      },
      {
        type: 2,
        name: 'Opulent Stalker Strides',
        image: 'opulent-stalker-strides.jpg',
        description: '"I have foreseen the apex of your heuristic potential. Should you wish it, this system shall collapse from the ideas you\'ve made into weapons. And make way for what\'s coming. O champion mine." —Emperor Calus',
        rune0: 5,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1661981723'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Mask',
        image: 'tangled-web-mask.jpg',
        description: '"I was at the Final Attempt. I saw a Guardian wield a gun that left molten gold in her wake. I ran and never looked back." —Avrok, transl. from Eliksni',
        rune0: 8,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/4261835528'
      },
      {
        type: 2,
        name: 'Exodus Down Mask',
        image: 'exodus-down-mask.jpg',
        description: '"I used some of my own code to program this armor! But if you die, it\'s your fault. Not mine." —Failsafe',
        rune0: 8,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2172333833'
      },
      {
        type: 2,
        name: 'Reverie Dawn Casque',
        image: 'reverie-dawn-casque.jpg',
        description: '"I\'ve learned not to be ashamed of the fear. It\'s to be expected, given what we are." —Pavel Nolg',
        rune0: 8,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/2824453288'
      },
      {
        type: 2,
        name: 'Opulent Stalker Mask',
        image: 'opulent-stalker-mask.jpg',
        description: '"I have foreseen the victories that your wisdom shall win in my name. Over and over." —Emperor Calus',
        rune0: 8,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/906236408'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Vest',
        image: 'tangled-web-vest.jpg',
        description: '"Let them have the Great Machine. They deserve it." —Mithrax, transl. from Eliksni',
        rune0: 10,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/2648545535'
      },
      {
        type: 2,
        name: 'Exodus Down Vest',
        image: 'exodus-down-vest.jpg',
        description: '"Adjust course two degrees. It\'s a long way to Kepler-186, folks. We don\'t have time to tour Nessus." —Capt. Masoud Jacobson',
        rune0: 10,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/126418248'
      },
      {
        type: 2,
        name: 'Reverie Dawn Hauberk',
        image: 'reverie-dawn-hauberk.jpg',
        description: '"There is a place where we can remember who we are." —Imogen Rife',
        rune0: 10,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/1593474975'
      },
      {
        type: 2,
        name: 'Opulent Stalker Vest',
        image: 'opulent-stalker-vest.jpg',
        description: '"I have foreseen what must fall so the Empire may rise. Your mastery of knowledge apocryphal shall make true Cabal of us all." —Emperor Calus',
        rune0: 10,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/3759327055'
      }
    ]
  ],
  2: [ //titan
    [
      {
        type: 3,
        name: 'Tangled Web Mark',
        image: 'tangled-web-mark.jpg',
        description: '"In my company, the Ether flows." —The Spider',
        rune0: 1,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/919186882'
      },
      {
        type: 3,
        name: 'Exodus Down Mark',
        image: 'exodus-down-mark.jpg',
        description: 'This Guardian armor was repurposed from old Exodus Black crew flight suits.',
        rune0: 1,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/527652447'
      },
      {
        type: 3,
        name: 'Reverie Dawn Mark',
        image: 'reverie-dawn-mark.jpg',
        description: '"Perhaps it was not the correct choice. But it was the right choice." —Yasmin Eld',
        rune0: 1,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/1980768298'
      },
      {
        type: 3,
        name: 'Opulent Duelist Mark',
        image: 'opulent-duelist-mark.jpg',
        description: '"I have foreseen the end of all things. The novenary, the Awoken Queen, the sad, strange little man on his rickety boat. They believe they\'ve seen the same. What they don\'t know will destroy them." —Emperor Calus',
        rune0: 1,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/4105225180'
      },
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Gauntlets',
        image: 'tangled-web-gauntlets.jpg',
        description: '"The Kells are dead or mad. The era of Houses is over. So I came to the Shore." —Arrha, transl. from Eliksni',
        rune0: 4,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/42219189'
      },
      {
        type: 2,
        name: 'Exodus Down Gauntlets',
        image: 'exodus-down-gauntlets.jpg',
        description: '"Captain, the orbit of 7066 Nessus is different from what Cosmodrome calculated." —Flight Officer Samantha Blaise',
        rune0: 4,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/1678216306'
      },
      {
        type: 2,
        name: 'Reverie Dawn Gauntlets',
        image: 'reverie-dawn-gauntlets.jpg',
        description: '"For starlight was my mother, and my father was the dark." —Queen Mara Sov',
        rune0: 4,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/2503434573'
      },
      {
        type: 2,
        name: 'Opulent Duelist Gauntlets',
        image: 'opulent-duelist-gauntlets.jpg',
        description: '"I have foreseen the work that will bring this system together. I\'ll need your wisdom." —Emperor Calus',
        rune0: 4,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/392500791'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Greaves',
        image: 'tangled-web-greaves.jpg',
        description: '"I was of kings. Then of exiles. Now I\'m here. The Shore is bad… but everywhere else is worse." —Brivi, transl. from Eliksni',
        rune0: 5,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/1618341271'
      },
      {
        type: 2,
        name: 'Exodus Down Greaves',
        image: 'exodus-down-greaves.jpg',
        description: '"We might be stopping at Nessus after all. We just lost the starboard engine." —Chief Eng. Kaoru Zuykova',
        rune0: 5,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/2079454604'
      },
      {
        type: 2,
        name: 'Reverie Dawn Greaves',
        image: 'reverie-dawn-greaves.jpg',
        description: '"What has been awoken can slumber no more." —Techeun Kalli',
        rune0: 5,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/3174233615'
      },
      {
        type: 2,
        name: 'Opulent Duelist Greaves',
        image: 'opulent-duelist-greaves.jpg',
        description: '"I have foreseen the apex of your heuristic potential. Should you wish it, this system shall collapse from the ideas you\'ve made into weapons. And make way for what\'s coming. O champion mine." —Emperor Calus',
        rune0: 5,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1776578009'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Helm',
        image: 'tangled-web-helm.jpg',
        description: '"I was at the Final Attempt. I saw a Guardian wield a gun that left molten gold in her wake. I ran and never looked back." —Avrok, transl. from Eliksni',
        rune0: 8,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/2982412348'
      },
      {
        type: 2,
        name: 'Exodus Down Helm',
        image: 'exodus-down-helm.jpg',
        description: '"I used some of my own code to program this armor! But if you die, it\'s your fault. Not mine." —Failsafe',
        rune0: 8,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/582151075'
      },
      {
        type: 2,
        name: 'Reverie Dawn Helm',
        image: 'reverie-dawn-helm.jpg',
        description: '"I\'ve learned not to be ashamed of the fear. It\'s to be expected, given what we are." —Pavel Nolg',
        rune0: 8,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/4097166900'
      },
      {
        type: 2,
        name: 'Opulent Duelist Helm',
        image: 'opulent-duelist-helm.jpg',
        description: '"I have foreseen the victories that your wisdom shall win in my name. Over and over." —Emperor Calus',
        rune0: 8,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/1420117606'
      }
    ],
    [
      {
        type: 2,
        name: 'Tangled Web Plate',
        image: 'tangled-web-plate.jpg',
        description: '"Let them have the Great Machine. They deserve it." —Mithrax, transl. from Eliksni',
        rune0: 10,
        rune1: 'purple',
        link: 'https://www.light.gg/db/items/2562470699'
      },
      {
        type: 2,
        name: 'Exodus Down',
        image: 'exodus-down.jpg',
        description: '"Adjust course two degrees. It\'s a long way to Kepler-186, folks. We don\'t have time to tour Nessus." —Capt. Masoud Jacobson',
        rune0: 10,
        rune1: 'red',
        link: 'https://www.light.gg/db/items/1156448694'
      },
      {
        type: 2,
        name: 'Reverie Dawn Plate',
        image: 'reverie-dawn-plate.jpg',
        description: '"There is a place where we can remember who we are." —Imogen Rife',
        rune0: 10,
        rune1: 'green',
        link: 'https://www.light.gg/db/items/4070309619'
      },
      {
        type: 2,
        name: 'Opulent Duelist Plate',
        image: 'opulent-duelist-plate.jpg',
        description: '"I have foreseen what must fall so the Empire may rise. Your mastery of knowledge apocryphal shall make true Cabal of us all." —Emperor Calus',
        rune0: 10,
        rune1: 'blue',
        link: 'https://www.light.gg/db/items/2856582785'
      }
    ]
  ]
};

const weapons = [
  [
    {
      type: 1,
      name: 'CALUS Mini-Tool',
      image: 'calus-mini-tool.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/174192097',
      rune0: 0,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Trackless Waste',
      image: 'trackless-waste.jpg',
      description: '"No footprints out here." —Olu Alderdice',
      link: 'https://www.light.gg/db/items/2681395357',
      rune0: 0,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Hard Truths',
      image: 'hard-truths.jpg',
      description: 'It never gets easier.',
      link: 'https://www.light.gg/db/items/105567493',
      rune0: 0,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Bad Reputation',
      image: 'bad-reputation.jpg',
      description: '"Here we can start over." —Mithrax, trans. from Eliksni',
      link: 'https://www.light.gg/db/items/2105827099',
      rune0: 0,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Twilight Oath',
      image: 'twilight-oath.jpg',
      description: 'Engraved in illuminated letters on the weapon\'s chassis: THE AWOKEN MADE ME.',
      link: 'https://www.light.gg/db/items/3297863558',
      rune0: 2,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Beloved',
      image: 'beloved.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/4190932264',
      rune0: 2,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Fate Cries Foul',
      image: 'fate-cries-foul.jpg',
      description: 'So make your own.',
      link: 'https://www.light.gg/db/items/1684914716',
      rune0: 2,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Dreaded Venture',
      image: 'dreaded-venture.jpg',
      description: 'Not to be undertaken lightly.',
      link: 'https://www.light.gg/db/items/3100452337',
      rune0: 2,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Bad Omens',
      image: 'bad-omens.jpg',
      description: '"Can\'t avoid \'em. Trick is surviving \'em." —The Drifter',
      link: 'https://www.light.gg/db/items/991314988',
      rune0: 3,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Zenobia-D',
      image: 'zenobia-d.jpg',
      description: 'You are the true power on the throne.',
      link: 'https://www.light.gg/db/items/3776129137',
      rune0: 3,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Sleepless',
      image: 'sleepless.jpg',
      description: '"I see our path ahead, full of despair and hardship, and I will walk it with joy in my heart." —Sjur Eido',
      link: 'https://www.light.gg/db/items/3740842661',
      rune0: 3,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Fixed Odds',
      image: 'fixed-odds.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/1642384931',
      rune0: 3,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Trust',
      image: 'trust.jpg',
      description: '"Worlds end. And when yours does, make sure you have a partner you can rely on." —The Drifter',
      link: 'https://www.light.gg/db/items/4077196130',
      rune0: 6,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Austringer',
      image: 'austringer.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/2429822977',
      rune0: 6,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Waking Vigil',
      image: 'waking-vigil.jpg',
      description: '"We have a duty to this solar system that goes deeper than blood, deeper than oaths." —Paladin Devi Cassl',
      link: 'https://www.light.gg/db/items/334171687',
      rune0: 6,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Pribina-D',
      image: 'pribina-d.jpg',
      description: 'Adventure is in your blood.',
      link: 'https://www.light.gg/db/items/4211534763',
      rune0: 6,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Drang (Baroque)',
      image: 'drang-(baroque).jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/79075821',
      rune0: 7,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'The Last Dance',
      image: 'the-last-dance.jpg',
      description: 'Save it for me.',
      link: 'https://www.light.gg/db/items/2009277538',
      rune0: 7,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Anonymous Autumn',
      image: 'anonymous-autumn.jpg',
      description: 'A lesson in the art of falling.',
      link: 'https://www.light.gg/db/items/3222518097',
      rune0: 7,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Smuggler\'s Word',
      image: 'smugglers-word.jpg',
      description: 'A deal is a deal. Or so you hope.',
      link: 'https://www.light.gg/db/items/1843044399',
      rune0: 7,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Proelium FR3',
      image: 'proelium-fr3.jpg',
      description: 'Make their victory Pyrrhic.',
      link: 'https://www.light.gg/db/items/3027844940',
      rune0: 9,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Main Ingredient',
      image: 'main-ingredient.jpg',
      description: '"Now stir the sauce…"',
      link: 'https://www.light.gg/db/items/253196586',
      rune0: 9,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'The Epicurean',
      image: 'the-epicurean.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/4124357815',
      rune0: 9,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Erentil FR4',
      image: 'erentil-fr4.jpg',
      description: 'Bring on the sunrise.',
      link: 'https://www.light.gg/db/items/3027844941',
      rune0: 9,
      rune1: 'blue'
    }
  ],
  [
    {
      type: 1,
      name: 'Badlander',
      image: 'badlander.jpg',
      description: '"We are a long way from home." —Arrha (trans. from Eliksni)',
      link: 'https://www.light.gg/db/items/1327264046',
      rune0: 11,
      rune1: 'purple'
    },
    {
      type: 1,
      name: 'Parcel of Stardust',
      image: 'parcel-of-stardust.jpg',
      description: 'Everybody\'s looking for theirs.',
      link: 'https://www.light.gg/db/items/2217366863',
      rune0: 11,
      rune1: 'red'
    },
    {
      type: 1,
      name: 'Imperial Decree',
      image: 'imperial-decree.jpg',
      description: 'An Earth artifact, refashioned to suit the Emperor\'s modest tastes.',
      link: 'https://www.light.gg/db/items/2919334548',
      rune0: 11,
      rune1: 'green'
    },
    {
      type: 1,
      name: 'Dust Rock Blues',
      image: 'dust-rock-blues.jpg',
      description: '"No job too tough, if the price is good." —Renegade Corsair Errol Mayz',
      link: 'https://www.light.gg/db/items/636912560',
      rune0: 11,
      rune1: 'blue'
    }
  ]
];

const runes = [
  {
    id: 0,
    type: 0,
    name: 'Rune of the Beast',
    image: 'the-beast.png',
    description: '• Weapons rolled with this rune active are guaranteed to be Submachine Guns.',
    color: 'purple',
    topColor: '352c56'
  },
  {
    id: 1,
    type: 0,
    name: 'Rune of Joy',
    image: 'joy.png',
    description: '• Armor rolled with this rune active is guaranteed to be marks, bonds, or cloaks, depending on your class.',
    color: 'purple',
    topColor: '352c56'
  },
  {
    id: 2,
    type: 0,
    name: 'Rune of Jubilation',
    image: 'jubilation.png',
    description: '• Weapons rolled with this rune active are guaranteed to be Sniper Rifles.',
    color: 'purple',
    topColor: '352c56'
  },
  {
    id: 3,
    type: 0,
    name: 'Rune of Ambition',
    image: 'ambition.png',
    description: '• Weapons rolled with this rune active are guaranteed to be Power weapons.',
    color: 'red',
    topColor: '481b24'
  },
  {
    id: 4,
    type: 0,
    name: 'Rune of Cunning',
    image: 'cunning.png',
    description: '• Armor rolled with this rune active is guaranteed to be gauntlets, gloves, or grips, depending on your class.',
    color: 'red',
    topColor: '481b24'
  },
  {
    id: 5,
    type: 0,
    name: 'Rune of Gluttony',
    image: 'gluttony.png',
    description: '• Armor rolled with this rune active is guaranteed to be greaves, boots, or strides, depending on your class.',
    color: 'red',
    topColor: '481b24'
  },
  {
    id: 6,
    type: 0,
    name: 'Rune of Desire',
    image: 'desire.png',
    description: '• Weapons rolled with this rune active are guaranteed to be Hand Cannons.',
    color: 'green',
    topColor: '1a2822'
  },
  {
    id: 7,
    type: 0,
    name: 'Rune of Pride',
    image: 'pride.png',
    description: '• Armor rolled with this rune active is guaranteed to have a Masterworked Void-resistance trait.',
    description2: '• Weapons rolled with this rune active are guaranteed to have Masterworked range traits.',
    color: 'green',
    topColor: '1a2822'
  },
  {
    id: 8,
    type: 0,
    name: 'Rune of War',
    image: 'war.png',
    description: '• Armor rolled with this rune active is guaranteed to be helms, hoods, or masks, depending on your class.',
    color: 'green',
    topColor: '1a2822'
  },
  {
    id: 9,
    type: 0,
    name: 'Rune of Excess',
    image: 'excess.png',
    description: '• Armor rolled with this rune active is guaranteed to have a Masterworked Solar-resistance trait.',
    description2: '• Weapons rolled with this rune active are guaranteed to have Masterworked stability traits.',
    color: 'blue',
    topColor: '13333b'
  },
  {
    id: 10,
    type: 0,
    name: 'Rune of Pleasure',
    image: 'pleasure.png',
    description: '• Armor rolled with this rune active is guaranteed to have a Masterworked Solar-resistance trait.',
    description2: '• Weapons rolled with this rune active are guaranteed to have Masterworked stability traits.',
    color: 'blue',
    topColor: '13333b'
  },
  {
    id: 11,
    type: 0,
    name: 'Rune of Wealth',
    image: 'wealth.png',
    description: '• Armor rolled with this rune active is guaranteed to have a Masterworked Solar-resistance trait.',
    description2: '• Weapons rolled with this rune active are guaranteed to have Masterworked stability traits.',
    color: 'blue',
    topColor: '13333b'
  }
];



const armorMWs = [
  {
    id: 0,
    type: 4,
    name: 'Solar Masterwork',
    image: 'solar.jpg',
    description: 'Maximized resistance.',
    rune2: ['red', 'blue']
  },
  {
    id: 1,
    type: 4,
    name: 'Arc Masterwork',
    image: 'arc.jpg',
    description: 'Maximized resistance.',
    rune2: ['purple']
  },
  {
    id: 2,
    type: 4,
    name: 'Void Masterwork',
    image: 'void.jpg',
    description: 'Maximized resistance.',
    rune2: ['green']
  },
];

const armorTypes = [
  {
    id: 0,
    type: 5,
    name: 'Plasteel Reinforcement Mod',
    image: 'resilience.png',
    description: 'Increased Resilience.',
    rune1Ids: [2,3,7,11] 
  },  
  {
    id: 1,
    type: 5,
    name: 'Restorative Mod',
    image: 'recovery.png',
    description: 'Increased Health Recovery.',
    rune1Ids: [0,5,6,9] 
  },  
  {
    id: 2,
    type: 5,
    name: 'Mobility Enhancement Mod',
    image: 'mobility.png',
    description: 'Increased Mobility.',
    rune1Ids: [1,4,8,10] 
  },
];

const weaponMWs = [
  {
    id: 0,
    type: 6,
    name: 'Handling Masterwork',
    image: 'handling.jpg',
    description: 'Maximized stats. Generates Orbs on multikills. Fitted with a kill tracker.',
    rune2: ['purple']
  },
  {
    id: 1,
    type: 6,
    name: 'Range Masterwork',
    image: 'range.jpg',
    description: 'Maximized stats. Generates Orbs on multikills. Fitted with a kill tracker.',
    rune2: ['green']
  },
  {
    id: 2,
    type: 6,
    name: 'Reload Masterwork',
    image: 'reload.jpg',
    description: 'Maximized stats. Generates Orbs on multikills. Fitted with a kill tracker.',
    rune2: ['red']
  },
  {
    id: 3,
    type: 6,
    name: 'Stability Masterwork',
    image: 'stability.jpg',
    description: 'Maximized stats. Generates Orbs on multikills. Fitted with a kill tracker.',
    rune2: ['blue']
  }
];



export {
  classes,
  runes,
  armor,
  weapons,
  armorMWs,
  armorTypes,
  weaponMWs
};