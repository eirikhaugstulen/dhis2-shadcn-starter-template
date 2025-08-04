import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const COUNTRIES = [
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Sweden', flag: '🇸🇪' },
]

function getRandomCountries(count: number = 5) {
  const shuffled = [...COUNTRIES].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const CountryCarousel = () => {
  const randomCountries = getRandomCountries(5)

  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {randomCountries.map((country, index) => (
          <CarouselItem key={`${country.name}-${index}`}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 flex-col gap-2 select-none">
                  <span className="text-4xl">{country.flag}</span>
                  <span className="text-sm font-medium text-center">{country.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}