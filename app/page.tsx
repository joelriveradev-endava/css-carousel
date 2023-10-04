interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

interface PhotoComponentProps {
  photo: Photo
}

// Inspired by Remix
async function loader(){
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const photos: Array<Photo> = await res.json()
  return photos.slice(0, 7)
}

const Photo = ({ photo }: PhotoComponentProps) => {
  return (
    <img
      className='w-[280px] lg:w-[600px] h-auto snap-center shrink-0 rounded-xl'
      src={photo.url}
      alt={photo.title}
    />
  )
}

export default async function Home() {
  const photos = await loader()

  return (
    <main className="flex flex-col justify-start min-h-screen pt-40 p-4">
      <h1 className='text-2xl mb-10'>
        Photos
      </h1>

      <div className='max-w-[1300px] rounded-xl flex items-start justify-start overflow-x-scroll snap-x snap-mandatory scroll-smooth scroll-pl-5 gap-5 py-5 scroll-ps-5 scroll-ml-5 lg:border lg:border-white/20 lg:px-5'>
        {
          photos && photos.map((photo) => {
            return (
              <Photo
                photo={photo}
                key={photo.id}
              />
            )
          })
        }
      </div>
    </main>
  )
}
