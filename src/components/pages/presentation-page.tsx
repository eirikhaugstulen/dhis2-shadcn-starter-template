import { SlideDeck } from '@/components/presentation'
import { devMeetupOctoberSlides } from '@/components/presentation/presentations'

export const PresentationPage = () => {
    return (
        <div className="bg-gray-800">
            <SlideDeck slides={devMeetupOctoberSlides} />
        </div>
    )
}

