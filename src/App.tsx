import { useState } from 'react'
import './App.css'

//const test = 'tet';

const test = [
  {
    name: "Beef",
    effect: ["+25 to Strength"],
    components: ["Distilled Fear", "Distilled Disgust", "Distilled Fear"]
  },
  {
    name: "Proficiency",
    effect: ["+25 to Dexterity"],
    components: ["Distilled Fear", "Distilled Guilt", "Distilled Paranoia"]
  },
  {
    name: "Ingenuity",
    effect: ["+25 to Intelligence"],
    components: ["Distilled Isolation", "Distilled Suffering", "Distilled Paranoia"]
  },
  {
    name: "Polymathy",
    effect: ["10% increased Attributes"],
    components: ["Distilled Envy", "Distilled Disgust", "Distilled Greed"]
  },
  {
    name: "Jack of all Trades",
    effect: ["2% increased Damage per 5 of your lowest Attribute"],
    components: ["Distilled Guilt", "Distilled Paranoia", "Distilled Isolation"]
  },
  {
    name: "One with the River",
    effect: [
      "30% increased Defences while wielding a Staff",
      "30% increased Stun Buildup with Quarterstaves",
      "30% increased Daze Buildup with Quarterstaves",
      "30% increased Freeze Buildup with Quarterstaves"
    ],
    components: ["Distilled Envy", "Distilled Disgust", "Distilled Greed"]
  },
  {
    name: "Whirling Assault",
    effect: [
      "8% increased Attack Speed with Quarterstaves",
      "Knocks Back Enemies if you get a Critical Hit with a Quarterstaff"
    ],
    components: ["Distilled Isolation", "Distilled Suffering", "Distilled Disgust"]
  },
  {
    name: "One with the Storm",
    effect: [
      "Quarterstaff Skills that consume Power Charges count as consuming an additional Power Charge"
    ],
    components: ["Distilled Isolation", "Distilled Ire", "Distilled Fear"]
  },
  {
    name: "Martial Artistry",
    effect: [
      "25% increased Accuracy Rating with Quarterstaves",
      "25% increased Critical Damage Bonus with Quarterstaves",
      "+25 to Dexterity"
    ],
    components: ["Distilled Suffering", "Distilled Greed", "Distilled Despair"]
  },
  {
    name: "Silent Shiv",
    effect: [
      "5% increased Attack Speed with Daggers",
      "15% increased Critical Hit Chance with Daggers"
    ],
    components: ["Distilled Ire", "Distilled Despair", "Distilled Suffering"]
  },
  {
    name: "Coated Knife",
    effect: ["Critical Hits with Daggers have a 25% chance to Poison the Enemy"],
    components: ["Distilled Envy", "Distilled Ire", "Distilled Isolation"]
  },
  {
    name: "Backstabbing",
    effect: ["25% increased Critical Damage Bonus with Daggers"],
    components: ["Distilled Disgust", "Distilled Guilt", "Distilled Despair"]
  },
  {
    name: "Clever Construction",
    effect: ["25% increased Critical Hit Chance with Traps"],
    components: ["Distilled Disgust", "Distilled Envy", "Distilled Greed"]
  },
  {
    name: "Devestating Devices",
    effect: ["25% increased Trap Damage"],
    components: ["Distilled Envy", "Distilled Ire", "Distilled Despair"]
  },
  {
    name: "Destructive Apparatus",
    effect: ["25% increased Trap Damage"],
    components: ["Distilled Isolation", "Distilled Suffering", "Distilled Suffering"]
  },
  {
    name: "Feathered Fletching",
    effect: ["Increases and Reductions to Projectile Speed also apply to Damage with Bows"],
    components: ["Distilled Isolation", "Distilled Suffering", "Distilled Despair"]
  },
  {
    name: "Sniper",
    effect: [
      "Arrows gain Critical Hit Chance as they travel farther, up to 60% increased Critical Hit Chance"
    ],
    components: ["Distilled Despair", "Distilled Isolation", "Distilled Paranoia"]
  },
  {
    name: "Pierce the Heart",
    effect: ["Arrows Pierce an additional Target"],
    components: ["Distilled Greed", "Distilled Despair", "Distilled Disgust"]
  },
  { name: "Distilled Greed", effect: "25% increased Damage with Spears", components: ["Distilled Greed", "Distilled Despair", "Distilled Disgust"] },
  { name: "Javelin", effect: "25% increased Damage with Spears", components: ["Distilled Fear", "Distilled Ire", "Distilled Greed"] },
  { name: "Swift Skewering", effect: "8% increased Attack Speed with Spears", components: ["Distilled Guilt", "Distilled Envy", "Distilled Despair"] },
  { name: "Precise Point", effect: "25% increased Damage with Spears", components: ["Distilled Guilt", "Distilled Paranoia", "Distilled Disgust"] },
  { name: "Roll and Strike", effect: "25% increased Damage with Spears", components: ["Distilled Greed", "Distilled Fear", "Distilled Suffering"] },
  { name: "Deflection", effect: "30% increased Block chance, You take 10% of damage from Blocked Hits", components: ["Distilled Ire", "Distilled Despair", "Distilled Despair"] },
  { name: "Reprisal", effect: "Attack Skills deal 25% increased Damage while holding a Shield, 75% increased Evasion from Equipped Shield", components: ["Distilled Guilt", "Distilled Greed", "Distilled Suffering"] },
  { name: "Heavy Blade", effect: "25% increased Damage with Swords", components: ["Distilled Paranoia", "Distilled Envy", "Distilled Greed"] },
  { name: "Ripping Blade", effect: "25% increased Damage with Swords", components: ["Distilled Ire", "Distilled Guilt", "Distilled Guilt"] },
  { name: "Stance Breaker", effect: "50% reduced Enemy Chance to Block Sword Attacks", components: ["Distilled Fear", "Distilled Envy", "Distilled Fear"] },
  { name: "Lay Siege", effect: "1% increased Damage per 1% Chance to Block", components: ["Distilled Suffering", "Distilled Fear", "Distilled Disgust"] },
  { name: "Greatest Defence", effect: "2% increased Attack Damage per 75 Armour or Evasion Rating on Shield", components: ["Distilled Envy", "Distilled Isolation", "Distilled Isolation"] },
  { name: "Wide Barrier", effect: "30% increased Block chance, 25% reduced Global Defences", components: ["Distilled Paranoia", "Distilled Greed", "Distilled Fear"] },
  { name: "Core of the Guardian", effect: "100% increased Defences from Equipped Shield", components: ["Distilled Disgust", "Distilled Fear", "Distilled Isolation"] },
  { name: "Offensive Stance", effect: "1% increased Damage per 1% Chance to Block", components: ["Distilled Guilt", "Distilled Envy", "Distilled Guilt"] },
  { name: "Vigilance", effect: "12% increased Block chance, 6 Life gained when you Block", components: ["Distilled Greed", "Distilled Ire", "Distilled Ire"] },
  { name: "Defensive Reflexes", effect: "12% increased Block chance, 2 Mana gained when you Block", components: ["Distilled Paranoia", "Distilled Isolation", "Distilled Suffering"] },
  { name: "Power Shots", effect: "15% reduced Attack Speed with Crossbows, 80% increased Critical Damage Bonus with Crossbows", components: ["Distilled Suffering", "Distilled Despair", "Distilled Isolation"] },
  { name: "Repeating Explosives", effect: "Grenades have 15% chance to activate a second time", components: ["Distilled Fear", "Distilled Guilt", "Distilled Suffering"] },
  { name: "Instant Reload", effect: "40% increased Crossbow Reload Speed", components: ["Distilled Paranoia", "Distilled Isolation", "Distilled Despair"] },
  { name: "Reusable Ammunition", effect: "15% chance for Crossbow Attacks to not consume a bolt", components: ["Distilled Ire", "Distilled Isolation", "Distilled Greed"] },
  { name: "Full Salvo", effect: "25% increased Damage with Crossbows for each type of Ammunition fired in the past 10 seconds", components: ["Distilled Isolation", "Distilled Ire", "Distilled Paranoia"] },
  { name: "Whirling Onslaught", effect: "50% chance to gain Onslaught on Killing Blow with Axes", components: ["Distilled Isolation", "Distilled Isolation", "Distilled Fear"] },
  { name: "Enraged Reaver", effect: "+10 to Maximum Rage while wielding an Axe", components: ["Distilled Ire", "Distilled Isolation", "Distilled Ire"] },
  { name: "Skullcrusher", effect: "20% more Damage against Heavy Stunned Enemies with Maces", components: ["Distilled Isolation", "Distilled Paranoia", "Distilled Disgust"] },
  {
    name: "Split the Earth",
    effect: [
      "10% chance to Aftershock for Slam Skills with Maces",
      "10% chance to Aftershock for Strike Skills with Maces",
    ],
    components: ["Isolation", "Paranoia", "Disgust"],
  },
  {
    name: "Ball and Chain",
    effect: [
      "15% increased Damage with Flails",
      "6% increased Attack Speed with Flails",
    ],
    components: ["Greed", "Guilt", "Suffering"],
  },
  {
    name: "Morning Star",
    effect: [
      "30% increased Critical Hit Chance with Flails",
      "20% increased Critical Damage Bonus with Flails",
    ],
    components: ["Greed", "Despair", "Despair"],
  },
  {
    name: "Rattling Ball",
    effect: ["25% increased Damage with Flails"],
    components: ["Disgust", "Envy", "Paranoia"],
  },
  {
    name: "Spiked Whip",
    effect: ["25% increased Damage with Flails"],
    components: ["Fear", "Suffering", "Envy"],
  },
  {
    name: "Warding Fetish",
    effect: [
      "30% increased Damage per Curse on you",
      "30% reduced effect of Curses on you",
      "60% increased Energy Shield from Equipped Focus",
    ],
    components: ["Disgust", "Suffering", "Fear"],
  },
  {
    name: "Dreamcatcher",
    effect: [
      "25% increased Spell Damage while on Full Energy Shield",
      "75% increased Energy Shield from Equipped Focus",
    ],
    components: ["Ire", "Isolation", "Envy"],
  },
  {
    name: "Versatile Arms",
    effect: [
      "6% increased Attack Speed with One Handed Melee Weapons",
      "15% increased Accuracy Rating with One Handed Melee Weapons",
      "+10 to Strength and Dexterity",
    ],
    components: ["Fear", "Ire", "Disgust"],
  },
  {
    name: "Push the Advantage",
    effect: ["40% increased Critical Damage Bonus with One Handed Melee Weapons"],
    components: ["Envy", "Suffering", "Disgust"],
  },
  {
    name: "Impair",
    effect: [
      "25% increased Damage with One Handed Weapons",
      "Attacks have 10% chance to Maim on Hit",
    ],
    components: ["Fear", "Greed", "Paranoia"],
  },
  {
    name: "Coated Arms",
    effect: [
      "25% increased Damage with One Handed Weapons",
      "20% increased Chance to inflict Ailments with One-Handed Attacks",
    ],
    components: ["Disgust", "Envy", "Fear"],
  },
  {
    name: "Singular Purpose",
    effect: [
      "5% reduced Attack Speed",
      "20% increased Stun Buildup",
      "40% increased Damage with Two Handed Weapons",
    ],
    components: ["Ire", "Envy", "Despair"],
  },
  {
    name: "Heavy Contact",
    effect: ["Hits that Heavy Stun Enemies have Culling Strike"],
    components: ["Fear", "Greed", "Ire"],
  },
  {
    name: "Colossal Weapon",
    effect: [
      "15% increased Area of Effect for Attacks",
      "+10 to Strength",
    ],
    components: ["Greed", "Fear", "Greed"],
  },
  {
    name: "Curved Weapon",
    effect: [
      "15% increased Accuracy Rating",
      "+10 to Dexterity",
    ],
    components: ["Greed", "Paranoia", "Ire"],
  },
  {
    name: "Shockwaves",
    effect: [
      "30% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently",
    ],
    components: ["Despair", "Fear", "Envy"],
  },
  {
    name: "Overwhelm",
    effect: [
      "5% reduced Attack Speed",
      "20% increased Stun Buildup",
      "40% increased Damage with Two Handed Weapons",
    ],
    components: ["Guilt", "Greed", "Envy"],
  },
  {
    name: "Cross Strike",
    effect: [
      "20% increased Accuracy Rating while Dual Wielding",
      "3% increased Movement Speed while Dual Wielding",
    ],
    components: ["Envy", "Envy", "Despair"],
  },
  {
    name: "Blade Flurry",
    effect: [
      "6% increased Attack Speed while Dual Wielding",
      "15% increased Attack Critical Hit Chance while Dual Wielding",
    ],
    components: ["Paranoia", "Guilt", "Despair"],
  },
  {
    name: "Polished Iron",
    effect: [
        "25% increased Armour",
        "50% of Base Armour from Equipment also added to Stun Threshold"
    ],
    components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Despair"]
},
{
    name: "Heatproofing",
    effect: [
        "25% of Armour also applies to Fire Damage taken from Hits"
    ],
    components: ["Distilled Disgust", "Distilled Disgust", "Distilled Greed"]
},
{
    name: "Projectile Bulwark",
    effect: [
        "30% increased Armour",
        "Defend with 120% of Armour against Projectile Attacks"
    ],
    components: ["Distilled Ire", "Distilled Fear", "Distilled Despair"]
},
{
    name: "Blade Catcher",
    effect: [
        "Defend with 200% of Armour against Critical Hits",
        "+15 to Strength"
    ],
    components: ["Distilled Despair", "Distilled Fear", "Distilled Greed"]
},
{
    name: "Heavy Armour",
    effect: [
        "100% of Strength Requirements from Boots, Gloves and Helmets also added to Armour"
    ],
    components: ["Distilled Suffering", "Distilled Fear", "Distilled Guilt"]
},
{
    name: "Made to Last",
    effect: [
        "15% of Physical Damage prevented Recouped as Life"
    ],
    components: ["Distilled Paranoia", "Distilled Greed", "Distilled Disgust"]
},
{
    name: "Sturdy Metal",
    effect: [
        "80% increased Armour from Equipped Body Armour"
    ],
    components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Ire"]
},
{
    name: "Impenetrable Shell",
    effect: [
        "Defend with 150% of Armour against Attacks from further than 6m"
    ],
    components: ["Distilled Paranoia", "Distilled Fear", "Distilled Envy"]
},
{
    name: "General's Bindings",
    effect: [
        "Gain 8% of Evasion Rating as extra Armour"
    ],
    components: ["Distilled Ire", "Distilled Ire", "Distilled Greed"]
},
{
    name: "High Alert",
    effect: [
        "50% increased Evasion Rating when on Full Life",
        "25% increased Stun Threshold while on Full Life"
    ],
    components: ["Distilled Despair", "Distilled Paranoia", "Distilled Despair"]
},
{
    name: "Escape Strategy",
    effect: [
        "100% increased Evasion Rating if you have been Hit Recently",
        "30% reduced Evasion Rating if you haven't been Hit Recently"
    ],
    components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Greed"]
},
{
    name: "Careful Consideration",
    effect: [
        "30% reduced Evasion Rating if you have been Hit Recently",
        "100% increased Evasion Rating if you haven't been Hit Recently"
    ],
    components: ["Distilled Greed", "Distilled Greed", "Distilled Envy"]
},
{
    name: "Freedom of Movement",
    effect: [
        "30% increased Evasion Rating",
        "30% increased Evasion Rating if you've Dodge Rolled Recently"
    ],
    components: ["Distilled Greed", "Distilled Disgust", "Distilled Suffering"]
},
{
    name: "Escape Velocity",
    effect: [
        "3% increased Movement Speed",
        "30% increased Evasion Rating"
    ],
    components: ["Distilled Fear", "Distilled Ire", "Distilled Envy"]
},
{
    name: "Enhanced Reflexes",
    effect: [
        "30% increased Evasion Rating",
        "8% increased Dexterity"
    ],
    components: ["Distilled Greed", "Distilled Disgust", "Distilled Envy"]
},
{
    name: "Beastial Skin",
    effect: [
        "100% increased Evasion Rating from Equipped Body Armour"
    ],
    components: ["Distilled Guilt", "Distilled Greed", "Distilled Disgust"]
},
{
    name: "Afterimage",
    effect: [
        "8% more chance to Evade Melee Attacks"
    ],
    components: ["Distilled Greed", "Distilled Suffering", "Distilled Ire"]
},
{
    name: "Leather Bound Gauntlets",
    effect: [
        "+1 to Evasion Rating per 1 Armour on Equipped Gloves"
    ],
    components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Ire"]
},
{
    name: "Catlike Agility",
    effect: [
        "25% increased Evasion Rating",
        "25% increased Evasion Rating if you've Dodge Rolled Recently"
    ],
    components: ["Distilled Suffering", "Distilled Isolation", "Distilled Despair"]
},
{
    name: "Calibration",
    effect: [
        "30% increased maximum Energy Shield",
        "4% increased maximum Mana"
    ],
    components: ["Distilled Suffering", "Distilled Isolation", "Distilled Fear"]
},
{
    name: "Patient Barrier",
    effect: [
        "60% increased maximum Energy Shield",
        "20% slower start of Energy Shield Recharge"
    ],
    components: ["Distilled Guilt", "Distilled Disgust", "Distilled Fear"]
},
{
    name: "Insightfulness",
    effect: [
        "18% increased maximum Energy Shield",
        "12% increased Mana Regeneration Rate",
        "6% increased Intelligence"
    ],
    components: ["Distilled Guilt", "Distilled Envy", "Distilled Suffering"]
  },
  {
    name: "Melding",
    effect: [
        "40% increased maximum Energy Shield",
        "10% reduced maximum Mana"
    ],
    components: ["Distilled Isolation", "Distilled Paranoia", "Distilled Isolation"]
},
{
    name: "Enhanced Barrier",
    effect: [
        "25% increased maximum Energy Shield",
        "+1% to all Maximum Elemental Resistances"
    ],
    components: ["Distilled Guilt", "Distilled Fear", "Distilled Isolation"]
},
{
    name: "Dampening Shield",
    effect: [
        "28% increased maximum Energy Shield",
        "Gain 12% of maximum Energy Shield as additional Stun Threshold"
    ],
    components: ["Distilled Greed", "Distilled Paranoia", "Distilled Isolation"]
},
{
    name: "Heavy Buffer",
    effect: [
        "40% increased maximum Energy Shield",
        "10% reduced maximum Life"
    ],
    components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Suffering"]
},
{
    name: "Illuminated Crown",
    effect: [
        "20% increased Light Radius",
        "70% increased Energy Shield from Equipped Helmet"
    ],
    components: ["Distilled Paranoia", "Distilled Ire", "Distilled Guilt"]
},
{
    name: "Strong Chin",
    effect: [
        "Gain Stun Threshold equal to the lowest of Evasion and Armour on your Helmet"
    ],
    components: ["Distilled Envy", "Distilled Guilt", "Distilled Ire"]
},
{
    name: "Defiance",
    effect: [
        "80% increased Armour and Evasion Rating when on Low Life"
    ],
    components: ["Distilled Greed", "Distilled Greed", "Distilled Ire"]
},
{
    name: "Backup Plan",
    effect: [
        "40% increased Evasion Rating if you have been Hit Recently",
        "40% increased Armour if you haven't been Hit Recently"
    ],
    components: ["Distilled Ire", "Distilled Ire", "Distilled Ire"]
},
{
    name: "Insulated Treads",
    effect: [
        "Gain Ailment Threshold equal to the lowest of Evasion and Armour on your Boots"
    ],
    components: ["Distilled Paranoia", "Distilled Greed", "Distilled Guilt"]
},
{
    name: "Feel no Pain",
    effect: [
        "20% increased Armour and Evasion Rating",
        "20% increased Stun Threshold"
    ],
    components: ["Distilled Envy", "Distilled Fear", "Distilled Suffering"]
},
{
    name: "Spectral Ward",
    effect: [
        "+1 to Maximum Energy Shield per 12 Evasion Rating on Equipped Body Armour"
    ],
    components: ["Distilled Envy", "Distilled Greed", "Distilled Isolation"]
},
{
    name: "Inner Faith",
    effect: [
        "20% increased Evasion Rating",
        "20% increased maximum Energy Shield",
        "25% reduced effect of Curses on you"
    ],
    components: ["Distilled Despair", "Distilled Guilt", "Distilled Despair"]
},
{
    name: "Shadow Dancing",
    effect: [
        "30% increased Evasion Rating if you have been Hit Recently",
        "60% faster start of Energy Shield Recharge if you've been Stunned Recently"
    ],
    components: ["Distilled Ire", "Distilled Disgust", "Distilled Envy"]
},
{
    name: "Immaterial",
    effect: [
        "50% increased Evasion Rating if Energy Shield Recharge has started in the past 2 seconds",
        "30% increased Evasion Rating while you have Energy Shield"
    ],
    components: ["Distilled Envy", "Distilled Envy", "Distilled Suffering"]
},
{
    name: "Shimmering",
    effect: [
        "20% increased Energy Shield Recovery Rate if you haven't been Hit Recently",
        "3% increased Movement Speed while you have Energy Shield"
    ],
    components: ["Distilled Ire", "Distilled Suffering", "Distilled Paranoia"]
},
{
  name: "Subterfuge Mask",
  effect: [
      "+2 to Evasion Rating per 1 Maximum Energy Shield on Equipped Helmet"
  ],
  components: ["Distilled Paranoia", "Distilled Envy", "Distilled Suffering"]
},
{
  name: "Mindful Awareness",
  effect: [
      "24% increased Evasion Rating",
      "24% increased maximum Energy Shield"
  ],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Envy"]
},
{
  name: "Ancient Aegis",
  effect: [
      "60% increased Armour from Equipped Body Armour",
      "60% increased Energy Shield from Equipped Body Armour"
  ],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Ire"]
},
{
  name: "Adamant Recovery",
  effect: [
      "Increases and Reductions to Armour also apply to Energy Shield",
      "Recharge Rate at 40% of their value"
  ],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Envy"]
},
{
  name: "Reinforced Barrier",
  effect: [
      "20% increased maximum Energy Shield",
      "Defend with 120% of Armour while not on Low Energy Shield"
  ],
  components: ["Distilled Envy", "Distilled Despair", "Distilled Suffering"]
},
{
  name: "Spiral into Depression",
  effect: [
      "3% increased Movement Speed",
      "25% increased Armour",
      "25% increased maximum Energy Shield"
  ],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Isolation"]
},
{
  name: "Unnatural Resilience",
  effect: [
      "2% to Maximum Fire Resistance for each 40% Uncapped Fire Resistance"
  ],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Suffering"]
},
{
  name: "Prism Guard",
  effect: [
      "+1% to all Maximum Elemental Resistances",
      "+5% to all Elemental Resistances"
  ],
  components: ["Distilled Greed", "Distilled Suffering", "Distilled Paranoia"]
},
{
  name: "Natural Immunity",
  effect: [
      "+4 to Ailment Threshold per Dexterity"
  ],
  components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Despair"]
},
{
  name: "Fan the Flames",
  effect: [
      "25% reduced Ignite Duration on you",
      "40% increased Elemental Ailment Threshold"
  ],
  components: ["Distilled Ire", "Distilled Suffering", "Distilled Fear"]
},
{
  name: "Warm the Heart",
  effect: [
      "25% reduced Freeze Duration on you",
      "60% increased Freeze Threshold"
  ],
  components: ["Distilled Paranoia", "Distilled Suffering", "Distilled Disgust"]
},
{
  name: "Feel the Earth",
  effect: [
      "25% reduced Shock duration on you",
      "40% increased Elemental Ailment Threshold"
  ],
  components: ["Distilled Envy", "Distilled Ire", "Distilled Paranoia"]
},
{
  name: "Shedding Skin",
  effect: [
      "40% increased Elemental Ailment Threshold",
      "10% reduced Duration of Ailments on You"
  ],
  components: ["Distilled Fear", "Distilled Greed", "Distilled Guilt"]
},
{
  name: "Fireproof",
  effect: [
      "+15% to Fire Resistance",
      "25% reduced effect of Ignite on you"
  ],
  components: []
},
{
  name: "Hefty Unit",
  effect: [
      "+3 to Stun Threshold per Strength"
  ],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Paranoia"]
},
{
  name: "Unbending",
  effect: [
      "3% increased maximum Life",
      "30% increased Stun Threshold"
  ],
  components: ["Distilled Paranoia", "Distilled Envy", "Distilled Despair"]
},
{
  name: "Austerity Measures",
  effect: [
      "+5 to all Attributes",
      "Gain 20% of maximum Energy Shield as additional Stun Threshold"
  ],
  components: ["Distilled Isolation", "Distilled Ire", "Distilled Guilt"]
},
{
  name: "Asceticism",
  effect: [
      "Stun Threshold is based on 30% of your Energy Shield instead of Life"
  ],
  components: ["Distilled Ire", "Distilled Envy", "Distilled Envy"]
},
{
  name: "Self Mortification",
  effect: [
      "Gain 20% of maximum Energy Shield as additional Stun Threshold",
      "20% increased Stun Threshold while on Full Life"
  ],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Disgust"]
},
{
  name: "Hallowed",
  effect: [
      "20% increased Stun Recovery",
      "Gain 20% of maximum Energy Shield as additional Stun Threshold"
  ],
  components: ["Distilled Isolation", "Distilled Guilt", "Distilled Isolation"]
},
{
  name: "Eldritch Will",
  effect: [
      "3% increased maximum Life, Mana and Energy Shield",
      "Gain 20% of maximum Energy Shield as additional Stun Threshold"
  ],
  components: ["Distilled Guilt", "Distilled Ire", "Distilled Paranoia"]
},
{
  name: "Briny Carapace",
  effect: [
      "60% increased Stun Threshold for each time you've been Stunned Recently"
  ],
  components: ["Distilled Envy", "Distilled Ire", "Distilled Ire"]
},
{
  name: "Deft Recovery",
  effect: [
      "30% increased Stun Recovery",
      "30% increased Stun Threshold if you haven't been Stunned Recently"
  ],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Greed"]
},
{
  name: "Back in Action",
  effect: [
      "80% increased Stun Recovery"
  ],
  components: ["Distilled Fear", "Distilled Paranoia", "Distilled Paranoia"]
},
{
  name: "Fireproof",
  effect: [
      "+15% to Fire Resistance",
      "25% reduced effect of Ignite on you"
  ],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Greed"]
},
{
  name: "Slippery Ice",
  effect: [
      "25% reduced Effect of Chill on you",
      "Unaffected by Chill during Dodge Roll"
  ],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Fear"]
},
{
  name: "Icebreaker",
  effect: [
      "Gain 100% of Maximum Energy Shield as additional Freeze Threshold"
  ],
  components: ["Distilled Paranoia", "Distilled Suffering", "Distilled Greed"]
},
{
  name: "Electrocution",
  effect: [
      "Enemies you Electrocute have 20% increased Damage taken"
  ],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Paranoia"]
},
{
  name: "Coursing Energy",
  effect: [
      "40% increased Electrocute Buildup",
      "30% increased Shock Chance against Electrocuted Enemies"
  ],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Greed"]
},
{
  name: "Mass Rejuvenation",
  effect: [
      "Regenerate 0.5% of Life per second",
      "Allies in your Presence Regenerate 1% of your Maximum Life per second"
  ],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Ire"]
},
{
  name: "Desperate Times",
  effect: [
      "Regenerate 1.5% of Life per second while on Low Life",
      "40% increased Life Recovery from Flasks used when on Low Life"
  ],
  components: ["Distilled Envy", "Distilled Guilt", "Distilled Envy"]
},
{
  name: "Resilient Soul",
  effect: [
      "20% increased Life Regeneration rate",
      "5% of Damage taken Recouped as Life"
  ],
  components: ["Distilled Envy", "Distilled Guilt", "Distilled Greed"]
},
{
  name: "Thickened Arteries",
  effect: [
      "5% reduced Movement Speed",
      "Regenerate 1% of Life per second while stationary"
  ],
  components: ["Distilled Guilt", "Distilled Greed", "Distilled Guilt"]
},
{
  name: "Hard to Kill",
  effect: [
      "40% increased Flask Life Recovery rate",
      "Regenerate 0.75% of Life per second"
  ],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Greed"]
},
{
  name: "Hale Heart",
  effect: [
      "15% increased Life Recovery rate"
  ],
  components: ["Distilled Greed", "Distilled Paranoia", "Distilled Guilt"]
},
{
  name: "Stand Ground",
  effect: [
      "Regenerate 1% of Life per second while affected by any Damaging Ailment",
      "Regenerate 1% of Life per second while stationary"
  ],
  components: ["Distilled Greed", "Distilled Paranoia", "Distilled Fear"]
},
{
  name: "Fortifying Blood",
  effect: [
      "20% increased amount of Life Leeched",
      "40% increased Armour and Evasion Rating while Leeching"
  ],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Suffering"]
},
{
  name: "Voracious",
  effect: [
      "20% of Leech is Instant"
  ],
  components: ["Distilled Disgust", "Distilled Disgust", "Distilled Fear"]
},
{
  name: "Bloodthirsty",
  effect: [
      "20% increased amount of Life Leeched",
      "Leech Life 25% faster"
  ],
  components: ["Distilled Ire", "Distilled Isolation", "Distilled Isolation"]
},
{
  name: "Goring",
  effect: [
      "5% reduced maximum Life",
      "30% increased amount of Life Leeched",
      "40% increased Physical Damage"
  ],
  components: ["Distilled Despair", "Distilled Ire", "Distilled Ire"]
},
{
  name: "Savoured Blood",
  effect: [
      "35% increased amount of Life Leeched",
      "Leech Life 20% slower"
  ],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Suffering"]
},
{
  name: "Fast Metabolism",
  effect: [
      "Life Leech effects are not removed when Unreserved Life is Filled"
  ],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Greed"]
},
{
  name: "Loose Flesh",
  effect: [
      "15% of Elemental Damage taken Recouped as Life"
  ],
  components: ["Distilled Disgust", "Distilled Ire", "Distilled Paranoia"]
},
{
  name: "Taut Flesh",
  effect: [
      "15% of Physical Damage taken Recouped as Life"
  ],
  components: ["Distilled Paranoia", "Distilled Despair", "Distilled Ire"]
},
{
  name: "Heart Tissue",
  effect: [
      "6% of Damage taken Recouped as Life",
      "Regenerate 0.4% of Life per second if you have been Hit Recently"
  ],
  components: ["Distilled Greed", "Distilled Envy", "Distilled Envy"]
},
{
  name: "Infused Flesh",
  effect: [
      "+20 to maximum Life",
      "8% of Damage taken Recouped as Life"
  ],
  components: ["Distilled Greed", "Distilled Disgust", "Distilled Isolation"]
},
{
  name: "Pliable Flesh",
  effect: [
      "6% of Damage taken Recouped as Life",
      "25% increased speed of Recoup Effects"
  ],
  components: ["Distilled Isolation", "Distilled Fear", "Distilled Fear"]
},
{
  name: "Glazed Flesh",
  effect: [
      "3% of Damage Taken Recouped as Life, Mana and Energy Shield"
  ],
  components: ["Distilled Envy", "Distilled Suffering", "Distilled Fear"]
},
{
  name: "Immortal Infamy",
  effect: [
      "10% increased Energy Shield Recharge Rate",
      "Recover 2% of Life on Kill",
      "+10 to Intelligence"
  ],
  components: ["Distilled Greed", "Distilled Greed", "Distilled Greed"]
},
{
  name: "Life from Death",
  effect: [
      "Recover 3% of Life on Kill"
  ],
  components: ["Distilled Envy", "Distilled Ire", "Distilled Greed"]
},
{
  name: "Taste for Blood",
  effect: [
      "Gain 20 Life per Enemy Killed",
      "2% chance to Recover all Life when you Kill an Enemy"
  ],
  components: ["Distilled Greed", "Distilled Ire", "Distilled Isolation"]
},
{
  name: "Refills",
  effect: [
      "Life Flasks gain 0.15 charges per Second"
  ],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Disgust"]
},
{
  name: "Hale Traveller",
  effect: [
      "20% increased Life Recovery from Flasks",
      "Life Flasks gain 0.1 charges per Second"
  ],
  components: ["Distilled Disgust", "Distilled Envy", "Distilled Ire"]
},
{
  name: "Reinvigoration",
  effect: [
      "Regenerate 1% of Life per Second if you've used a Life Flask in the past 10 seconds"
  ],
  components: ["Distilled Envy", "Distilled Despair", "Distilled Disgust"]
},
{
  name: "Staunching",
  effect: [
      "Life Flasks gain 0.1 charges per Second",
      "+10 to Strength"
  ],
  components: ["Distilled Disgust", "Distilled Despair", "Distilled Guilt"]
},
{
  name: "Succour",
  effect: [
      "30% increased Life Regeneration rate during Effect of any Life Flask"
  ],
  components: ["Distilled Envy", "Distilled Envy", "Distilled Envy"]
},
{
  name: "Heavy Drinker",
  effect: [
      "30% increased Flask Effect Duration",
      "20% increased Life Recovery from Flasks",
      "Recover 5% of Life when you use a Life Flask while on Low Life"
  ],
  components: ["Distilled Disgust", "Distilled Ire", "Distilled Guilt"]
},
{
  name: "Potent Concoctions",
  effect: [
      "Flasks applied to you have 25% increased Effect"
  ],
  components: ["Distilled Fear", "Distilled Ire", "Distilled Guilt"]
},
{
  name: "Efficient Alchemy",
  effect: [
      "20% increased Flask and Charm Charges gained",
      "40% increased Life and Mana Recovery from Flasks while you have an active Charm"
  ],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Despair"]
},
{
  name: "Lasting Concoctions",
  effect: [
      "25% increased Flask Effect Duration",
      "25% increased Flask Charges gained"
  ],
  components: ["Distilled Disgust", "Distilled Ire", "Distilled Isolation"]
},
{
  name: "Savouring",
  effect: [
      "20% chance for Flasks you use to not consume Charges"
  ],
  components: ["Distilled Guilt", "Distilled Greed", "Distilled Ire"]
},
{
  name: "Combat Alchemy",
  effect: [
      "10% chance for Flasks you use to not consume Charges",
      "20% increased Life and Mana Recovery from Flasks"
  ],
  components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Disgust"]
},
{
  name: "Cautious Concoctions",
  effect: [
      "15% increased Flask Effect Duration",
      "15% increased Flask Charges gained"
  ],
  components: ["Distilled Envy", "Distilled Guilt", "Distilled Despair"]
},
{
  name: "Crashing Wave",
  effect: [
      "36% increased Damage if you've dealt a Critical Hit in the past 8 seconds"
  ],
  components: ["Distilled Envy", "Distilled Greed", "Distilled Despair"]
},
{
  name: "Cruel Fate",
  effect: [
      "20% increased Critical Damage Bonus",
      "20% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits"
  ],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Guilt"]
},
{
  name: "Leaping Ambush",
  effect: [
      "100% increased Critical Hit Chance against Enemies on Full Life"
  ],
  components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Paranoia"]
},
{
  name: "Direct Approach",
  effect: ["40% increased Critical Hit Chance against Enemies that are affected by no Elemental Ailments"],
  components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Paranoia"]
},
{
  name: "True Strike",
  effect: ["+10 to Dexterity", "20% increased Critical Hit Chance"],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Disgust"]
},
{
  name: "For the Jugular",
  effect: ["30% increased Critical Damage Bonus", "+10 to Intelligence"],
  components: ["Distilled Paranoia", "Distilled Suffering", "Distilled Guilt"]
},
{
  name: "Critical Exploit",
  effect: ["25% increased Critical Hit Chance"],
  components: ["Distilled Envy", "Distilled Paranoia", "Distilled Ire"]
},
{
  name: "Moment of Truth",
  effect: ["25% increased Critical Damage Bonus if you've dealt a Non-Critical Hit Recently", "20% increased Critical Hit Chance"],
  components: ["Distilled Ire", "Distilled Suffering", "Distilled Disgust"]
},
{
  name: "Preemptive Strike",
  effect: ["100% increased Critical Damage Bonus against Enemies that are on Full Life"],
  components: ["Distilled Guilt", "Distilled Disgust", "Distilled Greed"]
},
  {
  name: "Desensitisation",
  effect: ["25% increased Critical Damage Bonus", "Hits against you have 25% reduced Critical Damage Bonus"],
  components: ["Distilled Envy", "Distilled Suffering", "Distilled Greed"]
},
  {
  name: "Cooked",
  effect: ["50% increased Critical Damage Bonus during any Flask Effect"],
  components: ["Distilled Suffering", "Distilled Ire", "Distilled Envy"]
},
{
  name: "Deadly Force",
  effect: ["30% increased Damage if you've dealt a Critical Hit in the past 8 seconds", "12% increased Critical Hit Chance"],
  components: ["Distilled Disgust", "Distilled Suffering", "Distilled Envy"]
},
{
  name: "Sundering",
  effect: ["25% increased Critical Damage Bonus for Attack Damage", "+25% to Critical Damage Bonus against Stunned Enemies"],
  components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Ire"]
},
{
  name: "Heartstopping",
  effect: ["+10 to Intelligence", "25% increased Critical Hit Chance"],
  components: ["Distilled Ire", "Distilled Despair", "Distilled Paranoia"]
},
{
  name: "Heartbreaking",
  effect: ["35% increased Critical Damage Bonus", "+10 to Strength"],
  components: ["Distilled Isolation", "Distilled Paranoia", "Distilled Fear"]
},
{
  name: "Struck Through",
  effect: ["Attacks have +1% to Critical Hit Chance"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Greed"]
},
{
  name: "Overwhelming Strike",
  effect: ["20% increased Critical Hit Chance for Attacks", "20% increased Critical Damage Bonus for Attack Damage", "20% increased Stun Buildup with Critical Hits"],
  components: ["Distilled Despair", "Distilled Envy", "Distilled Disgust"]
},
{
  name: "Vulgar Methods",
  effect: ["10% reduced maximum Mana", "+10 to Strength", "35% increased Critical Hit Chance"],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Despair"]
},
{
  name: "Barbaric Strength",
  effect: ["45% increased Critical Damage Bonus", "10% increased Mana Cost of Skills", "+10 to Strength"],
  components: ["Distilled Guilt", "Distilled Despair", "Distilled Envy"]
},
{
  name: "Tainted Strike",
  effect: ["25% increased Critical Hit Chance for Attacks", "30% increased Magnitude of Non-Damaging Ailments you inflict with Critical Hits"],
  components: ["Distilled Ire", "Distilled Despair", "Distilled Greed"]
},
{
  name: "Dispatch Foes",
  effect: ["80% increased Critical Hit Chance if you haven't dealt a Critical Hit Recently"],
  components: ["Distilled Envy", "Distilled Envy", "Distilled Paranoia"]
},
{
  name: "Careful Assassin",
  effect: ["20% reduced Critical Damage Bonus", "50% increased Critical Hit Chance"],
  components: ["Distilled Suffering", "Distilled Envy", "Distilled Greed"]
},
{
  name: "Throatseeker",
  effect: ["60% increased Critical Damage Bonus", "20% reduced Critical Hit Chance"],
  components: ["Distilled Greed", "Distilled Envy", "Distilled Isolation"]
},
{
  name: "Blurred Motion",
  effect: ["5% increased Attack Speed", "10% increased Accuracy Rating", "5% increased Dexterity"],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Ire"]
},
{
  name: "Tenfold Attacks",
  effect: ["4% increased Attack Speed", "6% increased Attack Speed if you've been Hit Recently", "+10 to Strength"],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Guilt"]
},
{
  name: "Stimulants",
  effect: ["12% increased Attack Speed during any Flask Effect"],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Greed"]
},
{
  name: "Reaving",
  effect: ["8% increased Attack Speed with One Handed Weapons", "+15 to Dexterity"],
  components: ["Distilled Despair", "Distilled Ire", "Distilled Envy"]
},
{
  name: "Mass Hysteria",
  effect: ["Allies in your Presence have 6% increased Attack Speed", "6% increased Attack Speed"],
  components: ["Distilled Disgust", "Distilled Disgust", "Distilled Envy"]
},
{
  name: "Falcon Technique",
  effect: ["1% increased Attack Speed per 15 Dexterity"],
  components: ["Distilled Suffering", "Distilled Suffering", "Distilled Despair"]
},
{
  name: "Sand in the Eyes",
  effect: ["10% increased Attack Speed", "15% chance to Blind Enemies on Hit with Attacks"],
  components: ["Distilled Despair", "Distilled Despair", "Distilled Despair"]
},
{
  name: "Deep Trance",
  effect: ["8% increased Attack Speed", "10% reduced Cost of Skills"],
  components: ["Distilled Fear", "Distilled Ire", "Distilled Despair"]
},
{
  name: "Flow State",
  effect: ["5% increased Skill Speed", "15% increased Mana Regeneration Rate"],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Envy"]
},
  {
  name: "Blinding Flash",
  effect: ["20% increased Blind Effect", "Blind Enemies when they Stun you"],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Ire"]
},
  {
  name: "Blood Rush",
  effect: ["6% increased Skill Speed", "6% of Skill Mana Costs Converted to Life Costs"],
  components: ["Distilled Guilt", "Distilled Fear", "Distilled Disgust"]
},
  {
  name: "Final Barrage",
  effect: ["20% increased Cast Speed when on Low Life", "10% reduced Cast Speed when on Full Life"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Disgust"]
},
  {
  name: "Casting Cascade",
  effect: ["15% reduced Spell Damage", "6% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"],
  components: ["Distilled Fear", "Distilled Greed", "Distilled Isolation"]
},
  {
  name: "Effervescent",
  effect: ["4% increased Cast Speed for each different Non-Instant Spell you've Cast Recently"],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Envy"]
},
  {
  name: "Overzealous",
  effect: ["16% increased Cast Speed", "15% increased Mana Cost of Skills"],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Isolation"]
},
  {
  name: "Spiral into Mania",
  effect: ["10% increased Cast Speed", "+7% to Chaos Resistance"],
  components: ["Distilled Ire", "Distilled Envy", "Distilled Suffering"]
},
  {
  name: "Spell Haste",
  effect: ["15% increased Evasion Rating", "8% increased Cast Speed"],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Isolation"]
},
  {
  name: "Practiced Signs",
  effect: ["6% increased Cast Speed"],
  components: ["Distilled Greed", "Distilled Guilt", "Distilled Envy"]
},
  {
  name: "Erraticism",
  effect: ["16% increased Cast Speed if you've dealt a Critical Hit Recently", "10% reduced Critical Hit Chance"],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Guilt"]
},
  {
  name: "Mental Alacrity",
  effect: ["5% increased Cast Speed", "15% increased Mana Regeneration Rate", "+10 to Intelligence"],
  components: ["Distilled Fear", "Distilled Envy", "Distilled Paranoia"]
},
  {
  name: "Hulking Smash",
  effect: ["30% increased Stun Buildup", "+15 to Strength"],
  components: ["Distilled Disgust", "Distilled Guilt", "Distilled Guilt"]
},
  {
  name: "Titanic",
  effect: ["30% increased Stun Buildup", "30% increased Stun Threshold", "5% increased Strength"],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Guilt"]
},
  {
  name: "Cranial Impact",
  effect: ["30% increased Stun Buildup", "Gain an Endurance Charge when you Heavy Stun a Rare or Unique Enemy"],
  components: ["Distilled Greed", "Distilled Paranoia", "Distilled Disgust"]
},
  {
  name: "Perfect Opportunity",
  effect: ["30% increased Stun Buildup", "Damage with Hits is Lucky against Heavy Stunned Enemies"],
  components: ["Distilled Ire", "Distilled Suffering", "Distilled Suffering"]
},
  {
  name: "Shattering Blow",
  effect: ["Break 50% of Armour on Heavy Stunning an Enemy"],
  components: ["Distilled Fear", "Distilled Guilt", "Distilled Guilt"]
},
  {
  name: "Flip the Script",
  effect: ["Recover 20% of Life when you Heavy Stun a Rare or Unique Enemy"],
  components: ["Distilled Ire", "Distilled Disgust", "Distilled Ire"]
},
  {
  name: "Ignore Pain",
  effect: ["Gain 3 Rage when Hit by an Enemy", "Every Rage also grants 2% increased Stun Threshold"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Suffering"]
},
  {
  name: "Battle Trance",
  effect: ["+8 to Maximum Rage"],
  components: ["Distilled Isolation", "Distilled Disgust", "Distilled Fear"]
},
  {
  name: "Prolonged Fury",
  effect: ["Inherent loss of Rage is 25% slower"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Despair"]
},
  {
  name: "Unforgiving",
  effect: ["+4 to Maximum Rage", "Inherent Rage Loss starts 1 second later"],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Greed"]
},
  {
  name: "Vengeful Fury",
  effect: ["Gain 5 Rage when Hit by an Enemy", "Every Rage also grants 1% increased Armour"],
  components: ["Distilled Suffering", "Distilled Ire", "Distilled Despair"]
},
  {
  name: "Sudden Infuriation",
  effect: ["3% chance that if you would gain Rage on Hit, you instead gain up to your maximum Rage"],
  components: ["Distilled Fear", "Distilled Suffering", "Distilled Isolation"]
},
  {
  name: "Deep Wounds",
  effect: ["Attack Hits Aggravate any Bleeding on targets which is older than 4 seconds"],
  components: ["Distilled Disgust", "Distilled Despair", "Distilled Paranoia"]
},
  {
  name: "Bloodletting",
  effect: ["10% chance to inflict Bleeding on Hit", "15% increased Magnitude of Bleeding you inflict"],
  components: ["Distilled Fear", "Distilled Suffering", "Distilled Ire"]
},
  {
  name: "Perfectly Placed Knife",
  effect: ["30% increased Critical Hit Chance against Bleeding Enemies", "20% chance to Aggravate Bleeding on targets you Critically Hit with Attacks"],
  components: ["Distilled Fear", "Distilled Paranoia", "Distilled Isolation"]
},
  {
  name: "Aggravation",
  effect: ["10% chance to Aggravate Bleeding on targets you Hit with Attacks"],
  components: ["Distilled Despair", "Distilled Suffering", "Distilled Envy"]
},
  {
  name: "Bleeding Out",
  effect: ["+250 to Accuracy against Bleeding Enemies", "Bleeding you inflict deals Damage 10% faster"],
  components: ["Distilled Despair", "Distilled Suffering", "Distilled Fear"]
},
{
  name: "Immolation",
  effect: ["25% increased Magnitude of Ignite you inflict", "+10 to Strength"],
  components: ["Distilled Ire", "Distilled Despair", "Distilled Disgust"]
},
{
  name: "Slow Burn",
  effect: ["20% increased Ignite Duration on Enemies", "20% increased Magnitude of Ignite you inflict"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Paranoia"]
},
{
  name: "Firestarter",
  effect: ["40% increased chance to Ignite", "Enemies Ignited by you have -5% to Fire Resistance"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Guilt"]
},
{
  name: "Burnout",
  effect: ["Ignites you inflict deal Damage 15% faster"],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Paranoia"]
},
{
  name: "Inescapable Cold",
  effect: ["40% increased Freeze Buildup", "20% increased Freeze Duration on Enemies"],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Isolation"]
},
{
  name: "Shattering",
  effect: ["25% increased Freeze Buildup", "15% increased Chill Duration on Enemies", "15% increased Magnitude of Chill you inflict"],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Despair"]
},
{
  name: "Chilled to the Bone",
  effect: ["20% increased Chill Duration on Enemies", "30% increased Magnitude of Chill you inflict"],
  components: ["Distilled Suffering", "Distilled Despair", "Distilled Despair"]
},
{
  name: "Perpetual Freeze",
  effect: ["15% increased Freeze Buildup", "15% increased Chill and Freeze Duration on Enemies"],
  components: ["Distilled Guilt", "Distilled Ire", "Distilled Isolation"]
},
{
  name: "Branching Bolts",
  effect: ["60% chance for Lightning Skills to Chain an additional time"],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Ire"]
},
{
  name: "Frazzled",
  effect: ["15% increased Mana Regeneration Rate", "30% increased Magnitude of Shock you inflict"],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Paranoia"]
},
{
  name: "General Electric",
  effect: ["40% increased chance to Shock", "5% increased Attack and Cast Speed with Lightning Skills"],
  components: ["Distilled Isolation", "Distilled Suffering", "Distilled Greed"]
},
{
  name: "Drenched",
  effect: ["40% increased chance to Shock", "Gain 5% of Lightning Damage as Extra Cold Damage"],
  components: ["Distilled Isolation", "Distilled Suffering", "Distilled Ire"]
},
{
  name: "Rattled",
  effect: ["+20 to maximum Mana", "50% increased Shock Duration"],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Ire"]
},
{
  name: "Harmonic Generator",
  effect: ["25% increased Critical Hit Chance against Shocked Enemies", "40% increased Magnitude of Shock you inflict with Critical Hits"],
  components: ["Distilled Paranoia", "Distilled Fear", "Distilled Despair"]
},
{
  name: "Escalating Toxins",
  effect: ["10% increased Poison Duration for each Poison you have inflicted Recently, up to a maximum of 100%"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Disgust"]
},
{
  name: "Building Toxins",
  effect: ["25% reduced Poison Duration", "Targets can be affected by +1 of your Poisons at the same time"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Isolation"]
},
{
  name: "Crippling Toxins",
  effect: ["25% chance for Attacks to Maim on Hit against Poisoned Enemies", "25% increased Magnitude of Poison you inflict"],
  components: ["Distilled Envy", "Distilled Isolation", "Distilled Envy"]
},
{
  name: "Leeching Toxins",
  effect: ["30% increased Magnitude of Poison you inflict", "Recover 2% of Life on Killing a Poisoned Enemy"],
  components: ["Distilled Greed", "Distilled Suffering", "Distilled Suffering"]
},
{
  name: "Lasting Toxins",
  effect: ["10% increased Skill Effect Duration", "50% increased Poison Duration"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Envy"]
},
{
  name: "Low Tolerance",
  effect: ["60% increased Effect of Poison you inflict on targets that are not Poisoned"],
  components: ["Distilled Suffering", "Distilled Greed", "Distilled Isolation"]
},
{
  name: "Stacking Toxins",
  effect: ["Targets can be affected by +1 of your Poisons at the same time", "20% reduced Magnitude of Poison you inflict"],
  components: ["Distilled Isolation", "Distilled Disgust", "Distilled Paranoia"]
},
{
  name: "Frenetic",
  effect: ["5% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges", "+1 to Maximum Frenzy Charges"],
  components: ["Distilled Ire", "Distilled Suffering", "Distilled Guilt"]
},
{
  name: "Savagery",
  effect: ["50% increased Evasion Rating if you've consumed a Frenzy Charge Recently", "+1 to Maximum Frenzy Charges"],
  components: ["Distilled Suffering", "Distilled Fear", "Distilled Paranoia"]
},
{
  name: "Fervour",
  effect: ["+2 to Maximum Frenzy Charges"],
  components: ["Distilled Fear", "Distilled Guilt", "Distilled Isolation"]
},
{
  name: "Endurance",
  effect: ["+2 to Maximum Endurance Charges"],
  components: ["Distilled Guilt", "Distilled Isolation", "Distilled Envy"]
},
{
  name: "Guts",
  effect: ["Recover 3% of Life for each Endurance Charge consumed", "+1 to Maximum Endurance Charges"],
  components: ["Distilled Suffering", "Distilled Ire", "Distilled Ire"]
},
{
  name: "Grit",
  effect: ["5% chance that if you would gain Endurance Charges, you instead gain up to maximum Endurance Charges", "+1 to Maximum Endurance Charges"],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Envy"]
},
  {
  name: "Lust for Power",
  effect: ["5% chance that if you would gain Power Charges, you instead gain up to your maximum number of Power Charges", "+1 to Maximum Power Charges"],
  components: ["Distilled Isolation", "Distilled Guilt", "Distilled Guilt"]
},
{
  name: "Overflowing Power",
  effect: ["+2 to Maximum Power Charges"],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Greed"]
},
{
  name: "The Power Within",
  effect: ["20% increased Critical Damage Bonus if you've gained a Power Charge Recently", "+1 to Maximum Power Charges"],
  components: ["Distilled Envy", "Distilled Paranoia", "Distilled Suffering"]
},
{
  name: "Cacophony",
  effect: ["40% increased Damage with Warcries", "Warcry Skills have 25% increased Area of Effect"],
  components: ["Distilled Isolation", "Distilled Guilt", "Distilled Fear"]
},
{
  name: "Vocal Empowerment",
  effect: ["Warcries Empower an additional Attack"],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Despair"]
},
{
  name: "Internal Bleeding",
  effect: ["20% chance to Aggravate Bleeding on targets you Hit with Empowered Attacks", "Empowered Attacks deal 30% increased Damage"],
  components: ["Distilled Guilt", "Distilled Despair", "Distilled Paranoia"]
},
{
  name: "Bravado",
  effect: [
    "Empowered Attacks have 50% increased Stun Buildup",
    "100% increased Stun Threshold during Empowered Attacks",
  ],
  components: ["Distilled Suffering", "Distilled Guilt", "Distilled Despair"],
},
{
  name: "Deafening Cries",
  effect: [
    "25% increased Warcry Cooldown Recovery Rate",
    "8% increased Damage for each time you've Warcried Recently",
  ],
  components: ["Distilled Disgust", "Distilled Guilt", "Distilled Paranoia"],
},
{
  name: "Guttural Roar",
  effect: [
    "30% increased Warcry Speed",
    "Warcry Skills have 30% increased Area of Effect",
  ],
  components: ["Distilled Paranoia", "Distilled Ire", "Distilled Disgust"],
},
{
  name: "Admonisher",
  effect: ["25% increased Warcry Speed", "25% increased Warcry Cooldown Recovery Rate"],
  components: ["Distilled Disgust", "Distilled Suffering", "Distilled Disgust"],
},
{
  name: "Bolstering Yell",
  effect: [
    "Empowered Attacks deal 30% increased Damage",
    "Warcry Skills have 30% increased Area of Effect",
  ],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Paranoia"],
},
{
  name: "Urgent Call",
  effect: [
    "Recover 2% of Life and Mana when you use a Warcry",
    "24% increased Warcry Speed",
    "18% increased Warcry Cooldown Recovery Rate",
  ],
  components: ["Distilled Fear", "Distilled Isolation", "Distilled Suffering"],
},
{
  name: "Escalation",
  effect: [
    "25% increased Warcry Speed",
    "20% increased Damage for each different Warcry you've used Recently",
  ],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Guilt"],
},
{
  name: "Impending Doom",
  effect: [
    "40% faster Curse Activation",
    "Your Curses have 20% increased Effect if 50% of Curse Duration expired",
  ],
  components: ["Distilled Envy", "Distilled Isolation", "Distilled Ire"],
},
{
  name: "Zone of Control",
  effect: [
    "40% increased Area of Effect of Curses",
    "8% increased Effect of your Curses",
    "Enemies you Curse are Hindered, with 15% reduced Movement Speed",
  ],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Envy"],
},
{
  name: "Master of Hexes",
  effect: ["25% reduced Curse Duration", "18% increased Effect of your Curses"],
  components: ["Distilled Suffering", "Distilled Fear", "Distilled Suffering"],
},
{
  name: "Fated End",
  effect: [
    "30% increased Curse Duration",
    "Enemies Cursed by you have 50% reduced Life Regeneration Rate",
    "Enemies you Curse cannot Recharge Energy Shield",
  ],
  components: ["Distilled Disgust", "Distilled Isolation", "Distilled Despair"],
},
{
  name: "Lingering Whispers",
  effect: ["40% increased Curse Duration", "10% increased Effect of your Curses"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Envy"],
},
{
  name: "Supportive Ancestors",
  effect: [
    "25% increased Damage while you have a Totem",
    "Totems have 2% increased Cast Speed per Summoned Totem",
    "Totems have 2% increased Attack Speed per Summoned Totem",
  ],
  components: ["Distilled Fear", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Carved Earth",
  effect: [
    "20% increased Totem Damage",
    "6% increased Attack and Cast Speed if you've summoned a Totem Recently",
  ],
  components: ["Distilled Suffering", "Distilled Suffering", "Distilled Ire"],
},
{
  name: "Watchtowers",
  effect: [
    "Attack Skills have +1 to maximum number of Summoned Totems",
    "Skills that would Summon a Totem have 20% chance to Summon two Totems instead",
  ],
  components: ["Distilled Disgust", "Distilled Suffering", "Distilled Suffering"],
},
{
  name: "Ancestral Artifice",
  effect: ["Attack Skills have +1 to maximum number of Summoned Totems", "20% increased Totem Placement range"],
  components: ["Distilled Suffering", "Distilled Suffering", "Distilled Suffering"],
},
{
  name: "Ancestral Unity",
  effect: ["Totems have 4% increased Attack Speed per Summoned Totem"],
  components: ["Distilled Suffering", "Distilled Fear", "Distilled Envy"],
},
{
  name: "Hardened Wood",
  effect: ["Totems gain +20% to all Elemental Resistances", "Totems have 20% additional Physical Damage Reduction"],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Despair"],
},
{
  name: "Spirit Bond",
  effect: ["30% increased Totem Life", "30% increased Totem Duration"],
  components: ["Distilled Greed", "Distilled Ire", "Distilled Fear"],
},
{
  name: "Ancestral Reach",
  effect: ["25% increased Totem Placement speed", "50% increased Totem Placement range"],
  components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Ire"],
},
{
  name: "Ancestral Alacrity",
  effect: ["30% increased Totem Placement speed", "8% increased Attack and Cast Speed if you've summoned a Totem Recently"],
  components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Guilt"],
},
{
  name: "Ancestral Conduits",
  effect: ["12% increased Attack and Cast Speed if you've summoned a Totem Recently"],
  components: ["Distilled Despair", "Distilled Suffering", "Distilled Suffering"],
},
{
  name: "Ancestral Mending",
  effect: ["Regenerate 1% of Life per second while you have a Totem", "Totems Regenerate 3% of Life per second"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Paranoia"],
},
{
  name: "Deadly Swarm",
  effect: ["Minions deal 15% increased Damage", "Minions have 20% increased Critical Hit Chance"],
  components: ["Distilled Paranoia", "Distilled Despair", "Distilled Disgust"],
},
{
  name: "Lord of Horrors",
  effect: ["Minions have 12% reduced Reservation"],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Ire"],
},
{
  name: "Fear of Death",
  effect: ["Minions have +150 to Accuracy Rating", "25% increased Minion Accuracy Rating"],
  components: ["Distilled Envy", "Distilled Paranoia", "Distilled Guilt"],
},
{
  name: "Dead can Dance",
  effect: ["Minions have 25% increased Evasion Rating", "Your Dexterity is added to your Minions"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Ire"],
},
{
  name: "Relentless Fallen",
  effect: ["Minions have 20% increased Movement Speed", "Minions have 8% increased Attack and Cast Speed"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Isolation"],
},
{
  name: "Right Hand of Darkness",
  effect: ["Minions have 20% increased Area of Effect", "Minions have 10% chance to inflict Withered on Hit"],
  components: ["Distilled Envy", "Distilled Isolation", "Distilled Suffering"],
},
{
  name: "Grip of Evil",
  effect: ["Minions have 40% increased Critical Damage Bonus"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Ire"],
},
{
  name: "Necrotic Touch",
  effect: ["Minions have 40% increased Critical Hit Chance"],
  components: ["Distilled Despair", "Distilled Despair", "Distilled Suffering"],
},
{
  name: "Restless Dead",
  effect: ["Minions Revive 25% faster"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Disgust"],
},
{
  name: "Growing Swarm",
  effect: ["Minions have 20% increased Area of Effect", "Minions have 20% increased Cooldown Recovery Rate"],
  components: ["Distilled Guilt", "Distilled Paranoia", "Distilled Fear"],
},
{
  name: "Gravedigger",
  effect: ["Minions Revive 15% faster", "You gain 2% Life when one of your Minions is Revived"],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Disgust"],
},
{
  name: "Necrotised Flesh",
  effect: ["Minions have 40% increased maximum Life", "Minions have 10% reduced Life Recovery rate"],
  components: ["Distilled Fear", "Distilled Guilt", "Distilled Fear"],
},
{
  name: "Left Hand of Darkness",
  effect: ["Minions have 20% additional Physical Damage Reduction", "Minions have +23% to Chaos Resistance"],
  components: ["Distilled Isolation", "Distilled Suffering", "Distilled Envy"],
},
{
  name: "Crystalline Flesh",
  effect: ["Minions have +20% to all Elemental Resistances", "Minions have +5% to all Maximum Elemental Resistances"],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Suffering"],
},
{
  name: "Fleshcrafting",
  effect: ["Minions gain 15% of their Maximum Life as Extra Maximum Energy Shield"],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Fear"],
},
{
  name: "Vile Mending",
  effect: [
    "Minions have 20% increased maximum Life",
    "Minions Regenerate 3% of Life per second",
    "Minions have +13% to Chaos Resistance",
  ],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Fear"],
},
{
  name: "Regenerative Flesh",
  effect: ["Minions Recoup 10% of Damage taken as Life"],
  components: ["Distilled Greed", "Distilled Disgust", "Distilled Greed"],
},
{
  name: "Living Death",
  effect: ["Minions have +22% to all Elemental Resistances", "Minions have +3% to all Maximum Elemental Resistances"],
  components: ["Distilled Greed", "Distilled Suffering", "Distilled Disgust"],
},
{
  name: "Entropic Incarnation",
  effect: ["Minions have +13% to Chaos Resistance", "Minions gain 8% of Physical Damage as Chaos Damage"],
  components: ["Distilled Suffering", "Distilled Suffering", "Distilled Envy"],
},
{
  name: "Anticipation",
  effect: ["Skills Supported by Unleash have 25% increased Seal gain frequency"],
  components: ["Distilled Fear", "Distilled Envy", "Distilled Despair"],
},
{
  name: "Lasting Incantations",
  effect: ["20% increased Spell Damage", "20% increased Skill Effect Duration"],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Disgust"],
},
{
  name: "Potent Incantation",
  effect: ["30% increased Spell Damage", "5% reduced Cast Speed"],
  components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Disgust"],
},
{
  name: "Spellblade",
  effect: ["32% increased Spell Damage while wielding a Melee Weapon", "+10 to Dexterity"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Fear"],
},
{
  name: "Rapid Strike",
  effect: ["+30 to Accuracy Rating", "8% increased Melee Attack Speed"],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Fear"],
},
{
  name: "Serrated Edges",
  effect: ["10% increased Critical Hit Chance for Attacks", "30% increased Attack Damage against Rare or Unique Enemies"],
  components: ["Distilled Paranoia", "Distilled Disgust", "Distilled Greed"],
},
{
  name: "Personal Touch",
  effect: ["20% increased Melee Damage", "25% increased Melee Damage against Immobilised Enemies"],
  components: ["Distilled Disgust", "Distilled Despair", "Distilled Ire"],
},
{
  name: "In Your Face",
  effect: ["40% increased Melee Damage with Hits at Close Range"],
  components: ["Distilled Fear", "Distilled Greed", "Distilled Envy"],
},
{
  name: "Viciousness",
  effect: ["8% increased Melee Attack Speed", "+10 to Dexterity"],
  components: ["Distilled Disgust", "Distilled Greed", "Distilled Paranoia"],
},
{
  name: "Unerring Impact",
  effect: [
    "10% increased Accuracy Rating with One Handed Melee Weapons",
    "10% increased Accuracy Rating with Two Handed Melee Weapons",
    "+2 to Melee Strike Range",
  ],
  components: ["Distilled Greed", "Distilled Disgust", "Distilled Ire"],
},
{
  name: "Heavy Weaponry",
  effect: ["15% increased Melee Damage", "15% increased Stun Buildup with Melee Damage", "+15 to Strength"],
  components: ["Distilled Paranoia", "Distilled Disgust", "Distilled Envy"],
},
{
  name: "Reaching Strike",
  effect: ["25% increased Melee Damage", "+2 to Melee Strike Range"],
  components: ["Distilled Isolation", "Distilled Paranoia", "Distilled Guilt"],
},
{
  name: "Deadly Flourish",
  effect: ["20% increased Melee Critical Hit Chance", "melee critical strike chance +% when on full life [20]"],
  components: ["Distilled Envy", "Distilled Ire", "Distilled Guilt"],
},
{
  name: "Initiative",
  effect: ["30% increased Melee Damage when on Full Life", "16% increased Attack Speed if you haven't Attacked Recently"],
  components: ["Distilled Greed", "Distilled Ire", "Distilled Envy"],
},
{
  name: "Breaking Blows",
  effect: ["30% increased Stun Buildup", "15% increased Area of Effect if you have Stunned an Enemy Recently"],
  components: ["Distilled Disgust", "Distilled Disgust", "Distilled Disgust"],
},
{
  name: "Honourless",
  effect: [
    "25% increased Armour if you've Hit an Enemy with a Melee Attack Recently",
    "50% increased Melee Damage against Immobilised Enemies",
  ],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Fear"],
},
{
  name: "Smash",
  effect: ["20% increased Melee Damage", "40% increased Melee Damage against Heavy Stunned enemies"],
  components: ["Distilled Envy", "Distilled Envy", "Distilled Ire"],
},
{
  name: "Maiming Strike",
  effect: ["25% increased Attack Damage", "Attacks have 25% chance to Maim on Hit"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Ire"],
},
{
  name: "Prolonged Assault",
  effect: [
    "16% increased Attack Damage",
    "16% increased Skill Effect Duration",
    "Buffs on you expire 10% slower",
  ],
  components: ["Distilled Guilt", "Distilled Despair", "Distilled Suffering"],
},
{
  name: "Blinding Strike",
  effect: ["24% increased Attack Damage", "10% chance to Blind Enemies on Hit with Attacks"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Envy"],
},
{
  name: "Killer Instinct",
  effect: ["30% increased Attack Damage when on Full Life", "50% increased Attack Damage when on Low Life"],
  components: ["Distilled Greed", "Distilled Paranoia", "Distilled Greed"],
},
{
  name: "Presence Present",
  effect: [
    "Allies in your Presence have +100 to Accuracy Rating",
    "35% increased Attack Damage while you have an Ally in your Presence",
  ],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Isolation"],
},
{
  name: "Unexpected Finesse",
  effect: ["10% increased Attack Damage", "Gain Accuracy Rating equal to your Strength"],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Isolation"],
},
{
  name: "Kite Runner",
  effect: ["3% increased Movement Speed", "15% increased Projectile Speed", "15% increased Projectile Damage"],
  components: ["Distilled Ire", "Distilled Isolation", "Distilled Despair"],
},
{
  name: "Careful Aim",
  effect: ["16% increased Projectile Damage", "40% increased Accuracy Rating at Close Range"],
  components: ["Distilled Guilt", "Distilled Guilt", "Distilled Paranoia"],
},
{
  name: "Heavy Ammunition",
  effect: ["8% reduced Attack Speed", "40% increased Projectile Damage", "40% increased Projectile Stun Buildup"],
  components: ["Distilled Guilt", "Distilled Greed", "Distilled Greed"],
},
{
  name: "Trick Shot",
  effect: ["Projectiles have 15% chance to Chain an additional time from terrain"],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Guilt"],
},
{
  name: "Piercing Shot",
  effect: ["50% chance to Pierce an Enemy"],
  components: ["Distilled Disgust", "Distilled Guilt", "Distilled Disgust"],
},
{
  name: "Split Shot",
  effect: ["Projectiles have 75% chance for an additional Projectile when Forking"],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Paranoia"],
},
{
  name: "Catapult",
  effect: ["15% increased Projectile Speed", "15% increased Area of Effect for Attacks"],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Guilt"],
},
{
  name: "Short Shot",
  effect: ["15% reduced Projectile Speed", "20% increased Projectile Damage"],
  components: ["Distilled Suffering", "Distilled Guilt", "Distilled Envy"],
},
{
  name: "Close Confines",
  effect: ["25% chance for Projectiles to Pierce Enemies within 3m distance of you"],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Ire"],
},
{
  name: "Shrapnel",
  effect: ["30% chance to Pierce an Enemy", "Projectiles have 10% chance to Chain an additional time from terrain"],
  components: ["Distilled Guilt", "Distilled Guilt", "Distilled Disgust"],
},
{
  name: "Advanced Munitions",
  effect: ["25% increased chance to inflict Ailments with Projectiles"],
  components: ["Distilled Guilt", "Distilled Fear", "Distilled Greed"],
},
{
  name: "Total Incineration",
  effect: ["25% increased Critical Damage Bonus against Burning Enemies", "10% chance to refresh Ignite Duration on Critical Hit"],
  components: ["Distilled Guilt", "Distilled Isolation", "Distilled Suffering"],
},
{
  name: "Burning Nature",
  effect: ["25% increased Fire Damage", "15% increased Ignite Duration on Enemies"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Greed"],
},
{
  name: "Sigil of Fire",
  effect: ["30% increased Damage with Hits against Ignited Enemies"],
  components: ["Distilled Suffering", "Distilled Guilt", "Distilled Ire"],
},
{
  name: "Path of Flame",
  effect: [
    "18% increased Fire Damage",
    "30% increased chance to Ignite",
    "Witch: 15% increased Critical Hit Chance for Spells",
    "Witch: 18% increased Physical Damage",
  ],
  components: ["Distilled Suffering", "Distilled Fear", "Distilled Greed"],
},
{
  name: "Burn Away",
  effect: ["15% increased Fire Damage", "Damage Penetrates 10% Fire Resistance", "10% increased Magnitude of Ignite you inflict"],
  components: ["Distilled Fear", "Distilled Disgust", "Distilled Disgust"],
},
{
  name: "Echoing Flames",
  effect: ["Mastery: Bestiary", "30% increased Elemental Damage if you've Ignited an Enemy Recently"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Disgust"],
},
{
  name: "Intense Flames",
  effect: ["35% increased Damage with Hits against Burning Enemies"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Fear"],
},
{
  name: "Explosive Impact",
  effect: [
    "15% increased Area of Effect",
    "Burning Enemies you kill have a 5% chance to Explode, dealing a tenth of their maximum Life as Fire Damage",
  ],
  components: ["Distilled Greed", "Distilled Disgust", "Distilled Fear"],
},
{
  name: "Volcanic Skin",
  effect: ["Gain 8% of Damage as Extra Fire Damage", "+20% to Fire Resistance"],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Paranoia"],
},
{
  name: "Burning Strikes",
  effect: ["Gain 12% of Physical Damage as Extra Fire Damage"],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Incendiary",
  effect: ["30% increased chance to Ignite", "30% increased Damage with Hits against Burning Enemies"],
  components: ["Distilled Isolation", "Distilled Disgust", "Distilled Guilt"],
},
{
  name: "Fulmination",
  effect: ["40% increased chance to Ignite", "40% increased Damage with Hits against Ignited Enemies"],
  components: ["Distilled Suffering", "Distilled Suffering", "Distilled Greed"],
},
{
  name: "Cold Nature",
  effect: ["25% increased Cold Damage", "15% increased Chill Duration on Enemies"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Guilt"],
},
{
  name: "Sigil of Ice",
  effect: ["30% increased Damage with Hits against Chilled Enemies"],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Guilt"],
},
{
  name: "Thin Ice",
  effect: ["20% increased Freeze Buildup", "50% increased Damage with Hits against Frozen Enemies"],
  components: ["Distilled Suffering", "Distilled Ire", "Distilled Greed"],
},
{
  name: "Heavy Frost",
  effect: ["20% increased Freeze Buildup", "Hits ignore non-negative Elemental Resistances of Frozen Enemies"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Paranoia"],
},
{
  name: "Path of Winter",
  effect: [
    "18% increased Cold Damage",
    "30% increased Freeze Buildup",
    "Witch: Minions deal 15% increased Damage",
    "Witch: Minions have 3% increased Attack and Cast Speed",
  ],
  components: ["Distilled Suffering", "Distilled Envy", "Distilled Despair"],
},
{
  name: "Harsh Winter",
  effect: ["8% increased Cast Speed with Cold Skills", "16% increased Skill Effect Duration"],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Ire"],
},
{
  name: "Climate Change",
  effect: ["20% increased Freeze Buildup", "Gain 25% of Cold Damage as Extra Fire Damage against Frozen Enemies"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Despair"],
},
{
  name: "Echoing Frost",
  effect: ["30% increased Elemental Damage if you've Chilled an Enemy Recently"],
  components: ["Distilled Suffering", "Distilled Guilt", "Distilled Greed"],
},
{
  name: "Endless Blizzard",
  effect: ["+1 to Level of all Cold Skills"],
  components: ["Distilled Isolation", "Distilled Suffering", "Distilled Fear"],
},
{
  name: "Essence of the Mountain",
  effect: ["Gain 5% of Damage as Extra Cold Damage", "20% increased Freeze Buildup"],
  components: ["Distilled Despair", "Distilled Ire", "Distilled Suffering"],
},
{
  name: "Pure Power",
  effect: ["2% increased Lightning Damage per 10 Intelligence"],
  components: ["Distilled Suffering", "Distilled Guilt", "Distilled Suffering"],
},
{
  name: "Electrifying Nature",
  effect: ["25% increased Lightning Damage", "15% increased Shock Duration"],
  components: ["Distilled Envy", "Distilled Greed", "Distilled Paranoia"],
},
{
  name: "Sigil of Lightning",
  effect: ["30% increased Damage with Hits against Shocked Enemies"],
  components: ["Distilled Paranoia", "Distilled Suffering", "Distilled Paranoia"],
},
{
  name: "Power Conduction",
  effect: ["25% increased Shock Duration", "25% increased Magnitude of Shock you inflict"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Suffering"],
},
{
  name: "Wild Storm",
  effect: ["15% more Maximum Lightning Damage"],
  components: ["Distilled Isolation", "Distilled Fear", "Distilled Isolation"],
},
{
  name: "Path of Storms",
  effect: [
    "18% increased Lightning Damage",
    "30% increased chance to Shock",
    "Witch: 18% increased Chaos Damage",
    "Witch: 15% increased Skill Effect Duration",
  ],
  components: ["Distilled Fear", "Distilled Fear", "Distilled Ire"],
},
{
  name: "Flash Storm",
  effect: ["30% increased chance to Shock", "Damage Penetrates 15% Lightning Resistance"],
  components: ["Distilled Paranoia", "Distilled Ire", "Distilled Isolation"],
},
{
  name: "Thunderstruck",
  effect: ["50% increased Electrocute Buildup against Shocked Enemies", "50% increased Shock Chance against Electrocuted Enemies"],
  components: ["Distilled Despair", "Distilled Paranoia", "Distilled Paranoia"],
},
{
  name: "Spreading Shocks",
  effect: ["Shocking Hits have a 50% chance to also Shock enemies in a 1.5 metre radius"],
  components: ["Distilled Guilt", "Distilled Disgust", "Distilled Disgust"],
},
{
  name: "Endless Circuit",
  effect: ["25% chance on Consuming a Shock on an Enemy to reapply it"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Despair"],
},
{
  name: "Lightning Quick",
  effect: ["14% increased Lightning Damage", "8% increased Attack and Cast Speed with Lightning Skills"],
  components: ["Distilled Fear", "Distilled Fear", "Distilled Isolation"],
},
{
  name: "Echoing Thunder",
  effect: ["30% increased Elemental Damage if you've Shocked an Enemy Recently"],
  components: ["Distilled Despair", "Distilled Suffering", "Distilled Ire"],
},
{
  name: "Essence of the Storm",
  effect: ["Gain 5% of Damage as Extra Lightning Damage", "30% increased chance to Shock"],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Paranoia"],
},
{
  name: "Alternating Current",
  effect: ["25% increased Mana Regeneration Rate if you have Shocked an Enemy Recently", "20% increased Magnitude of Shock you inflict"],
  components: ["Distilled Ire", "Distilled Ire", "Distilled Suffering"],
},
{
  name: "Pure Chaos",
  effect: ["Gain 11% of Damage as Extra Chaos Damage"],
  components: ["Distilled Envy", "Distilled Isolation", "Distilled Guilt"],
},
{
  name: "Dark Entries",
  effect: ["+1 to Level of all Chaos Skills"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Isolation"],
},
{
  name: "Spaghettification",
  effect: [
    "3% increased Movement Speed",
    "29% increased Chaos Damage",
    "-13% to Chaos Resistance",
    "23% reduced Light Radius",
    "7% increased Attributes",
  ],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Fear"],
},
{
  name: "Event Horizon",
  effect: ["53% increased Chaos Damage", "Lose 3% of Life and Energy Shield when you use a Chaos Skill"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Guilt"],
},
{
  name: "Spiral into Insanity",
  effect: ["29% increased Chaos Damage", "10% increased Global Defences"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Envy"],
},
{
  name: "Stylebender",
  effect: ["Break 30% increased Armour on enemies affected by Ailments", "+10 to Strength", "25% increased Physical Damage"],
  components: ["Distilled Greed", "Distilled Paranoia", "Distilled Suffering"],
},
{
  name: "Void",
  effect: ["29% increased Chaos Damage", "Enemies you Curse have -3% to Chaos Resistance"],
  components: ["Distilled Isolation", "Distilled Ire", "Distilled Disgust"],
},
{
  name: "Lingering Horror",
  effect: ["23% increased Chaos Damage", "15% increased Skill Effect Duration"],
  components: ["Distilled Isolation", "Distilled Disgust", "Distilled Disgust"],
},
{
  name: "Wither Away",
  effect: ["Unwithered enemies are Withered for 8 seconds when they enter your Presence", "20% increased Effect of Withered"],
  components: ["Distilled Guilt", "Distilled Guilt", "Distilled Isolation"],
},
{
  name: "Shatter Palm",
  effect: ["30% increased Stun Buildup", "30% increased Daze Buildup"],
  components: ["Distilled Greed", "Distilled Despair", "Distilled Paranoia"],
},
{
  name: "Cut to the Bone",
  effect: [
    "Break Armour on Critical Hit with Spells equal to 10% of Physical Damage dealt",
    "10% chance to inflict Bleeding on Hit",
    "20% increased Physical Damage",
  ],
  components: ["Distilled Despair", "Distilled Envy", "Distilled Isolation"],
},
{
  name: "Staggering Palm",
  effect: ["20% increased Critical Damage Bonus", "20% increased Knockback Distance", "20% increased Physical Damage"],
  components: ["Distilled Guilt", "Distilled Isolation", "Distilled Despair"],
},
{
  name: "Madness in the Bones",
  effect: ["Gain 6% of Physical Damage as extra Chaos Damage"],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Suffering"],
},
{
  name: "Shredding Force",
  effect: [
    "15% increased Critical Hit Chance for Spells",
    "15% increased Critical Spell Damage Bonus",
    "15% increased Magnitude of Damaging Ailments you inflict with Critical Hits",
  ],
  components: ["Distilled Guilt", "Distilled Isolation", "Distilled Greed"],
},
{
  name: "Blood Tearing",
  effect: ["15% increased Magnitude of Bleeding you inflict", "25% increased Physical Damage"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Greed"],
},
{
  name: "Tempered Mind",
  effect: ["20% increased Critical Damage Bonus", "+10 to Strength", "20% increased Physical Damage"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Paranoia"],
},
{
  name: "Battle Fever",
  effect: ["5% increased Attack and Cast Speed", "25% increased Physical Damage"],
  components: ["Distilled Disgust", "Distilled Guilt", "Distilled Isolation"],
},
{
  name: "Unbound Forces",
  effect: [
    "40% increased Chill Duration on Enemies",
    "40% increased Shock Duration",
    "25% increased Magnitude of Chill you inflict",
    "25% increased Magnitude of Shock you inflict",
  ],
  components: ["Distilled Disgust", "Distilled Envy", "Distilled Guilt"],
},
{
  name: "Harness the Elements",
  effect: ["15% increased Damage for each type of Elemental Ailment on Enemy"],
  components: ["Distilled Disgust", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Stormcharged",
  effect: ["40% increased Elemental Damage if you've dealt a Critical Hit Recently", "20% increased Critical Hit Chance"],
  components: ["Distilled Fear", "Distilled Fear", "Distilled Envy"],
},
{
  name: "Overexposure",
  effect: ["30% increased Cold Exposure Effect", "30% increased Fire Exposure Effect", "30% increased Lightning Exposure Effect"],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Greed"],
},
{
  name: "Breaking Point",
  effect: ["10% increased Duration of Elemental Ailments on Enemies", "30% increased Magnitude of Non-Damaging Ailments you inflict"],
  components: ["Distilled Fear", "Distilled Paranoia", "Distilled Fear"],
},
{
  name: "All Natural",
  effect: ["+5% to all Elemental Resistances", "30% increased Elemental Damage"],
  components: ["Distilled Fear", "Distilled Fear", "Distilled Greed"],
},
{
  name: "Stormbreaker",
  effect: ["15% increased Damage for each type of Elemental Ailment on Enemy"],
  components: ["Distilled Isolation", "Distilled Despair", "Distilled Guilt"],
},
{
  name: "Mind Eraser",
  effect: ["10% increased Mana Regeneration Rate", "6% of Damage taken Recouped as Mana"],
  components: ["Distilled Fear", "Distilled Ire", "Distilled Paranoia"],
},
{
  name: "Sturdy Mind",
  effect: ["+30 to maximum Mana", "14% increased Mana Regeneration Rate"],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Guilt"],
},
{
  name: "Mana Blessing",
  effect: ["+20 to maximum Mana", "5% increased maximum Mana"],
  components: ["Distilled Guilt", "Distilled Despair", "Distilled Guilt"],
},
{
  name: "Lucidity",
  effect: ["8% of Damage is taken from Mana before Life", "+15 to Intelligence"],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Suffering"],
},
{
  name: "Mental Toughness",
  effect: ["18% increased Mana Regeneration Rate", "15% reduced Mana Cost while not on Low Mana"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Greed"],
},
{
  name: "Arcane Intensity",
  effect: ["3% increased Spell Damage per 100 maximum Mana"],
  components: ["Distilled Disgust", "Distilled Fear", "Distilled Despair"],
},
{
  name: "Raw Mana",
  effect: ["12% increased maximum Mana", "10% increased Mana Cost of Skills"],
  components: ["Distilled Suffering", "Distilled Ire", "Distilled Isolation"],
},
{
  name: "Adverse Growth",
  effect: ["20% reduced Life Regeneration rate", "20% of Damage taken Recouped as Mana"],
  components: ["Distilled Ire", "Distilled Paranoia", "Distilled Disgust"],
},
{
  name: "Soul Bloom",
  effect: ["15% increased Energy Shield Recovery rate"],
  components: ["Distilled Despair", "Distilled Ire", "Distilled Isolation"],
},
{
  name: "Investing Energies",
  effect: ["40% increased Mana Regeneration Rate while stationary", "20% reduced Mana Regeneration Rate while moving"],
  components: ["Distilled Ire", "Distilled Ire", "Distilled Envy"],
},
{
  name: "Conservative Casting",
  effect: ["20% increased Mana Regeneration Rate", "8% reduced Mana Cost of Skills"],
  components: ["Distilled Disgust", "Distilled Disgust", "Distilled Ire"],
},
{
  name: "Full Recovery",
  effect: ["15% increased Life Regeneration rate", "15% increased Mana Regeneration Rate"],
  components: ["Distilled Despair", "Distilled Envy", "Distilled Guilt"],
},
{
  name: "Arcane Blossom",
  effect: ["15% increased Mana Recovery rate"],
  components: ["Distilled Envy", "Distilled Despair", "Distilled Despair"],
},
{
  name: "Aspiring Genius",
  effect: ["20% increased Mana Regeneration Rate", "10% chance to Gain Arcane Surge when you deal a Critical Hit"],
  components: ["Distilled Suffering", "Distilled Greed", "Distilled Greed"],
},
{
  name: "Open Mind",
  effect: ["25% increased Mana Regeneration Rate"],
  components: ["Distilled Guilt", "Distilled Guilt", "Distilled Ire"],
},
{
  name: "Touch the Arcane",
  effect: ["40% increased effect of Arcane Surge on you"],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Suffering"],
},
{
  name: "Ether Flow",
  effect: ["25% reduced Mana Regeneration Rate while stationary", "50% increased Mana Regeneration Rate while moving"],
  components: ["Distilled Envy", "Distilled Greed", "Distilled Envy"],
},
{
  name: "Price of Freedom",
  effect: ["10% reduced Mana Cost of Attacks", "18% of Skill Mana Costs Converted to Life Costs"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Ire"],
},
{
  name: "Suffusion",
  effect: ["30% increased amount of Mana Leeched", "Unaffected by Chill while Leeching Mana"],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Guilt"],
},
{
  name: "Siphon",
  effect: ["Recover 2% of Mana on Kill", "25% increased amount of Mana Leeched"],
  components: ["Distilled Paranoia", "Distilled Envy", "Distilled Guilt"],
},
{
  name: "Manifold Method",
  effect: ["50% increased amount of Mana Leeched", "25% increased chance to inflict Ailments against Rare or Unique Enemies"],
  components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Fear"],
},
{
  name: "Immortal Thirst",
  effect: ["15% increased maximum Energy Shield", "25% increased amount of Mana Leeched"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Guilt"],
},
{
  name: "Altered Brain Chemistry",
  effect: ["25% increased Mana Recovery from Flasks", "10% increased Mana Recovery Rate during Effect of any Mana Flask"],
  components: ["Distilled Ire", "Distilled Envy", "Distilled Guilt"],
},
{
  name: "Wellspring",
  effect: ["30% increased Mana Recovery from Flasks", "8% increased Attack and Cast Speed during Effect of any Mana Flask"],
  components: ["Distilled Disgust", "Distilled Greed", "Distilled Guilt"],
},
{
  name: "Arcane Alchemy",
  effect: ["Mana Flasks gain 0.1 charges per Second", "+10 to Intelligence"],
  components: ["Distilled Envy", "Distilled Greed", "Distilled Greed"],
},
{
  name: "Warding Potions",
  effect: ["10% reduced Flask Charges used from Mana Flasks", "Remove a Curse when you use a Mana Flask"],
  components: ["Distilled Greed", "Distilled Envy", "Distilled Paranoia"],
},
{
  name: "Waters of Life",
  effect: ["Recover 2% of Life when you use a Mana Flask", "Mana Flasks gain 0.1 charges per Second"],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Disgust"],
},
{
  name: "Finesse",
  effect: ["10% increased Accuracy Rating", "Gain Accuracy Rating equal to your Intelligence"],
  components: ["Distilled Fear", "Distilled Suffering", "Distilled Disgust"],
},
{
  name: "Determined Precision",
  effect: ["30% increased Accuracy Rating at Close Range", "+10 to Dexterity"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Envy"],
},
{
  name: "Eagle Eye",
  effect: ["+30 to Accuracy Rating", "10% increased Accuracy Rating"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Guilt"],
},
{
  name: "Locked On",
  effect: ["15% increased Critical Hit Chance for Attacks", "15% increased Accuracy Rating"],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Envy"],
},
{
  name: "Falcon Dive",
  effect: ["1% increased Attack Speed per 250 Accuracy Rating"],
  components: ["Distilled Isolation", "Distilled Paranoia", "Distilled Paranoia"],
},
{
  name: "Near Sighted",
  effect: ["60% increased Accuracy Rating at Close Range"],
  components: ["Distilled Ire", "Distilled Envy", "Distilled Paranoia"],
},
{
  name: "Far Sighted",
  effect: ["30% reduced penalty to Accuracy Rating at range"],
  components: ["Distilled Guilt", "Distilled Ire", "Distilled Fear"],
},
{
  name: "Sharp Sight",
  effect: ["5% increased Attack Speed", "30% increased Accuracy Rating against Rare or Unique Enemies"],
  components: ["Distilled Guilt", "Distilled Disgust", "Distilled Ire"],
},
{
  name: "Pinpoint Shot",
  effect: ["Attacks gain increased Accuracy Rating equal to their Critical Hit Chance"],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Envy"],
},
{
  name: "Coming Calamity",
  effect: [
    "50% increased Cold Damage while affected by Herald of Ice",
    "50% increased Fire Damage while affected by Herald of Ash",
    "50% increased Lightning Damage while affected by Herald of Thunder",
  ],
  components: ["Distilled Disgust", "Distilled Isolation", "Distilled Suffering"],
},
{
  name: "Fate Finding",
  effect: ["15% reduced Reservation of Herald Skills"],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Greed"],
},
{
  name: "Apocalypse",
  effect: ["40% reduced Damage", "+6% to Critical Hit Chance of Herald Skills"],
  components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Greed"],
},
{
  name: "Doomsayer",
  effect: ["Herald Skills have 30% increased Area of Effect", "Herald Skills deal 30% increased Damage"],
  components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Disgust"],
},
{
  name: "Bolstering Presence",
  effect: ["20% increased Effect of Auras from your Skills"],
  components: ["Distilled Despair", "Distilled Envy", "Distilled Suffering"],
},
{
  name: "Energise",
  effect: ["25% chance for Trigger skills to refund half of Energy Spent"],
  components: ["Distilled Isolation", "Distilled Guilt", "Distilled Paranoia"],
},
{
  name: "Invocated Efficiency",
  effect: ["Recover 3% of Mana when you Invoke a Spell", "Triggered Spells deal 45% increased Spell Damage"],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Paranoia"],
},
{
  name: "Dynamism",
  effect: ["40% increased Damage if you've Triggered a Skill Recently", "Meta Skills gain 15% increased Energy"],
  components: ["Distilled Isolation", "Distilled Greed", "Distilled Ire"],
},
{
  name: "Protraction",
  effect: ["20% increased Skill Effect Duration", "15% increased Duration of Damaging Ailments on Enemies"],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Guilt"],
},
{
  name: "Preservation",
  effect: ["25% increased Skill Effect Duration"],
  components: ["Distilled Disgust", "Distilled Suffering", "Distilled Ire"],
},
{
  name: "Tides of Change",
  effect: ["25% increased Skill Effect Duration"],
  components: ["Distilled Paranoia", "Distilled Suffering", "Distilled Fear"],
},
{
  name: "Forthcoming",
  effect: ["16% reduced Skill Effect Duration", "10% increased Cooldown Recovery Rate"],
  components: ["Distilled Despair", "Distilled Greed", "Distilled Suffering"],
},
{
  name: "Twinned Tethers",
  effect: ["Link Skills Link to 1 additional random target"],
  components: ["Distilled Guilt", "Distilled Envy", "Distilled Disgust"],
},
{
  name: "Strong Links",
  effect: ["Link Skills have 20% increased Buff Effect", "Link Skills have 20% increased Skill Effect Duration"],
  components: ["Distilled Guilt", "Distilled Disgust", "Distilled Envy"],
},
{
  name: "Spirit Bonds",
  effect: ["Link Skills can target Damageable Minions"],
  components: ["Distilled Greed", "Distilled Ire", "Distilled Suffering"],
},
{
  name: "Swift Claw",
  effect: ["25% increased Attack Damage"],
  components: ["Distilled Suffering", "Distilled Fear", "Distilled Despair"],
},
{
  name: "Tough Claw",
  effect: ["25% increased Attack Damage"],
  components: ["Distilled Greed", "Distilled Ire", "Distilled Despair"],
},
{
  name: "Sharpened Claw",
  effect: ["25% increased Attack Damage"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Greed"],
},
{
  name: "Bestial Rage",
  effect: ["25% increased Attack Damage"],
  components: ["Distilled Ire", "Distilled Disgust", "Distilled Fear"],
},
{
  name: "Feral Force",
  effect: ["25% increased Attack Damage"],
  components: ["Distilled Fear", "Distilled Suffering", "Distilled Paranoia"],
},
{
  name: "First Approach",
  effect: [
    "50% increased Critical Hit Chance against Enemies on Full Life",
    "Cannot be Blinded while on Full Life",
    "80% increased Damage with Hits against Enemies that are on Full Life",
  ],
  components: ["Distilled Paranoia", "Distilled Ire", "Distilled Fear"],
},
{
  name: "Finishing Blows",
  effect: [
    "60% increased Damage with Hits against Enemies that are on Low Life",
    "30% increased Stun Buildup against Enemies that are on Low Life",
  ],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Ire"],
},
{
  name: "Stars Aligned",
  effect: ["Damage with Hits is Lucky against Enemies that are on Low Life"],
  components: ["Distilled Suffering", "Distilled Envy", "Distilled Isolation"],
},
{
  name: "Mental Perseverance",
  effect: ["10% of Damage is taken from Mana before Life"],
  components: ["Distilled Ire", "Distilled Disgust", "Distilled Greed"],
},
{
  name: "Two-Pronged Attack",
  effect: ["Minions deal 25% increased Damage"],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Guilt"],
},
{
  name: "Resourceful Ally",
  effect: ["Minions deal 25% increased Damage"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Suffering"],
},
{
  name: "Sturdy Ally",
  effect: ["Minions have 25% increased maximum Life"],
  components: ["Distilled Fear", "Distilled Greed", "Distilled Despair"],
},
{
  name: "Unimpeded",
  effect: ["24% reduced Slowing Potency of Debuffs on You"],
  components: ["Distilled Isolation", "Distilled Envy", "Distilled Isolation"],
},
{
  name: "Near at Hand",
  effect: ["16% reduced Skill Effect Duration", "10% reduced Slowing Potency of Debuffs on You"],
  components: ["Distilled Paranoia", "Distilled Isolation", "Distilled Paranoia"],
},
{
  name: "Time Manipulation",
  effect: ["Debuffs you inflict have 10% increased Slow Magnitude", "Debuffs on you expire 20% faster"],
  components: ["Distilled Fear", "Distilled Despair", "Distilled Envy"],
},
{
  name: "Chronomancy",
  effect: ["20% increased Skill Effect Duration", "Debuffs you inflict have 10% increased Slow Magnitude"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Despair"],
},
{
  name: "Hindered Capabilities",
  effect: ["30% increased Damage with Hits against Hindered Enemies", "Debuffs you inflict have 10% increased Slow Magnitude"],
  components: ["Distilled Suffering", "Distilled Greed", "Distilled Envy"],
},
{
  name: "Quick-change Act",
  effect: ["50% increased Weapon Swap Speed"],
  components: ["Distilled Envy", "Distilled Disgust", "Distilled Ire"],
},
{
  name: "Catalysis",
  effect: [
    "20% increased Elemental Damage with Attacks",
    "5% of Physical Damage from Hits taken as Damage of a Random Element",
  ],
  components: ["Distilled Isolation", "Distilled Isolation", "Distilled Paranoia"],
},
{
  name: "Crystal Elixir",
  effect: ["40% increased Elemental Damage with Attack Skills during any Flask Effect"],
  components: ["Distilled Fear", "Distilled Suffering", "Distilled Greed"],
},
{
  name: "Forces of Nature",
  effect: ["Attack Damage Penetrates 15% of Enemy Elemental Resistances"],
  components: ["Distilled Suffering", "Distilled Isolation", "Distilled Ire"],
},
{
  name: "Emboldened Avatar",
  effect: [
    "25% increased chance to Ignite",
    "25% increased Freeze Buildup",
    "25% increased chance to Shock",
    "25% increased Electrocute Buildup",
  ],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Greed"],
},
{
  name: "Pocket Sand",
  effect: ["50% increased Blind Effect"],
  components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Paranoia"],
},
{
  name: "Acceleration",
  effect: ["3% increased Movement Speed", "10% increased Skill Speed"],
  components: ["Distilled Fear", "Distilled Envy", "Distilled Disgust"],
},
{
  name: "Adrenaline Rush",
  effect: ["4% increased Movement Speed if you've Killed Recently", "8% increased Attack Speed if you've Killed Recently"],
  components: ["Distilled Disgust", "Distilled Ire", "Distilled Fear"],
},
{
  name: "Primal Growth",
  effect: ["20% increased Area of Effect if you've Killed Recently", "10% increased Area of Effect for Attacks"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Fear"],
},
{
  name: "Impact Area",
  effect: ["15% increased Area of Effect if you have Stunned an Enemy Recently", "15% increased Area of Effect for Attacks"],
  components: ["Distilled Paranoia", "Distilled Envy", "Distilled Disgust"],
},
{
  name: "Devastation",
  effect: ["15% increased Area of Effect for Attacks", "15% increased Attack Area Damage"],
  components: ["Distilled Ire", "Distilled Ire", "Distilled Despair"],
},
{
  name: "Impact Force",
  effect: ["20% increased Stun Buildup", "25% increased Attack Area Damage"],
  components: ["Distilled Fear", "Distilled Ire", "Distilled Fear"],
},
{
  name: "Authority",
  effect: ["20% increased Area of Effect for Attacks", "10% increased Cooldown Recovery Rate"],
  components: ["Distilled Greed", "Distilled Envy", "Distilled Suffering"],
},
{
  name: "Crushing Judgement",
  effect: ["25% increased Armour Break Duration", "25% increased Attack Area Damage"],
  components: ["Distilled Greed", "Distilled Isolation", "Distilled Ire"],
},
{
  name: "Reverberating Impact",
  effect: ["Break 25% increased Armour", "16% increased Area of Effect for Attacks"],
  components: ["Distilled Envy", "Distilled Paranoia", "Distilled Despair"],
},
{
  name: "Roil",
  effect: ["Spell Skills have 30% increased Area of Effect", "10% reduced Spell Area Damage"],
  components: ["Distilled Disgust", "Distilled Greed", "Distilled Ire"],
},
{
  name: "Repulsion",
  effect: ["Area Skills have 20% chance to Knock Enemies Back on Hit", "20% increased Spell Area Damage"],
  components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Despair"],
},
{
  name: "Echoing Pulse",
  effect: ["Final Repeat of Spells has 40% increased Area of Effect"],
  components: ["Distilled Fear", "Distilled Envy", "Distilled Ire"],
},
{
  name: "Reverberation",
  effect: ["Spell Skills have 20% increased Area of Effect"],
  components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Fear"],
},
{
  name: "Ruin",
  effect: ["Spell Skills have 10% reduced Area of Effect", "35% increased Spell Area Damage"],
  components: ["Distilled Greed", "Distilled Despair", "Distilled Suffering"],
},
{
  name: "Turn the Clock Back",
  effect: ["20% reduced Projectile Speed for Spell Skills"],
  components: ["Distilled Fear", "Distilled Fear", "Distilled Despair"],
},
{
  name: "Turn the Clock Forward",
  effect: ["20% increased Projectile Speed for Spell Skills"],
  components: ["Distilled Despair", "Distilled Fear", "Distilled Guilt"],
},
{
  name: "Psychic Fragmentation",
  effect: ["12% chance for Spell Skills to fire 2 additional Projectiles"],
  components: ["Distilled Paranoia", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Radial Force",
  effect: ["10% increased Area of Effect", "10% increased Area Damage"],
  components: ["Distilled Paranoia", "Distilled Greed", "Distilled Ire"],
},
{
  name: "Cull the Hordes",
  effect: ["25% increased Culling Strike Threshold"],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Suffering"],
},
{
  name: "Giantslayer",
  effect: [
    "25% increased Damage with Hits against Rare and Unique Enemies",
    "20% increased Accuracy Rating against Rare or Unique Enemies",
    "20% increased chance to inflict Ailments against Rare or Unique Enemies",
  ],
  components: ["Distilled Despair", "Distilled Isolation", "Distilled Despair"],
},
{
  name: "Crushing Verdict",
  effect: ["5% reduced Attack Speed", "30% increased Stun Buildup", "50% increased Attack Damage"],
  components: ["Distilled Envy", "Distilled Suffering", "Distilled Ire"],
},
{
  name: "Lasting Trauma",
  effect: [
    "5% reduced Attack Speed",
    "30% increased Magnitude of Ailments you inflict",
    "20% increased Duration of Damaging Ailments on Enemies",
  ],
  components: ["Distilled Suffering", "Distilled Paranoia", "Distilled Envy"],
},
{
  name: "Seeing Stars",
  effect: ["25% increased Daze Buildup", "25% increased Daze Duration"],
  components: ["Distilled Ire", "Distilled Guilt", "Distilled Paranoia"],
},
{
  name: "Stupefy",
  effect: [
    "25% increased Critical Hit Chance against Dazed Enemies",
    "25% increased Damage against Dazed Enemies",
    "25% increased Daze Buildup",
  ],
  components: ["Distilled Paranoia", "Distilled Despair", "Distilled Paranoia"],
},
{
  name: "Revenge",
  effect: ["12% increased Attack Speed if you've been Hit Recently"],
  components: ["Distilled Ire", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Retaliation",
  effect: ["75% increased Thorns damage if you've Blocked Recently"],
  components: ["Distilled Ire", "Distilled Fear", "Distilled Suffering"],
},
{
  name: "Spiked Armour",
  effect: ["Gain Physical Thorns damage equal to 2% of Armour from equipped Body Armour"],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Disgust"],
},
{
  name: "Vengeance",
  effect: ["40% increased Thorns damage"],
  components: ["Distilled Guilt", "Distilled Fear", "Distilled Envy"],
},
{
  name: "Thornhide",
  effect: ["+5% to Thorns Critical Hit Chance"],
  components: ["Distilled Ire", "Distilled Greed", "Distilled Fear"],
},
{
  name: "In the Thick of It",
  effect: ["Regenerate 2.5% of Life per second while Surrounded"],
  components: ["Distilled Disgust", "Distilled Despair", "Distilled Greed"],
},
{
  name: "Thrill of Battle",
  effect: ["20% increased Attack Speed while Surrounded"],
  components: ["Distilled Guilt", "Distilled Suffering", "Distilled Ire"],
},
{
  name: "Silent Guardian",
  effect: ["Minions have +20% to all Elemental Resistances"],
  components: ["Distilled Fear", "Distilled Greed", "Distilled Disgust"],
},
{
  name: "Bringer of Order",
  effect: ["Minions deal 25% increased Damage"],
  components: ["Distilled Envy", "Distilled Fear", "Distilled Disgust"],
},
{
  name: "Holy Protector",
  effect: ["Minions have 25% increased maximum Life"],
  components: ["Distilled Disgust", "Distilled Despair", "Distilled Suffering"],
},
{
  name: "Aftershocks",
  effect: ["40% increased Aftershock Area of Effect"],
  components: ["Distilled Despair", "Distilled Guilt", "Distilled Greed"],
},
{
  name: "Hold Focus",
  effect: ["15% increased Effect of your Mark Skills"],
  components: ["Distilled Envy", "Distilled Isolation", "Distilled Paranoia"],
},
{
  name: "Marked for Death",
  effect: ["Culling Strike against Enemies you Mark"],
  components: ["Distilled Isolation", "Distilled Suffering", "Distilled Guilt"],
},
{
  name: "No Escape",
  effect: ["Mark Skills have 60% increased Skill Effect Duration"],
  components: ["Distilled Greed", "Distilled Disgust", "Distilled Disgust"],
},
{
  name: "Break Focus",
  effect: ["Enemies you Mark have 15% reduced Accuracy Rating"],
  components: ["Distilled Paranoia", "Distilled Envy", "Distilled Ire"],
},
{
  name: "Marked for Sickness",
  effect: ["Enemies you Mark take 10% increased Damage"],
  components: ["Distilled Guilt", "Distilled Disgust", "Distilled Isolation"],
},
{
  name: "Marked Agility",
  effect: ["30% reduced Mana Cost of Mark Skills", "4% increased Movement Speed if you've cast a Mark Spell Recently"],
  components: ["Distilled Despair", "Distilled Disgust", "Distilled Suffering"],
},
{
  name: "Unsight",
  effect: ["Enemies near Enemies you Mark are Blinded", "Enemies you Mark cannot deal Critical Hits"],
  components: ["Distilled Suffering", "Distilled Disgust", "Distilled Despair"],
},
{
  name: "Stigmata",
  effect: ["Offerings have 30% increased Maximum Life", "Recover 3% of Life when you create an Offering"],
  components: ["Distilled Disgust", "Distilled Guilt", "Distilled Fear"],
},
{
  name: "Meat Recycling",
  effect: ["15% chance to not destroy Corpses when Consuming Corpses"],
  components: ["Distilled Paranoia", "Distilled Despair", "Distilled Guilt"],
},
{
  name: "Lust for Sacrifice",
  effect: ["40% increased Minion Damage while you have at least two different active Offerings"],
  components: ["Distilled Disgust", "Distilled Suffering", "Distilled Paranoia"],
},
{
  name: "Vile Wounds",
  effect: ["33% increased Damage with Hits against Enemies affected by Elemental Ailments"],
  components: ["Distilled Paranoia", "Distilled Despair", "Distilled Suffering"],
},
{
  name: "Exploit",
  effect: [
    "25% increased Damage with Hits against Enemies affected by Elemental Ailments",
    "15% increased Duration of Ignite, Shock and Chill on Enemies",
  ],
  components: ["Distilled Disgust", "Distilled Envy", "Distilled Isolation"],
},
{
  name: "Exploit the Elements",
  effect: [
    "24% increased Damage with Hits against Enemies affected by Elemental Ailments",
    "30% increased chance to inflict Ailments against Rare or Unique Enemies",
  ],
  components: ["Distilled Greed", "Distilled Fear", "Distilled Isolation"],
},
{
  name: "Clean Shot",
  effect: ["15% chance to Pierce an Enemy", "15% increased Projectile Damage"],
  components: ["Distilled Despair", "Distilled Ire", "Distilled Greed"],
},
{
  name: "Ricochet",
  effect: [
    "15% increased Projectile Damage",
    "Projectiles have 10% chance to Chain an additional time from terrain",
  ],
  components: ["Distilled Ire", "Distilled Disgust", "Distilled Disgust"],
},
  {
    name: "Stand and Deliver",
    effect: [
      "Projectiles have 40% increased Critical Damage Bonus against Enemies within 2m",
      "Projectiles deal 25% increased Damage with Hits against Enemies within 2m",
    ],
    components: ["Distilled Disgust", "Distilled Greed", "Distilled Isolation"],
  },
  {
    name: "Death from Afar",
    effect: [
      "Projectiles have 25% increased Critical Hit Chance against Enemies further than 6m",
      "Projectiles deal 25% increased Damage with Hits against Enemies further than 6m",
    ],
    components: ["Distilled Isolation", "Distilled Fear", "Distilled Guilt"],
  },
  {
    name: "Brutal",
    effect: ["10% increased Stun Buildup", "16% increased Melee Damage", "+10 to Strength"],
    components: ["Distilled Despair", "Distilled Despair", "Distilled Envy"],
  },
  {
    name: "Relentless",
    effect: ["15% increased Armour", "Regenerate 0.5% of Life per second", "+10 to Strength"],
    components: ["Distilled Despair", "Distilled Despair", "Distilled Greed"],
  },
  {
    name: "Blur",
    effect: ["4% increased Movement Speed", "20% increased Evasion Rating", "+10 to Dexterity"],
    components: ["Distilled Paranoia", "Distilled Disgust", "Distilled Ire"],
  },
  {
    name: "Honed Instincts",
    effect: ["8% increased Projectile Speed", "8% increased Attack Speed", "+10 to Dexterity"],
    components: ["Distilled Despair", "Distilled Envy", "Distilled Paranoia"],
  },
  {
    name: "Raw Power",
    effect: [
      "20% increased Spell Damage",
      "+10 to Intelligence",
      "Witch: 16% increased Spell Damage",
      "Witch: Minions deal 16% increased Damage",
      "Witch: +10 to Intelligence",
    ],
    components: ["Distilled Greed", "Distilled Envy", "Distilled Despair"],
  },
  {
    name: "Pure Energy",
    effect: ["30% increased maximum Energy Shield", "+10 to Intelligence"],
    components: ["Distilled Fear", "Distilled Guilt", "Distilled Disgust"],
  },
  {
    name: "Battle-hardened",
    effect: [
      "Hits against you have 20% reduced Critical Damage Bonus",
      "20% increased Armour and Evasion Rating",
      "+5 to Strength and Dexterity",
    ],
    components: ["Distilled Greed", "Distilled Guilt", "Distilled Paranoia"],
  },
  {
    name: "Remorseless",
    effect: ["15% increased Projectile Damage", "30% increased Stun Buildup against enemies within 2 metres", "+5 to Strength and Dexterity"],
    components: ["Distilled Greed", "Distilled Disgust", "Distilled Guilt"],
  },
  {
    name: "Relentless Vindicator",
    effect: ["10% increased Damage", "10% increased Critical Hit Chance", "+5 to Strength and Intelligence"],
    components: ["Distilled Envy", "Distilled Paranoia", "Distilled Envy"],
  },
  {
    name: "Devoted Protector",
    effect: ["10% increased Mana Regeneration Rate", "Regenerate 0.5% of Life per second", "+5 to Strength and Intelligence"],
    components: ["Distilled Despair", "Distilled Envy", "Distilled Envy"],
  },
  {
    name: "Flow Like Water",
    effect: ["8% increased Attack and Cast Speed", "+5 to Dexterity and Intelligence"],
    components: ["Distilled Greed", "Distilled Guilt", "Distilled Despair"],
  },
  {
    name: "Step Like Mist",
    effect: ["4% increased Movement Speed", "15% increased Mana Regeneration Rate", "+5 to Dexterity and Intelligence"],
    components: ["Distilled Despair", "Distilled Despair", "Distilled Ire"],
  },
  {
    name: "Sudden Escalation",
    effect: ["16% increased Critical Hit Chance for Spells", "8% increased Cast Speed if you've dealt a Critical Hit Recently"],
    components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Fear"],
  },
  {
    name: "Critical Overload",
    effect: ["15% increased Critical Hit Chance for Spells", "15% increased Spell Damage if you've dealt a Critical Hit Recently"],
    components: ["Distilled Guilt", "Distilled Envy", "Distilled Ire"],
  },
  {
    name: "Controlling Magic",
    effect: ["25% increased Critical Hit Chance for Spells", "Hits have 25% reduced Critical Hit Chance against you"],
    components: ["Distilled Envy", "Distilled Fear", "Distilled Isolation"],
  },
  {
    name: "Equilibrium",
    effect: ["30% increased Attack Damage if you've Cast a Spell Recently", "10% increased Cast Speed if you've Attacked Recently"],
    components: ["Distilled Fear", "Distilled Suffering", "Distilled Despair"],
  },
  {
    name: "Forcewave",
    effect: ["20% increased Stun Buildup", "20% increased Knockback Distance", "+10 to Strength"],
    components: ["Distilled Greed", "Distilled Paranoia", "Distilled Paranoia"],
  },
  {
    name: "Clear Space",
    effect: ["20% increased Knockback Distance", "20% chance to Knock Enemies Back with Hits at Close Range"],
    components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Guilt"],
  },
  {
    name: "Exposed to the Inferno",
    effect: [
      "Damage Penetrates 15% Fire Resistance",
      "Fire Exposure you inflict lowers Total Fire Resistance by an extra 5%",
    ],
    components: ["Distilled Isolation", "Distilled Envy", "Distilled Disgust"],
  },
  {
    name: "Breath of Fire",
    effect: ["Damage Penetrates 15% Fire Resistance", "+10 to Strength"],
    components: ["Distilled Fear", "Distilled Ire", "Distilled Isolation"],
  },
  {
    name: "Cremation",
    effect: ["Damage Penetrates 18% Fire Resistance", "25% increased Fire Exposure Effect"],
    components: ["Distilled Isolation", "Distilled Disgust", "Distilled Isolation"],
  },
  {
    name: "Smoke Inhalation",
    effect: ["Damage Penetrates 15% Fire Resistance", "15% increased Duration of Damaging Ailments on Enemies"],
    components: ["Distilled Isolation", "Distilled Envy", "Distilled Fear"],
  },
  {
    name: "Overheating Blow",
    effect: ["Hits that Heavy Stun inflict Fire Exposure"],
    components: ["Distilled Disgust", "Distilled Suffering", "Distilled Guilt"],
  },
  {
    name: "Shattered Crystal",
    effect: ["60% reduced Ice Crystal Life"],
    components: ["Distilled Suffering", "Distilled Fear", "Distilled Ire"],
  },
  {
    name: "Ice Walls",
    effect: ["200% increased Ice Crystal Life"],
    components: ["Distilled Fear", "Distilled Paranoia", "Distilled Disgust"],
  },
  {
    name: "Storm Swell",
    effect: ["Damage Penetrates 15% Cold Resistance", "Damage Penetrates 8% Lightning Resistance"],
    components: ["Distilled Envy", "Distilled Suffering", "Distilled Suffering"],
  },
  {
    name: "Exposed to the Cosmos",
    effect: [
      "Damage Penetrates 15% Cold Resistance",
      "Cold Exposure you inflict lowers Total Cold Resistance by an extra 5%",
    ],
    components: ["Distilled Isolation", "Distilled Fear", "Distilled Paranoia"],
  },
  {
    name: "Snowpiercer",
    effect: ["Damage Penetrates 15% Cold Resistance", "+10 to Intelligence"],
    components: ["Distilled Isolation", "Distilled Guilt", "Distilled Disgust"],
  },
  {
    name: "Breath of Ice",
    effect: ["Damage Penetrates 15% Cold Resistance", "+10 to Intelligence"],
    components: ["Distilled Suffering", "Distilled Disgust", "Distilled Suffering"],
  },
  {
    name: "Glaciation",
    effect: ["Damage Penetrates 18% Cold Resistance", "25% increased Cold Exposure Effect"],
    components: ["Distilled Paranoia", "Distilled Guilt", "Distilled Isolation"],
  },
  {
    name: "Overload",
    effect: ["Damage Penetrates 10% Lightning Resistance if on Low Mana", "Damage Penetrates 15% Lightning Resistance"],
    components: ["Distilled Paranoia", "Distilled Isolation", "Distilled Envy"],
  },
  {
    name: "Exposed to the Storm",
    effect: ["Damage Penetrates 18% Lightning Resistance", "30% increased Critical Hit Chance against enemies with Lightning Exposure"],
    components: ["Distilled Envy", "Distilled Isolation", "Distilled Despair"],
  },
  {
    name: "Storm Surge",
    effect: ["Damage Penetrates 8% Cold Resistance", "Damage Penetrates 15% Lightning Resistance"],
    components: ["Distilled Envy", "Distilled Isolation", "Distilled Greed"],
  },
  {
    name: "Breath of Lightning",
    effect: ["Damage Penetrates 15% Lightning Resistance", "+10 to Dexterity"],
    components: ["Distilled Disgust", "Distilled Paranoia", "Distilled Isolation"],
  },
  {
    name: "Surging Currents",
    effect: ["Damage Penetrates 15% Lightning Resistance", "+10 to Dexterity"],
    components: ["Distilled Fear", "Distilled Envy", "Distilled Isolation"],
  },
  {
    name: "Electric Amplification",
    effect: ["Damage Penetrates 18% Lightning Resistance", "25% increased Lightning Exposure Effect"],
    components: ["Distilled Isolation", "Distilled Fear", "Distilled Disgust"],
  },
  {
    name: "Lightning Rod",
    effect: ["Lightning Damage with Non-Critical Hits is Lucky"],
    components: ["Distilled Suffering", "Distilled Isolation", "Distilled Isolation"],
  },
  {
    name: "Electrotherapy",
    effect: ["5% increased Skill Speed", "30% increased Electrocute Buildup"],
    components: ["Distilled Suffering", "Distilled Ire", "Distilled Guilt"],
  },
  {
    name: "Way of the Wind",
    effect: [
      "25% increased Evasion if you have Hit an Enemy Recently",
      "50% increased maximum Dash Distance with Unarmed Attack Skills",
    ],
    components: ["Distilled Guilt", "Distilled Greed", "Distilled Despair"],
  },
  {
    name: "Flurry",
    effect: [
      "20% increased Area of Effect while Unarmed",
      "25% reduced Damage with Unarmed Attacks",
      "20% increased Unarmed Attack Speed",
    ],
    components: ["Distilled Fear", "Distilled Suffering", "Distilled Guilt"],
  },
  {
    name: "Pressure Points",
    effect: ["35% increased Stun Buildup", "35% increased Freeze Buildup"],
    components: ["Distilled Guilt", "Distilled Despair", "Distilled Ire"],
  },
  {
    name: "Breakage",
    effect: ["Break 60% increased Armour", "10% chance to Defend with 200% of Armour"],
    components: ["Distilled Fear", "Distilled Envy", "Distilled Greed"],
  },
  {
    name: "Pile On",
    effect: ["60% increased Damage against Enemies with Fully Broken Armour"],
    components: ["Distilled Isolation", "Distilled Ire", "Distilled Ire"],
  },
  {
    name: "Irreparable",
    effect: ["100% increased Armour Break Duration"],
    components: ["Distilled Guilt", "Distilled Despair", "Distilled Disgust"],
  },
  {
    name: "Cruel Methods",
    effect: ["Break 40% increased Armour", "25% increased Physical Damage"],
    components: ["Distilled Suffering", "Distilled Envy", "Distilled Paranoia"],
  },
  {
    name: "Perforation",
    effect: [
      "20% chance for Bleeding to be Aggravated when Inflicted against Enemies on Jagged Ground",
      "40% increased Jagged Ground Duration",
    ],
    components: ["Distilled Greed", "Distilled Greed", "Distilled Suffering"],
  },
  {
    name: "Spike Pit",
    effect: ["Enemies in Jagged Ground you create take 10% increased Damage"],
    components: ["Distilled Isolation", "Distilled Isolation", "Distilled Greed"],
  },
  {
    name: "Distracting Presence",
    effect: ["10% increased Cooldown Recovery Rate", "Enemies in your Presence have 10% reduced Cooldown Recovery Rate"],
    components: ["Distilled Envy", "Distilled Guilt", "Distilled Suffering"],
  },
  {
    name: "Multitasking",
    effect: ["15% increased Skill Effect Duration", "12% increased Cooldown Recovery Rate"],
    components: ["Distilled Paranoia", "Distilled Disgust", "Distilled Fear"],
  },
  {
    name: "Volatile Catalyst",
    effect: ["10% increased Area of Effect", "10% increased Cooldown Recovery Rate"],
    components: ["Distilled Greed", "Distilled Guilt", "Distilled Ire"],
  },
  {
    name: "Deterioration",
    effect: [
      "Damaging Ailments Cannot Be inflicted on you while you already have one",
      "20% increased Magnitude of Damaging Ailments you inflict",
    ],
    components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Isolation"],
  },
  {
    name: "Exposed Wounds",
    effect: ["15% increased chance to inflict Ailments", "Break 30% increased Armour on enemies affected by Ailments"],
    components: ["Distilled Envy", "Distilled Paranoia", "Distilled Greed"],
  },
  {
    name: "Fast Acting Toxins",
    effect: ["Damaging Ailments deal damage 12% faster"],
    components: ["Distilled Paranoia", "Distilled Greed", "Distilled Isolation"],
  },
  {
    name: "Wasting",
    effect: ["15% increased Duration of Damaging Ailments on Enemies", "30% increased Damage with Hits against Enemies affected by Ailments"],
    components: ["Distilled Guilt", "Distilled Fear", "Distilled Despair"],
  },
  {
    name: "Master Fletching",
    effect: ["30% increased bonuses gained from Equipped Quiver"],
    components: ["Distilled Fear", "Distilled Despair", "Distilled Disgust"],
  },
  {
    name: "Grenadier",
    effect: ["Grenade Skills have +1 Cooldown Use"],
    components: ["Distilled Paranoia", "Distilled Fear", "Distilled Isolation"],
  },
  {
    name: "Cluster Bombs",
    effect: ["50% increased Grenade fuse duration", "Grenade Skills Fire an additional Projectile"],
    components: ["Distilled Suffering", "Distilled Isolation", "Distilled Disgust"],
  },
  {
    name: "Volatile Grenades",
    effect: ["25% reduced Grenade fuse duration"],
    components: ["Distilled Paranoia", "Distilled Ire", "Distilled Despair"],
  },
  {
    name: "Pinned Down",
    effect: ["Enemies are Maimed for 4 seconds after becoming Unpinned", "40% increased Pin Buildup"],
    components: ["Distilled Disgust", "Distilled Despair", "Distilled Envy"],
  },
  {
    name: "Pin and Run",
    effect: ["30% increased Pin Buildup", "5% increased Movement Speed if you've Pinned an Enemy Recently"],
    components: ["Distilled Disgust", "Distilled Despair", "Distilled Disgust"],
  },
  {
    name: "Primal Protection",
    effect: ["25% increased Charm Effect Duration", "25% increased Charm Charges gained"],
    components: ["Distilled Guilt", "Distilled Greed", "Distilled Paranoia"],
  },
  {
    name: "Vale Shelter",
    effect: ["Charms gain 0.15 charges per Second"],
    components: ["Distilled Greed", "Distilled Disgust", "Distilled Despair"],
  },
  {
    name: "Thicket Warding",
    effect: ["20% chance for Charms you use to not consume Charges", "Recover 5% of Mana when a Charm is used"],
    components: ["Distilled Paranoia", "Distilled Fear", "Distilled Paranoia"],
  },
  {
    name: "Lucky Rabbit Foot",
    effect: ["30% increased Damage while you have an active Charm", "6% increased Movement Speed while you have an active Charm"],
    components: ["Distilled Isolation", "Distilled Disgust", "Distilled Ire"],
  },
  {
    name: "Woodland Aspect",
    effect: ["Charms applied to you have 25% increased Effect"],
    components: ["Distilled Suffering", "Distilled Guilt", "Distilled Isolation"],
  },
  {
    name: "Hunter's Talisman",
    effect: ["+1 Charm Slot"],
    components: ["Distilled Paranoia", "Distilled Paranoia", "Distilled Paranoia"],
  },
];


function App() {
  console.log(test)

  //Overwhelm, Escape Strategy, True Strike, Critical Exploit,Serrated Edges, Viciousness, Catapult, Unbound Forces, Adverse Growth
  // Conservative Casting, Sharpened Claw, Ricochet
  // RICCHET FALLING THUNDER

  // List of components to exclude
const excludeComponents = ['fear', 'suffering', 'despair', 'isolation'];

// Function to filter out items based on excluded components
const filterItems = (items: any, excluded: any) => {
  if (excluded ) {
  return items.filter((item: any) => 
    !item.components.some((component: any) => excluded.some((exclusion: any) => component.toLowerCase().includes(exclusion)))
  );
} else {
  return items;
}
};

const filteredItems = filterItems(test, excludeComponents);


  return (
    <>
      <div>
          Total: {filteredItems.length}
         {filteredItems.map((item: any, index: any) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.effect}</h2>
            <h3>{item.components.join(' - ')}</h3>
            </div>
         ))}
       </div>
    </>
  )
}

export default App
