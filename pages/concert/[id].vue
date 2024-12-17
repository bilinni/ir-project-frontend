<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <TopBar class="fixed w-full z-50"/>
    <div class="pt-14">
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-950/10">
        <div class="bg-purple-950/5 p-1">
          <ConcertDetails :concert="concert" />
        </div>
        <div class="border-t border-purple-950/10">
          <div class="bg-gradient-to-r from-purple-950/5 to-transparent p-1">
            <!-- <SimilarConcerts :concerts="similarConcerts" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ConcertDetails from '~/components/ConcertDetails.vue'
import SimilarConcerts from '~/components/SimilarConcerts.vue'

export default {
  components: { ConcertDetails, SimilarConcerts },
  data() {
    return {
      concert: {
        id: 1,
        name: 'Battle of the Bands at Exeter Library',
        date: 'Saturday, December 7 · 7:30',
        venue: 'Exeter Library',
        description: "Exeter Library's very first Battle of the Bands will see 8 brilliant bands and solo acts battling it out to win big prizes. A huge musical event on the main Library floor that aims to shake the shelves and blow some dust off our covers Supported by the Cameron Mills Group and Obvious Events, this will be an evening of fantastic and eclectic music, friendly competition and general good vibes, with a pop up bar and tickets starting from just £4! THE ACTS Falling Off a Horse - an emerging metal/grunge band from Torbay Leonian Dream - an indie rock band and festival favourite comprised of Swiss Singer-Songwriter Leonie Prater and Black Country born guitarist Thomas Rogers Three Days of Wonder - an up & coming 4-piece band full of edgy hooks, anthemic songs and social commentary SidPlusOne - a high 2-piece energy indie funk/soul band The Schambles - Cornish Indie rock band and a regular on the SW scene Horce Divorse - a comedy punk rock band who write about everyday struggles The Pinstripes - an energetic 5 piece jazz-funk band! Plus a performance from Obvious Reasons. With judging from Cameron Mills, Ben Green and Holly Ebony. Come along to listen, dance, whoop & cheer for your favourite acts",
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F871349169%2F115801397961%2F1%2Foriginal.20241010-100655?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C65%2C1920%2C960&s=c5c926d2a2b62abc6eabf68cb86d67ef',
        location: 'Exeter Library Castle Street Exeter EX4 3PQ United Kingdom',
        price: '£5.04 – £9.38',
        buyLink: "https://www.eventbrite.co.uk/e/battle-of-the-bands-at-exeter-library-tickets-1043505682587?aff=ebdssbdestsearch",
      },
    }
  },
}
</script>

<style>
</style>