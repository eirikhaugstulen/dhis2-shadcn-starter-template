import { SlideDeck } from '@/components/presentation'
import { devMeetupOctoberSlides } from '@/components/presentation/presentations'

export const PresentationPage = () => {
    return (
        <div>
            <SlideDeck slides={devMeetupOctoberSlides} />
        </div>
    )
}

