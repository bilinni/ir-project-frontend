<template>
  <div>
    <TopBar class="fixed w-full" />
    <div class="flex min-h-screen bg-gray-100 pt-16 w-full">
      <div class="flex">
        <!-- Main Content -->
        <div class="w-[calc(100vw-256px)] flex-1 p-6">
          <!-- Search Bar -->
          <SearchBar />

          <!-- Grid of Concert Cards -->
          <div
            class="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConcertCard
              v-for="concert in filteredConcerts"
              :key="concert.id"
              :concert="concert" />
          </div>
        </div>

        <!-- Sidebar Filters -->
        <div class="w-64">
          <div class="fixed h-full">
            <SidebarFilters :genres="genres" :locations="locations" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarFilters from "~/components/SidebarFilters.vue";
import ConcertCard from "~/components/ConcertCard.vue";

export default {
  components: { SidebarFilters, ConcertCard },
  data() {
    return {
      searchQuery: "", // Holds the value of the search input
      genres: [...['London', 'Choir', 'Man'], ...['Prada', 'Devil', 'Dominion'], ...['Harold', 'Pinter'], ...['Night', 'Christmas', 'Party']],
      locations: ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow"],
      concerts: [
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9a64",
          },
          "Event Name": "Toss The Feathers Christmas Party",
          Date: "Fri, 13 Dec 2024 19:30",
          Venue: "The Parrswood Inn",
          Location:
            "The Parrswood Inn 356 Parrs Wood Road Manchester M20 6JD United Kingdom Show map",
          Price: null,
          Description:
            "🎄 Toss The Feathers 🎄 Extra Christmas Concert Alert! friday 13th December. After the incredible demand that sold out , Toss The Feathers are thrilled to announce a second date for an extra-special Christmas Party Night! Join us at The Parrswood Inn on Friday, December 13th for a Celtic festive evening filled with music, craic and great company. We can’t wait to celebrate the season with you all – see you there for a night to remember! These will be ticketed events so there will be no entry to the Parsrswood inn  after 5pm on both of these nights without tickets. Join us for an unforgettable night of music at the Parswood Inn Pub in Didsbury as we welcome the electrifying Toss the Feathers for their Christmas Special! Experience the magic of Toss The Feathers Manchester's own legends, featuring the incredible Eddie Sheehan on vocals and guitar, the groovy Dave Smiley on bass, the enchanting Mike McGoldrick on flute, and the phenomenal Dezi Donnelly on fiddle. Bring your friends and family for a festive evening filled with lively tunes, heartwarming Song's , and a whole lot of holiday cheer! 📅 Date: 13thg December 2024 🕗 Time: doors 7.30 band on stage 8.30 pm 📍 Location: Parswood Pub, Didsbury Don't miss out on this chance to celebrate the season with great music and even better company! 🎉✨ See you there!",
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F879900993%2F1262225035153%2F1%2Foriginal.20241021-191125?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=99%2C0%2C2358%2C1179&s=9e8053dc64f96a7bed6512ba2b12035a",
          Link: "https://www.eventbrite.com/e/toss-the-feathers-christmas-party-tickets-1073022993659?aff=ebdssbdestsearch",
        },
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9a7d",
          },
          "Event Name": "PROHIBITION BAR PRESENTS THINK NEW ACOUSTIC",
          Date: "Sunday, December 8 · 6",
          Venue: "Prohibition Cabaret Bar",
          Location:
            "Prohibition Cabaret Bar 25-27 Pink Lane Newcastle upon Tyne NE1 5DW United Kingdom Show map",
          Price: null,
          Description:
            "Starting at 18:00 upstairs in a private room at the Pohibition Bar in Newcastle. THINK NEW ACOUSTIC will have four of the best and upcoming acoustic talents playing their own music. This is a seated event so come along, grab a drink from the downstairs bar and enjoy the music. Only £5.00 a ticket as TNA aims to support local artists and give the players a platform to showcase their talent and skills in some of the best venues in Newcastle.",
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F902840113%2F2491107952891%2F1%2Foriginal.20241120-094512?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1414%2C707&s=6c2360bbd0b633e3bf1ec92e3e1da2a2",
          Link: "https://www.eventbrite.com/e/prohibition-bar-presents-think-new-acoustic-tickets-1089664719509?aff=ebdssbdestsearch",
        },
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9a85",
          },
          "Event Name": "BIG Kirtan Journey | LONDON 11th of JANUARY",
          Date: "Saturday, January 11, 2025 · 6",
          Venue: "The Tabernacle",
          Location:
            "The Tabernacle 34-35 Powis Square London W11 2AY United Kingdom Show map",
          Price: "€0 – €54.45",
          Description:
            '🖐️LONDON, 11th of January 🌸 Join us for a soulful evening of Live Kirtan meditation as part of the European Kirtan Journey Tour 2024. 🌟 IT WILL BE THE LAST BIG KIRTAN JOURNEY EVENT in London UNTIL SUMMER! Don’t miss your final chance to join and i mmersing ourselves in peaceful vibes and harmonious chant! 👉 Kirtan is sometimes called music meditation as it incorporates singing Mantras, playing musical instruments, and dancing. 👉 Kirtan doesn’t require any special skills, not limited to any religion, race or nationality. Kirtan belongs to everyone, it brings peace and joy to every living being. 👉 And it is so simple: listen to the beautiful sound of mantras, enjoy it, and repeat. When many people come together and participate in kirtan meditation, it has an incredibly powerful effect on everyone involved. This will be an amazing experience for you - we promise! 👉The musicians of the Atmasfera band create an amazing atmosphere and lead beautiful Kirtan. They use instruments from around the world - harp, flute, jambey, kalimba, harmonium, bouzouki, keyboard, acoustic guitar, bass guitar, various drums, bells, xylophone, and more. They were the recipients of one of the main awards at the prestigious American Round Glass Music Awards. They won in the category "Enlightened Musician of the Year" in 2018 👉 Musicians: Yamuna – harmonium, flute, vocals Kalindi – keyboard, harp, vocals Sergij Svirskij – bass guitar Denis Bilodid – electric guitar Grigorii Riabtsev - acoustic guitar Timur Gogitidze - drums, darabuka, percussion instruments 🌎🙏 You can follow us on: Instagram instagram.com/bepeace.live Facebook facebook.com/bepeace.live YouTube youtube.com/@bepeace.meditation TikTok tiktok.com/@bepeace.live 🌎🙏 Atmasfera https://atmasfera.com http://events.atmasfera.com https://www.youtube.com/@AtmasferaTV ☺️ Got questions? Write to us on WhatsApp: 48733468822 ( Kate )',
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F901994123%2F1688913924963%2F1%2Foriginal.20241119-105824?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.535984848485&fp-y=0.466417910448&s=ebeb3f13465a6a5ac870008bbb279239",
          Link: "https://www.eventbrite.co.uk/e/big-kirtan-journey-london-11th-of-january-tickets-1088535441809?aff=ebdssbdestsearch",
        },
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9a98",
          },
          "Event Name": "Garage Nation Christmas Brunch & Day Party",
          Date: "Saturday, December 14 · 12:30",
          Venue: "Scala",
          Location:
            "Scala 275 Pentonville Road London N1 9NL United Kingdom Show map",
          Price: "From £5.63",
          Description:
            "🎄 *Garage Nation Christmas Brunch & Day Party* 🎄 Get ready to jingle and mingle at our festive Garage Nation Christmas Brunch! For 60 minutes, enjoy bottomless cocktails—choose between a festive twist on the classic Sex on the Beach or a spiced-up Rum Punch! But that’s not all—feast on delicious chicken wings, piping-hot pizza, and, of course, indulge in the holiday spirit with mulled wine and mince pies! Expect the best UK Garage vibes, your favourite anthems, and an amazing crowd ready to eat, drink, and skank the day away. This is the ultimate Christmas celebration where the good vibes and festive cheer will be flowing all day long! 🎅🎶 Let’s make it a day to remember—come skank out with us and celebrate the season in true Garage Nation style!",
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F832161409%2F195953803634%2F1%2Foriginal.20240822-105032?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=18%2C12%2C822%2C411&s=937f63f747fc569f8fb9d6026065c848",
          Link: "https://www.eventbrite.co.uk/e/garage-nation-christmas-brunch-day-party-tickets-1000592207227?aff=ebdssbdestsearch",
        },
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9aba",
          },
          "Event Name": "Breakin Science + Drumatics 16+ LDN | Festive Rave",
          Date: "Sat, 28 Dec 2024 15:00",
          Venue: "E1",
          Location:
            "E1 110 Pennington Street London E1W 2BB United Kingdom Show map",
          Price: null,
          Description:
            "Breakin Science + Drumatics 16+ LDN Festive Rave Saturday 28th December 2024 E1 - Main Warehouse London 15:00-21:00 That's right... we return to E1 for another massive 16+ D&B show! It's the christmas limbo period and what else is there to do except party!!! Artists A-Z •⁠ Amplify x P Money •⁠ Formula x T-Lex •⁠ RTC Showcase - Ragga Twins ft Inter x Krucial •⁠ TNA Showcase - Nu Elementz x Azza x Grima x Shakes •⁠ Toxinate x Latte •⁠ Support from Marxy & Cassia . Eksman - P Money - Azza x Grima - Ragga Twins - Weejii - Shakes - Tiny K 16+ event // Photo ID Required // Fully licensed SIA Security // Licensed paramedics working throughout the event // Stewards to ensure you get off home safely at closing time Please note physical ID only is accepted for entry and we can confirm the following is acceptable • Valid Passport • Valid Driving License (inc Provisional) • Citizen Card https://www.citizencard.com/valid-uk-id-card • 16+ Oyster Zip Photo Card https://tfl.gov.uk/fares/free-and-discounted-travel/16-plus-zip-oyster-photocard • Proof of age ID, such as PASS ID card • College ID Cards [These will be scrutinised for fakes & we advise to use the above first]",
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F907668343%2F330421128813%2F1%2Foriginal.20241127-171450?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69efd5d85dcfc3672a14101e1d1f0940",
          Link: "https://www.eventbrite.co.uk/e/breakin-science-drumatics-16-ldn-festive-rave-tickets-1084355028079?aff=ebdssbdestsearch",
        },
        {
          _id: {
            $oid: "675193f3289cfcdd5ffa9ad7",
          },
          "Event Name":
            "Back To The 90's & 00's: Throwback Session | Xmas Special",
          Date: "December 20 · 10pm",
          Venue: "Scala",
          Location:
            "Scala 275 Pentonville Road London N1 9NL United Kingdom Show map",
          Price: "From £3.96",
          Description:
            "DO YOU LOVE ALL THINGS RETRO AND THROWBACK?! 😍 Well BACK TO 90'S & 00's IS BACK, AND IT’S GONNA BE SO DAMM FETCH! Experience a party like never before, celebrating from 1990′ – 2010's, keeping it real with nostalgia nostalgia nostalgia, ALL NIGHT LONG! Quite frankly we’re sick of all the restrictions music these days puts on fun, we’re sick of fashion these days, we’re sick of politicians these days, we’re sick of everything these days, SO BACK TO THE 90’s & 00's WILL BRING IT ALL BACK! Taking you through the years as we let loose, drink plenty, play games & party for ONE NIGHT ONLY ON FRIDAY DECEMBER 15TH! Set across 2 ROOMS with a huge 1000+ capacity venue right in the heart of Kings Cross; we expect this party to absolutely sell out quicker than a *NSYNC reunion Tour! DO you know what we’re thinking?! Do you know how it’s gonna go down! Well… 🔘LATE 90’s & 00’s CLASSIC TUNES ALL NIGHT! 🎶 R&B, Pop, Disco, HipHop, Dance, Rap, BubbleGum Pop, Garage 🔘FREE Throwback sweets & tuck-shop! 🍬🍬 & XTRA SPECIAL CHRISTMAS GIVEAWAYS 🎅 🔘FREE Crazy Christmas Inflatables & blow up toys! 😍😍Yes thats right, aliens to Air guitars as well all things festive, this party will only blow in the right away! 🔘 FREE Candy Floss & Popcorn to bring the child inside you alive! 🍭 🔘 Super CHEAP 90’S & 00's BABIES TICKETS FOR £3! YES £3! 🔘 Super Cheap Drinks For a Weekend Get them whilst they’re hot! ———————————————— Room 1: Will take you through the years of chart toppers! With LOADS of Dance, Pop, Cheese REAL 90’s & 00's Anthems! (And a little bit of Christmas TLC 🎅) Room 2: Keeping it old school with classic HipHop, R&B & Rap You better know your 50 cent from your LL Cool J & Ashanti! ———————————————— 🍭 BIRTHDAY?! 🍭 Born in DECEMBER?!?! GET A FREE BIRTHDAY TICKET! - Yes, come celebrate your birthday month with us and grab your free ticket to this rave if you were born in DECEMBER - Simply text ‘XMAS BABY’ to: 07875676028 & await for confirmation. (While They Last) Anyway.. That’s Back To The 90's & 00's! Grab Tickets NOW! Friday December 20th - Doors close at 1:30am Scala London 275 Pentonville Rd, London N1 9NL Email: dan@MilkshakeEvents.com or Admin@MilkshakeEvents.com WARNING – This Event is for 18+ only & 00’s /90s Lovers only. MRRA 18+ ID REQ for all entrance, no refunds Scala runs Club Scan - physical photo ID is required, no ID no entry. Photographs of ID on your phone are not an accepted form of ID.",
          "Image Link":
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F886735563%2F26253177781%2F1%2Foriginal.20241029-213540?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2084%2C1042&s=e9e2f8d2f02888243a92697b6bbebc64",
          Link: "https://www.eventbrite.co.uk/e/back-to-the-90s-00s-throwback-session-xmas-special-tickets-1066065533709?aff=ebdssbdestsearch",
        },
      ],
      filteredConcerts: [], // Stores the filtered list of concerts
    };
  },
  created() {
    // Initialize filtered results with all concerts
    this.filteredConcerts = this.concerts;
  },
  methods: {
    filterConcerts() {
      // Filters concerts based on the search query
      const query = this.searchQuery.toLowerCase();
      this.filteredConcerts = this.concerts.filter(
        (concert) =>
          concert.name.toLowerCase().includes(query) ||
          concert.venue.toLowerCase().includes(query) ||
          concert.date.toLowerCase().includes(query)
      );
    },
  },
};
</script>
