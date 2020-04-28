# Pokemon Go Type-Chart
## (v0.1)

This project was bootstrapped via [Create React App](https://github.com/facebook/create-react-app) w/TypeScript.

It renders a table from a JSON stats file that compares strengths\weaknesses for all Pokemon Types. Specifically, this *only* handles the damage system from Pokémon **GO**, not the main series which has actual immunities and basically a different set of stats.

FYI: React + Typescript for a One-Page-Table is **absurd**. This sort of information should be static-rendered. Mainly I'm doing this to experiment with TS, the UI, for the sake of prettier code management of the icons...

Big thanks to [Simone Masiero](https://github.com/duiker101/pokemon-type-svg-icons) & [Daniel Motta](https://dribbble.com/shots/4862612-Pokedex-iOS-app) for the Pokemon Icon SVG assets!

Ditto for my thanks to [Roundicons](https://roundicons.com/icon-packs/pokemon-go-filled-outline-icons/) for the source logo assets!


## TASK LIST...
  * **BUGFIX?**: Site disappears on gh-pages build? The [repo setting](https://github.com/r-i-c-h/pogo-types/settings) `custom domain` field should say `www.pogotypes.com` ...
  * **TODO**: Column Widths via grid?? TBD...
  * **TODO**: Test on iOS Safari
  * **BUGFIX**: No <thead> position:sticky behavior in Chrome
  * **FEAT**: Make it a PWA...
  * **FEAT**: Display Only rows relevant to particular Pokemon(s) (aka Dual-Types shows 2 rows)
  * **FEAT**: Allow for user specified glyph replacements.
  * **FEAT**: Choose an attacker (lookup its possible moves), choose a defender. Show interactions between offensive move types and defender's resistances...

---

# DevNotes:

https://codepen.io/MadeByMike/pen/bEEGvv?editors=1100 - Fluid Vertical Rhythm? Or perhaps not...

### Specific "Double Resistance" when X attacks Y:
* Ghost => Normal
* Normal => Ghost
* Fighting => Ghost
* Dragon => Fairy
* Poison => Steel
* Psychic => Dark
* Electric => Ground
* Ground => Flying

---
## Colors

### Colors Pulled From Pogo site:
  * Pogo Red - #ED2721
  * Pogo Yellow - #FFCC03
  * Pogo YellowDrk - #D4A507
  * Pogo TrdScreenBlue - #6FC5F8
  * Pogo SkyBlue - #4EC2EF
  * Pogo Gray - #ECE8EE
#### CSS Colors from prev:
```css
.bug { background: #92BC2C; } // With some dark alts..
.dark { background: #595761; } // #605F6E // #545568
.dragon { background: #0C69C8; }
.electric { background: #F2D94E; } //  #FDCE36
.fire { background: #FBA54C; } // #FD9419
.fairy { background: #EE90E6;}
.fighting { background: #D3425F;}
.flying { background: #A1BBEC;} //  #5B71CE
.ghost { background: #5F6DBC;} //
.grass { background: #5FBD58;} // #2F9F3B
.ground { background: #DA7C4D;} // #BB5522
.ice { background: #75D0C1;}    //
.normal { background: #A0A29F;} // #979EA5
.poison { background: #B763CF;}
.psychic { background: #FA8581;} // #FD7767
.rock { background: #C9BB8A;}
.steel { background: #5695A3;}
.water { background: #539DDF;} // #4FA6D6
```

---
#### "SVG Stuff"

In original SVGs for each file had `fill="none"`, but the independent `<path>` elements within each one had `fill="#fff"`
Icons' core viewBox size is 512 x 512

To minify SVGs:
  `svgo --folder=./orig-icons --output=./svgs --disable=removeviewbox --enable=removeDimensions,cleanupListOfValues,sortAttrs`

To combine files (though has no ____)
 `cat *.svg > mergedfile.svg`


The `use` code I went with was `return (<use href={'#'.concat(name)} />);`.

Have also seen it as:
  * `<use xlink:href=#{name} />`
  * `<use xlinkHref=#{name} />`
See https://codepen.io/r-i-c-h/pen/ZEGNVmZ?editors=0100 for managing SVG Icons with `<use>`:


```html
<svg id="symbols" xmlns="http://www.w3.org/2000/svg">
    <symbol viewBox="0 0 512 512" id="dragon"><path id="dragon-path" d="M280.702 254.881c3.47-2.116 6.414-6.55 8.788-11.478 31.245 12.77 53.202 42.946 53.202 78.137 0 46.75-38.75 84.649-86.55 84.649-19.622 0-37.719-6.387-52.236-17.15-4.762-2.255-8.68-4.421-11.886-6.194-4.973-2.749-8.234-4.552-10.276-4.27-5.969.823-4.236 6.315-2.661 11.304 1.069 3.389 2.066 6.546.523 7.848-1.614 1.364-6.842-3.621-12.951-9.445-8.316-7.929-18.264-17.414-22.955-14.565-3.709 2.253-.108 8.364 4.3 15.844l.327.555c1.862 3.162 4.02 6.382 5.989 9.32 4.003 5.971 7.227 10.783 5.614 11.597-1.95.984-15.536-8.186-26.985-20.917-4.419-4.913-8.699-10.239-12.677-15.188v-.001c-8.707-10.834-15.961-19.859-20.033-18.79-4.898 1.286-1.193 11.39 4.252 21.113 2.546 4.547 5.541 9.177 8.134 13.186v.001c4.033 6.234 7.094 10.965 5.984 11.547-1.498.783-14.679-12.07-23.632-28.267-5.317-9.621-9.782-20.253-13.397-28.86-3.92-9.335-6.84-16.288-8.763-16.988-6.68-2.431-6.68 11.19-4.001 30.849.35 2.565.87 5.255 1.51 7.994C96.308 450.785 176.129 512 270.568 512c115.517 0 209.161-91.588 209.161-204.568 0-107.532-84.829-195.685-192.608-203.938.136-5.066 2.78-15.111 2.78-15.111s19.027-46.036 20.033-55.873c.066-.653.145-1.362.23-2.118C311.348 19.762 313.553 0 296.551 0c-9.08 0-13.302 6.755-18.131 14.48-1.854 2.966-3.798 6.075-6.14 8.999-16.868 21.065-45.232 47.37-61.315 61.384-33.994 29.621-67.346 53.965-86.798 68.163l-.001.001c-8.847 6.457-14.818 10.816-16.666 12.617-13.926 13.576-63.858 103.642-63.858 103.642s-16.148 28.896-10.408 34.757c5.74 5.86 19.58 4.517 19.58 4.517s185.941-42.657 202.588-46.021a262.52 262.52 0 0110.075-1.83c6.595-1.089 7.779-1.285 15.225-5.828zm-131.467-54.817c-9.981 9.487-26.534 32.132-26.534 32.132s30.764 1.895 47.707-14.21c16.944-16.106 13.062-43.553 13.062-43.553s-24.255 16.144-34.235 25.631z"/></symbol>
    <symbol viewBox="0 0 512 512" id="fairy"><path id="fairy-path" d="M102.726 405.978l82.122-23.812 70.93 129.691a.243.243 0 00.426 0l70.93-129.691 82.123 23.812a.243.243 0 00.3-.302l-23.816-80.497 126.115-68.975a.242.242 0 00.001-.425l-127.155-69.544 24.855-84.01a.243.243 0 00-.3-.302l-84.049 24.371L256.204.126a.242.242 0 00-.425 0l-69.004 126.168-84.049-24.371a.243.243 0 00-.3.302l24.855 84.01L.126 255.779a.242.242 0 000 .425l126.115 68.975-23.815 80.497a.243.243 0 00.3.302zm63.726-149.102l58.179 31.819 31.819 58.178a.242.242 0 00.426 0l31.819-58.178 58.178-31.819a.243.243 0 000-.426l-58.178-31.819-31.819-58.178a.242.242 0 00-.426 0l-31.819 58.178-58.179 31.819a.243.243 0 000 .426z"/></symbol>
</svg>
<svg class="icon dragon"> <use xlink:href="#dragon" /> </svg>
```
---

Possible InfoSauces:
* http://www.nintendolife.com/news/2020/03/guide_pokemon_go_type_chart_-_effectiveness_and_weakness_for_all_18_types
* https://www.polygon.com/pokemon-go-guide/2020/2/4/21121160/type-strength-weakness-super-effective-weakness-chart
* https://www.dexerto.com/pokemon/pokemon-go-type-chart-effectiveness-table-1294144