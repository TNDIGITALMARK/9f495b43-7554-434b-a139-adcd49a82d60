export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Star, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const books = [
  {
    id: 1,
    title: 'The Eternal Oath',
    subtitle: 'Book One of the Fire and Destiny Saga',
    image: '/generated/book1-eternal-oath.png',
    price: '$18.99',
    rating: 4.8,
    reviews: 1247,
    description: 'In a world where ancient oaths bind kingdoms and heroes alike, a young warrior must embrace a destiny forged in flame. When darkness threatens to consume the realm, she discovers that the greatest battles are fought not with swords, but with the courage to stand against impossible odds.',
    pages: 432,
    published: '2022',
    isbn: '978-1-234567-89-0',
    genre: ['Epic Fantasy', 'Adventure', 'Coming of Age']
  },
  {
    id: 2,
    title: 'Shadows of Prophecy',
    subtitle: 'Book Two of the Fire and Destiny Saga',
    image: '/generated/book2-prophecy.png',
    price: '$19.99',
    rating: 4.9,
    reviews: 1089,
    description: 'As prophecies unfold and shadows deepen, a hooded figure emerges from the mists of time. With glowing eyes that pierce the veil between worlds, they hold secrets that could save or doom all of existence. The line between destiny and choice has never been thinner.',
    pages: 468,
    published: '2023',
    isbn: '978-1-234567-90-6',
    genre: ['Epic Fantasy', 'Mystery', 'Dark Fantasy']
  },
  {
    id: 3,
    title: 'Chronicles of Aetheria',
    subtitle: 'A Standalone Fantasy Adventure',
    image: '/generated/book3-aetheria.png',
    price: '$17.99',
    rating: 4.7,
    reviews: 892,
    description: 'In the floating kingdoms of Aetheria, where magic flows like rivers and warriors wield blades of pure light, one woman must bridge the gap between warring realms. With silver hair and an indomitable spirit, she carries the hopes of millions on her shoulders.',
    pages: 398,
    published: '2023',
    isbn: '978-1-234567-91-3',
    genre: ['High Fantasy', 'Political Intrigue', 'Romance']
  },
  {
    id: 4,
    title: 'Guardians of Zephyr',
    subtitle: 'Book Three of the Fire and Destiny Saga',
    image: '/generated/book4-zephyr.png',
    price: '$21.99',
    rating: 5.0,
    reviews: 234,
    comingSoon: true,
    preorder: true,
    releaseDate: 'Summer 2025',
    description: 'The epic conclusion to the Fire and Destiny Saga. In the frozen reaches where ice dragons reign supreme, the final battle for the fate of all realms will be fought. Ancient guardians awaken, secrets are revealed, and heroes must make the ultimate sacrifice.',
    pages: 512,
    published: '2025',
    isbn: '978-1-234567-92-0',
    genre: ['Epic Fantasy', 'Adventure', 'Series Finale']
  }
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-waves">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Published Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore the fantastical worlds crafted by Lenny Stengal. From epic sagas to standalone adventures, each book offers a journey into realms where magic, courage, and destiny intertwine.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-8 md:py-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {books.map((book) => (
              <div key={book.id} className="grid md:grid-cols-5 gap-8 bg-card rounded-2xl p-6 md:p-8 shadow-glow">
                {/* Book Cover */}
                <div className="md:col-span-2">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-glow-hover">
                    {book.comingSoon && (
                      <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                        Coming Soon
                      </div>
                    )}
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div className="md:col-span-3 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">
                      {book.title}
                    </h2>
                    <p className="text-lg text-gold mb-4 font-medium">{book.subtitle}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'fill-gold text-gold' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold">{book.rating}</span>
                      <span className="text-muted-foreground">({book.reviews} reviews)</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {book.description}
                    </p>

                    {/* Book Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Pages:</span>
                        <span className="text-white ml-2 font-medium">{book.pages}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Published:</span>
                        <span className="text-white ml-2 font-medium">{book.published}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">ISBN:</span>
                        <span className="text-white ml-2 font-mono text-xs">{book.isbn}</span>
                      </div>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {book.genre.map((g, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground border border-border">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Purchase Section */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gold">{book.price}</span>
                      {book.preorder && (
                        <span className="text-sm text-accent font-medium">Pre-order</span>
                      )}
                    </div>
                    <div className="flex gap-3 flex-1">
                      <button className="btn-primary flex-1 sm:flex-none">
                        {book.preorder ? 'Pre-order Now' : 'Add to Cart'}
                      </button>
                      {!book.comingSoon && (
                        <button className="px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-purple-dark transition-all font-medium">
                          Sample Chapter
                        </button>
                      )}
                    </div>
                    {book.releaseDate && (
                      <span className="text-sm text-muted-foreground">
                        Release: {book.releaseDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Stay Updated on New Releases
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the newsletter to get exclusive previews, signed copies, and be the first to know when new books are released.
          </p>
          <Link href="/#newsletter">
            <button className="btn-primary">
              Subscribe to Newsletter
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
