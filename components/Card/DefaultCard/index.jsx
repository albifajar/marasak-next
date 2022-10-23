import Image from 'next/image'

export const DefaultCard = ({ url_image, type, title, lessIngredient, cookingTime }) => {
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
        <div className="flex flex-col mt-2 mb-1 space-y-2">
          <div className="flex items-center px-2 py-1 space-x-2 bg-gray-200 rounded-full w-max">
            <Image src="/static/icons/fluent_timer-24-regular.svg" width={14} height={14} layout="fixed" alt="" />
            <p className="text-sm">Estimasi {cookingTime}</p>
          </div>
          <div className="flex items-center px-2 py-1 space-x-2 bg-red-100 rounded-full w-max">
            <Image src="/static/icons/ic_outline-no-food.svg" width={14} height={14} layout="fixed" alt="" />
            <p className="text-sm">Kurang {lessIngredient} bahan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
