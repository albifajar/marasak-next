import Image from 'next/image'

export const DefaultCard = () => {
  return (
    <div className="w-full border rounded-lg">
      <div className="relative w-full h-32 overflow-hidden rounded-t-lg">
        <Image
          src="/static/images/example-food-image.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          className="absolute"
        />
      </div>
      <div className="p-2">
        <span className="text-sm">Makanan</span>
        <h1 className="font-semibold line-clamp-2">Sayur Tempe Mendoan Tempe Mendoan</h1>
      </div>
    </div>
  )
}
