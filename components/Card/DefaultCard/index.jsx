import Image from 'next/image'

export const DefaultCard = ({ url_image, type, title }) => {
  return (
    <div className="w-full border rounded-lg">
      <div className="relative w-full h-32 overflow-hidden rounded-t-lg">
        {/* to do make default image when image is null */}
        <Image
          src={`${url_image ? url_image : '/static/images/default-image-not-found.png'}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          className="absolute"
        />
      </div>
      <div className="p-2">
        <span className="text-sm">{type}</span>
        <h1 className="font-semibold line-clamp-2">{title}</h1>
      </div>
    </div>
  )
}
