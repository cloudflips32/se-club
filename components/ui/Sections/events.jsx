import * as React from 'react'
import ListEvents from '@/components/ui/Sections/list-events'

const ClubEvents = () => {
  return (
    <>
      <section id="events" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white mb-8">
            Upcoming Events
          </h2>
          <ListEvents />
        </div>
      </section>
    </>
  )
}

export default ClubEvents