import { SlideDeck } from '@/components/presentation'
import { devMeetupOctoberSlides } from '@/components/presentation/slides'

export const PresentationPage = () => {
    return <SlideDeck slides={devMeetupOctoberSlides} />
}

