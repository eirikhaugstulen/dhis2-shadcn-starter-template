import i18n from '@dhis2/d2-i18n'
import { PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { CountryCarousel } from '../country-carousel'
import { useUserInfo } from './hooks/use-user-info'

export const UserProfile = () => {
    const { data, isLoading, error } = useUserInfo()

    if (isLoading) {
        return <div>{i18n.t('Loading...')}</div>
    }

    if (error || !data) {
        console.error(error)
        return <div>Error: {error?.message || i18n.t('An unknown error occurred')}</div>
    }

    return (
        <div className='max-w-4xl mx-auto text-center p-4 space-y-4'>
            <h3 className='text-xl'>{i18n.t('Welcome {{name}}!', { name: data.name })}</h3>

            <p className='text-sm text-muted-foreground'>{i18n.t('Here are some countries you might be interested in:')}</p>
            <CountryCarousel />

            <Button onClick={() => alert('clicked')}>
                <PlusIcon />
                {i18n.t('Add')}
            </Button>
        </div>
    )
}