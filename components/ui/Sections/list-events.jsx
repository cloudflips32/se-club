import React, { useState,useEffect} from 'react'
import db from '@/app/config/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ListEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'))
      setEvents(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
    }
    fetchEvents()
  }, [])

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p><span className='font-semibold'>
              Date:</span> {new Date(event.date).toLocaleDateString()}</p>
            <p><span className='font-semibold'>Time:</span> {event.time}</p>
          </CardContent>
        </Card>
        ))}
      </div>
    </>
  )
}

export default ListEvents