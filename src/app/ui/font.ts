import { Roboto } from 'next/font/google'
import { Noto_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'

export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const notoSans = Noto_Sans({
    weight: [ '400', '700' ],
    subsets: [ 'latin' ],
})

export const inter = Inter({
    weight: [ '400', '700' ],
    subsets: [ 'latin' ],
})